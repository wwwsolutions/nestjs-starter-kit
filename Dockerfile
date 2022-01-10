### Bret Fisher - Docker for Node.js Projects From a Docker Captain [Udemy 2020]

#####################################
#           STAGE 1
#           PRODUCTION BASE              #
# This gets our dependencies installed and out of the way
#####################################

# Temporary (partially cached) build image
FROM node:14.18.0-alpine AS base
EXPOSE 3000
ENV NODE_ENV=production
WORKDIR /opt
COPY package*.json ./
RUN npm config list \
    && npm install --only=production --no-optional \
    && npm cache clean --force

#####################################
#           STAGE 2
#        STAGE DEVELOPMENT        #
# we don't COPY in this stage because for dev you'll bind-mount anyway
# this saves time when building locally for dev via docker-compose
# if buildkit is enabled and used with a supporting version of docker-compose
#####################################
FROM base as dev
ENV NODE_ENV=development
ENV PATH=/opt/node_modules/.bin:$PATH
WORKDIR /opt
RUN npm config list \
    && npm install --only=development --no-optional \
    && npm cache clean --force
WORKDIR /opt/app
# CMD ["npm", "dev"]
CMD ["npx", "nx", "run", "api:serve"]

#####################################
#           STAGE 3
#       STAGE INTERMEDIATE        #
# This gets our source code into builder for use in next two stages
# It gets its own stage so we don't have to copy twice
#####################################
FROM base as interm
WORKDIR /opt/app
COPY . .


#####################################
#             STAGE 4
#       TESTING        #
# use this in automated CI
# it has prod and dev npm dependencies
# In 18.09 or older builder, this will always run
# In BuildKit, this will be skipped by default 
#####################################
FROM interm as test
CMD ["npm", "test"]


#####################################
#             STAGE 4
#       PRODUCTION, DEFAULT        #
# this will run by default if you don't include a target (BuildKit)
# it has prod-only dependencies
# In BuildKit, this is skipped for local dev
# you could run tini here, but zombie reaping isn't usually 
# an issue with node, and as long as you handle signals in code
# you don't need tini
#####################################
FROM interm as prod
CMD ["node", "./dist/apps/api/main.js"]

