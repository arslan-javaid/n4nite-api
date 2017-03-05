//Get a list of all metrics along with their id and name and labels that they are assigned.
MATCH (n:metric)
RETURN
{
    labels: labels(n),
    id: ID(n), 
    name: n.name
}
AS MetricListing