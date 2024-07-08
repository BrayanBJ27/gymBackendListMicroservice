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
   - [Evidence](#evidence-create)
3. [Usage](#usage)
   - [Verify Server Functionality](#verify-server-functionality)
   - [List all machine reservations](#list-all-machine-reservations)
4. [Program Execution](#program-execution)
   - [Create Docker Image](#create-docker-image)
5. [DockerHub](#dockerhub)
   - [DockerHub Repository](#dockerhub-repository)


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
Before starting the application you must change the database credentials in the index.js file if you want to use the application locally and independently, this is because initially the application is configured to be used in conjunction with the rest of Microservices through Docker-Compose, if you do not want to run the application independently, you must leave the file as it is and subsequently execute the DockerCompose file found in the attached repository, where you will find how to run it, and thus the application It will work together through Docker.
Repository:

Changes to run locally and independently
We are located on line of code 5

Current:
```sh
const port = process.env.PORT || 8089;
```
New:
```sh
const port = 8089;
```

We are located on line of code 11 to 16

Current:
```sh
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
```
New:
```sh
const db = mysql.createConnection({
    host: 'mysql-programaciondis.alwaysdata.net',
    user: '357676_bj',
    password: 'Uyt:tBHLgt4Kk_E',
    database: 'programaciondis_gym'
});
```

```sh
npm run start
```

### Evidence
![Imagen de WhatsApp 2024-07-07 a las 23 14 03_b50f7b3d](https://github.com/BrayanBJ27/gymBackendListMicroservice/assets/87538474/ae40dc26-1e27-483c-84da-9adec0143af7)

## Usage

### Verify Server Functionality

Method: GET  
URL: `http://localhost:8089/`  
Description: This route displays a message to verify that the server is running.
![Captura de pantalla 2024-07-03 214528](https://github.com/BrayanBJ27/gymBackendListMicroservice/assets/87538474/a2f03d50-684d-40ee-805d-b401cfa48d16)


### List all machine reservations

Method: POST  
URL: `http://localhost:8082/reservations`  
Description: This route returns the reservation list of the machines in the gym.
![image](https://github.com/BrayanBJ27/gymBackendListMicroservice/assets/87538474/5222af41-8674-4308-b20e-44e354ea5549)


## Program Execution
### Create Docker Image with DockerFile

```sh
docker build -t gymlist .
```
![Imagen de WhatsApp 2024-07-07 a las 22 58 14_c4beda41](https://github.com/BrayanBJ27/gymBackendListMicroservice/assets/87538474/051dba85-7a0a-4cdc-b51a-ea14ed724dd1)

## DockerHub
### DockerHub Repository

[brayanbj27/bj-gymlist](https://hub.docker.com/r/brayanbj27/bj-gymlist)

Docker Pull Command
```sh
docker pull brayanbj27/bj-gymlist
```
