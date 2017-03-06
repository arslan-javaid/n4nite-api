//********************************************************************************************************
//** 
//** Author:      MOS
//** Date:        04/03/2017
//** Description: Returns a list of all metrics in the database - only mimimal 
//**              information including the id, label, type and name of the nodes are returned.
//** 
//********************************************************************************************************
  MATCH (e:entity:metric)
  RETURN
    {
      id: id(e),
      label: labels(e),
      type:"",
      name: e.name
    }