# Dockerfile.base

FROM node:14.18.0-alpine AS builder
ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN yarn install && yarn cache clean