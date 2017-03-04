//********************************************************************************************************
//** 
//** Author:        MOS
//** Date:          03/03/2017
//** Description:   This query returns a graph starting the requested node (as identified by $id) and 
//**                builds a tree of nodes and relationships 2 levels outward from the starting node.
//** 
//** Credit:        Michael Hunger --> http://stackoverflow.com/a/42560605/7506888
//** 
//********************************************************************************************************

    OPTIONAL MATCH path = (x:entity)-[*..2 {current:true}]->(:entity) WHERE ID(x) = $id
    
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