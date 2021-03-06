import app from '../../../app';

import {fetchOne, convertToPreProcess, errorOnEmptyResult} from 'koa-neo4j/postprocess';
import {logValues} from 'koa-neo4j/debug';

/* **************************************************************
****                                                         ****
***                         POST (Create)                     ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***       Create New Calculation   ***
    **************************************/
    app.defineAPI({
        method: 'POST',
        route: '/v1/imm/calculation',
        cypherQueryFile: './src/v1/imm/calculation/cypher/createCalculation.cyp'
    });
    
    
/* **************************************************************
****                                                         ****
***                        GET (Read)                         ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***          Read Calculation      ***
    **************************************/


/* **************************************************************
****                                                         ****
***                      PUT (Update )                        ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***   Update Existing Calculation  ***
    **************************************/


/* **************************************************************
****                                                         ****
***                    DELETE (Archive)                       ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***       Archive   Calculation    ***
    **************************************/