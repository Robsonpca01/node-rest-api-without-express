const http = require('http');
const url = require('url');

module.exports = http.createServer((requisition, response) => {
    const helper = require('./helper');
    const resquisitionUrl = url.parse(requisition.url, true)
    if( resquisitionUrl.pathname == '/test-get' && requisition.method == 'GET'){
        helper.abc(requisition, response);
    }
    else{
        helper.invalidUrl(requisition, response)
    }
})