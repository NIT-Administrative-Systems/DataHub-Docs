# Checklist

Once the data steward approves your request **via the Web Request Workflow**, please complete the following items: 

- **Submit firewall requests**
    * You need to submit any necessary Firewall Requests for connecting to your target database from DataHub:
        * Dev/Test: request access for source address 10.28.192.160/27
        * Prod: request access for source address 10.28.196.160/27
- **Create Apigee Proxy**
    * <a href="./assets/datahub-customer-starter.zip" download>Download DatatHub Starter Proxy</a> for Apigee.
    * <a href="./assets/DataHub_Developer_Docs.docx" download>Download DataHub Documentation for Developers</a> which includes step-by-step instructions on the Apigee setup on page 12-16. 

Next, provide the following to the DataHub admins: 

- **SQL query**
  - Please do not include newline characters, and escape any double quotes with a backslash
- **Configure as large query? (Yes or No)**
:::details What is a "Large" query in DataHub?
The AWS/Apigee services we use limit the response body size to **10MB** and impose a hard time limit on returning results. 
  - If the query takes longer than ~15 seconds it will not work with DataHub.
  - If your query results exceed the 10MB limit on the payload but returns faster than ~15 seconds we can configure it as a “large” query in DataHub: to get around the 10MB AWS/Apigee payload size limit, DataHub returns a url the consuming application can use to download the data instead of returning the data directly in the response.
  - This is a one-time decision from the outset; if you anticipate the results exceeding 10MB in the future, you should choose the "large" query option. 
:::
- **Database connection information**
  1. Connection string (including host, port, and service name)
  1. Database username
      - The system should be assigned a read-only DataHub user, with permissions for the tables that are needed
  1. Database password
- Name for finished web service and one-line description.
