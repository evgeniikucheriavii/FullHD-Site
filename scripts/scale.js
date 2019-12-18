var btns = 
{
	small: document.getElementById("small-button"),
	normal: document.getElementById("normal-button"),
	big: document.getElementById("big-button")
};
var link = document.getElementById("scale-link");

btns.small.addEventListener("click", function () { ChangeScale("small"); });
btns.normal.addEventListener("click", function () { ChangeScale("normal"); });
btns.big.addEventListener("click", function () { ChangeScale("big"); });

window.addEventListener("resize", AutoScale); //Масштабируем страницу при растягивании окна

AutoScale(); //Масштабируем страницу после загрузки

function ChangeScale(size)
{
	link.setAttribute("href", "styles/" + size + ".css");

	SaveScale(size);
}

function SaveScale(size)
{
	var Request = new XMLHttpRequest();
	Request.open("GET", "./scales.php?size=" + size, true);
	Request.send();
}


function AutoScale()
{
	let width = window.innerWidth; //Ширина окна
	//Если вы хотите проверять по размеру экрана, то вам нужно свойство window.screen.width

	if(width > 1280)
	{
		ChangeScale("big");
	}
	else if(width <= 1280 && width > 720)
	{
		ChangeScale("normal");
	}
	else if(width < 720)
	{
		ChangeScale("small");
	}
}