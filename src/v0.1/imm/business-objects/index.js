import app from '../../../app';

import {fetchOne, convertToPreProcess, errorOnEmptyResult} from 'koa-neo4j/postprocess';
import {logValues} from 'koa-neo4j/debug';

/* **************************************************************
****                                                         ****
***                        GET (Read)                         ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***        Get Business Objects    ***
    **************************************/
    
        //Returns all Business Objects from the database.
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/business-objects',
            cypherQueryFile: './src/v0.1/imm/business-objects/cypher/readBusinessObjects.cyp'
        });
        
        //Return a Business Objects from the database if a term matches the id passed by the user.
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/business-objects/:id',
            cypherQueryFile: './src/v0.1/imm/business-objects/cypher/readBusinessObjectsById.cyp'
        });
        
        // Returns all Business Objects from the database that match the search criteria.
        // Note that for now search criteria is limited to "Starts With" for the name field
        // Format is "/search?name=""
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/business-objects/search',
            cypherQueryFile: './src/v0.1/imm/business-objects/cypher/readBusinessObjectsSearch.cyp'
        });
        
/* **************************************************************
****                                                         ****
***                         POST (Create)                     ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***      Create Business Objects   ***
    **************************************/
    app.defineAPI({
        method: 'POST',
        route: '/v0.1/imm/business-objects',
        cypherQueryFile: './src/v0.1/imm/business-objects/cypher/createBusinessObjects.cyp'
    });
    
/* **************************************************************
****                                                         ****
***                      PUT (Update )                        ***
****                                                         ****
****************************************************************/

    /* **************************************
    *** Update Existing  Business Objects ***
    *****************************************/
    app.defineAPI({
        method: 'PUT',
        route: '/v0.1/imm/business-objects/:id',
        cypherQueryFile: './src/v0.1/imm/business-objects/cypher/updateBusinessObjects.cyp'
    });


/* **************************************************************
****                                                         ****
***                    DELETE (Archive)                       ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***      Archive Business Objects  ***
    **************************************/
    app.defineAPI({
        method: 'DEL',
        route: '/v0.1/imm/business-objects/:id',
        cypherQueryFile: './src/v0.1/imm/business-objects/cypher/deleteBusinessObjects.cyp'
    });
    