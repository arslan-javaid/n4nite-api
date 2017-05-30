//********************************************************************************************************
//** 
//** Author:        Awais
//** Date:          30/05/2017
//** Description:   Update Edge type.
//**
//** Notes:         Its not possible to parameterize the TYPE of an edge so I have had to implement
//**                a combine query in which old relationship is deleted and then a new relation with        
//**                new type is created whereas properties of old one are copied to new. 
//**                
//**                
//** 
//********************************************************************************************************

MATCH (s), (t),(s)-[r]->(t)
  WHERE id(s) = toInt({props}.source) AND id(t) = toInt({props}.target)
  WITH s,t,r, 
    CASE WHEN {props}.relation = "CALCULATED_FROM" THEN [1] ELSE [] END AS CALCULATED_FROM,
    CASE WHEN {props}.relation = "USES_CALC_COMPONENT" THEN [1] ELSE [] END AS USES_CALC_COMPONENT,
    CASE WHEN {props}.relation = "IS_UNIQUELY_IDENTIFIED_BY" THEN [1] ELSE [] END AS IS_UNIQUELY_IDENTIFIED_BY,
    CASE WHEN {props}.relation = "MAPS_TO_DATA_ATTRIBUTE" THEN [1] ELSE [] END AS MAPS_TO_DATA_ATTRIBUTE
  FOREACH (x IN CALCULATED_FROM | CREATE (s)-[r1:CALCULATED_FROM]->(t)  SET r1=r)
  FOREACH (x IN USES_CALC_COMPONENT | CREATE (s)-[r1:USES_CALC_COMPONENT]->(t)  SET r1=r)
  FOREACH (x IN IS_UNIQUELY_IDENTIFIED_BY | CREATE (s)-[r1:IS_UNIQUELY_IDENTIFIED_BY]->(t)  SET r1=r)
  FOREACH (x IN MAPS_TO_DATA_ATTRIBUTE | CREATE (s)-[r1:MAPS_TO_DATA_ATTRIBUTE]->(t) SET r1=r)
WITH r
DELETE r
return *