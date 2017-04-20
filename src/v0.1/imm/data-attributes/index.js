import app from '../../../app';

import {fetchOne, convertToPreProcess, errorOnEmptyResult} from 'koa-neo4j/postprocess';
import {logValues} from 'koa-neo4j/debug';

/* **************************************************************
****                                                         ****
***                        GET (Read)                         ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***        Get Data Attributes     ***
    **************************************/
    
        //Returns all data attributes from the database.
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/data-attributes',
            cypherQueryFile: './src/v0.1/imm/data-attributes/cypher/readDataAttributes.cyp'
        });
        
        //Return a data attribute from the database if a term matches the id passed by the user.
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/data-attributes/:id',
            cypherQueryFile: './src/v0.1/imm/data-attributes/cypher/readDataAttributesById.cyp'
        });
        
        // Returns all data attributes from the database that match the search criteria.
        // Note that for now search criteria is limited to "Starts With" for the name field
        // Format is "/search?name=""
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/data-attributes/search',
            cypherQueryFile: './src/v0.1/imm/data-attributes/cypher/readDataAttributesSearch.cyp'
        });
        
/* **************************************************************
****                                                         ****
***                         POST (Create)                     ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***        Create Data Attribute   ***
    **************************************/
    app.defineAPI({
        method: 'POST',
        route: '/v0.1/imm/data-attributes',
        cypherQueryFile: './src/v0.1/imm/data-attributes/cypher/createDataAttributes.cyp'
    });
    
/* **************************************************************
****                                                         ****
***                      PUT (Update )                        ***
****                                                         ****
****************************************************************/

    /* **************************************
    *** Update Existing  Data Attributes  ***
    *****************************************/
    app.defineAPI({
        method: 'PUT',
        route: '/v0.1/imm/data-attributes/:id',
        cypherQueryFile: './src/v0.1/imm/data-attributes/cypher/updateDataAttributes.cyp'
    });


/* **************************************************************
****                                                         ****
***                    DELETE (Archive)                       ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***      Archive Data Attributes   ***
    **************************************/
    app.defineAPI({
        method: 'DEL',
        route: '/v0.1/imm/data-attributes/:id',
        cypherQueryFile: './src/v0.1/imm/data-attributes/cypher/deleteDataAttributes.cyp'
    });
    