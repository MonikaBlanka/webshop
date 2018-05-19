let http = require('http'),
    https = require('https'),
    fs = require('fs'),
    qs = require('querystring'),
    path = require('path'),
    mime = require('mime'),
    url = require('url');

let folder = path.resolve(__dirname, '../ssl');

if(!fs.existsSync(folder)) folder = '';

module.exports = !folder ? http.createServer(handler) : https.createServer({  key: fs.readFileSync(folder + '/privkey.pem', 'utf8'),  cert: fs.readFileSync(folder + '/cert.pem', 'utf8'), ca: [fs.readFileSync(folder + '/chain.pem', 'utf8')]}, handler);

if(folder) http.createServer(redirect).listen(80);

function handler(req, res) {

  let file = url.parse(`../client${ req.url }`).pathname;

  fs.readFile(path.resolve(__dirname, file), function cb(err, body) {

    if(err) {

      if(file.indexOf('.html') > -1) return cb(null, `<div data-message="No file ${ file.replace('"', '\\"') }" data-load="config.error"></div>`);

      return fs.readFile(file = path.resolve(__dirname, '../client/index.html'), cb);
    }

    res.writeHead(200, { 'Content-Type': mime.getType(file) });

    res.end(body);

  });

}

function redirect(req, res) {

    res.writeHead(302, { 'Location': `https://${ req.hostname }${ req.url }` });

    res.end();

}