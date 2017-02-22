import app from '../../app';

import {fetchOne, convertToPreProcess, errorOnEmptyResult} from 'koa-neo4j/postprocess';
import {logValues} from 'koa-neo4j/debug';

app.defineAPI({
    method: 'GET',
    route: '/article',
    cypherQueryFile: './src/samples/article/article.cyp'
});

app.defineAPI({
    // guard routes with `allowedRoles`
    allowedRoles: ['admin'],
    method: 'GET',
    route: '/article/restricted/:metricName',
    cypherQueryFile: './src/samples/article/article.cyp'
});


// create reusable blocks of backend code with procedures
const coolProcedure = app.createProcedure({
    preProcess: params => {
        params.result = params.coolInputParam | 'cool';
        return params;
    },
    postProcess: convertToPreProcess('coolParam')
});