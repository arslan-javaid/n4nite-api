import app from '../../../../app';

import {fetchOne, convertToPreProcess, errorOnEmptyResult} from 'koa-neo4j/postprocess';
import {logValues} from 'koa-neo4j/debug';

/* **************************************************************
****                                                         ****
***                         POST (Create)                     ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***         Create an Edge         ***
    **************************************/
    app.defineAPI({
        method: 'POST',
        route: '/api/v1/imm/edge',
        cypherQueryFile: './src/api/v1/imm/edge/cypher/createEdge.cyp'
    });
    
/* **************************************************************
****                                                         ****
***                        GET (Read)                         ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***            Read Edge           ***
    **************************************/
    
        //Read (get) a metric from the database matching the id parameter which the request has passed
        app.defineAPI({
            method: 'GET',
            route: '/api/v1/imm/edge/:id',
            cypherQueryFile: './src/api/v1/imm/edge/cypher/readEdge.cyp'
        });

/* **************************************************************
****                                                         ****
***                      PUT (Update )                        ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***       Update Existing Edge     ***
    **************************************/
    app.defineAPI({
        method: 'PUT',
        route: '/api/v1/imm/edge/:id',
        cypherQueryFile: './src/api/v1/imm/edge/cypher/updateEdge.cyp'
    });


/* **************************************************************
****                                                         ****
***                    DELETE (Archive)                       ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***          Archive   Edge        ***
    **************************************/
    app.defineAPI({
        method: 'DEL',
        route: '/api/v1/imm/edge/:id',
        cypherQueryFile: './src/api/v1/imm/edge/cypher/deleteEdge.cyp'
    });
    