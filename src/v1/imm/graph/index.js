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
            //allowedRoles: ['admin'],
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
            cypherQueryFile: './src/v1/imm/graph/cypher/getGraphFully.cyp'
        });
        
/* **************************************************************
****                                                         ****
***          Get Graph from Start Node for X Levels           ***
****                                                         ****
****************************************************************/
    
    /* ***********************************
    ***    Full Tree - Testing Only   ***
    **************************************/
        app.defineAPI({
            method: 'GET',
            route: '/v1/imm/tree',
            cypherQueryFile: './src/v1/imm/graph/cypher/getTree.cyp'
        });
    
    /* ***********************************
    ***         Tree L1      ***
    **************************************/
        app.defineAPI({
            method: 'GET',
            route: '/v1/imm/tree/:id/1',
            cypherQueryFile: './src/v1/imm/graph/cypher/getTreeL1.cyp'
        });
        
    /* ***********************************
    ***         Tree L2      ***
    **************************************/
        app.defineAPI({
            method: 'GET',
            route: '/v1/imm/tree/:id/2',
            cypherQueryFile: './src/v1/imm/graph/cypher/getTreeL2.cyp'
        });
        
    /* ***********************************
    ***         Tree L3      ***
    **************************************/
        app.defineAPI({
            method: 'GET',
            route: '/v1/imm/tree/:id/3',
            cypherQueryFile: './src/v1/imm/graph/cypher/getTreeL3.cyp'
        });
        
        
    /* ***********************************
    ***         Tree - Outward L1      ***
    **************************************/
        app.defineAPI({
            method: 'GET',
            route: '/v1/imm/tree/outward/:id/1',
            cypherQueryFile: './src/v1/imm/graph/cypher/getTreeOutwardL1.cyp'
        });
        
    /* ***********************************
    ***         Tree - Outward L2      ***
    **************************************/
        app.defineAPI({
            method: 'GET',
            route: '/v1/imm/tree/outward/:id/2',
            cypherQueryFile: './src/v1/imm/graph/cypher/getTreeOutwardL2.cyp'
        });
        
    /* ***********************************
    ***         Tree - Outward L3      ***
    **************************************/
        app.defineAPI({
            method: 'GET',
            route: '/v1/imm/tree/outward/:id/3',
            cypherQueryFile: './src/v1/imm/graph/cypher/getTreeOutwardL3.cyp'
        });
        
    /* ***********************************
    ***         Tree - Inward L1      ***
    **************************************/
        app.defineAPI({
            method: 'GET',
            route: '/v1/imm/tree/inward/:id/1',
            cypherQueryFile: './src/v1/imm/graph/cypher/getTreeInwardL1.cyp'
        });
        
    /* ***********************************
    ***         Tree - Inward L2      ***
    **************************************/
        app.defineAPI({
            method: 'GET',
            route: '/v1/imm/tree/inward/:id/2',
            cypherQueryFile: './src/v1/imm/graph/cypher/getTreeInwardL2.cyp'
        });
        
    /* ***********************************
    ***         Tree - Inward L3      ***
    **************************************/
        app.defineAPI({
            method: 'GET',
            route: '/v1/imm/tree/inward/:id/3',
            cypherQueryFile: './src/v1/imm/graph/cypher/getTreeInwardL3.cyp'
        });

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);ph
    }