import app from '../../../../app';

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
        route: '/api/v1/imm/metric',
        cypherQueryFile: './src/api/v1/imm/metric/cypher/createMetric.cyp',
        check: function (params) {
            // Always passes
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
    
        //Read (get) a metric from the database matching the id parameter which the request has passed
        app.defineAPI({
            method: 'GET',
            route: '/api/v1/imm/metric/:id',
            cypherQueryFile: './src/api/v1/imm/metric/cypher/readMetric.cyp'
        });
    
    //Get all metrics along with their id and name
    app.defineAPI({
        method: 'GET',
        route: '/api/v1/imm/metric',
        cypherQueryFile: './src/api/v1/imm/metric/cypher/getMetric.cyp'
    });
    

    //Return all properties of a metric matching on the name
    app.defineAPI({
        method: 'GET',
        route: '/api/v1/imm/metric/name/:metricName',
        cypherQueryFile: './src/api/v1/imm/metric/cypher/getMetricByName.cyp'
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
        route: '/api/v1/imm/metric/:id',
        cypherQueryFile: './src/api/v1/imm/metric/cypher/updateMetric.cyp'
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
        route: '/api/v1/imm/metric/:id',
        cypherQueryFile: './src/api/v1/imm/metric/cypher/deleteMetric.cyp'
    });
    

/* ********************
****      OTHER    ****
***********************/
app.router.get('/api/v1/imm/metric/nocypher', (ctx, next) => {
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