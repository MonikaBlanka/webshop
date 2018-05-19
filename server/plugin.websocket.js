let ws = require('ws');

module.exports = {

	listen: function listen(server) {

		let wss = new ws.Server({ server: server.plugin.http });

		module.exports.server = wss;

		wss.on('connection', connection);
 
		function connection(socket, request) {

			let users = server.plugin.database.users,
				auth = request ? request.url.slice(1) : '';

			if(!users) return; // wait for database to launch

			users.findAndModify({

				auth: auth || 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {

					var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);

					return v.toString(16);

				})

			}, [], {

				$push: {

					sign_ins: {
						user_agent: request.headers['user-agent'],
						ip_address: request.connection.remoteAddress,
						created_at: new Date()
					}

				}

			}, { upsert: true, new: true }, function(err, updated){

				if(err) return console.log(err);

				let session = updated.value;

				socket.send(
					JSON.stringify(
						Object.assign({}, session, { event: 'sign_in'/*, sign_ins: null */ })
					)
				);

				socket.on('message', (message)=>{

					try {

						let msg = JSON.parse(message),
							handler = server.request[msg.request];

						if(handler) handler(message, session, socket, server);

					} catch(e) { console.log(e); }

				});
				
			});

		}

	}

};