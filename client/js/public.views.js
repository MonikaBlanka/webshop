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
				<a class="logo"></a>
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
				<h3><a class="logo"></a></h3>
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

		<div class="block-container">

			<div class="block" data-click="core.router" data-page="checkout">

				<span class="v-center">dodaj do koszyka</span>

				<a class="buy"></a>

				<span class="next">

					Szczego&#322;y

				</span>

			</div>

			<div class="block" data-click="core.router" data-page="checkout">

				<span class="top">

					26,00 z&#322;

					<small>cena za 0,5 m</small>

				</span>

				<span class="botton">

					<h3>We&#322;na Kaszmir</h3>

					<small>bia&#322;a</small>

					<div class="countdown" data-load="public.views.countdown"></div>

				</span>

			</div>

			<div class="block" data-click="core.router" data-page="checkout">

				<span class="top">

					26,00 z&#322;

					<small>cena za 0,5 m</small>

				</span>

				<span class="botton">

					<h3>We&#322;na Kaszmir</h3>

					<small>bia&#322;a</small>

					<div class="countdown" data-load="public.views.countdown"></div>

				</span>

			</div>

		</div>

		<h1>Inspiracje</h1>

		<div class="block-container">

			<div class="block" data-click="core.router" data-page="checkout">

				<span class="top">

					26,00 z&#322;

					<small>cena za 0,5 m</small>

				</span>

				<span class="botton">

					<h3>We&#322;na Kaszmir</h3>

					<small>bia&#322;a</small>

					<div class="countdown" data-load="public.views.countdown"></div>

				</span>

			</div>

			<div class="block" data-click="core.router" data-page="checkout">

				<span class="top">

					26,00 z&#322;

					<small>cena za 0,5 m</small>

				</span>

				<span class="botton">

					<h3>We&#322;na Kaszmir</h3>

					<small>bia&#322;a</small>

					<div class="countdown" data-load="public.views.countdown"></div>

				</span>

			</div>

			<div class="block" data-click="core.router" data-page="checkout">

				<span class="top">

					26,00 z&#322;

					<small>cena za 0,5 m</small>

				</span>

				<span class="botton">

					<h3>We&#322;na Kaszmir</h3>

					<small>bia&#322;a</small>

					<div class="countdown" data-load="public.views.countdown"></div>

				</span>

			</div>

		<h1>Najchetniej kupowane</h1>

		<div class="block-container">

			<div class="block" data-click="core.router" data-page="checkout">

				<span class="top">

					26,00 z&#322;

					<small>cena za 0,5 m</small>

				</span>

				<span class="botton">

					<h3>We&#322;na Kaszmir</h3>

					<small>bia&#322;a</small>

					<div class="countdown" data-load="public.views.countdown"></div>

				</span>

			</div>

			<div class="block" data-click="core.router" data-page="checkout">

				<span class="top">

					26,00 z&#322;

					<small>cena za 0,5 m</small>

				</span>

				<span class="botton">

					<h3>We&#322;na Kaszmir</h3>

					<small>bia&#322;a</small>

					<div class="countdown" data-load="public.views.countdown"></div>

				</span>

			</div>

			<div class="block" data-click="core.router" data-page="checkout">

				<span class="top">

					26,00 z&#322;

					<small>cena za 0,5 m</small>

				</span>

				<span class="botton">

					<h3>We&#322;na Kaszmir</h3>

					<small>bia&#322;a</small>

					<div class="countdown" data-load="public.views.countdown"></div>

				</span>

			</div>

		</div>
		
	`;



	views.checkout = `

		<br><br><br>

		<h1>Checkout</h1>

		<br><br><br>

		<button style="cursor:pointer;height:50px;display:block;width:200px;margin:0 auto" data-click="core.router" data-page="landing">Back</button>

		<br><br><br>

		<br><br><br>

		<br><br><br>

		<br><br><br>

	`;
	
}(f.core, f.public.models, f.public.views, f.public.controllers));