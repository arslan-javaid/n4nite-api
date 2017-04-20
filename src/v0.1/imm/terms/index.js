import app from '../../../app';

import {fetchOne, convertToPreProcess, errorOnEmptyResult} from 'koa-neo4j/postprocess';
import {logValues} from 'koa-neo4j/debug';

/* **************************************************************
****                                                         ****
***                        GET (Read)                         ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***             Get Terms        ***
    **************************************/
    
        //Returns all terms from the database.
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/terms',
            cypherQueryFile: './src/v0.1/imm/terms/cypher/readTerms.cyp'
        });
        
        //Return a term from the database if a term matches the id passed by the user.
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/terms/:id',
            cypherQueryFile: './src/v0.1/imm/terms/cypher/readTermsById.cyp'
        });
        
        // Returns all terms from the database that match the search criteria.
        // Note that for now search criteria is limited to "Starts With" for the name field
        // Format is "/search?name=""
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/terms/search',
            cypherQueryFile: './src/v0.1/imm/terms/cypher/readTermsSearch.cyp'
        });
        
/* **************************************************************
****                                                         ****
***                         POST (Create)                     ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***        Create New Term       ***
    **************************************/
    app.defineAPI({
        method: 'POST',
        route: '/v0.1/imm/terms',
        cypherQueryFile: './src/v0.1/imm/terms/cypher/createTerms.cyp'
    });
    
/* **************************************************************
****                                                         ****
***                      PUT (Update )                        ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***     Update Existing Term     ***
    **************************************/
    app.defineAPI({
        method: 'PUT',
        route: '/v0.1/imm/terms/:id',
        cypherQueryFile: './src/v0.1/imm/terms/cypher/updateTerms.cyp'
    });


/* **************************************************************
****                                                         ****
***                    DELETE (Archive)                       ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***         Archive   Term       ***
    **************************************/
    app.defineAPI({
        method: 'DEL',
        route: '/v0.1/imm/terms/:id',
        cypherQueryFile: './src/v0.1/imm/terms/cypher/deleteTerms.cyp'
    });
    