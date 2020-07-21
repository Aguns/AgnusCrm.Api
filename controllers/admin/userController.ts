import { Context, v4 } from "../../deps.ts";
import { User } from "../../models/admin/userModel.ts";
import { users } from "../../repository/admin/userRepository.ts"


export const get_all_users = (ctx: Context) => {
  return ctx.json(users, 200);
};

export const get_user = (ctx: Context) => {
  const { id } = ctx.params;
  const user = users.find((b: User) => b.id === id);
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
  users.push(user);

  return ctx.json(user, 201);
};

export const delete_user = (ctx: Context) => {
  const { id } = ctx.params;
  const user = users.find((b: User) => b.id === id);

  if (user) {
    return ctx.json(user, 200);
  }
  return ctx.string("no user with that id", 404);
};
