# Request a new DataHub API

This guide is for initiating the request to build a new DataHub API. If you'd prefer to gain a greater understanding of how DataHub works and how everything fits together before you jump in, we recommend starting with the <a :href="$withBase('/DataHub_UserSetUpDoc.docx')" download>DataHub Developer Documentation</a>

## Create an API for your system
*I want to expose my SQL query as a web service*
- Review the [Query Requirements](./producers/queries.html)
- Open an [IT Service Request ticket](https://services.northwestern.edu/TDClient/30/Portal/Requests/TicketRequests/NewForm?ID=d5KoWKzQ5aA_&RequestorType=Service) with "DataHub" in the subject and include: 
  - Which system currently holds the requested data
  - A description of the requested data 
  - The names of the data stewards for the requested data
- Route the ticket to Jason Miller (NUIT Administrative Systems).
- Your request will be evaluated. If determined appropriate for DataHub:
  - A workflow will be initiated to obtain and document the necessary approvals.
  - Once approved via workflow, complete the [Producer Checklist](./producers/checklist.md). 

## Another group owns the system
*DataHub could help me consume another system's data*
- Identify/define the specific requirements for the service
- Identify the system that holds the data 
- Open a ticket with "DataHub" in the subject and include the requirements and the system holding the data.
- Route the ticket to Jason Miller (NUIT Administrative Systems).
- Your request will be evaluated. If determined appropriate for DataHub, we will engage the owners of the target system for next steps; they would have to provide a resource to produce the service (write the SQL query, create documentation, etc.) and would own the resulting API.
