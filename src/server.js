/* ******************************************************************************************************
Author:         MOS
Date:           20170221: 
Description:    This is the server.
Credits:        https://github.com/assister-ai/koa-neo4j-starter-kit
****************************************************************************************************** */

import app from './app';
import {ports} from './settings';


// import your logic files/modules below to be included in the bundle

//IMM
import './api/v1/imm';

//Metrics
import './api/v1/imm/metric';

//Samples
import './samples/noncypher';
import './samples/article';

const appListening = new Promise(resolve => app.listen(ports.app, resolve))
    .then(() => console.log(`App listening on port ${ports.app}.`))
    .then(() => app);

export {appListening};