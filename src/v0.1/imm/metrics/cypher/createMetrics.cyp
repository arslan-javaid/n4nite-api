//********************************************************************************************************
//** 
//** Author:        MOS
//** Date:          03/03/2017
//** Description:   Creates a new metric using the properties that are passed in the request
//**                object (e.g. $props). The cypher creates a new entity node along with the associated
//**                state node and the HAS_STATE relationship to connect the entity and state.
//** 
//********************************************************************************************************

    CREATE 
        (e:entity:metric $props), 
        (s:state:metricState $props), 
        (e)-[r:HAS_STATE {from:timestamp(), to:9223372036854775807, current:true, modifiedBy:"mos"}]->(s)
        SET s.dateCreated = timestamp(), e.dateCreated = timestamp()
    RETURN e, s, r
