var userhello = document.getElementById('userhello');
var profile_image = document.getElementById('profile_image');
// let user_name = document.URL.substring(document.URL.indexOf('?')+1);
// if(user_name != document.URL){

// }

if(document.cookie != ""){
	var octo = new Octokat({"token": document.cookie.split("=")[1]});
	octo.me.fetch().then((v1) => {
		userhello.innerHTML = "Привет, " + v1.login;
		profile_image.src = v1.avatarUrl;
	});
}