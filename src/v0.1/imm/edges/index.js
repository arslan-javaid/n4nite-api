import app from '../../../app';

import {fetchOne, convertToPreProcess, errorOnEmptyResult} from 'koa-neo4j/postprocess';
import {logValues} from 'koa-neo4j/debug';

/* **************************************************************
****                                                         ****
***                        GET (Read)                         ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***           Get Edges           ***
    **************************************/
    
        // Return all edges from the database.
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/edges',
            cypherQueryFile: './src/v0.1/imm/edges/cypher/readEdges.cyp'
        });
        
        // Return an edge from the database if an edge id matches the id passed by the user.
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/edges/:id',
            cypherQueryFile: './src/v0.1/imm/edges/cypher/readEdgesById.cyp'
        });
        
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
        route: '/v0.1/imm/edges',
        cypherQueryFile: './src/v0.1/imm/edges/cypher/createEdges.cyp'
    });