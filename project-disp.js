function load() {
	// console.log("Awake")
	var t = document.getElementById('toset');
	t.innerHTML = "";

	if(getCookie("loaded") != "ld"){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://api.github.com/repos/MiraTechComp/miratechcomp.github.io/pulls/5");
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200){
				var tx = xhr.responseText;
				localStorage.setItem("lastresult", JSON.parse(tx).body);
				setCookie("loaded", "ld");
				let body = JSON.parse(JSON.parse(tx).body);

				for(var type in body){
					if(type.trim() == "") continue;
					console.log(type);
					if (true) {
						var inn = "<div onmouseover=\"document.getElementById(\'" + type + "\').style.display = \'flex\';\" onmouseout=\"document.getElementById(\'" + type + "\').style.display = \'none\';\"><a href=\"projects.html?" + type + "\">" + type + "</a><div class=\"dropotron dl1\" id=\"" + type + "\" style=\"display: none\">";
					} else {
						var inn = "<div><a href=\"projects.html?" + type + "\">" + type + "</a><div style=\"display: none\">";		
					}
					for(var project in body[type]){
						if(project == "") continue;
						console.log(project);
						inn += "<div><a href=\"projects.html?" + body[type][project] + "\">" + project + "</a></div>"; 
					}
					inn += "</div><div>"
					t.innerHTML += inn;
				}
				console.log(toset.innerHTML);
			}
		};

		xhr.send();
	} else {
		let body = JSON.parse(localStorage.getItem("lastresult"));

		for(var type in body){
			if(type.trim() == "") continue;
			console.log(type);
			if (true) {
				var inn = "<div onmouseover=\"document.getElementById(\'" + type + "\').style.display = \'flex\';\" onmouseout=\"document.getElementById(\'" + type + "\').style.display = \'none\';\"><a href=\"projects.html?" + type + "\">" + type + "</a><div class=\"dropotron dl1\" id=\"" + type + "\" style=\"display: none\">";
			} else {
				var inn = "<div><a href=\"projects.html?" + type + "\">" + type + "</a><div style=\"display: none\">";		
			}
			for(var project in body[type]){
				if(project == "") continue;
				console.log(project);
				inn += "<div><a href=\"projects.html?" + body[type][project] + "\">" + project + "</a></div>"; 
			}
			inn += "</div><div>"
			t.innerHTML += inn;
		}
		console.log(toset.innerHTML);
	}
}

load();