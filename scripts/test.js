var number = 0;
var milliseconds = 1000;
var wpm = 60;

var right = document.getElementById("rightWord");
var left = document.getElementById("leftWord");
var address = document.getElementById("currentWord");

var article = "El secretario general de la ONU, Ban Ki-moon, se declaró hoy conmocionado por el brutal asesinato del opositor ruso Borís Nemtsov y confió en que los responsables sean llevados rápidamente ante la Justicia.";

var articleArray = article.split(" ");

address.innerHTML = "Start >";

var timer = setInterval(function(){displayArticle()}, milliseconds);

console.log(wpm);

var displayArticle = function() {
	if(articleArray[number] == null){
		clearInterval(timer);
		
		address.innerHTML = "Next >";
		
		return;
	}
		
	left.innerHTML = articleArray[number - 1];
	address.innerHTML = articleArray[number];
	right.innerHTML = articleArray[number + 1];
	++number;
}

//Speed Selection
 function speed(){
	var myList=document.getElementById("myList");
	var x = document.getElementById("myList").selectedIndex;
	var y = document.getElementById("myList").options;
	index = y[x].index;
	if (index == 0){
        console.log(0);
        return 0; //need WPM
    }
    else if (index = 1){
		setWPM(60);
        return;
    }
    else if (index = 2){
		setWPM(200);
		return;
    }
    else if (index = 3){
		setWPM(350);
		return;
    }
    else if (index = 4){
		setWPM(500);
        return;
    }
}

var setWPM = function(wpmArg){
	wpm = wpmArg;
	var intermediate = (60000 / wpmArg);
	console.log(intermediate);
	milliseconds = intermediate;
	console.log(milliseconds);
};
	