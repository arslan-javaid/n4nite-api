//********************************************************************************************************
//** 
//** Author:        MOS
//** Date:          03/03/2017
//** Description:   Updates the properties of a node. This is achieved  using our versioning
//**                approach (seperate state and entity nodes). This query takes 4 main actions:
//**                    a) Update the entity node with the new properties
//**                    b) Expire the current relationship between entity and state node
//**                    c) Create the new state node
//**                    d) Create new current relationship between entity and state node
//** 
//********************************************************************************************************

    MATCH (e:entity:metric)-[r1:HAS_STATE{current:true}]->(s1:state)
        WHERE id(e) = $id
    SET r1.current = false, r1.to = timestamp()
    CREATE (e)-[r2:HAS_STATE {from:timestamp(), to:9223372036854775807, current:true, modifiedBy:"mos"}]->(s2:state:metricState)
    CREATE (s2)-[r3:NEXT_STATE {modifiedBy:"mos"}]->(s1)
    SET e += $props
    SET s2 = e
    return e, r1, s1, r2, s2