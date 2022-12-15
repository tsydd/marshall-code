FROM nginx:alpine

COPY ./dist/spa /etc/nginx/marshallcode
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
