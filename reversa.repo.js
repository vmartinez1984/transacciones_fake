const lista = [
    "20240300570825|94950017|8001002|T50058|2023-11-22|14:39:14|1|DE0REV|40000|FE185B21|DE0|PDEB2ce5835b-e7f6-464c-a2b4-931433cc82a7",
    "20240300570825|94950017|8001002|T50058|2023-11-22|15:24:01|2|DE0REV|50000|B8CA6E45|DE0|PDEB486736d7-c959-453f-b353-5718c3b7c599",
    "","","",""
]

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getReversa() {
  const index = getRandomInt(0, 5);

  return lista[index];
}

module.exports = { getReversa };