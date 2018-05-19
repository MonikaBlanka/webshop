// loader.js
// allows you to update an element by loading a specific function or string
// listens for data-load="path" on any newly rendered DOM element

(function(core){

	core.loader = loader;

	new MutationObserver(function(mutations) {

		let elements = [];

		for(let i = 0; i < mutations.length; i++) {

			if(
				mutations[i].attributeName == 'data-load'
				&& elements.indexOf(mutations[i].target) == -1
			) elements.push(mutations[i].target);

			if(mutations[i].type != 'childList') continue;

			[].map.call(mutations[i].target.querySelectorAll('[data-load]'), function(element){
				
				if(elements.indexOf(element) == -1) {
					elements.push(element);
				}

			});

		}

		elements.map(function(element){ core.loader(element); })

	}).observe(document.documentElement, {
		subtree: true,
		childList: true,
		attributes: true,
		characterData: true
	});

	function loader(element, path) {

		if(!element && !path) return;

		path = path || element.dataset.load;

		if(path.indexOf(',') > -1)
			return path.split(',').map((p) => loader(element, p));

		if(!path) return;

		let target = f,
			parts = path.split('.');

		for (let i = 0; i < parts.length; i++) {

			if (typeof target[parts[i]] == 'undefined' || target[parts[i]] instanceof Element) {

			  target[parts[i]] = (parts.length == i + 1) ? element : {};

			  if(parts.length == i + 1) continue;

			}

			target = target[parts[i]];

		}

		if(typeof target == 'string') return element.innerHTML = target;

		if(typeof target == 'function') return target(element);

	}

}(f.core));