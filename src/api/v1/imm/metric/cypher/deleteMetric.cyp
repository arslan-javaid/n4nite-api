//********************************************************************************************************
//** 
//** Author:        MOS
//** Date:          03/03/2017
//** Description:   Delete a metric. This is achieved using our "soft delete" model whereby the
//**                node is expired (by changing the entity label to deletedEntity and all of its
//**                relationships are expired by updating their "to" property and setting their "current"
//**                property to "false".
//** 
//********************************************************************************************************

    MATCH (e:entity:metric) -[r {current: true}]- ()
    WHERE id(e) = $id
    SET r.to = timestamp(), r.current=false, e.archiveDate=timestamp()
    SET e:archivedEntity
    REMOVE e:entity
