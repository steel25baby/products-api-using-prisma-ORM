# PRISMA PRODUCTS API DOCUMENTATION.  

http://localhost:5000/api/products/ is the url base i used.  

The end points used include;  
- Getting all products 
- Getting one product by use of its id.
- Creating a product, that is adding a new product into the database.
- Updating a product
- Deleting a user.  

### Getting all products.   
Use the url base: http://localhost:5000/api/products/   

![image of get request working on postman](./src/assets/Screenshot%20(152).png)  

### Getting one product.  
The url base used should be accompanied by an id as follows; http://localhost:5000/api/products/6e97b5fb-e4db-48a5-8237-7754ecb47417  
![image of a get request used to get a single product](./src/assets/Screenshot%20(153).png)  

### Creating/adding a product.  
To add a product  you use the POST command  to add the data you have created on the body. The following url base is used; http://localhost:5000/api/products/   
![image of a post request used to add a new product](./src/assets/Screenshot%20(154).png)  

### Updating a product.  
To update a product you use the command PATCH. The following url base is used; http://localhost:5000/api/products6e97b5fb-e4db-48a5-8237-7754ecb47417  
![image of a patch request to update a product](./src/assets/Screenshot%20(155).png)  
You can now confirm if the product has been updated by using the get one product request. The url base used is http://localhost:5000/api/products/6e97b5fb-e4db-48a5-8237-7754ecb47417  
![image to show a product has been updated succesfully](./src/assets/Screenshot%20(156).png) 

### Deleting/removing a product.  
To delete a user you use the command DELETE. url base:http://localhost:5000/api/products/6e97b5fb-e4db-48a5-8237-7754ecb47417  
![image of a delete request to remove a product](./src/assets/Screenshot%20(157).png)
You can confirm if the product has been removed using the same url base: http://localhost:5000/api/products/6e97b5fb-e4db-48a5-8237-7754ecb47417 ,using the get one product request.  
![image to show the delete request has worked](./src/assets/Screenshot%20(158).png)  

## Status codes  
I used the following status codes.  

- 404: Not found 
- 201: Added successfully
- 500: A problem with the server
- 200: Ok 



