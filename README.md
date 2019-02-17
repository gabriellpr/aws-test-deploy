# Professional Portfolio

### Docker Build Steps


```sh
1. Build docker first

docker build -t docker-name .

1. Run docker to test.

docker run -p 8081:3000 professional-portfolio

```

### Elastic Beanstalk Steps

```sh
1. Commit changes to git

git add .

git commit -m "Eb Deploy Settings"

git push

1. Initialize EB

eb init 

Select default -> Create new application -> Enter application name -> Setup ssh

1. Create EB Environment

eb create

Select default -> Select Name

1. Deploy EB

eb use environment name

eb deploy

1. Confirm EB is deployed

eb open

```
