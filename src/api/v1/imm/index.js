import app from '../../../app';

import {fetchOne, convertToPreProcess, errorOnEmptyResult} from 'koa-neo4j/postprocess';
import {logValues} from 'koa-neo4j/debug';


/* *******************
****      GET     ****
**********************/

//Get all nodes along with their id and name
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm',
    cypherQueryFile: './src/api/v1/imm/getNode.cyp'
});

//Get a node that matches the id passed in the request
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/:id',
    cypherQueryFile: './src/api/v1/imm/getNodeById.cyp'
});

//Get a node that matches the name passed in the request
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/name/:nodeName',
    cypherQueryFile: './src/api/v1/imm/getNodeByName.cyp'
});

//Get all paths
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/path/',
    cypherQueryFile: './src/api/v1/imm/getPath.cyp'
});

