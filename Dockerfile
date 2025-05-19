FROM maven:3.9.9-eclipse-temurin-24 AS builder
WORKDIR /builder
COPY . .
RUN mvn clean install -DskipTests -T 4C

FROM eclipse-temurin:24-jre AS runtime
WORKDIR /app
COPY --from=builder /builder/target/*.jar /app/app.jar
EXPOSE 13134
ENTRYPOINT ["java", "-Xms1g", "-Xmx8g", "-XX:MaxRAMPercentage=80.0", "-XX:+UseContainerSupport", "-jar", "app.jar"]