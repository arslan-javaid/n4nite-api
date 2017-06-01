//********************************************************************************************************
//** 
//** Author:        Awais
//** Date:          31/05/2017
//** Description:   This query returns the all the nodes that are not connected with any other node.
//**                
//** 
//** 
//** 
//********************************************************************************************************

MATCH (n:entity)
WHERE not(()-[]->(n)) AND
not ((n)-[:CALCULATED_FROM]->()) AND
not ((n)-[:USES_CALC_COMPONENT]->()) AND
not ((n)-[:IS_UNIQUELY_IDENTIFIED_BY]->()) AND
not ((n)-[:MAPS_TO_DATA_ATTRIBUTE]->()) 
RETURN {
      id: id(n),
      label: labels(n),
      type:"",
      metadata: apoc.map.fromPairs([key IN keys(n) | [key, n[key]]]),
      name:labels(n)[1]
    }