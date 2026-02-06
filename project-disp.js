function load() {
	// console.log("Awake")
	var t = document.getElementById('toset');
	t.innerHTML = "";
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.github.com/repos/MiraTechComp/miratechcomp.github.io/pulls/5");
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200){
			var tx = xhr.responseText;
			let body = JSON.parse(JSON.parse(tx).body);

			for(var type in body){
				var inn = "<li class=\"opener\" style=\"user-select: none; cursor: pointer; white-space: nowrap;\"><a href=\"projects.html?" + type + "\">" + type + "</a><ul class=\"dropotron level-1\" style=\"user-select: none; position: absolute; z-index: 1001; left: 144.512px; top: -15px; opacity: 1; display: none;\">"
				for(var project in body[type]){
					inn += "<li style=\"white-space: nowrap;\"><a href=\"projects.html?" + body[type][project] + "\">" + project + "</a></li>"; 
				}
				inn += "</ul><li>"
				t.innerHTML += inn;
			}

		}
	};

	xhr.send();
}

load();