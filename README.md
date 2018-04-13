### run mongod daemon process
mongod

### run project
npm i

node index.js

### with the MongoDB database books are:
/api/books

### with the MongoDB database genres are:
/api/genres

### RESTeasy
I use RESTeasy Chrome Ext for CRUD, you can also use Postman.

### MongoDB
Access MongoDB shell with 'mongo' command on mac (you need to have it installed)

A shell promt starts

You can type there 'show dbs' to see all your databases

My database for this proj is 'bookstore'

You can use an existing db with the command 'use + dbname'

You can see collections with 'show collections'

You can create collections with 'db.createCollection("books")'

You can insert items in collection with 'db.books.insert({title: "My Awesome Books Title"})'

You can query the database with 'db.books.find()', this will find all your books in db ...
You can also search by attribute, for example by ID 'db.books.find("5aae2712def6a9da82df0181")'
