module.exports = (message, session, socket, server) => {

	server.websocket.server.clients.forEach(function each(client) {

		if (client === socket || client.readyState !== socket.OPEN) return;

		client.send(JSON.stringify(message));

	});

};