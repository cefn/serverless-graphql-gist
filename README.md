# serverless-graphql-gist

A minimal graphql server, hosted through express-graphql to prove express on lambda. [Serverless credentials setup](https://serverless.com/framework/docs/providers/aws/guide/credentials/) is needed for Lambda deployments to succeed.

Configurations are present for...
* Hosting through express locally to prove the graphql server `node hostExpress.js` then visit http://localhost:3000/graphql
* Hosting through [aws-serverless-express](https://github.com/awslabs/aws-serverless-express) on AWS Lambda, (which is currently functional) `npx serverless deploy` then visit https://your-aws-endpoint-here/dev/graphql
* Hosting through [serverless-http](https://github.com/dougmoscrop/serverless-http) on AWS Lambda, (which is currently buggy). Edit the line as described below, then `npx serverless deploy` and visit https://your-aws-endpoint-here/dev/graphql again

To change the handler to be serverless-http, edit serverless.yml and change the line

```
handler: hostAwsServerlessExpress.handler
```

...to read instead...


```
handler: hostServerlessHttp.handler
```
