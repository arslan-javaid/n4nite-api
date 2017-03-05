// *******************************************************************************************
// ** 
// ** Author: MOS
// ** Date: 02/03/2017
// ** Description: Returns all nodes and relationships that are within 1 inward
// ** hop of the requested node. The response is formatted as Graph JSON.
// ** 
// *******************************************************************************************
MATCH (l0) <-[r1]- (l1)
WHERE ID(l0) = $id
WITH [
       {
            id: id(l0),
            label: labels(l0),
            type:"",
            metadata: apoc.map.fromPairs([key IN keys(l0) | [key, l0[key]]])
        },
        {
            id: id(l1),
            label: labels(l1),
            type:"",
            metadata: apoc.map.fromPairs([key IN keys(l1) | [key, l1[key]]])
        }
] as nodes,
[
        { 
            id: id(r1),
            source: ID(startNode(r1)),
            relation: type(r1),
            target: ID(endNode(r1)), 
            directed: "true",
            metadata: apoc.map.fromPairs([key IN keys(r1) | [key, r1[key]]])
        }
] as edges
UNWIND nodes as node
UNWIND edges as edge
RETURN
{
 graph: 
 	{
      type:"",
      label: "",    
      directed: "true",
      node: collect(distinct node) ,
      edges: collect(distinct edge),
      metadata:{
                  countNodes: count(distinct node),
                  countEdges: count(distinct edge)
               }
  }
}