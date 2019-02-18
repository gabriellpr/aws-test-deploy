# Professional Portfolio
<img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="100" height="100" />
### About

This repository is a template that anyone can use for a professional portfolio. Created in ReactJS with reactstrap and custom functionality.

### Installation

```sh

git clone repo

cd repo

npm install

npm start

```

### Example Screenshot
![Screenshot](https://github.com/ryanlb777/Professional-Portfolio/blob/master/src/images/Capture.PNG)



# How to Dockerize a React App

### Docker File Steps

__1. Create file called "Dockerfile" and add the following lines, be sure to change version to a number i.e: 10.12.0
Use node -v to find version__

```
FROM node:version
container .

WORKDIR /app

COPY . /app

RUN npm install

CMD npm start

EXPOSE 3000
```

__2. Create .dockerignore file and add in the following lines__

```sh

node_modules
npm-debug.log

```


### Docker Build Steps

__1. Build docker first__

```sh
docker build -t docker-name .
```
__2. Run docker to test.__

```sh
docker run -p 8081:3000 professional-portfolio
```

### Elastic Beanstalk Steps

__1. Commit changes to git__
```sh


git add .

git commit -m "Eb Deploy Settings"

git push
```

__2. Initialize EB__
```sh

eb init 

Select default -> Create new application -> Enter application name -> Setup ssh
```
__3. Create EB Environment__
```sh

eb create

Select default -> Select Name
```
__4. Deploy EB__
```sh

eb use environment name

eb deploy
```
__5. Confirm EB is deployed__
```sh

eb open

```
