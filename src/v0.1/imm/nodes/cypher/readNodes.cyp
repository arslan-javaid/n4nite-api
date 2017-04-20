//********************************************************************************************************
//** 
//** Author:      MOS
//** Date:        03/03/2017
//** Description: Returns all nodes in JSON format. Formatting of  response is consistent with Graph JSON.
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