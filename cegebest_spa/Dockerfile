FROM httpd
WORKDIR /usr/local/apache2/htdocs/
COPY ./build ./
ARG API_URL='http:\/\/localhost:8080\/movies'
ENV API_URL $API_URL
RUN sed "s/replaceme/$API_URL/" ./static/js/main.ee190d23.js > file.js && mv file.js ./static/js/main.ee190d23.js