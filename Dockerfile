### Bret Fisher - Docker for Node.js Projects From a Docker Captain [Udemy 2020]

#####################################
#           BASE IMAGE              #
#####################################

# Temporary (partially cached) build image
FROM node:14.18.0-alpine AS base
WORKDIR /app
COPY package*.json ./


#####################################
#        BACKEND ENVIRONMENT        #
#####################################

# # backend-base
# FROM base AS backend-base
# RUN yarn install && yarn cache clean

# # backend-dev
# FROM backend-base AS backend-dev
# COPY . .
# CMD ["yarn", "dev"]

# # # backend-prod
# # FROM backend-base AS backend-prod
# # COPY dist/apps/api .
# # CMD ["yarn", "prod"]


#####################################
#       FRONTEND ENVIRONMENT        #
#####################################

# FROM base AS frontend-base
# COPY frontend/package.json frontend/yarn.lock ./
# RUN yarn install && yarn cache clean
# CMD ["yarn", "start"]
# FROM base AS frontend-base
# COPY ./dist/apps/html .
# ENV PORT=3334
# EXPOSE ${PORT}
# RUN npm install --production
# RUN npm install reflect-metadata tslib rxjs hbs
# CMD node ./main.js

# FROM base AS frontend-base
# RUN yarn install && yarn cache clean
# CMD ["yarn", "start:dev"]


# FROM frontend-base AS frontend-final
# COPY frontend/public ./public
# COPY frontend/src ./src
# RUN yarn build

#####################################
#       COMBINED ENVIRONMENT        #
#####################################

# FROM backend-base AS final
# RUN yarn install --production && yarn cache clean
# COPY backend/src ./src
# COPY --from=frontend-final /app/build /app/src/static
# CMD ["node", "/app/src/index.js"]

# FROM backend-base AS final




