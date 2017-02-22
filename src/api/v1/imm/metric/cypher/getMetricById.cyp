MATCH (n:metric)
WHERE ID(n) = $id
RETURN n AS metric