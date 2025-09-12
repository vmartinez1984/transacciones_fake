const express = require('express')
const app = express()
const port = 3000

//inicio conexion mongo
const MongoClient = require('mongodb').MongoClient
const dotenv = require('dotenv').config()
//const url = "mongodb://root:123456@localhost:27017/"; // Cambia esto si usas Mongo Atlas
const url = process.env.url
const client = new MongoClient(url, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
});

async function obtenerTodosAsync() {
    await client.connect();
    const db = client.db("Utilidades");
    const collection = db.collection("transacciones");
    let lista = await collection.find({}).toArray()

    return lista
}
//fin conexion mongo

app.get("/api/transactions", async (req, res) => {
    let transactions = []
    let lista = await obtenerTodosAsync()
    lista.forEach(item => {
        transactions.push({
            transacciones: item.transacciones,
            medioPago: "20240300570905|9636998|1|1|ARS|E|1843.99||1843.99|1.000000|100|N|2022-01-14|F|Y",
            afip: "",
            reversa: "",
            snowflake: "WU_ID;123;5826000;33350017"
        })
    })

    res.status(200).json(transactions)
})

app.listen(port, function () {
    console.log("http://localhost:" + port)
})