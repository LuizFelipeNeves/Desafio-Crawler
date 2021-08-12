const cheerio = require('cheerio')

const newToken = token => {
	replacements = {
		a: '\x7a',
		b: '\x79',
		c: '\x78',
		d: '\x77',
		e: '\x76',
		f: '\x75',
		g: '\x74',
		h: '\x73',
		i: '\x72',
		j: '\x71',
		k: '\x70',
		l: '\x6f',
		m: '\x6e',
		n: '\x6d',
		o: '\x6c',
		p: '\x6b',
		q: '\x6a',
		r: '\x69',
		s: '\x68',
		t: '\x67',
		u: '\x66',
		v: '\x65',
		w: '\x64',
		x: '\x63',
		y: '\x62',
		z: '\x61',
		'0': '\x39',
		'1': '\x38',
		'2': '\x37',
		'3': '\x36',
		'4': '\x35',
		'5': '\x34',
		'6': '\x33',
		'7': '\x32',
		'8': '\x31',
		'9': '\x30',
	}
	for (var e = token.split(''), t = 0; t < e.length; t++)
		e[t] = replacements.hasOwnProperty(e[t]) ? replacements[e[t]] : e[t]
	return e.join('')
}

const getResult = html => {
	const $ = cheerio.load(html)
	return $('#answer').text()
}

const getToken = html => {
	const $ = cheerio.load(html)
	const temptoken = $('input[name=token]').attr('value')
	return newToken(temptoken)
}

module.exports = { getResult, getToken }
