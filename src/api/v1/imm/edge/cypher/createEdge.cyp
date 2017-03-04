//********************************************************************************************************
//** 
//** Author:        MOS
//** Date:          03/03/2017
//** Description:   Create an edge between 2 nodes.
//**
//** Notes:         Its not possible to parameterize the TYPE of an edge so I have had to implement
//**                a workaround using a CASE statement to be able to achieve this effect. A downside of this
//**                is that I can't return the id of the requested relationship. It might be better to create
//**                seperate queries and endpoint per type of relationship. An alternative is to build the
//**                cypher query in KOA and pass that to Neo4j instead of this cypher file.
//** 
//********************************************************************************************************

  MATCH (s), (t)
  WHERE id(s) = toInt({props}.source) AND id(t) = toInt({props}.target)
  WITH s,t, 
    CASE WHEN {props}.relation = "CALCULATED_FROM" THEN [1] ELSE [] END AS CALCULATED_FROM,
    CASE WHEN {props}.relation = "USES_CALC_COMPONENT" THEN [1] ELSE [] END AS USES_CALC_COMPONENT,
    CASE WHEN {props}.relation = "IS_UNIQUELY_IDENTIFIED_BY" THEN [1] ELSE [] END AS IS_UNIQUELY_IDENTIFIED_BY,
    CASE WHEN {props}.relation = "MAPS_TO_DATA_ATTRIBUTE" THEN [1] ELSE [] END AS MAPS_TO_DATA_ATTRIBUTE
  FOREACH (x IN CALCULATED_FROM | CREATE (s)-[r:CALCULATED_FROM {from:timestamp(), to:9223372036854775807, current:true, modifiedBy:"mos"}]->(t))
  FOREACH (x IN USES_CALC_COMPONENT | CREATE (s)-[r:USES_CALC_COMPONENT {from:timestamp(), to:9223372036854775807, current:true, modifiedBy:"mos"}]->(t))
  FOREACH (x IN IS_UNIQUELY_IDENTIFIED_BY | CREATE (s)-[r:IS_UNIQUELY_IDENTIFIED_BY {from:timestamp(), to:9223372036854775807, current:true, modifiedBy:"mos"}]->(t))
  FOREACH (x IN MAPS_TO_DATA_ATTRIBUTE | CREATE (s)-[r:MAPS_TO_DATA_ATTRIBUTE {from:timestamp(), to:9223372036854775807, current:true, modifiedBy:"mos"}]->(t))
  return *