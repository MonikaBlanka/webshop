// events.js
// allows you to use the DOM element dataset to listen
// for specefic events and execute a custom callback

(function(core){

	['click', 'change', 'input', 'submit'].map(function(event) {

		document.documentElement.addEventListener(event, function listener(e, element) {

			element = element || e.target;

			if(e.type.toLowerCase() == 'submit') e.preventDefault();

			if (!element.dataset || !element.dataset[e.type])
			  return element.parentNode ? listener(e, element.parentNode) : null;

			core.loader(element, element.dataset[e.type]);

		});

	});

}(f.core));