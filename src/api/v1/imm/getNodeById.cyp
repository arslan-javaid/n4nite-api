MATCH (n)
WHERE ID(n) = $id
RETURN n AS node