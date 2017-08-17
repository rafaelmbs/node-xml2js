var api = require('../src/config/api');
var xml2js = require('xml2js');
var parser = new xml2js.Parser();

weatherController = function() {
    
    get = function(req, res) {

        var request = require('request');
  
        var url = api.api_url;

        request({url:url}, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                parser.parseString(body, function (err, result) {
                    res.json(result);
                });                
            }
        })
    };

    return {
        get: get
    };
};

module.exports = weatherController();
