import { Context, v4 } from "../../deps.ts";
import { User } from "../../models/admin/userModel.ts";
import { search  } from "../../repository/admin/userRepository.ts";
import {
  makeJwt,
  setExpiration,
  Jose,
  Payload,
} from "https://deno.land/x/djwt/create.ts";
import key from "../../key.ts";
import client from "../../db/MySqlClient.ts";

const header: Jose = {
  alg: "HS256",
  typ: "JWT",
};

export const login = async (ctx: Context) => {
  
  const {
    username,
    password 
  } = await ctx.body();

  const result = await search({id:username});
    
  if(result){
    const user = {
      username:username,
      password:password
    }
    
    var days = 1;
    if (username === user.username && password === user.password) {
      const payload: Payload = {
        iss: user.username,
        exp: setExpiration(new Date().getTime() + (days *24*60*60*1000)),
      };

      // Create JWT and send it to user
      const jwt = makeJwt({ key, header, payload });
      if (jwt) {
        return ctx.json({
          userName: user.username,
          token:jwt,
          expiresIn:new Date(new Date().getTime() + (days * 24*60*60*1000))
        }, 200);
        
      } else {
        return ctx.string("Internal server error", 500);
      }
      
    }
  }

  return ctx.string("Invalid username or password", 422);
};

export const guest = (ctx: Context) => {
  return ctx.json('Guest success', 200);
};

export const auth = (ctx: Context) => {
  return ctx.json('Auth success', 200);
}