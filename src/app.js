/* ******************************************************************************************************
Author:         MOS
Date:           20170221: 
Description:    This is the main application.
Credits:        https://github.com/assister-ai/koa-neo4j-starter-kit
****************************************************************************************************** */

//MOS:20170221: Import the noa-neo4j library
import KoaNeo4jApp from 'koa-neo4j';

//MOS:20170221: Import the neo4j and authentication settings from settings.js
import {neo4j, authentication, cors} from './settings';

//MOS:20170221: Create a new instance of the KoaNeo4jApp
const app = new KoaNeo4jApp({
    neo4j: neo4j,
    authentication: authentication,
    cors: cors
});

//MOS:20170221: Export as the default app
export default app;
