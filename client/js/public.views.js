(function(core, models, views, controllers){

	views.base = function base(element) {

    	console.log('[app started]');

        if(!history.state) return setTimeout(base, 0, element);
    
        element.innerHTML = `
			<header>
				<a data-click="core.router" data-page="landing" class="logo"></a>
				<a class="phone">+48 654-322-098</a>
			</header>

        	<div class="page-container"
        		data-load="core.router"
        		data-route="page">
			</div>
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

		<div class="banner">
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
				<a class="color white"></a>
			</div>
		</div>
			
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



	views.checkout = `

		<div class="checkout">

			<h1>
				<span class="steps">
					<a>1</a><a>2</a><a>3</a>
				</span>
				BEZPIECZNE ZAKYPY
			</h1>


			<form data-submit="public.controllers.checkout">

				<label for="name">imu&#x1EB9;</label>
				<input placeholder="imu&#x1EB9;" id="name">

				<label for="surname">nazwisko</label>
				<input placeholder="nazwisko" id="surname">

				<label for="email">email</label>
				<input placeholder="email@przyk&#x142;ad.pl" type="email" id="email">

				<label for="phone">telefon</label>
				<input placeholder="telefon" id="phone">

				<br><br><a class="active" data-click="public.controllers.select_type">osoba prywatna</a><!--
		    	--><a data-click="public.controllers.select_type">firma</a><br><br><br>

				<label for="address">ulica i nr domu</label>
				<input placeholder="ulica i nr domu" id="address">

				<label for="zip">kod pocztowy</label>
				<label for="city">miasto</label><br>

				<input placeholder="kod" id="zip">
				<input placeholder="miasto" id="city">

				<br><br><br><a>inny adres wysylki</a><a>uwagi</a><br><br><br>
				
				<div class="checks">
				
					<input id="rules" type="checkbox">
					<label for="rules">Oswiadczam iz zapoznalem sie z <span>regulaminem</span> sklepu internetowego oraz akceptuje jego postanowienia.</label>

					<br><br>

					<input id="privacy" type="checkbox">
					<label for="privacy">Wyrazam zgode na przetwarzanie przez PPHU NATAN Jacek Pilarcyk, ul. St. Leszczynskiej 9, 32-600 Oswiecim, moich danych osobowych w celach zwiazanych z korzystaniem ze sklepu internetowego sklep.supertkaniny.com w zgodzie i wedlug zasad okreslonych w <span>polityce prywatnosci</span>.</label>
					
				</div>

					<br><br>

					<a class="big">wstecz</a><input type="submit" value="dalej">


			</form>

		</div>

	`;
	
}(f.core, f.public.models, f.public.views, f.public.controllers));