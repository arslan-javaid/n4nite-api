//Accepts a set of properties as a collection and creates new metric 
//node for each set of properties that is passed into the query. The
//query then returns the detaile of the new metrics back in the response.
//UNWIND $props AS props
CREATE (e:entity:metric $props), (s:state:metricState $props), (e)-[:HAS_STATE {from:1488370955, to:9223372036854775807, current:true, modifiedBy:"mos"}]->(s)
SET e = props, s = props
RETURN e, s, r

/******************************************************************************
//UNWIND $props AS props
//CREATE (n:metric)
//SET n = props
//RETURN
//{
//    labels: labels(n),
//    id: ID(n), 
//    name: n.name,
//    description: n.description,
//    businessContext: n.businessContext,
//    notes: n.notes,
//    kpi: n.kpi,
//    unitType: n.unitType,
//    funtionalArea: n.funtionalArea,
//    performanceFocus: n.performanceFocus,
//    dateAdded: n.dateAdded
//}
//AS Metric