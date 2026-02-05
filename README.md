# EV Punjači Srbija - EV Charger Finder

A web application for finding electric vehicle chargers. The application uses data from the Open Charge Map API and displays it on an interactive map.

## Features

### Charger Search
- Search chargers by city name
- Display all chargers on the map
- Detailed information about each charger (name, address, number of connectors, verification status)

### Data Synchronization
- Automatic data synchronization from the Open Charge Map API
- Manual synchronization option
- Support for different countries via country code (e.g., RS for Serbia)

### Interactive Map
- Leaflet map with OpenStreetMap tiles
- Markers for each charging station
- Automatic zoom to search results

## Technologies

### Backend
- **Node.js** - runtime environment
- **AWS Lambda** - serverless functions
- **AWS DynamoDB** - database
- **AWS API Gateway** - HTTP endpoints
- **AWS S3** - static website hosting
- **AWS CloudFormation** - infrastructure as code

### Frontend
- **HTML/CSS/JavaScript** - vanilla stack
- **Leaflet.js** - map library

### Development Tools
- **Serverless Framework** - deployment to AWS
- **LocalStack** - local AWS emulation
- **Docker** - containerization

### External API
- **Open Charge Map API** - charger data source

## Running the Application

### Prerequisites
- Node.js
- Docker
- AWS CLI (optional for production)

### Local Development

```bash
npm run reset
```

This command:
1. Stops and removes existing Docker containers
2. Starts LocalStack
3. Deploys the backend (Lambda functions, DynamoDB tables, API Gateway)
4. Deploys the frontend to S3

After startup, the application is available at [this URL](http://punjaci-website.s3-website.localhost.localstack.cloud:4566)

## Contributors

- [David Ćuruvija](https://www.linkedin.com/in/davidcuruvija/)
- [Dobrivoje Vujović](https://www.linkedin.com/in/dobrivoje-vujovic-2424a229a/)
- [Nikola Trifunović](https://www.linkedin.com/in/trifsoft/)
