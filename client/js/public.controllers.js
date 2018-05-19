(function(core, models, views, controllers){

	controllers.load_language = function(){

		f.labels = {};

		let index = models.languages.indexOf(models.config.language);

		if (index == -1) index = 0;

		for (let n in models.labels) {

			if (!models.labels.hasOwnProperty(n)) continue;

			if (models.labels[n] == false) f.labels[n] = n;

			else f.labels[n] = models.labels[n][index];

		}

	};

}(f.core, f.public.models, f.public.views, f.public.controllers));