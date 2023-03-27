# MoviesList REST API

## Start the application

Before starting application - make sure all project dependencies are installed:

```
npm install
```

Execute this commant to create a docker container with MongoDB

```
docker-compose up
```

Add .env file and fill it with this information

```
API_SECRET_KEY = 8483ad486468asdadasd
EXPIRE_TIME = 86400
DOCKER_MONGO_USER=
DOCKER_MONGO_PASS=
MONGO_URL=mongodb://localhost:27017

```

Execute this command in terminal to start the application:

```
npm start
```

Execute this command in terminal to watch the application:

```
npm run dev
```

## Stop the application

```
ctrl + c
```
