# Step : Test and package
FROM maven:3.5.3-jdk-8-alpine AS target
WORKDIR /build
COPY pom.xml .
RUN mvn dependency:go-offline

COPY src/ /build/src/
RUN mvn package -Dmaven.test.skip=true

FROM openjdk:8-jre-alpine
EXPOSE 8080
CMD exec java $JAVA_OPTS -jar /app/my-app.jar
COPY --from=target /build/target/sinqia-0.0.1-SNAPSHOT.jar /app/my-app.jar
