/* ******************************************************************************************************
Author:         MOS
Date:           20170221
Description:    This file will be used to store all settings related to the appplication.
Credits:        https://github.com/assister-ai/koa-neo4j-starter-kit
****************************************************************************************************** */

export const neo4j = {
    boltUrl: 'bolt://hobby-ogncmdhmoeaggbkeohdjlbol.dbs.graphenedb.com:24786',
    user: 'n4nite',
    password: 'b.ivdJD8qTih0x.WqNmVjUTY9zKgXq9'
};

export const authentication = {
    userCypherQueryFile: './src/admin/user/user.cyp',
    rolesCypherQueryFile: './src/admin/user/roles.cyp',
    route: '/auth',
    secret: 'oRuEV[A563~*AhA'
};

// https://github.com/koajs/cors/tree/v2.x
export const cors = {
    credentials: true
};

export const ports = {
    app: parseInt(process.env.PORT)
};

// configs for development mode
if (process.env.DEV) {
    neo4j.boltUrl = 'bolt://hobby-ogncmdhmoeaggbkeohdjlbol.dbs.graphenedb.com:24786';
    neo4j.user = 'n4nite';
    neo4j.password = 'b.ivdJD8qTih0x.WqNmVjUTY9zKgXq9';
}
