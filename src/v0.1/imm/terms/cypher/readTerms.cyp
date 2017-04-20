//********************************************************************************************************
//** 
//** Author:      MOS
//** Date:        03/03/2017
//** Description: Returns a term node in JSON format based on the id parameter passed
//**              in the request. Formatting of the response is consistent with Graph JSON.
//** 
//********************************************************************************************************
  MATCH (e:entity:term)
  RETURN
    {
      id: id(e),
      label: labels(e),
      type:"",
      metadata: apoc.map.fromPairs([key IN keys(e) | [key, e[key]]])
    }