# prospectiva-app

Application to show distance between two or more addresses using Google Geolocation Services

## Backend Stack

- Python 3.8
- AIOHttp Server to handle requests with AsyncIO Python features
- Requests library to connect with remote Google API

### Google Service Setup

Edit `settings.py` and add your Google API Key at the respective key value.

### Running

* Run `make start` in local development envs. 
* Run `docker-compose up` to build the image and run the container with dependencies and a built frontend.

> The interface will be available at `http://localhost:9090`.

### Tests

Run `make tests` to run backend tests

#### Tests Coverage

Backend tests covers only logic methods in their respective service classes

## Frontend Stack

- ReactJS with functional approach to avoid class component lifecycles issues
- Redux-Toolkit to reduce Redux development boilerplates

### Running

* Enter `static/frontend` folder
* Run `npm install` or `yarn` to install dependencies
* Run `npm start` or `yarn start` to run the local development server

> Interface available at `http://localhost:3000`

## Features

* Enter any address in the app's search bar and click the `Search` button. 
* Below the search bar, it will show the informations about the searched address, like its formmated name, the corresponding latitude and longitude, and the respective image representing its location.
* After enter more than one address, the distance between them would be shown between their respective informations.

### Error handling

Errors are displayed at the top when one of the below scenarios are met:

* The entered address has less than 10 characters
* The address could not be found
* Any server side error

## Security Concerns

All integrated services with Google API is done by the backend, protecting the Google API Key from being visible in the user's browser