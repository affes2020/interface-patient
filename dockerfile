FROM node:14.15.5-alpine as builder

WORKDIR /app

# first copy depency and install to benefit from docker layers
COPY package*.json ./
RUN npm install

#install cli 
RUN npm install -g @angular/cli

# then build the app
COPY . /app/
RUN npm run build 

FROM nginx:alpine as production-serve
COPY ./nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/interface-patient-app /usr/share/nginx/html

EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;"]
