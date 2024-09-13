---
sidebar_position: 1
title: 13.09.2024
last_update:
  date: 13 Sep 2024 09:30:00 GMT
  author: Etienne Baumgartner
---

# 13.09.2024 - ETL

## ETL

|               |                            |
| ------------- | -------------------------- |
| **Extract**   | Collection performance     |
| **Transform** | Cleaning                   |
| **Load**      | Loading into new data base |

### Data Sources

- Database
- Fïles (CSV,josn,...)
- APIs
- Web Scraping

### API Bulk  
A Bulk API is designed to handle large volumes of data in a single request. It is typically used for operations that involve processingor transferring large datasets efficiently. 

    - Batch Processing: Allows multiple records to be processed in a single API call, reducing the number of requests and improving performance.
    - Efficiency: Optimized for handling large amounts of data, often using techniques like data compression and parallel processing.


### Extraction
Challanges: 
- Big volumes
- Security for sensible data
- Adaptation to diffrent formats


### Transformation
Process of modification, cleaning and structurization
- filtering, cleaning, aggregation, data enrichments
- transformation to suit usecases
- Standardization of data

### Load
Loading data into another data architecture
- destinations: datawarehouse, datalake, databases
- needs consideration for performance
- Automatization

Straegies: 
- full: all data at one time
- delta: only new data is loaded


