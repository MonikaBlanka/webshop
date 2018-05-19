(function(core, models, views, controllers){

	views.base = function base(element) {

    	console.log('[app started]');

        if(!history.state) return setTimeout(base, 0, element);
    
        element.innerHTML = `
			<header>
				<a class="phone">999-999-999</a>
				<a>Logowanie</a>
				<a>Rejestracja</a>
				<a class="currency">PLN</a>
				<a class="basket">
					<small>123,57</small>
				</a>
			</header>

			<div class="banner">
				<a class="logo">supertkaniny.com</a>
				<div class="search">
					<h2>Idealnie dobierz materia&#322;y do swojego wykroju</h2>
					<input placeholder="Tu wpisz szukane materia&#322;">
					<i class="search-icon"></i>
				</div>
				<div class="filters">
					<h3>filtry</h3>
					<br>
					<a>category</a>
					<a>material type</a>
					<a>pattern</a>
					<a>stretch</a>
					<a>producer</a>
					<br><br>
					<a class="color black"></a>
					<a class="color blue"></a>
					<a class="color purple"></a>
					<a class="color red"></a>
					<a class="color yellow"></a>
				</div>
			</div>

        	<div class="page-container"
        		data-load="core.router"
        		data-route="page">
			</div>

			<footer>
				<h3>supertkaniny.com</h2>
				<div>
					<h4>Informacje</h4>
					<a>Kontakt</a>
					<a>Regulamin</a>
					<a>Polityka plikow cookies</a>
					<a>Prywatnosc</a>
					<a>Informacje</a>
				</div>
				<div>
					<h4>Informacje</h4>
					<a>Kontakt</a>
					<a>Regulamin</a>
					<a>Polityka plikow cookies</a>
					<a>Prywatnosc</a>
					<a>Informacje</a>
				</div>
				<div>
					<h4>Informacje</h4>
					<a>Kontakt</a>
					<a>Regulamin</a>
					<a>Polityka plikow cookies</a>
					<a>Prywatnosc</a>
					<a>Informacje</a>
				</div>
				<a class="facebook">f</a>
			</footer>
        `;

    };

	views.sign_in = `

			<form data-page="config" data-submit="core.router">

				<input type="email" data-load="public.views.$email,labels.placeholder_email"><br>

				<input type="password" data-load="public.views.$password,labels.placeholder_password"><br>

				<input type="submit" value="Sign in">

			</form>

	`;

	views.landing = `

		<h1>Promocje</h1>

		<div>Buy</div>

		<h1>Inspiracje</h1>

		<div>Buy</div>

		<h1>Najchetniej kupowane</h1>

		<div>Buy</div>
	`;

}(f.core, f.public.models, f.public.views, f.public.controllers));