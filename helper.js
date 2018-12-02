const url = require('url');

exports.queryHandle = (req, res) => {
    let name = "Default response";
    const reqParams = url.parse(req.url, true)
    if(reqParams.query.name){
        name = reqParams.query.name;
    }

    const response = {
        message: `Response ${name}`
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response))
};

exports.invalidUrl = (req, res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Invalid Request');
}