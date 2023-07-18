# Database Support

Currently, DataHub supports the following target databases: 

| Database Type | Supported Versions | DataHub Driver | 
| ----- | ------| ---- | 
| Oracle Database | Oracle Database 12.1 or greater; note that fatabases using Native Network Encryption instead of TLS are not currently supported by DataHub. | `node-oracledb` default Thin mode | 

Requests welcome! Support for other database types will be added as the need is demonstrated.

See the <a :href="$withBase('/DataHub_UserSetUpDoc.docx')" download>DataHub Documentation for Developers</a> for target-specific documentation (e.g. handling of duplicate column names).