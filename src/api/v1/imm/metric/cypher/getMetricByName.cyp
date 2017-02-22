MATCH (n:metric {
    name: $metricName
})
RETURN n AS metric