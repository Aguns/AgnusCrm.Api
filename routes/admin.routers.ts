import {  Application } from "../deps.ts";
import authMiddleware  from "../utils/middleware.ts";

import { 
    get_all_users,
    get_user,
    create_user,
    delete_user
} from '../controllers/admin/userController.ts'

import { 
    login,
    auth,
    guest
} from '../controllers/admin/authController.ts'

const addRoutes = async (routes:Application) =>{
    routes
        .get('/api/users', get_all_users, authMiddleware)
        .get('/api/users/:id',get_user, authMiddleware)
        .post('/api/users',create_user, authMiddleware)
        .delete('/api/users/:id',delete_user, authMiddleware)

        .post('/api/auth/login',login)
        .get('/api/auth/guest', guest)
        .get('/api/auth/auth', auth, authMiddleware) // Registering authMiddleware for /auth endpoint only
}
export { addRoutes }