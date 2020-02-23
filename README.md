# serverless-graphql-gist

A minimal graphql server, hosted through express-graphql to prove express on lambda.

Configurations are present for...
* Hosting through express locally to prove the graphql server `node hostExpress.js`
* Hosting through [aws-serverless-express](https://github.com/awslabs/aws-serverless-express) on AWS Lambda
* Hosting through [serverless-http](https://github.com/dougmoscrop/serverless-http) on AWS Lambda

To host on lambda with aws-serverless-express set up serverless credentials then `npx serverless deploy`
To host on lambda with serverless-http edit serverless.yml and replace the handler line with

```
handler: hostServerlessHttp.handler
```
