// GET: Buscar ou listar uma informação
// POST: Criar alguma informação
// PUT: Atualizar uma informação já existente
// DELETE: Deletar uma informação já existente

// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identifacar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, Filtro, ordenação ...


import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);