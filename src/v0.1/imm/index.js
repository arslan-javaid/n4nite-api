import app from '../../app';

import {fetchOne, convertToPreProcess, errorOnEmptyResult} from 'koa-neo4j/postprocess';
import {logValues} from 'koa-neo4j/debug';

/* **************************************************************
****                                                         ****
***                        GET (Read)                         ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***             Get Graph         ***
    **************************************/
    
        // Returns all nodes and relationships from the database.
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm',
            cypherQueryFile: './src/v0.1/imm/cypher/readGraphs.cyp'
        });