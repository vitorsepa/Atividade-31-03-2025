const http = require('http')
const PORT = 8000
const {soma} = require('./teste')
const { url } = require('inspector')

const server = http.createServer((req, res) => {
    const urlCapturada = url.parse(req.url, true)
    const (query) = urlCapturada
    console.log(urlCapturada)
    console.log(urlCapturada)
    console.log(req.url
        .replace('/', '')
        .replace('?', '')
        .split('&'))

    
    let parametros = {}
    let valores = req.url
    for(item in valores){
        let chaveValor = valores[item].split('=')
        parametros[chaveValor[0]] = Number(chaveValor[1])
    }

    console.log(parametros)
    let resultado = soma(query.a , query.b)
    resultado = soma(parametros.a, parametros.b)
    res.end(`O valor final é ${resultado}`)
})

server.listen(PORT, () => {
    console.log(`ta rodando pai, na porta ${PORT}`)
})