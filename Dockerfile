## Building the React Application
FROM node:16 AS builder
COPY ./ /home/react-app
WORKDIR  /home/react-app/react-frontend
#RUN npm install -g create-react-app react-scripts
RUN npm install && npm run build

## Configuring the NGINX for serving the application
FROM nginx
WORKDIR /usr/share/app/prod-build
COPY --from=builder /home/react-app/react-frontend/build ./
COPY ./my-portfolio-site.conf /etc/nginx/conf.d/default.conf
EXPOSE 80