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
        import './api/v1/imm/metric';
        import './api/v1/imm/calculation';
        import './api/v1/imm/businessObject';
        import './api/v1/imm/term';
        import './api/v1/imm/dataAttribute';
        import './api/v1/imm/calculation';


    /* ***********************************
    ***              Generic           ***
    **************************************/
        import './api/v1/imm/graph';
        import './api/v1/imm/edge';
        import './api/v1/imm/node';

    /* ***********************************
    ***             Test/WIP           ***
    **************************************/
        import './samples/noncypher';
        import './samples/article';

const appListening = new Promise(resolve => app.listen(ports.app, resolve))
    .then(() => console.log(`App listening on port ${ports.app}.`))
    .then(() => app);

export {appListening};