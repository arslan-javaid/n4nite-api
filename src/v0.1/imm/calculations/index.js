import app from '../../../app';

import {fetchOne, convertToPreProcess, errorOnEmptyResult} from 'koa-neo4j/postprocess';
import {logValues} from 'koa-neo4j/debug';

/* **************************************************************
****                                                         ****
***                        GET (Read)                         ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***             Get Calculations        ***
    **************************************/
    
        //Returns all calculations from the database.
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/calculations',
            cypherQueryFile: './src/v0.1/imm/calculations/cypher/readCalculations.cyp'
        });
        
        //Return a calculation from the database if a calculation matches the id passed by the user.
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/calculations/:id',
            cypherQueryFile: './src/v0.1/imm/calculations/cypher/readCalculationsById.cyp'
        });
        
        // Returns all calculations from the database that match the search criteria.
        // Note that for now search criteria is limited to "Starts With" for the name field
        // Format is "/search?name=""
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/calculations/search',
            cypherQueryFile: './src/v0.1/imm/calculations/cypher/readCalculationsSearch.cyp'
        });
        
/* **************************************************************
****                                                         ****
***                         POST (Create)                     ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***        Create New Calculation       ***
    **************************************/
    app.defineAPI({
        method: 'POST',
        route: '/v0.1/imm/calculations',
        cypherQueryFile: './src/v0.1/imm/calculations/cypher/createCalculations.cyp'
    });
    
/* **************************************************************
****                                                         ****
***                      PUT (Update )                        ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***     Update Existing Calculation     ***
    **************************************/
    app.defineAPI({
        method: 'PUT',
        route: '/v0.1/imm/calculations/:id',
        cypherQueryFile: './src/v0.1/imm/calculations/cypher/updateCalculations.cyp'
    });


/* **************************************************************
****                                                         ****
***                    DELETE (Archive)                       ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***         Archive   Calculation       ***
    **************************************/
    app.defineAPI({
        method: 'DEL',
        route: '/v0.1/imm/calculations/:id',
        cypherQueryFile: './src/v0.1/imm/calculations/cypher/deleteCalculations.cyp'
    });
    