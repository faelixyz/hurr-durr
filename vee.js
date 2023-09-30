let hurr = [
	"hurrdurrr",
	"Durrr HURR?!",
	"DURR??hurrrrrrrr?!1!",
	"DURR!",
	"DURR!",
	"DURR!",
	"HURR-DURR",
	"DURR???!1!",
	"HURR-DURR",
	"HURR-DURR",
	"HHHURRRRRRRRRR",
	"DURR!",
	"DURR???!1!",
	"DURR",
	"DURR!",
	"DURR???!1!",
	"Miazug",
	"DURR",
	"DURR???!1!",
	"🎎🎋🎋-DURRRRRR",
	"DURR???!1!",
	"HURR-DURR",
	"DURR???!1!",
	"MEOW",
	"DURR",
	"YGEGEGSDEGOISUGN"
];

function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function setWindow() {			
	window.moveTo(randomRange(0, screen.width), randomRange(0, screen.height));
}

function setTitle() {	
	document.title = hurr[randomRange(0, hurr.length - 1)];
}

window.oncontextmenu = () => false;
window.onbeforeunload = () => "HURDUR!!!!";
window.onload = () => {
	setInterval(setTitle, 1500);
	setInterval(setWindow, 750);
	
	return true;
}
window.onkeydown = () => {
	if (['Shift', 'Control', 'Alt', 'Escape', 'Enter', 'F4'].includes(event.key))
		for (let x in hurr) confirm(hurr[x]);
	
    return null;
}

if (self.parent.frames.length) self.parent.location = document.location;