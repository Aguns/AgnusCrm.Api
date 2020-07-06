import { Application, Context } from "../deps.ts";
import authMiddleware  from "../utils/middleware.ts";

import {
  get_all_books,
  get_book,
  create_book,
  delete_book,
} from "../controllers/bookController.ts";

import {
  get_all_contacts,
  get_contact,
  create_contact,
  delete_contact,
} from "../controllers/crm/contactController.ts";

import {
  get_all_entities,
  get_entity,
  create_entity,
  delete_entity,
} from "../controllers/base/entityController.ts";

const addRoutes = async (routes: Application) => {
  routes
    .get("/api/books", get_all_books)
    .get("/api/books/:id", get_book)
    .post("/api/books", create_book)
    .delete("/api/books/:id", delete_book);

  routes
    .get("/api/contacts", get_all_contacts,authMiddleware)
    .get("/api/contacts/:id", get_contact,authMiddleware)
    .post("/api/contacts", create_contact,authMiddleware)
    .delete("/api/contacts/:id", delete_contact,authMiddleware);

  routes
    .get("/api/entities", get_all_entities,authMiddleware)
    .get("/api/entities/:id", get_entity,authMiddleware)
    .post("/api/entities", create_entity,authMiddleware)
    .delete("/api/entities/:id", delete_entity,authMiddleware);
};
export { addRoutes };
