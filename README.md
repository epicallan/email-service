### Email service

This is a very simple email service api used internally for sending automated emails using gmail.


Expected http POST payload to the `/send` route
```
{
   "emails": ["epicallan.al@gmail.com"],
   "subject": "pdfs downloads",
   "message": "hello pdfs",
   "token": "token"
 }
```

### How to step

- git clone the repo
- update configs/example.config.js with the proper values and rename to config.js
- add tokens
- Have docker installed and running and then run the docker commands below


```
docker build -t email-service .

docker run  -t -i -p 9999:9999 --name  email-service-app -d email-service

```

### TODO
 - Attach tokens to domains so that tokens are not re-used for malicious purposes by malicious users


@ MIT LICENSED
