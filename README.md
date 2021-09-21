# Description
A progressive web application for sharing photos with friends and the world. It has several interesting share options such as sharing with the fellow application users, generating a link for public access along with a timestamp. It's a serverless application built and hosted on AWS services.

# Contributors
Narendran Krishnakumar <br />
Kishan Patel <br />
Pathik Patel <br />
Asad Kothawala <br />

![Application Architecture](https://github.com/narencsp/CloudPhotoShare/blob/master/CloudPhotoShare-Architecture.png)

# Overview 
The project is a web application as a front that is hosted on AWS Elastic Beanstalk where users 
will have the ability to log in to personalized user accounts. The user will need to be registered 
first to be able to access the application. Once they are logged in, they are presented to the 
homepage consisting of a gallery that shows all the images that belongs to user logged in (a 
personal  gallery)  and  a  shared  tab  that  shows  all  images  that  have  been  shared  by  other 
application users with the current user. Users can upload images that are stored in AWS S3 
and  share  them  by  generating  a  link  that  can  be  copied  or  select  a  specific  user  who  will 
receive the image in their shared tab. The Endpoint needed for the front-end is provided using 
AWS API Gateway. AWS Lambda will then handle the creation of a shareable link or send the 
image  to  the  desired  user,  respectively.  Additionally,  AWS  Lambda  will  communicate  with 
Amazon SNS to send push notifications to the user the image has been shared with. We will 
use AWS Secrets Manager as a security  point for the application credentials remain safe by 
keeping them in rotation. 

# Features
1)  User Registration – Users must be registered to use the service.  
 
2)  Login – Logs the user in.  
 
3)  Forgot Password – User can reset the password if/when needed.  
 
4) User Homepage –  
1) Gallery Tab – List of user uploaded images into their account.  
2) Shared Tab – List of photos that have been shared by the other users of this application 
to this user.  
 
5) Upload Tab – User can upload an image from their local machine into their account.  
  
6) Share Image Options –  
  1) With the application users – Images will be shared with the fellow application users 
     with the search of their name.  
  2) Create a link – This will create a link for the selected image to be shared with the 
     world (anyone with this link can view the image).  
  3) Create link with TTL (Time to Live) - Creates a link with the duration of 24 hours 
     image will remain active. Then the image link will expire.   
 
7) Notification – A notification is sent as an Email and as an SMS to the user(s) when an image 
has been shared with them from another user of the application.

# Feature Flow
Cloud Photo Share uses multiple AWS  services to support multiple features. The 
application  provides  features  like  user  authentication,  image  uploading,  image  sharing  and 
generate image links.  

Login, registration, and forget password services are all part of the user authentication 
function. It makes use of APIs hosted on AWS Lambda. The user credentials are kept on an 
AWS RDS MySQL instance. Lambda functions retrieve data from a MySQL instance and return 
it to the user.  After logging in, the dashboard will appear, with two tabs: one for the user's 
personal picture gallery, and the other for photos shared by other users with the present user. 

The  images  on  the  dashboard  will  be  retrieved  using  an  AWS  Lambda  API  that  uses  SQL 
queries  to  get  data  from  a  MySQL  instance.  The  response  will  contain  a  link  to  the  images 
stored in an AWS S3 bucket, which will be retrieved using the frontend's img HTML element.  
To access the credentials of a database hosted on AWS RDS, all APIs in AWS Lambda use AWS 
Secret Manager.  

The upload image feature saves the picture to an Aws S3 bucket. When a user uploads 
an image, the AWS Lambda API is used, which generates a unique name for the image and 
generates a unique URL to upload image to the S3 bucket. This URL is called Pre-signed URL. 
It has been implemented for the security purposes instead of directly uploading the image to 
an S3 bucket which is not secure at all. And Pre-Signed URL uploads the image to the S3 bucket 
the image details and user details are stored in AWS RDS database. 

The  Share  Image  feature  allows  users  to  send  an  image  to  any  registered  user,  and 
that image will appear in the Shared Image Gallery tab on the homepage. A user can share a 
picture  by  providing  the  name  of  the  image  she  wants  to  share  and  the  email  address  of 
another user. It does the sharing by updating the database on AWS RDS using an API deployed 
on AWS Lambda. If the image is successfully shared after validating the image and user, the 
lambda function will send a text SMS and email to the recipient user through AWS SNS.  
Generate image link feature uses AWS Lambda function to create new sharable link 
and to check whether the link is expired or not. When a user generates a link, AWS RDS saves 
a timestamp with the image so that the expiration may be checked later. When a user clicks 
on the link, it sends a GET request to the AWS Lambda API, which returns the image if the link 
is generated within 24 hours and the message otherwise.  

To  summarise,  all  of  the  backend  APIs  are  hosted  on  AWS  Lambda,  with  AWS  API 
Gateway  serving  as  an  access  point  and  AWS  RDS  handling  database  operations.  The 
credentials  for  AWS  RDS  are  used  by AWS  Lambda  via  AWS  Secret  Manager.  AWS  Lambda 
sends text SMS and emails using AWS SNS. AWS S3 buckets are used to store the pictures. For 
simple deployment and scaling of our web application, the whole frontend is hosted on AWS 
Beanstalk.

