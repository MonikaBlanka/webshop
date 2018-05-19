require('fs').readdir(__dirname, init);

function init(err, files) {

  let server = files.reduce(reducer, {}); // require all files in index.js folder

  server.plugin.http.listen(443); // File server

  server.plugin.websocket.listen(server); // Websocket API

  console.log(new Date().toJSON().slice(11, 19), '-', '\x1b[32minfo\x1b[0m:', 'Hosting server at localhost');

  
}

function reducer(server, file) {

  let parts = file.split('.');

  if(parts.length < 3) return server;

  server[parts[0]] = server[parts[0]] || {};

  server[parts[0]][parts[1]] = require(`${ __dirname }/${ file }` );

  return server;

}