const express = require ('express')
const {KmMilha, PesMetros, CmPolegada} = require('./node_modules/pack-atividades-vitor/func')

const KmMilha = require ('pack-atividades-vitor')
const PesMetros = require ('pack-atividades-vitor')
const CmPolegada = require ('pack-atividades-vitor')


const server = express ()
const PORT = 8000

server.listen(PORT, () => {
    console.log(`Servidor aberto na porta: ${PORT}`)
})