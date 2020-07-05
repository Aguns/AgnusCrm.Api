import {  Application,Context } from "../deps.ts";

import { 
    get_all_users,
    get_user,
    create_user,
    delete_user
} from '../controllers/admin/userController.ts'

const addRoutes = async (routes:Application) =>{
    routes
        .get('/users', get_all_users)
        .get('/users/:id',get_user)
        .post('/users',create_user)
        .delete('/users/:id',delete_user)
}
export { addRoutes }