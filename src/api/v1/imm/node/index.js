import app from '../../../../app';

import {fetchOne, convertToPreProcess, errorOnEmptyResult} from 'koa-neo4j/postprocess';
import {logValues} from 'koa-neo4j/debug';

/* **************************************************************
***                                                          ****
***                          GET                             ****
***                                                          ****
****************************************************************/

//Get all nodes thare are 1 outward hop from the requested node - default when no hop count provided
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/node/:id/connect',
    cypherQueryFile: './src/api/v1/imm/node/cypher/getConnectedInwardNodes.cyp'
});


/* ***********************************
***          Connected Nodes      ****
**************************************/

//Get all nodes thare are 1 outward hop from the requested node - default when no hop count provided
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/node/:id/connected',
    cypherQueryFile: './src/api/v1/imm/node/cypher/getConnectedNodesL1.cyp'
});

app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/node/:id/connected/1',
    cypherQueryFile: './src/api/v1/imm/node/cypher/getConnectedNodesL1.cyp'
});

//Get all nodes thare are 1 or 2 outward hops from the requested node
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/node/:id/connected/2',
    cypherQueryFile: './src/api/v1/imm/node/cypher/getConnectedNodesL2.cyp'
});

//Get all nodes thare are 1, 2, or 3 outward hop from the requested node
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/node/:id/connected/3',
    cypherQueryFile: './src/api/v1/imm/node/cypher/getConnectedNodesL3.cyp'
});

/* ***********************************
*** Connected Nodes: Outward Hops  ****
**************************************/

//Get all nodes thare are 1 outward hop from the requested node - default when no hop count provided
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/node/:id/connected/outward',
    cypherQueryFile: './src/api/v1/imm/node/cypher/getConnectedOutwardNodesL1.cyp'
});

//Get all nodes thare are 1 outward hop from the requested node
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/node/:id/connected/1/outward',
    cypherQueryFile: './src/api/v1/imm/node/cypher/getConnectedOutwardNodesL1.cyp'
});

//Get all nodes thare are 1 or 2 outward hops from the requested node
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/node/:id/connected/2/outward',
    cypherQueryFile: './src/api/v1/imm/node/cypher/getConnectedOutwardNodesL2.cyp'
});

//Get all nodes thare are 1, 2, or 3 outward hop from the requested node
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/node/:id/connected/3/outward',
    cypherQueryFile: './src/api/v1/imm/node/cypher/getConnectedOutwardNodesL3.cyp'
});

/* ***********************************
*** Connected Nodes: Inward Hops  ****
**************************************/

//Get all nodes thare are 1 outward hop from the requested node - default when no hop count provided
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/node/:id/connected/inward',
    cypherQueryFile: './src/api/v1/imm/node/cypher/getConnectedInwardNodesL1.cyp'
});

//Get all nodes thare are 1 outward hop from the requested node
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/node/:id/connected/1/inward',
    cypherQueryFile: './src/api/v1/imm/node/cypher/getConnectedInwardNodesL1.cyp'
});

//Get all nodes thare are 1 or 2 outward hops from the requested node
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/node/:id/connected/2/inward',
    cypherQueryFile: './src/api/v1/imm/node/cypher/getConnectedInwardNodesL2.cyp'
});

//Get all nodes thare are 1, 2, or 3 outward hop from the requested node
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/node/:id/connected/3/inward',
    cypherQueryFile: './src/api/v1/imm/node/cypher/getConnectedInwardNodesL3.cyp'
});




/* *******************
****      GET     ****
**********************/
//Get all metrics along with their id and name
app.defineAPI({
    method: 'GET',
    route: '/api/v1/imm/node/:id/outward_nodes_l2',
    cypherQueryFile: './src/api/v1/imm/node/cypher/getOutwardNodesL2.cyp'
});
