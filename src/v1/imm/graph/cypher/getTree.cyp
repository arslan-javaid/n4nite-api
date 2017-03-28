OPTIONAL MATCH path = (x:entity)-[* {current:true}]-(:entity)
WITH COLLECT(path) as ps
CALL apoc.convert.toTree(ps) yield value
RETURN value;