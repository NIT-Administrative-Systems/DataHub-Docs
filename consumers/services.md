# Powered By DataHub
Explore some of the Northwestern web services built using DataHub.

All DataHub services can be found on the [API Service Registry](https://apiserviceregistry.northwestern.edu/), look for the badge: 

<img src="https://img.shields.io/static/v1?style=for-the-badge&label=Powered%20by&message=DataHub&color=4E2A84">

### InfoEd Services
|Service | Description|
| --- | ----- |
| Proposal Change Requests | Provides demographics for the New and Amendment Subaward Change Requests as well as the XML which stores the data in the eForm.|
| Proposal Animal and Human Subject | Provides the proposal number and whether or not the propsoal routing from indicates human or animal subjects.|
| Proposal Award Number |Provides the award number and award date of the original award period.|
| Proposal External Personnel | Shows all the requested and awarded personnel on subawards.|
| Proposal NU Personnel | Contains all the NU requested proposal personnel and all the NU awarded personnel.
| Proposal Parent | Provides proposal and award demographic information including the parent record if the record is a subproject. | 
| Proposal with JIT | Provides a list of proposals in the JIT statuses. |
| SubAward Institution Xwalk | Provides the name of an institution when passed the unique database identifier (Supporting service to XML from Infoed - Change Requests service). |
| List DA3 Users | This service returns a list of users with the Department Adnimistrator 3 (DA3) security role in InfoEd. |
| Sponsor Data | This service includes city/state/country for InfoEd sponsors, for consumption by NU Scholars and any other interested consumers. |
| Subaward Demographic Information | This service returns demographic information about new and amendment subawards as well as the XML which contains the data users have entered on the intake eform. |
| Subaward Institution | This returns the text institution name after passing the unique identifier of the subaward institution. (Supporting service to XML from the Infoed - Subaward Demographic Information service. |
| Subaward PI Name | This returns the text PI name after passing the unique identifier of the subaward PI. (Supporting service to XML from the Infoed - Subaward Demographic Information service). |

### MyHR Services
|Service | Description|
| --- | ----- |
| MyHR Department | This contains myhr department and admin unit information. 6 GET requests are available: all-departments, all-departments-by-an-admin-unit, all-departments-by-a-dept-group,primary-departments-only, all-admin-unit and an-admin-unit. |
| MyHR Color Participant Search | This service queries the MyHR Color Audit Table for a NetID to verify whether they were sent to the Color test provider and what email address was sent to Color. For consumption by the Color Cohort Assignment web application. |

### Caesar Services
|Service | Description|
| --- | ----- |
| Caesar Color Participant Search | This service queries the Caesar Color Audit Table for a NetID to verify whether they were sent to the Color test provider and what email address was sent to Color. For consumption by the Color Cohort Assignment web application. |

### Data Warehouse Services
|Service | Description|
|----|----|
| Interfolio - Patent - Application | No description available. |
| Interfolio - Patent - Issue | No description available. |
| Interfolio - Invention | No description available. |
| Covid Cohort Lookup | This API is to lookup an individual's covid cohort assignment in the Enterprise Data Warehouse by netid. For consumption by the Cohort Assignment web application. |
| COVID - Symptom Tracker | For consumption by Northwestern Medicine's COVID symptom tracker application to integrate COVID test and vaccination data. |