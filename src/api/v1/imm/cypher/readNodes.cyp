//********************************************************************************************************
//** 
//** Author:      MOS
//** Date:        04/03/2017
//** Description: Returns a list of all nodes in the database on GraphJSON format.
//** 
//********************************************************************************************************
  MATCH (e:entity)
  WITH collect(distinct e) as nodes
  WITH apoc.coll.toSet([n in nodes WHERE n is not null | { id: id(n),label: labels(n),type:"",metadata: properties(n) } ]) as nodes            
  RETURN 
  {
  	graph: 
      	{	
        		type:"nodes",
         		label: "",
            	directed: "",
              metadata:
                {
                    returnedNodes: size(nodes),
                    returnedEdges: 0
                },
              nodes:nodes
      	} 
  } as graph;