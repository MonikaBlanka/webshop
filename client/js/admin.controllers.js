(function(core, models, views, controllers){

	addEventListener('sign_in', (e)=>localStorage.setItem('session', e.detail.auth));

}(f.core, f.admin.models, f.admin.views, f.admin.controllers));