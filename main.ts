
import {  Application,Context } from "./deps.ts";
import "https://deno.land/x/dotenv/mod.ts";

import { 
    get_all_books,
    get_book,
    create_book,
    delete_book
} from './controllers/bookController.ts'

import { 
    get_all_contacts,
    get_contact,
    create_contact,
    delete_contact
} from './controllers/crm/contactController.ts'

import { 
    get_all_entities,
    get_entity,
    create_entity,
    delete_entity
} from './controllers/base/entityController.ts'

const app = new Application();

const env = Deno.env.toObject()
const PORT = Number(env.PORT || 5000)
const HOST = env.HOST || '127.0.0.1'



app.static('/','./public');

app.get('/',async(ctx:Context)=> {
    await ctx.file('./public/index.html')
})

app
    .get('/books', get_all_books)
    .get('/books/:id',get_book)
    .post('/books',create_book)
    .delete('/books/:id',delete_book)

app
    .get('/contacts', get_all_contacts)
    .get('/contacts/:id',get_contact)
    .post('/contacts',create_contact)
    .delete('/contacts/:id',delete_contact)

app
    .get('/entities', get_all_entities)
    .get('/entities/:id',get_entity)
    .post('/entities',create_entity)
    .delete('/entities/:id',delete_entity)


app.start({ hostname: HOST, port: PORT });

console.log(`Listem to ${HOST}:${PORT}`);
