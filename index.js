const express = require("express");
const app = express();
const port = 3000;
const medioPago = require("./instrumentosDePago");
const afipRepo = require("./afipRepo");
const transaccionRepo = require("./transacciones.repo");
const reversaRepo = require("./reversa.repo");

app.get("/", (req, res) => {
  let idDto = {
    message: "hello world",
  };
  res.status(200).json(idDto);
});

app.get("/api/transactions", async (req, res) => {
  console.log(req.query);
  let numero = 50;
  if (req.query.numero != undefined) numero = parseInt(req.query.numero);
  let transactions = [];
  let lista = await transaccionRepo.obtenerTodosAsync(numero);
  lista.forEach((item) => {
    transactions.push({
      transacciones: item.transacciones,
      medioPago: medioPago.getIntrumento(),
      afip: afipRepo.getAfip(),
      reversa: reversaRepo.getReversa(),
      snowflake: "WU_ID;123;5826000;33350017",
    });
  });
  res.setHeader("total", transactions.length.toString());
  res.status(200).json(transactions);
});

app.listen(port, function () {
  console.log("http://localhost:" + port);
});
