OPTIONAL MATCH path = (x)<-[*..3]-() WHERE ID(x) = 65

UNWIND nodes(path) as node
UNWIND rels(path) as rel

WITH collect(distinct node) as nodes,collect(distinct rel) as rels
// WITH apoc.coll.flatten(collect(nodes(path))) as nodes, apoc.coll.flatten(collect(relationships(path))) as rels
WITH apoc.coll.toSet([n in nodes WHERE n is not null 
            | { id: id(n),label: labels(n),type:"",metadata: properties(n)  } ]) as nodes,
     apoc.coll.toSet([r in rels WHERE r is not null 
            | { id: id(r),source: id(startNode(r)),relation: type(r),target: id(endNode(r)), directed: "true"  } ]) as rels

RETURN { graph: { type:"",label: "",directed: "true",nodes: nodes,edges: rels,
         metadata:{ countNodes: size(nodes),countEdges: size(rels) } } } as graph;