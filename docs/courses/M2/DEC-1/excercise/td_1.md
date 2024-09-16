---
sidebar_position: 1
title: TD 1
last_update:
  date: 13 Sep 2024 11:12:00 GMT
  author: Etienne Baumgartner
---

# TD 1

## Model correction

Considerations:

- The lines of the facttable change depending on what aggregation level are chosen
- time dimensions need to be defined (which granularity)
- do never put % in the facttable. It can always be recalculated
- never take the averages of other averages, always take all the samples and average over them
- **Conformity** can not be answered in this case
- Most fine grained granulaity should be added to the fact table
- there can be an additional dimension `anonymisation` with all additional infos (ex: start, end, error code, data, etc...)


![model](model.png)
