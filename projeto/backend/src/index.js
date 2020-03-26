const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);




/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma informação do back-end
 */

/**
  * Tipos de parametros
  * 
  * Query Params: Parametros nomeados na rota após "?" (Filtros, paginação)
  * Route Params: Parametros utilizados para identificar recursos
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  * 
  * SQL: Mysql, Sqlite, PostgreeSQL, Oracle
  * NoSQL: MongoDB, CouchDB,etc
  */
 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*')where()npm imsta
  */





