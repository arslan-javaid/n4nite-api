import app from '../../../../app';

import {fetchOne, convertToPreProcess, errorOnEmptyResult} from 'koa-neo4j/postprocess';
import {logValues} from 'koa-neo4j/debug';

/* **************************************************************
****                                                         ****
***          Get Graph from Start Node for X Levels           ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***     Default (Outward L1)       ***
    **************************************/
        app.defineAPI({
            method: 'GET',
            route: '/api/v1/imm/graph/:id',
            cypherQueryFile: './src/api/v1/imm/graph/cypher/getGraphOutwardL1.cyp'
        });

    /* ***********************************
    ***             Outward L1         ***
    **************************************/
        app.defineAPI({
            method: 'GET',
            route: '/api/v1/imm/graph/:id/1',
            cypherQueryFile: './src/api/v1/imm/graph/cypher/getGraphOutwardL1.cyp'
        });

    /* ***********************************
    ***             Outward L2         ***
    **************************************/
        app.defineAPI({
            allowedRoles: ['admin'],
            method: 'GET',
            route: '/api/v1/imm/graph/:id/2',
            cypherQueryFile: './src/api/v1/imm/graph/cypher/getGraphOutwardL2.cyp'
        });

    /* ***********************************
    ***             Outward L3         ***
    **************************************/
        app.defineAPI({
            method: 'GET',
            route: '/api/v1/imm/graph/:id/3',
            cypherQueryFile: './src/api/v1/imm/graph/cypher/getGraphOutwardL3.cyp'
        });