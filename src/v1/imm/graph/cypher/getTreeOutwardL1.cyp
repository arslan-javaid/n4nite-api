OPTIONAL MATCH path = (x:entity)-[*..1 {current:true}]->(:entity) WHERE ID(x) = $id
WITH COLLECT(path) as ps
CALL apoc.convert.toTree(ps) yield value
RETURN value;