//********************************************************************************************************
//** 
//** Author:        MOS
//** Date:          03/03/2017
//** Description:   Return an edge and its properties.
//** 
//********************************************************************************************************

    MATCH ()-[r]-()
    WHERE id(r) = $id
    RETURN DISTINCT
      {
        source: ID(startNode(r)),
        relation: type(r),
        target: ID(endNode(r)), 
        directed: "true",
        metadata: apoc.map.fromPairs([key IN keys(r) | [key, r[key]]])
      }