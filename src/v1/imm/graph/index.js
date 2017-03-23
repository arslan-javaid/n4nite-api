import app from '../../../app';

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
            route: '/v1/imm/graph/:id',
            cypherQueryFile: './src/v1/imm/graph/cypher/getGraphOutwardL1.cyp',
            check: function(params, ctx) {
                
                if (!isNumeric(params.id)) {
                    ctx.status = 400;
                    //throw new Error('The parameter id must be numeric!');
                    //ctx.error = "{error: This is a test}";
                    //ctx.throw(400, "{error: This is a test}");
                    //ctx.throw(401, 'The parameter id must be numeric dummy!');
                    //ctx.body = "{error: This is a test}";
                    }
                else
                    return true;
            },
        });

    /* ***********************************
    ***             Outward L1         ***
    **************************************/
        app.defineAPI({
            method: 'GET',
            route: '/v1/imm/graph/:id/1',
            cypherQueryFile: './src/v1/imm/graph/cypher/getGraphOutwardL1.cyp'
        });

    /* ***********************************
    ***             Outward L2         ***
    **************************************/
        app.defineAPI({
            //npallowedRoles: ['admin'],
            method: 'GET',
            route: '/v1/imm/graph/:id/2',
            cypherQueryFile: './src/v1/imm/graph/cypher/getGraphOutwardL2.cyp'
        });

    /* ***********************************
    ***             Outward L3         ***
    **************************************/
        app.defineAPI({
            method: 'GET',
            route: '/v1/imm/graph/:id/3',
            cypherQueryFile: './src/v1/imm/graph/cypher/getGraphOutwardL3.cyp'
        });
        
    /* ***********************************
    ***    Full Graph - Testing Only   ***
    **************************************/
        app.defineAPI({
            method: 'GET',
            route: '/v1/imm/graph',
            cypherQueryFile: './src/v1/imm/graph/cypher/getGraphFull.cyp'
        });
        
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }