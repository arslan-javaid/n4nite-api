//********************************************************************************************************
//** 
//** Author:        MOS
//** Date:          21/02/2017 
//** Description:   This is the server.
//** Credits:        https://github.com/assister-ai/koa-neo4j-starter-kit
//** 
//********************************************************************************************************

import app from './app';
import {ports} from './settings';

// import your logic files/modules below to be included in the bundle

/* **************************************************************
****                                                         ****
***                  Import Routing Directories               ***
****                                                         ****
****************************************************************/

    /* ***********************************
    ***          Business Nodes        ***
    **************************************/
        import './v1/imm/metric';
        import './v1/imm/calculation';
        import './v1/imm/businessObject';
        import './v1/imm/term';
        import './v1/imm/dataAttribute';
        import './v1/imm/calculation';


    /* ***********************************
    ***              Generic           ***
    **************************************/
        import './v1/imm';
        import './v1/imm/graph';
        import './v1/imm/edge';
        import './v1/imm/node';

    /* ***********************************
    ***             Test/WIP           ***
    **************************************/
        import './samples/noncypher';
        import './samples/article';


const appListening = new Promise(resolve => app.listen(ports.app, resolve))
    .then(() => console.log(`App listening on port ${ports.app}.`))
    .then(() => app);

export {appListening};