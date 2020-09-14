import { User } from "../../models/admin/userModel.ts";
import client from '../../db/MySqlClient.ts';


// let users: User[] = [
//     {
//         id:"899d0e31-b71e-4d95-a8a0-6a8bceb314bd",
//         username:"gmahota",
//         name:"Guimaraes Mahota",
//         firstName:"",
//         lastName:"",
//         email:"guimaraesmahota@gmail.com",
//         phoneNumber:"",
//         password :"123456",
//         confirmPassword:false,
//         inactive:false,
//         country: ""
//     },
//     {
//         id:"6124d4e8-77ed-4b34-868d-d312bfab5de2",
//         username:"bmahota",
//         name:"",
//         firstName:"",
//         lastName:"",
//         email:"Belmiromahota@gmail.com",
//         phoneNumber:"",
//         password :"123456",
//         confirmPassword:false,
//         inactive:false,
//         country: ""
//     },
//     {
//         id:"eef93cb1-7766-4413-a5cf-ecbf71fa3674",
//         username:"cmahota",
//         name:"",
//         firstName:"",
//         lastName:"",
//         email:"cmiriam.jorge@gmail.com",
//         phoneNumber:"",
//         password :"",
//         confirmPassword:false,
//         inactive:false,
//         country: ""
//     },
//   ];

interface Key {
    id?: any
}

export async function search(params:Key = {}) { 
    
    const isSpecific = Object.keys(params).length !== 0;    
    console.log(isSpecific)

    if (isSpecific) {
        console.log();
        return await client.query(`SELECT * FROM user WHERE username = '${params.id}'`);
    } else {
        return await client.query(`SELECT * FROM user`);   
    }
}

export async function insert(user: User) {
    return await client.execute(`INSERT INTO user(name, country) values(?,?)`, [
        user.name, user.country
    ]);
}

export async function update(name: string, country: string, id: string) {
    return await client.execute(`UPDATE user SET name= ?, country= ? WHERE id = ?`, [
        name, country, id
    ]);
}

export async function remove(id: string) {
    return await client.execute(`DELETE FROM user WHERE id = ?`, [id]); 
}