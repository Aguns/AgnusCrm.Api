import { Context, v4 } from "../../deps.ts";
import { Entity } from "../../models/base/entityModel.ts";
import { entities } from "../../repository/base/entityRepository.ts"


export const get_all_entities = (ctx: Context) => {
  return ctx.json(entities, 200);
};

export const get_entity = (ctx: Context) => {
  const { id } = ctx.params;
  const entity = entities.find((b: Entity) => b.id === id);
  if (entity) {
    return ctx.json(entity, 200);
  }
  return ctx.string("no entity with that id", 404);
};

export const create_entity = async (ctx: Context) => {
  const {
    name,
    desc,
    Contact,
    author,
    createdAt,
    avatar,
    status,
    email,
    other,
    createdby,
  } = await ctx.body();

  // validate data & types of data
  const id = v4.generate();
  const entity = {
    id,
    name,
    desc,
    Contact,
    author,
    createdAt,
    avatar,
    status,
    email,
    other,
    createdby,
  };
  entities.push(entity);

  return ctx.json(entity, 201);
};

export const delete_entity = (ctx: Context) => {
  const { id } = ctx.params;
  const entity = entities.find((b: Entity) => b.id === id);

  if (entity) {
    return ctx.json(entity, 200);
  }
  return ctx.string("no entity with that id", 404);
};
