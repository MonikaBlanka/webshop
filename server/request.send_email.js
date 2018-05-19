module.exports = (message, session, socket, server) => {

	let data = message.data;

	console.log(message);

	server.plugin.gmail(
		'info@fearless-apps.com',
		`Fearless-apps.com contact request from ${ data.name || '' }`,
		`${data.message || ''}
Sent: ${new Date().toJSON()}
From: ${data.name || ''}<${data.email || ''}>`
	);

	ws.send(JSON.stringify(message));

};