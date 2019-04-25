FROM node:8.16
COPY . /root/web-app
WORKDIR /root/web-app
RUN ls && \
    yarn install && \
    yarn build

FROM nginx:1.15
COPY --from=0 /root/web-app/dist/web-app /usr/share/nginx/html
COPY --from=0 /root/web-app/nginx.conf /etc/nginx/conf.d/default.conf
