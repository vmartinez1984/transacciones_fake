const afips = [
  "20240300570825|X100612022-10-0514:36:432704209000520002|1|24FC6DBD",
  "20240300570825|T505012023-02-1610:58:292023500500020012|1|89F20AB3",
  "20240300570825|X100612022-10-0514:36:432704209000520002|1|24FC6DBD",
  "20240300570825|T505012023-02-1610:58:292023500500020012|1|89F20AB3",
  "",
  "",
  "",
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getAfip() {
  const index = getRandomInt(0, 6);

  return afips[index];
}

module.exports = { getAfip };
