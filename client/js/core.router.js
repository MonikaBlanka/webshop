// router.js
// allows you to create views that will render content
// inside of their innerHTML based on the history.state
// history state is put inside of <html> dataset for CSS usage

(function(core){

	core.router = router;

	let route_elements = {};

	addEventListener('popstate', function(){

		router(history.state, { replace: true });

	});

	function router(obj, options) {
		
		if(!history.state) {

			let parts = location.pathname.split(/\//g),
				new_state = Object.assign({}, f.core.default_state);

			for (let i = 0; i < parts.length; i += 2) {

				if(parts[i] || parts[i + 1]) new_state[parts[i] || 'page'] = parts[i + 1];

			}

			history.replaceState(new_state, document.title, location.pathname + location.search);

		}

		if(obj instanceof Element) {

			if(obj.dataset.load != 'core.router') {

				let update = Object.assign({}, obj.dataset);

				delete update.click;
				
				delete update.input;

				delete update.load;

				delete update.submit;

				let reload = update.reload;

				delete update.reload;

				return router(update, { reload: !!reload });

			}

			obj.dataset.load = '';

			route_elements[obj.dataset.route] = obj;

			let path = history.state[obj.dataset.route];

			if(obj.dataset.route == 'page') path = f.core.pages[path];

			if(!path) return not_found(obj, obj.dataset.route);

			return core.loader(obj, path);

		}

		let title = options && typeof options.title == 'string' ? options.title : document.title,
			updated_state = Object.assign({}, history.state || {}, obj),
			url = Object.keys(updated_state).reduce(encode, `/${ updated_state.page }`);

		if(!url || url == `/${ f.core.default_state.page }`) url = '/';

		if(options && options.replace) history.replaceState(updated_state, title, url);

		else history.pushState(updated_state, title, url);

		scroll(0, 0);

		if(options && options.reload) f.core.loader(document.body);

		function encode(url, key){

			let element = route_elements[key],
				path = updated_state[key];

			if(key == 'page') path = f.core.pages[path];

			if(!path) {

				not_found(element, key);

				return url;

			}

			if(element) core.loader(element, path);

			document.documentElement.dataset[key] = updated_state[key];

			if(key == 'page' || f.core.default_state[key] == updated_state[key]) return url;

			return `${ url }/${ key }/${ updated_state[key] }`;

		}

		function not_found(element, key) {

			if(key != 'page') return;

			let default_page = Object.keys(f.core.pages)[0];

			router({ page: default_page });

		}

	}

}(f.core));