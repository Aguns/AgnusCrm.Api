import { Context, v4 } from "../../deps.ts";
import { User } from "../../models/admin/userModel.ts";
import { search,insert,update,remove } from "../../repository/admin/userRepository.ts"


export const  get_all_users = async (ctx: Context) => {
  const users = await search();
  return ctx.json(users, 200);
};

export  const get_user = async (ctx: Context) => {
  const { id } = ctx.params;
  const user = await search({id:id});

  if (user) {
    return ctx.json(user, 200);
  }
  return ctx.string("no user with that id", 404);
};

export const create_user = async (ctx: Context) => {
  const {
    username,
    name,
    firstName,
    lastName,
    email,
    phoneNumber,
    password ,
    confirmPassword,
    inactive,
    country,
  } = await ctx.body();

  // validate data & types of data
  const id = v4.generate();
  const user = {
    id,
    username,
    name,
    firstName,
    lastName,
    email,
    phoneNumber,
    password ,
    confirmPassword,
    inactive,
    country
  };

  

  try{
    await insert(user);
    return ctx.json(id, 200);
  }catch(e){
    return ctx.string("error to create a user with that id", 404);
  }
};

export const delete_user = async (ctx: Context) => {
  const { id } = ctx.params;
  try{
    await remove(id);
    return ctx.json(id, 200);
  }catch(e){
    return ctx.string("no user with that id", 404);
  }
};
