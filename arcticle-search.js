console.log("Search Test");

class Indexer { 
	constructor(letter, parrent) { this.idex = letter; this.parrent = parrent; this.childs = [];} 
	append(child) {return this.childs.push(child);}
	symetrics(){
		console.log(this.idex);
		for(var i = 0; i < this.childs.length; ++i){
			this.childs[i].symetrics();
		}
	}
	symetricsToString(arr){
		
	}
	// greet() { console.log(`Привет, я ${this.name}`) } 
}

var master = new Indexer("?", null);

function indexate(str) {
	var curdex = master;
	for (var i = 0; i < str.length; i++) {
		console.log("Work");
		var isgoed = false;
		for (var j = 0; j < curdex.childs.length; j++) {
			if(curdex.childs[j] != undefined && curdex.childs[j].idex == str[i]) {curdex = curdex.childs[j]; isgoed = true; break;}
		}
		if(!isgoed) {let nl = curdex.append(new Indexer(str[i], curdex)); curdex = curdex.childs[nl-1];}
	}
}

function complete(str){
	var curdex = master;
	for (var i = 0; i < str.length; i++) {
		console.log("Work");
		var isgoed = false;
		for (var j = 0; j < curdex.childs.length; j++) {
			if(curdex.childs[j] != undefined && curdex.childs[j].idex == str[i]) {curdex = curdex.childs[j];}
		}
		// if(!isgoed) {let nl = curdex.append(new Indexer(str[i], curdex)); curdex = curdex.childs[nl-1];}
	}
	return ar;
}