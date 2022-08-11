# Challenges Encountered
There were **two major huddles** worth highlighting:
1. Opening up 10+ **endpoints** for the client, and establishing a standard for APIs
2. Using and deploying a **Python main server** as well as a **NodeJS-based Google Cloud Function** for [Comment Token](https://bit.ly/3Pl3Osi) transactions.

## Challenge 1. Endpoints
**Challenge:** Our product has multiple services available. Therefore, the **server is required to open 10+ endpoints** and the **client is required to follow the specifications** required by the server. Keeping, managing, and testing the endpoints in one place was very challenging.

**Solution**:
We used **(1) A standard API documentation system** that denotes required HTTP method / fields / expected results and **(2) An API testing solution** based on Postman. 

***API Documentation***
<img src="https://bit.ly/3peaxK5" title="API doc"></img>

***API Testing***:
<img src="https://bit.ly/3SFfKIn" title="API Test"></img>

## Challenge 2. Server and Google Cloud Functions
**Challenge:**

The **language that we used for the main server(Flask, python) was not compatible with the language used for establishing transactions with the Comment Token (NodeJS)**. Therefore, we had to devise a convenient way establish a NodeJS server for token transaction. 

**Solution:** 

We used **Google Cloud Functions** (GCF) to create a lightweight HTTP endpoint. GCF would respond to the server's request to proceed a transaction.

However, because we weren't quite familiar with Google Cloud Functions, there were additional issues. Finally after (1) changing the request type to application/json (doesn't support multipart/form); (2) adding all requirements to package.json; and (3) changing the HTTP req,res to comply with async/await required for the transaction, it was functional!

Also, as there was latency issues (~30s) for transaction, server used threads for calling GCF.

<img src="https://bit.ly/3pdBBcu" title="Function GCF"></img>

