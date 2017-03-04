//Get details of the metric that matches the id passed into the query.
MATCH (n:metric)
WHERE ID(n) = $id
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