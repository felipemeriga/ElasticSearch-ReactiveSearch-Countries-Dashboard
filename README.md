# ElasticSearch + Kibana + ReactiveSearch Countries Dashboard

This dashboard is meant to be a standard and base project to use ElasticSearch, Kibana and 
React, on the top of the React package ReactiveSearch, that abstracts the difficult to integrate and manage
queries between React and ElasticSearch, and makes the developer focused in the UI/UX side of things, enhancing
productivity.

To get more insights of how to use ReactiveSearch, and all its capabilities just go into:
[ReactiveSearch](https://opensource.appbase.io/reactivesearch/)

## What is ElasticSearch
Elasticsearch is a distributed, open source search and analytics engine for all types of data, including textual, 
numerical, geospatial, structured, and unstructured. Elasticsearch is built on Apache Lucene, and can query data in a
faster way. 

Basically, we can say that ElasticSearch operates roughly like a NoSQL database, storing JSON in collections, and
performs queries to retrieve this data with many available querying methods, allowing the user to do aggregations,
transformations that from a SQL perspective, or even code, would extremely difficult, and less effective. 

Back to the Hybrid infrastructure with database, imagine that you have an application to search for supermarkets prices.
All of the prices are stored in the database, then you have a ElasticSearch cluster that syncs the information in
realtime with your DB. Now, your frontend /backend it’s ready to query data directly from the cluster.

## What is Kibana
Kibana is a free and open user interface that lets you visualize your Elasticsearch data and navigate the Elastic Stack. 
Do anything from tracking query load to understanding the way requests flow through your apps.

Summarizing, it’s a graphical interface, where you can visualize the data from ElasticSearch, create dashboards,
 analysis, and execute queries.

## Setting Up Docker Containers for ElasticSearch and Kibana
In order to deploy the containers, we will use Docker-Compose, a docker tool used to spin up multiple containers 
defined in a single yaml file. The good thing here, is that we only a single file, we will create the two needed
containers. So, first of all create a file named docker-compose.yml in any directory that you want, and them paste
the following content. 

```
# ./docker-compose.yml


version: '3'


services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:6.3.2
    environment:
      - cluster.name=docker-cluster
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    ulimits:
      memlock:
        soft: -1
        hard: -1
    ports:
      - "9200:9200"
  kibana:
    image: docker.elastic.co/kibana/kibana:6.3.2
    ports:
      - "5601:5601"
```

As we can see in the content of the file, we will have two services, the elasticsearch and kibana, and you could have 
asked, why docker-compose ? Because Docker containers, have BRIDGE, HOST, NONE network configurations, if you use 
docker-compose, it will automatically create a network that the containers can communicate with each other, and as the 
default configuration of the two containers are bridge, we can access them from host used the mapped ports. 

So, having this file, in the same directory where this file is, run the following command to start the containers. 

```
docker-compose up -d
```

This will start the containers in detached mode (parallel computer thread).

Massive! Now we have a development environment with ElasticSearch and Kibana, I can access both of them on your browser. 

Test ElasticSearch accessing http://localhost:9200

Test Kibana accessing http://localhost:5601 

Now that we have our containers up and running, we need to insert some data in ElasticSearch, just download this file, 
that contains a set of countries and save in a directory of your choice.

https://showerio-public.s3.amazonaws.com/countries.txt

After saving it, you can do an HTTP request to the ElasticSearch container to add all the content of that file. 
So, do the following command, where you saved the file: 

```
curl -H 'Content-Type: application/x-ndjson' -XPOST 'localhost:9200/countries/doc/_bulk?pretty' --data-binary @countries.txt
```

After that, you should have all the data saved into ElasticSearch, and now let’s query this data using Kibana.

## Running the Application

The application is already configured to use a localhost ElasticSearch, with the
index countries. In order to run the application:
```
npm install
npm run dev
```
