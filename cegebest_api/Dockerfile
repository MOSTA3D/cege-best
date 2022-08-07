FROM openjdk:17-alpine
WORKDIR ./app
COPY target/cegebest_api_docker.jar ./
EXPOSE 8080
CMD ["java", "-jar", "cegebest_api_docker.jar"]
