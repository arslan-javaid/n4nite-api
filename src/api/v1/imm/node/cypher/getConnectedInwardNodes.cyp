OPTIONAL MATCH path = (x)<-[*..3]-() WHERE ID(x) = 65

WITH apoc.coll.toSet([n in nodes(path) WHERE n is not null 
            | { id: id(n),label: labels(n),type:"",metadata: properties(n)  } ]) as nodes,
     apoc.coll.toSet([r in relationships(path) WHERE r is not null 
            | { id: id(r),source: id(startNode(r)),relation: type(r),target: id(endNode(r)), directed: "true"  } ]) as rels

RETURN { graph: { type:"",label: "",directed: "true",nodes: nodes,edges: rels,
         metadata:{ countNodes: size(nodes),countEdges: size(rels) } } } as graph;