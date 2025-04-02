const http = require('http')
const url = require('url')
const PORT = 8000
const { soma, subtracao, multiplicacao, divisao } = require('./teste')

const server = http.createServer((req, res) => {
    const urlCapturada = url.parse(req.url, true)
    const { query, pathname } = urlCapturada

    let resultado;

    if (pathname == '/soma') {
        resultado = soma(Number(query.a), Number(query.b))
    } else if (pathname == '/subtracao') {
        resultado = subtracao(Number(query.a), Number(query.b))
    } else if (pathname == '/multiplicacao') {
        resultado = multiplicacao(Number(query.a), Number(query.b))
    } else if (pathname  == '/divisao') {
        resultado = divisao(Number(query.a), Number(query.b))
    }

    if (resultado !== undefined) {
        res.end(`O valor final é ${resultado}`)
    } else {
        res.statusCode = 404
        res.end('Caminho não encontrado!')
    }
})

server.listen(PORT, () => {
    console.log(`Servidor aberto na porta: ${PORT}`)
})