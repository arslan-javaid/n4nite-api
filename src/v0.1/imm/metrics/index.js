import app from '../../../app';

import {fetchOne, convertToPreProcess, errorOnEmptyResult} from 'koa-neo4j/postprocess';
import {logValues} from 'koa-neo4j/debug';

/* **************************************************************
****                                                         ****
***                        GET (Read)                         ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***             Get Metrics        ***
    **************************************/
    
        //Returns all metrics from the database.
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/metrics',
            cypherQueryFile: './src/v0.1/imm/metrics/cypher/readMetrics.cyp'
        });
        
        //Return a metric from the database if a metric matches the id passed by the user.
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/metrics/:id',
            cypherQueryFile: './src/v0.1/imm/metrics/cypher/readMetricsById.cyp'
        });
        
        // Returns all metrics from the database that match the search criteria.
        // Note that for now search criteria is limited to "Starts With" for the name field
        // Format is "/search?name=""
        app.defineAPI({
            method: 'GET',
            route: '/v0.1/imm/metrics/search',
            cypherQueryFile: './src/v0.1/imm/metrics/cypher/readMetricsSearch.cyp'
        });
        
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
        route: '/v0.1/imm/metrics',
        cypherQueryFile: './src/v0.1/imm/metrics/cypher/createMetrics.cyp'
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
        route: '/v0.1/imm/metrics/:id',
        cypherQueryFile: './src/v0.1/imm/metrics/cypher/updateMetrics.cyp'
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
        route: '/v0.1/imm/metrics/:id',
        cypherQueryFile: './src/v0.1/imm/metrics/cypher/deleteMetrics.cyp'
    });
    