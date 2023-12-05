ALB - Application Load balancer
API Gateway 

ALB - Support HTTP and HTTPS && It will give you the static API, Cost is high

API Gateway - Supports only HTTPS, and It does not give any static IP, you can add your endpoint. 

Synchronous Architecture - ( All the services needs to scale together )

User --> API gateway ---> Lambda ---> Dynamodb 

Asyc or Event-Driven Achitechture - ( All the component does not need to scale all together - Because of SQS -- DLQ )

User --> API gateway ---> Messaging Queue ( SQS ) ---> Lambda ---> Dynamodb


It is stronger when it is working together.

# Queue - SQS

( Pub sub Architechture - Example - SNS, Event Bridge )
User publish the topic - (A) ---- The use those who are subscribe to it, they will get notification about the topic 


# Messaging VS Streaming 

Messaging
A -- SQS --- B

# Cache - Redis - Better AWS Elastic Cache


# High Availability 

It should be always available, If any small services went down or stop working.

If is a EC2 - On the top load balancer, In order to highly available, we deploy it under auto scalling group. 

# Fault tolerance - 
If we have EC2 on top of Auto Scallng Load balacer, Even if the any system is down, performace should  slowdown. 

# Streaming 
Website Click Stream --> Kinesis --> B


# Centralized System scalling --

2 or More Client are talking to 1 server. How I can scale, need to increase the CPU and memory.


# Distributed System scalling --

Our application are in different server, and on the top of Load Balancer and on the top of Auto Scalling Group. If 1 went down, it can be easily managable. 


# Hasing ----

Dynamodb background all the data are store in partitions. When ever we do query or get any item, Based the primary Key, Hash function will tell you, which partition to go and fetch the exact record. 

# Sharding - 

1 is primary node - 2 secodary node. and there is a heartbeat signal between them. Each the every share data will be segrigated. --- This is the important point. 

When any request come to fetch - It will go though the hasing function, from there it will get a sharded key. From there it can rectify, which share the data will exists. Where there is a write operation, which share there is a less data, there the write operation will happen. 

# Sharding and Replication - 

If you have three nodes with one primary and two secondary nodes, the data on the primary node should be replicated to the secondary nodes. The purpose of replication is to ensure that changes made on the primary node are propagated to the secondary nodes, maintaining consistency.

However, the distribution of sharded data might mean that the primary node handles a specific shard or set of shards, and the secondary nodes replicate the data associated with those shards.


# DR - Disaster Recovery Strategy - 

Solution 1 - Active & Active strategy - Where you will have same database in a diff region in AWS.
RPO - Recovery Point Objectives - Reduce time, --- Every 10 minutes we need to do a database backup.
Here we need to think about replication. 


# CAP - Theorem
C - Consistency
A - Availability
P - Partition Tolerance - System continues to operate n of messages. ( Replication example - Any thing comes to primary node, it should replicate to secondary node too. )


# Content based Messaging system
                                                  ======== SQS ( CAR ) ---> Lambda
User1 --> (Send message) --> EventBus or SNS ---> ======== SQS ( Bike ) ---> Lambda
                                                  ======== SQS ( Cycle ) ---> Lambda


# Storing Image in S3 ( Creating like Tinder )

User ---> Upload image (Muti upload/single upload) --> API Gateway --> Run amazon rekognition tool -->  S3 --> Lambda ---> compress image --> ( And store into diff S3 buckets )



              