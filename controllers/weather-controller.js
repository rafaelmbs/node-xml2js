const api = require('../src/config/api')
const xml2js = require('xml2js')
const parser = new xml2js.Parser()
// Movido para fora para não causar block do EventLoop no primeiro require
const request = require('request')

// Função de middleware simples... não precisa de escopo isolado
const getController = (req, res) => {    

    const url = api.api_url;

    request({url:url}, function (error, response, body) {
        if (error) return sendError(res)        
        
        parser.parseString(body, function (err, result) {
            if (err) return sendError(res)
            return res.json(result)
        })
    })
};

// Metodo Privado genérico para tratar erro 
const sendError = (res) => {
    return res.status(500).end()
}

module.exports = {
    get: getController
}
