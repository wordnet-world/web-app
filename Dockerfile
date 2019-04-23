FROM node:8.16
RUN ls && \
    yarn install && \
    yarn build

FROM nginx:1.15

COPY dist/web-app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
