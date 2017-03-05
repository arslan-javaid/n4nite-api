//Get details of the metric that matches the name passed into the query - may return multiple nodes
//because name is not necessarily a unique identifier.
MATCH (n:metric {name: $metricName})
RETURN
{
    labels: labels(n),
    id: ID(n), 
    name: n.name,
    description: n.description,
    businessContext: n.businessContext,
    notes: n.notes,
    kpi: n.kpi,
    unitType: n.unitType,
    funtionalArea: n.funtionalArea,
    performanceFocus: n.performanceFocus,
    dateAdded: n.dateAdded
}
AS Metric