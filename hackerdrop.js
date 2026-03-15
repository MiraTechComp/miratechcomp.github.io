// var drops = document.getElementsByClassName('drop');
// for (var i = 0; i < drops.length; i++) {
// 	drops[i].addEventListener("mouseover", function(e) {
// 		e.stopPropagation();
// 		// console.log(e.target);
// 		// 
// 		if(e.target.tagName == "LI"){
// 			console.log(e.target.childNodes[3]);
// 			e.target.childNodes[3].style.display = "flex";
// 		} else {
// 			if(e.target.parentNode.childNodes[3] == undefined) {
// 				e.target.parentNode.childNodes[1].style.display = "flex";
// 			}
// 			console.log(e.target.parentNode.childNodes[3]);
// 			e.target.parentNode.childNodes[3].style.display = "flex";
// 		}
		
// 	}, {capture: false});

// 	drops[i].addEventListener("mouseout", function(e) {
// 		// e.stopPropagation();
// 		// console.log(e.target);
// 		// 
// 		if(e.target.tagName == "LI"){
// 			console.log(e.target.childNodes[3]);
// 			e.target.childNodes[3].style.display = "none";
// 		} else {
// 			if(e.target.parentNode.childNodes[3] == undefined) {
// 				e.target.parentNode.childNodes[1].style.display = "none";
// 			}	
// 		}
		
// 	}, {capture: false});

// 	// drops[i].addEventListener("mouseout", function(e) {
// 	// 	e.stopPropagation();
// 	// 	// console.log(e.target);
// 	// 	if(e.target.tagName == "LI" || e.target.parentNode.childNodes[3] == undefined) return;
// 	// 	console.log(e.target.parentNode.childNodes[3]);
// 	// 	e.target.parentNode.childNodes[3].style.display = "none";
// 	// }, {capture: false});
// 	// drops[i].addEventListener("mouseout", function(e) {
// 	// 	var target;
// 	// 	if(e.target.classList[1] == "drop"){
// 	// 		target = e.target;
// 	// 	} else return;
// 	// 	console.log(target);

// 	// 	for (var i = 0; i < target.childNodes.length; i++) {
// 	// 		target.childNodes[i].style.display = "none";
// 	// 	}
// 	// }, {capture: false});
// }

