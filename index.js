const { PrimReq, SecReq } = require('./request')
const { getToken, getResult } = require('./utils')

const getNumber = async () => {
	// request 1, get token
	const data = await PrimReq()
	const token = await getToken(data)
	console.log(token)

	// request 2, get
	const data2 = await SecReq(token)
	console.log(data2)

	// result final
	const resultado = await getResult(data2)
	console.log(resultado)
}

getNumber()
