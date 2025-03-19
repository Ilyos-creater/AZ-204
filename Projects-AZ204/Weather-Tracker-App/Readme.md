# Weather Tracker

## Overview
The **Weather Tracker** is a web application that provides real-time weather updates for user-selected cities. It also features an automated alert system using Azure Functions to notify users when specific weather thresholds (e.g., rain or extreme temperatures) are met. This was built as a part of my study for the AZ-204 and it was inspired by a project recommondation from this repostiory:
<ul> </ul>

## Architecture
```
User
|-> Web Application (Hosted on Azure App Service Web App)
   |-> Weather Alerts (Azure Functions)
      |-> Docker Images (Azure Container Registry)
         |-> Testing Containers (Azure Container Instance)
            |-> Running Containers (Azure Container Apps)
```

## Features
- Fetch real-time weather data via APIs.
- Set up weather alerts for predefined conditions.
- Deploy as a containerized web application.
- CI/CD pipeline integration for automated deployments.
- Application insights and monitoring via Azure Monitor.

## Infrastructure Components
- **Azure App Service Web App**: Hosting the web application.
- **Azure Container Registry (ACR)**: Storing Docker images for the application.
- **Azure Container Instance (ACI)**: Running the containers for development/testing.
- **Azure Functions**: Sending alerts based on weather conditions.
- **Azure Container Apps**: Running the containers in production.
- **CI/CD Pipeline**: Automated deployment using GitHub Actions.
- **Application Insights & Azure Monitor**: Monitoring and logging for performance tracking.

## Implementation Guide
### 1. Create an Azure App Service Web App
Set up an Azure App Service Web App to host the front-end web application.

### 2. Develop a Basic Web Application
Build a web application that fetches weather data from a weather API (e.g., OpenWeatherMap or WeatherAPI).

### 3. Containerize the Application
- Create a `Dockerfile`.
- Build and test the Docker image locally.

### 4. Publish the Container Image to Azure Container Registry
Push the Docker image to Azure Container Registry (ACR) for storage and deployment.

### 5. Test Using Azure Container Instance
Deploy and test the application using Azure Container Instance (ACI) before production deployment.

### 6. Implement Azure Function for Weather Alerts
- Create an Azure Function that triggers alerts when specific weather conditions are met.
- Integrate the function with the web application.

### 7. Deploy the Web Application to Azure Container Apps
Deploy the application to Azure Container Apps for production readiness.

### 8. Setup CI/CD Pipeline
- Use GitHub Actions to automate the build, test, and deployment process.
- Ensure the web application and Azure Functions are updated through CI/CD.

### 9. Setup Monitoring and Logging
- Enable **Application Insights** for tracking performance.
- Use **Azure Monitor** to log and analyze application metrics.

### 10. Push to GitHub
- Maintain the project in a GitHub repository.
- Document the setup and deployment processes.

## Project Repository Structure
```
/ Weather Tracker
  ├── src/ (Web application source code)
  ├── azure-functions/ (Weather alert Azure Function code)
  ├── Dockerfile
  ├── .github/workflows/ (CI/CD pipeline setup)
  ├── README.md
```

## Prerequisites
- Azure Subscription
- GitHub Account
- Docker Installed
- Weather API Key (e.g., OpenWeatherMap)

## Getting Started
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-tracker.git
   cd weather-tracker
   ```
2. Build and run the container locally:
   ```bash
   docker build -t weather-tracker .
   docker run -p 5000:5000 weather-tracker
   ```
3. Deploy to Azure following the implementation guide.

## License
This project is licensed under the MIT License.

## Contact
For any issues or inquiries, please open an issue in the GitHub repository.


