import app from '../../../app';

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
            route: '/api/v1/imm',
            cypherQueryFile: './src/api/v1/imm/cypher/readNodes.cyp'
        });