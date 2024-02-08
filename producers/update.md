# Updating an Existing Query
Steps for Query owners/producers to update an existing query in DataHub. 

## Approval
1. Determine whether the data points and output are changing, necessitating a new DataHub approval workflow: 


    | | Requires DataHub Approval Workflow? | Example | 
    | --- | --- | --- |
    | Data points/output **are** changing  | Yes | Adding an additional field to the API |
    | Data points/output **are not** changing | No | Correcting a bug in the SQL where a calculated field incorrectly calculated certain dates |

2. If a DataHub approval workflow is required, open a new IT Service Request ticket with "DataHub" in the subject and assign to the NUIT_AS_ADO_EACD_Cloud_Services_and_Integrations team. 

    Include in the ticket: 
    1. Which API is being updated
    2. The name of the data steward(s) for the data 
    3. A high-level description of the changes
    4. A list of any added/updated/removed data points and any comments the data steward will need for each.
    5. Draft the updated SQL statement

## Consumer Communications
3. Request a list of the existing API Consumers from the Apigee Administrators (EACD CSI Team). 

4. Communicate to consumers about the upcoming change and work with them to manage the change.

## Verify in the Lower Environments
5. When you are ready, let the DataHub Administrators (EACD CSI Team) know to update the SQL query for the API in the DataHub lower environments. 
6. After they update DataHub's lower environments with the new SQL query, verify that the API response is now as expected and confirm to the DataHub admins once this is complete.
   - coordinate with any analysts, data stewards, or consumers who should be involved in validating the API updates are as expected in the lower environments

## Schedule and Manage the Production change
7. Determine when to make the production change. 
8. Let the DataHub Administrators (EACD CSI Team) know what date/time the query change should be made in DataHub production so they can plan the work. 
9. Manage communications to existing API consumers about the change and timing. 
10. Create an RFC to schedule the change and obtain CAB approval. 
11. Update the API documentation on the API Service Registry with the API changes.
