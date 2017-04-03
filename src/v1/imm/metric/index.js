import app from '../../../app';

import {fetchOne, convertToPreProcess, errorOnEmptyResult} from 'koa-neo4j/postprocess';
import {logValues} from 'koa-neo4j/debug';

/* **************************************************************
****                                                         ****
***                         POST (Create)                     ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***        Create New Metric       ***
    **************************************/
    app.defineAPI({
        method: 'POST',
        route: '/v1/imm/metric',
        cypherQueryFile: './src/v1/imm/metric/cypher/createMetric.cyp',
        check: function (params, ctx) {
            // Always passes
            params.username = ctx.username;
            return true;
        },
        preProcess: function (params) {
            // Returns `params` unchanged
            return params;
        }
    });
    
/* **************************************************************
****                                                         ****
***                        GET (Read)                         ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***            Read Metric         ***
    **************************************/
    
        //Returns all metrics from the database with their full details.
        app.defineAPI({
            method: 'GET',
            route: '/v1/imm/metrics',
            cypherQueryFile: './src/v1/imm/metric/cypher/readMetric.cyp'
        });
        
        //Returns all metrics from the database with their summary details.
        app.defineAPI({
            method: 'GET',
            route: '/v1/imm/metrics/summary',
            cypherQueryFile: './src/v1/imm/metric/cypher/readMetricSummary.cyp'
        });
        
        //Finds a metric using the id passed in by the user.
        app.defineAPI({
            method: 'GET',
            route: '/v1/imm/metrics/:id',
            cypherQueryFile: './src/v1/imm/metric/cypher/readMetricById.cyp'
        });
    

/* **************************************************************
****                                                         ****
***                      PUT (Update )                        ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***     Update Existing Metric     ***
    **************************************/
    app.defineAPI({
        method: 'PUT',
        route: '/v1/imm/metrics/:id',
        cypherQueryFile: './src/v1/imm/metric/cypher/updateMetric.cyp'
    });


/* **************************************************************
****                                                         ****
***                    DELETE (Archive)                       ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***         Archive   Metric       ***
    **************************************/
    app.defineAPI({
        method: 'DEL',
        route: '/v1/imm/metrics/:id',
        cypherQueryFile: './src/v1/imm/metric/cypher/deleteMetric.cyp'
    });
    

/* ********************
****      OTHER    ****
***********************/
app.router.get('/v1/imm/metrics/nocypher', (ctx, next) => {
    ctx.body = "Using router you can do other things that don't need Cypher!";
    console.log(ctx.params);
    console.log(ctx.request);
    console.log(ctx.requestContext);
    return next();
});

app.router.post('/noncypher', (ctx, next) => {
    ctx.body = "Using router you can do other things that don't need Cypher!";
    return next();
});