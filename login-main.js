var form = document.getElementById('logform');
form.onsubmit = function(e) {
	e.preventDefault();

	var input = document.getElementById('token');
	var dt = document.getElementById('daysel');
	tmr = 0;
	switch(dt.value){
		case 'на 1 день':
			tmr = 60*60*24;
			break; 
		case 'на 7 дней':
			tmr = 7*60*60*24;
			break; 
		case 'на 31 день':
			tmr = 31*60*60*24;
			break; 
		case 'не выходить':
			tmr = ~(1 << 31);
			break; 
	}
	document.cookie = "token=" + input.value + "; max-age=" + tmr;
	var octo = Octokat({"token" : input.value});
	octo.me.fetch().then((v1, er)=>{if(er) {document.getElementById('ans').innerHTML = "Err: user not found!"}})
}