import app from '../../../app';

import {fetchOne, convertToPreProcess, errorOnEmptyResult} from 'koa-neo4j/postprocess';
import {logValues} from 'koa-neo4j/debug';

/* **************************************************************
****                                                         ****
***                        GET (Read)                         ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***             Get Nodes         ***
    **************************************/
    
        // Returns all nodes from the database.
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/nodes',
            cypherQueryFile: './src/v0.1/imm/nodes/cypher/readNodes.cyp'
        });
        
        // Return a node from the database if a node matches the id passed by the user.
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/nodes/:id',
            cypherQueryFile: './src/v0.1/imm/nodes/cypher/readNodesById.cyp'
        });
        
        // Returns all nodes from the database that match the search criteria.
        // Note that for now search criteria is limited to "Starts With" for the name field
        // Format is "/search?name=""
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/nodes/search',
            cypherQueryFile: './src/v0.1/imm/nodes/cypher/readNodesSearch.cyp'
        });