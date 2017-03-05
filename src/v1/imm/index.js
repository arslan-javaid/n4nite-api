import app from '../../app';

import {fetchOne, convertToPreProcess, errorOnEmptyResult} from 'koa-neo4j/postprocess';
import {logValues} from 'koa-neo4j/debug';




/* **************************************************************
****                                                         ****
***                        GET (Read)                         ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***            Read Nodes          ***
    **************************************/
        
        //Read (get) all nodes from the database
        app.defineAPI({
            method: 'GET',
            route: '/v1/imm',
            cypherQueryFile: './src/v1/imm/cypher/readNodes.cyp'
        });