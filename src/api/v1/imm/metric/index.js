import app from '../../../../app';

import {fetchOne, convertToPreProcess, errorOnEmptyResult} from 'koa-neo4j/postprocess';
import {logValues} from 'koa-neo4j/debug';

/* *******************
****      GET     ****
**********************/
//Get all metrics along with their id and name
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/metric',
    cypherQueryFile: './src/api/v1/imm/metric/cypher/getMetric.cyp'
});

//Get a metric that matches the id passed in the request
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/metric/:id',
    cypherQueryFile: './src/api/v1/imm/metric/cypher/getMetricById.cyp'
});

//Return all metrics matching on the name
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/metric/name/:metricName',
    cypherQueryFile: './src/api/v1/imm/metric/cypher/getMetricByName.cyp'
});

/* *******************
****      POST    ****
**********************/
app.defineAPI({
    method: 'POST',
    route: '/api/v1/imm/metric',
    cypherQueryFile: './src/api/v1/imm/metric/cypher/createMetric.cyp'
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
