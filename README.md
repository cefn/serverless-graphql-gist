# serverless-graphql-gist

A minimal graphql server, hosted through express-graphql to prove express on lambda. [Serverless credentials setup](https://serverless.com/framework/docs/providers/aws/guide/credentials/) is needed for Lambda deployments to succeed.

Configurations are present for...
* Hosting through express locally to prove the graphql server `node hostExpress.js` then visit http://localhost:3000/graphql
* Hosting through [aws-serverless-express](https://github.com/awslabs/aws-serverless-express) on AWS Lambda, (which is currently functional) `npx serverless deploy`
* Hosting through [serverless-http](https://github.com/dougmoscrop/serverless-http) on AWS Lambda, (which is currently buggy). Edit the line described below, then `npx serverless deploy`

A different handler is defined for serverless-http.
Edit serverless.yml and change the line

```
handler: hostAwsServerlessExpress.handler
```

...to read instead...


```
handler: hostServerlessHttp.handler
```
