const { PrimReq, SecReq } = require('./request');
const { getToken, getResult } = require('./utils');

const getNumber = async () => {
  // request 1, get token
  const data = await PrimReq();
  const token = await getToken(data);

  // request 2, get
  const data2 = await SecReq(token);

  // result final
  const resultado = await getResult(data2);
  await console.log(resultado)
};

getNumber();