OPTIONAL MATCH path = (x:entity)-[*..3 {current:true}]->(:entity) WHERE ID(x) = $id
WITH COLLECT(path) as ps
CALL apoc.convert.toTree(ps) yield value
RETURN value;