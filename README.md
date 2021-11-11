# factorial-microservice

Node.js Factorial microservice

## Run the app

1. Build the container:

```
docker build -t factorial-ms-gl:1.0 .
```

2. Run it

```
docker run -d -p 3001:3000 factorial-ms-gl:1.0
```
