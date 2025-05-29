# Shopease Scalable Web Application

## Overview

Shopease is a scalable, containerized e-commerce web application deployed using Kubernetes. It provides full product management, user authentication, and shopping features for customers and admins.

## Architecture

- **Frontend:** Angular SPA with route guards, product browsing, cart, and user login/registration.
- **Backend:** Node.js/Express REST API handling product CRUD, user auth, and database interaction.
- **Database:** MySQL for persistent data storage.
- **Kubernetes:** Orchestrates containers, services, ingress routing, scaling, and resource management.
- **CI/CD:** Automated builds, Docker image pushes, and cluster deployments using GitHub Actions.

## Folder Structure

- `backend/`: Backend API source and Dockerfile  
- `client/`: Angular frontend source and Dockerfile  
- `k8s/`: Kubernetes manifests (deployments, services, ingress, volumes)  
- `.github/workflows/`: GitHub Actions CI/CD pipeline config  
- `docker-compose.yml`: Docker Compose for local dev/testing  

## Features

- Full CRUD operations for products via backend API  
- User login and registration for customers and admins  
- Route guards in frontend to protect sensitive admin pages  
- Shopping cart and product viewing for customers  
- Kubernetes readiness/liveness probes for reliability  
- Resource limits and requests for efficient cluster usage  
- Host-based ingress for clean URL routing  
- CI/CD pipeline automating build, push, and deploy  

## Getting Started

### Prerequisites

- Docker and Docker Compose  
- Kubernetes cluster (e.g., Minikube)  
- kubectl CLI configured  
- Docker Hub account for image storage  

### Running Locally

1. Start MySQL, backend, and frontend containers using Docker Compose:  
   ```bash
   docker-compose up --build
