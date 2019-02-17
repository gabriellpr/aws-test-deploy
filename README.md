# Professional Portfolio

### Docker Build Steps


```sh
1. Build docker first

docker build -t docker-name .

2. Run docker to test.

docker run -p 8081:3000 professional-portfolio

```

### Elastic Beanstalk Steps

```sh
1. Commit changes to git

git add .

git commit -m "Eb Deploy Settings"

git push

2. Initialize EB

eb init 

Select default -> Create new application -> Enter application name -> Setup ssh

3. Create EB Environment

eb create

Select default -> Select Name

4. Deploy EB

eb use environment name

eb deploy

5. Confirm EB is deployed

eb open

```
