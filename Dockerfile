# docker run -d -it --name tecnical-test --restart always -p 5555:5555 tecnical-test:latest
FROM node:18-bullseye
VOLUME /var/www/api
COPY ./ /var/www/api/
WORKDIR /var/www/api
EXPOSE 5555
CMD npm install && npm run build && npm run start:prod  