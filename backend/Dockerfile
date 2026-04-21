# Build stage
FROM maven:3.8.5-eclipse-temurin-17 AS build
WORKDIR /app
# Point to the files inside the backend folder
COPY backend/pom.xml .
COPY backend/src ./src
RUN mvn clean package -DskipTests

# Run stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
