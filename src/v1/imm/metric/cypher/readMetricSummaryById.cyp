//********************************************************************************************************
//** 
//** Author:      MOS
//** Date:        05/03/2017
//** Description: Returns summary data for the matched metric - only mimimal 
//**              information including the id, label, type and name of the metric are returned.
//** 
//********************************************************************************************************
  MATCH (e:entity:metric)
  WHERE id(e) = $id
  RETURN
    {
      id: id(e),
      label: labels(e),
      type:"",
      name: e.name
    }