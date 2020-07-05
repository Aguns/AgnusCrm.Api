import {  Application,Context } from "../deps.ts";
import * as adminRoutes from "./admin.routers.ts"
import * as crmRoutes from "./crm.routes.ts"

const routes = new Application();

adminRoutes.addRoutes(routes);
crmRoutes.addRoutes(routes);

routes.static('/','./public');

routes.get('/',async(ctx:Context)=> {
    await ctx.file('./public/index.html')
})

export default routes;