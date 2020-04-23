# Serverless vs Express

## Index

- [Overview](#overview)
- [Introduction](#introduction)
- [What is a API REST and how it works](#what-is-a-API-rest-and-how-it-works)
    - [HelloWorld API with node.js](#helloWorld-API-with-node.js)
- [What Is Express framework](#what-is-express-framework?)
    - [HelloWorld API with express](#helloWorld-api-with-express)
- [What Is Serverless?](#what-is-serverless)
- [Serverless framework](#serverless-framework)
    - [HelloWorld API with serverless](#helloWorld-API-with-serverless)
- [Comparing serverless with express](#comparing-serverless-with-express)
- [Conclusion](#conclusion)

## Overview

This goal of this document is to provide a high-level overview of the Serverless and Express frameworks. Also, made a comparison between the both. 

## Introduction

Serverless and Express are frameworks that are very helpful when building our REST APIs. Both works well with node.js but also have some advantages and disadvantages. We are going to compare these and determine which of the two is the best option for the development of our API.have some 

## What is a API REST and how it works?
A REST API defines a set of rules and specifications that applications can follow to communicate with each other. Requests and responses are sent using the HTTP protocol, such as GET and POST.

Because the REST API uses HTTP, they can be used by virtually any programming language and are easy to test (it is a requirement of a REST API that the client and server are independent of each other, allowing it to be encoded in any language and improve by supporting longevity and evolution).

- Client/ Server protocol without state: Each HTTP request contains all the information necessary to execute it, therefore, this allows neither client nor server to need to remember any previous state.

- Operations: The most important operations related to the data in any REST system and the HTTP specification are four; POST (create), GET (read and consult), PUT (edit) and DELETE (delete).

### HelloWord API with Node.js
We can easily create a basic web server to answer any request. Simply by using the Node.js HTTP package, as shown below. This will create a server and listen to any kind of requests at the URL http://127.0.0.1:8000/. When a request is received, it will be answered by sending the text in reply: "Hello World!".

_You must have installed **node.js** before to create the helloWorld API_

- Create a folder for our HelloWorld API
- Open den cmd and go to the API folder
- Run npm init (complete the project information)
- Add the index.js in the API folder
- Add the following code to the index.js

    ```js
    // The HTTP module is loaded
    var http = require ("http");

    // Creation of the HTTP server, and the listener is defined
    // requests on port 8000
    http.createServer (function (request, response) {

        // The HTTP header is defined, with the HTTP status (OK: 200) and the content type
        response.writeHead (200, {'Content-Type': 'text / plain'});
       
        // It is answered, in the body of the answer with the message "Hello World"
        response.end ('Hello World! \ n');
    }). listen (8000);

    // Enter the URL to access the server
    console.log ('Server in url http://127.0.0.1:8000/');
    ````
- On the cmd run _node index.js_
- Now, the API is listen, go to the browser and enter _http://127.0.0.1:8000/_

You can find more information on this [example](https://adityasridhar.com/posts/how-to-use-nodejs-without-frameworks-and-external-libraries) and another [example](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework).


## What Is Express framework?
Express is Node's most popular web framework, offering a multitude of tools for developing a API REST. It provides mechanisms for:

- Writing request handlers with different HTTP verbs
- Set web application settings like which port to use to connect
- Add additional middleware request processing at any point within the request handling pipeline

The server waits to receive HTTP requests from the client. When a request is received, the API determines what the corresponding appropriate action is, according to the structure of the URL and the information (optional) indicated in the request with the POST or GET methods. Depending on the action to be taken, it may be necessary to read or write to the database, or to take other actions necessary to correctly attend the request and return a response.

Express has methods to specify which function is to be called depending on the HTTP verb used in the request (GET, POST, SET, etc.) and the structure of the URL. The Express middleware can also be used to add functionalities for managing cookies, sessions and users, through the use of parameters, in the POST / GET methods. You can also use any working system with databases, which is supported by Node (Express does not specify any preferred method to work with databases).

### HelloWorld API with Express
_You must have installed **node.js** before to create the helloWorld API_

- Create a folder for our HelloWorld API
- Open den cmd and go to the API folder
- Run npm init (complete the project information)
- Run npm i express
- Add the index.js in the API folder
- Add the following code to the index.js

```js
    var express = require ('express');
    var app = express ();

    app.get ('/', function (req, res) {
       res.send ('Hello World!');
    });

    app.listen (3000, function () {
       console.log ('Sample application, listening to port 3000!');
    });
```

## What Is Serverless?
In general, the term serverless is used to refer to the computing model according to which the provider of the computing layer allows us to execute portions of code called "functions" for a certain period of time, in AWS they are called Lambdas. We do not need to take over the underlying infrastructure that is provisioned to provide the service. In this model, the provider is responsible for offering resources in a transparent way, automatically scaling them if demand grows and releasing them when they are not used, defining a series of restrictions regarding processing and a payment model for the consumption of resources derived from execution.

The Serverless Framework gives you everything you need to develop, deploy, monitor and secure serverless applications on any cloud.

Currently, AWS Lambda is one of the most popular implementations of FaaS (Function as a Service) that we can find and one of those that offers a higher level of innovation. In any case, the different providers are evolving their solutions faster and faster, establishing themselves as serious alternatives:

The most popular implementations of FaaS (Function as a Service) that we can find are:

- AWS Lambda
- Google Cloud Functions
- Azure Functions
- IBM Apache OpenWhisk Function

Existence of abstraction frameworks that allow us to develop agnostic solutions from the chosen provider:

- Serverless Framework
- Pulumi

## Serverless framework
Serverless Framework provides us with an abstraction layer on cloud services. Through the yaml configuration file we can describe the deployment to be carried out including the functions to be created, their access permissions and how they will interact with the rest of the cloud services.

Through its CLI (Open Source) tool, we can use commands to facilitate certain operations when performing the construction, configuration, implementation and deployment of serverless functions in various providers (Amazon AWS, Microsoft Azure, Google Cloud, IBM Open Whisk, Kubeless , etc.).

### Serverless Framework Features:

- Provides a series of commands to perform complete actions
- It allows to work with different Cloud infrastructures or Suppliers
- Supports different languages
- Allows "offline" configuration
- Good documentation
- Provides extensibility through plugins
- Component oriented
- Developer friendly

### HelloWorld API with serverless
_You must have installed **node.js** before to create the helloWorld API_

- Create a folder for our HelloWorld API
- Open den cmd and go to the API folder
- npm install -g serverless
- sls create --template aws-nodejs --path aws
- A project called AWS will be create in the HelloWorld folder

![helloWorld project structure](/docs/images/serverless-hello-world-project-structure.png)

The serverless.yml file is where our configuration of the project resides, the handler.js is the Lambda that will trigger when a HTTP request is received.

![helloWorld yml file](/docs/images/serverless-hello-world-yml-base-structure.png)

Fore more information about how to deploy using Serverless framework, please go to [documentation](https://serverless.com/framework/docs/providers/google/cli-reference/deploy/#deploy). Remember you have already set AWS credentials using AWS CLI or by using serverless config.

## Comparing serverless with express
The following cooperation is based on the [post](https://medium.com/free-code-camp/node-js-apis-on-aws-the-pros-and-cons-of-express-versus-serverless-a370ab7eadd7) which describes the pros and cons of Express and Serverless to manage Node.js APIs on AWS (or similar).

Express and Serverless are really very different to be compared. However the reason to comparing them is that both Express and Serverless can be used for writing Node.js APIs. 

### Comparisons:

- Writing:
    Express it’s more readable and easier to test and debug.
    With Express, your index file is JavaScript code. It is a really expressive declarative file. With Serverless, it’s yml config with YAML syntax

- Learning Curve:
    If you are trying to deploy and manage robust, scalable Node.js APIs, the learning curve is definitely easier with Serverless. This is because Serverless deals with many of your complex cloud-based issues out-of-the-box. These include Deployment, Monitoring, and Infrastructure Provisioning to name just a few

- Operations (deploying, scaling, logging, monitoring): 
    Express is not designed to deal with all the complexities of cloud-based architectures by itself. If you use Express, you will need help from other packages. So while Express is a great low-level tool for building APIs, you  will need to learn a bunch of other packages for your API to thrive in the modern cloud-based world.
    Serverless can automatically interact with all the services in your Cloud Platform

- Scalability:
    AWS Lambda will auto scale up to 1000 concurrent executions by default. New functions are ready a few moments after the API Gateway receives the request

- Shorter time to market
    With express ww will take more time design and development the API, also we have to think about the needed infrastructure, setup and capacity. With serverless these steps are removed from your product development process and are now the responsibility of your serverless platform provider.

- Cost:
    + Server time: Using Express normally, we will need to rent or buy a server. The server would need to run all the time, sitting idle until a payment request comes. An average usage of the server would look like the following figure.

    ![express-server-use](/docs/images/express-server-use.png)

    No matter if we’re renting virtual servers or owning a data center you’re wasting resources. We’re paying for the reserved time whether your applications are being used or not.

    ![express-server-unused](/docs/images/express-server-unused.png)

    With serverless we will pay only for the time it was used.

     ![serverless-used-time](/docs/images/serverless-used-time.png)

    With serverless, your costs vary on your usage. If today you had 60 million requests and tomorrow no requests, you’d pay around $100 for today, and zero for tomorrow.

    + Vendor lock-in
        Running your applications in a serverless environment can tightly couple your applications and services with your platform provider.  With interface and protocol differences between serverless platform providers “in the mix”, any potential move of your applications to other serverless platforms will be a painful rewrite. Using Express, will do not have this problem unless the application need to moved to another server.
   
   + Potentially slightly slower service start:
        Because your serverless provider is automatically scaling your applications, if you don’t have any activity for a longer time some of your application instances may be down when a new request arrives. The situation then requires a “cold” start of your services, which may result in a higher latency of up to 1s. The latency, naturally, depends on the environment. Node.js, Python have lower latencies below 1 second, while Java going a bit higher (between 3 and 10s).

_API base architecture diagram using Express_

![serverless-api-base-architecture-express](/docs/images/serverless-api-base-architecture-express.png)

_API base serverless architecture diagram_

![serverless-api-base-architecture-serverless](/docs/images/serverless-api-base-architecture-serverless.png)



## Conclusion
In base of the previously exposed we conclude that Serverless Framework is the best option to develop our API REST. There is a summary for the Serverless pros and cons:

- Pros: 
    - reduced cost
    - out-of-the-box deployment scalability and monitoring
    - easy deployment on AWS
    - fast development
- Cons: 
    - loss of control
    - the enigmatic Lambda runtime
    - young ecosystem
    - no out-of-the-box zero-downtime deployment
