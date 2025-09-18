const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv").config();
//const url = "mongodb://root:123456@localhost:27017/"; // Cambia esto si usas Mongo Atlas
const url = process.env.url;
const client = new MongoClient(url, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
});

async function obtenerTodosAsync(numero) {
  await client.connect();
  const db = client.db("Utilidades");
  const collection = db.collection("transacciones");
  let lista;
  if (numero != -1) 
    lista = await collection.find({}).limit(numero).toArray();
  else 
    lista = await collection.find({}).toArray();

  return lista;
}

module.exports = { obtenerTodosAsync };
