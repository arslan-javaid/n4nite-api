//********************************************************************************************************
//** 
//** Author:        MOS
//** Date:          03/03/2017
//** Description:   Delete a term. This is achieved using our "soft delete" model whereby the
//**                node is expired (by changing the entity label to deletedEntity and all of its
//**                relationships are expired by updating their "to" property and setting their "current"
//**                property to "false".
//** 
//********************************************************************************************************


MATCH (e:entity:term) -[r {current: true}]- ()
WHERE id(e)= $id
OPTIONAL MATCH (e)-[*0..]->(x:entity)
    SET r.to = timestamp(), r.current=false, e.archiveDate=timestamp()
    SET e:archivedEntity
    REMOVE e:entity
    SET x:archivedEntity
    REMOVE x:entity
      RETURN
        {
          id: id(e),
          label: labels(e),
          type:"",
          name: e.name,
          archiveDate: e.archiveDate
        }
