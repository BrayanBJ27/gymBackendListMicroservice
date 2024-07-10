# GYM Machine Reservation Listing Service 

This is the microservice to list the reservations of the GYM FITNESS BODY machines.

## Group Members

- Christopher Pallo
- Brayan Davila

## Table of Contents

1. [Microservice Description](#microservice-description)
2. [Installation](#installation)
   - [Requirements](#requirements)
   - [Clone the Repository](#clone-the-repository)
   - [Install Dependencies](#install-dependencies)
   - [Start the Server](#start-the-server)
3. [Program Execution](#program-execution)
   - [Execute Microservice](#execute-microservice)
4. [DockerHub](#dockerhub)
   - [DockerHub Repository](#dockerhub-repository)
5. [AWS](#aws)
   - [Evidence](#evidence-create)

## Microservice Description

The microservice `gymBackendListMicroservice` is in charge of listing all the reservations of the gym machines. It allows to visualize the new reservations through an HTTP GET request to the corresponding path.

## Installation

### Requirements

- Node.js
- npm (Node Package Manager)

### Clone the Repository

```sh
git clone https://github.com/BrayanBJ27/gymBackendListMicroservice.git
cd gymBackendListMicroservice
```

### Install Dependencies
```sh
npm install
```

### Start the Server
Before starting the application you must change the database credentials in the index.js file if you want to use the application locally and independently, this is because initially the application is configured to be used in conjunction with the rest of the Microservices.

Port Verification

Current:
```sh
const port = 8089;
```

## Program Execution
### Execute Microservice

```sh
npm run start
```

## DockerHub
### DockerHub Repository

https://hub.docker.com/r/brayanbj27/bd-list-gym-services

Docker Pull Command
```sh
docker pull brayanbj27/bd-list-gym-services
```

## AWS
### Evidence
**Summary of the Instance** 

![image](https://github.com/BrayanBJ27/gymBackendListMicroservice/assets/87538474/d3fa4838-8a90-4be7-827b-7e7288b4ed0b)


**Service running on the instance IP**

![image](https://github.com/BrayanBJ27/gymBackendListMicroservice/assets/87538474/7f170a78-d5b4-4d60-aa90-d7db76e60726)
