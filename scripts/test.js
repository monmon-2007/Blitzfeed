var index = 0;
var milliseconds = 1000;
var wpm = 60;

var right = document.getElementById("rightWord");
var left = document.getElementById("leftWord");
var address = document.getElementById("currentWord");

var article = "Nueva York se prepara para la llegada este domingo de un nuevo temporal de nieve, después de registrar el mes de febrero más frío en décadas, según los expertos. Aunque no se esperan grandes precipitaciones, las autoridades de la ciudad anunciaron hoy una alerta y han comenzado a diseminar sal por las calles, que en muchas zonas de la Gran Manzana están aún cubiertas por nieve y hielo de tormentas anteriores. Según el Servicio Nacional de Meteorología, durante febrero la temperatura media en Nueva York ha sido de 24 grados, claramente por debajo de lo habitual. Los expertos esperan que el mes cierre como el febrero más frío en la ciudad desde 1934 y a lo largo de las últimas semanas se han registrado algunas de las temperaturas más bajas en décadas, cuyo impacto se ha multiplicado además por fuertes rachas de viento. A finales de enero, uno de los temporales invernales paralizó durante casi dos días Nueva York, obligando a cerrar el tr";

var articleArray = article.split(" ");

address.innerHTML = "Start >";

var timer = setInterval(function(){displayArticle()}, milliseconds);

console.log(wpm);

displayArticle = function () {
	if(articleArray[index] == null){
		clearInterval(timer);
		address.innerHTML = "Next >";
		right.innerHTML = "...";
		left.innerHTML = "...";
		return;
	}
	var leftWord;
	
		if(articleArray[index - 1] == null)
			leftWord = "...";
		else
			leftWord = articleArray[index - 1];
	
	left.innerHTML = leftWord;
	address.innerHTML = articleArray[index];
	
	var rightWord;
	
		if(articleArray[index + 1] == null)
			rightWord = "...";
		else
			rightWord = articleArray[index + 1];
	right.innerHTML = rightWord;
	++index;
}

//Speed Selection
 function changeSpeed(){
	var myList=document.getElementById("myList");
	var x = document.getElementById("myList").selectedIndex;
	var y = document.getElementById("myList").options;
	index = y[x].index;
	if (index == 0){
		setWPM(60);
        return;
    }
    else if (index == 1){
		setWPM(200);
        return;
    }
    else if (index == 2){
		console.log("2");
		setWPM(350);
		return;
    }
    else if (index == 3){
		setWPM(500);
		return;
    }
}

function setWPM(wpmArg){
	wpm = wpmArg;
	console.log("Wpm: " + wpm);
	milliseconds = (60000 / wpm);
	console.log(milliseconds);
	
	clearInterval(timer);
	timer = setInterval(function(){displayArticle()}, milliseconds);
};
	