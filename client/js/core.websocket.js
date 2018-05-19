// websocket.js
// allows you to send objects to the server (encoded / decoded with JSON)
// a callback can be provided and will be executed if server responds
// any object received with a object.key attribute will be saved in memory

(function(core){

	core.websocket = send;

	let ws = new WebSocket(`ws${ location.protocol == 'https:' ? 's' : '' }://${ location.host }/${ localStorage.getItem('session') || '' }`),
		callbacks = {};

	ws.addEventListener('message', listener);

	ws.addEventListener('close', function(){ 

		setTimeout(function(){

			location.reload();

		}, 1000);

	});
	
	function listener(e){

		let message = JSON.parse(e.data);

		if(message instanceof Array) {

			for(let m in message) merge(message[m]);

			return;

		}

		if(message.error) return console.error(message);

		merge(message);

		// use callbacks for the rest
		if(message.callback && callbacks[message.callback]) {

			callbacks[message.callback](message);

			delete callbacks[message.callback];

		}

	}

	function send(data, callback) {

		if(ws.readyState != ws.OPEN) return setTimeout(send, 300, data, callback);

		let cb = `cb_${ Math.floor(Math.random() * 10000) }`;

		data.callback = cb;

		if(callback) callbacks[cb] = callback;

		ws.send(JSON.stringify(data));

	}

	function merge(message){

		// use events for server-directed stuff like sign_in, sign_out, error notifications
		if(message.event || message.key) dispatchEvent(

			new CustomEvent(message.event || `update-${ message.key.split('_')[0] }`, { detail: message })

		);
		
		if(!message.key) return;

		let collection = message.key.split('_').slice(0, -1).join('_');

		if(!f.data[collection]) f.data[collection] = {};

		if(!f.data[collection][message.key]) return f.data[collection][message.key] = message;

		f.data[collection][message.key] =
			Object.assign(f[collection][message.key] || {}, message);

	}

}(f.core));