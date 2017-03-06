//********************************************************************************************************
//** 
//** Author:      MOS
//** Date:        04/03/2017
//** Description: Returns a list of all nodes in the database with their full properties.
//** 
//********************************************************************************************************

  MATCH (e:entity)
  RETURN
    {
      id: id(e),
      label: labels(e),
      type:"",
      metadata: apoc.map.fromPairs([key IN keys(e) | [key, e[key]]])
    }
    
//********************************************************************************************************
  //MATCH (e:entity)
  //WITH collect(distinct e) as nodes
  //WITH apoc.coll.toSet([n in nodes WHERE n is not null | { id: id(n), type:"", label: labels(n), metadata: properties(n)} ]) as nodes            
  //RETURN 
  //{
  //            nodes:nodes
  //} as nodes;