import express from "express";
import cors from 'cors';
import pg from 'pg'
import { FormataEscolas } from "./utils/formatadores/FormataEscola.js";
import { FormataAbastAgua } from "./utils/formatadores/FormataAbastAgua.js";
import { FormataAbastEnergia } from "./utils/formatadores/FormataAbastEnergia.js";
const { Client } = pg;

const app = express();

app.use(cors({
  origin: '*'
}));
app.get(('/tipo-escola'), async (req, res) => {
  const client = new Client({
    user: 'wasmytgc',
    host: 'tuffi.db.elephantsql.com',
    database: 'wasmytgc',
    password: 'zx9gZEyN58xRy_882figQMMp2zLYeTxY',
    port: '5432'
  })

  console.log("Conectando com o db...")
  await client.connect()

  console.log("Fazendo query agora.")
  const dataRes = await client.query('select * from escolas;');
  await client.end()
  res.json(FormataEscolas(dataRes.rows))
});



app.get(('/abastecimento-agua'), async (req, res) => {
  const client = new Client({
    user: 'wasmytgc',
    host: 'tuffi.db.elephantsql.com',
    database: 'wasmytgc',
    password: 'zx9gZEyN58xRy_882figQMMp2zLYeTxY',
    port: '5432'
  })

  console.log("Conectando com o db...")
  await client.connect()

  console.log("Fazendo query agora.")
  const dataRes = await client.query('select * from escola_tipo_abastecimento_agua;');
  await client.end()
  res.json(FormataAbastAgua(dataRes.rows))
});



app.get(('/abastecimento-energia'), async (req, res) => {
  const client = new Client({
    user: 'wasmytgc',
    host: 'tuffi.db.elephantsql.com',
    database: 'wasmytgc',
    password: 'zx9gZEyN58xRy_882figQMMp2zLYeTxY',
    port: '5432'
  })

  console.log("Conectando com o db...")
  await client.connect()

  console.log("Fazendo query agora.")
  const dataRes = await client.query('select * from escola_tipo_abastecimento_energia;');
  await client.end()
  res.json(FormataAbastEnergia(dataRes.rows))
});

app.listen(3333, () => {
  console.log("Hello, World! Server listening at port 3333")
});