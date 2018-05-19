(function(core, models, views, controllers){

	models.config = {
		language: localStorage.getItem('language')
	};
	
	models.languages = ['nl', 'en'];
	
	models.labels = {
		notify_welcome: ['Welkom', 'Welcome'],
		notify_user_not_found: ['Gebruiker niet gevonden', 'User not found'],
		notify_incorrect_mail: ['Geen valide email', 'No valid email'],
		placeholder_email: [placeholder('Email'), placeholder('Email')],
		placeholder_password: [placeholder('Wachtwoord'), placeholder('Password')],
		placeholder_session_name: [placeholder('Naam'), placeholder('Name')]
	};

	function placeholder(label) {

		return (el) => el.setAttribute('placeholder', label);

	}

	function value(label) {

		return (el) => { el.value = label; };

	}

}(f.core, f.public.models, f.public.views, f.public.controllers));