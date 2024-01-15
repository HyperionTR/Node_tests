// Creamos un nuevo objeto que permitirá usar las coordenas del ratón fuera de un EventLIstener
let mouse = {
	x: undefined,
	y: undefined,
	isMoving: false,
}

// Creando los puntos como div
const trailLength = 30;
let trail = [];
for ( let i = 0; i < trailLength; i++ ) {
	let point = document.createElement("div");
	point.classList.add("point");
	// Darle menor opacidad a los puntos más lejanos
	point.style.opacity = (trailLength-i)/trailLength;

	document.body.appendChild(point);
	trail.push(point);
}

document.addEventListener("mousemove", (event) => {
	mouse.x = event.pageX;
	mouse.y = event.pageY;
	mouse.isMoving = true;
	// On mouse move, set the fading points opacity
	trail.forEach( (point, index) => {
		point.style.opacity = (trailLength-index)/trailLength;
	});
});


function draw() {
	let x = mouse.x;
	let y = mouse.y;

	// Colocamos el punto en la posición del ratón
	trail.forEach( (point, index) => {
		// Change points opacity. The transition is handled by CSS
		if (!mouse.isMoving) point.style.opacity = 0;
		const nextPoint = trail[index + 1] || trail[0];

		point.style.left = `${x}px`;
		point.style.top = `${y}px`;

		// Actualizamos las coordenadas del ratón para el siguiente punto
		x += (nextPoint.offsetLeft - point.offsetLeft) * 0.34;
		y += (nextPoint.offsetTop - point.offsetTop) * 0.34;
	});
	mouse.prevX = mouse.x;
	mouse.prevY = mouse.y;
	// After drawing each point, reset the moving variable
	mouse.isMoving = false;
}

setInterval(draw, 1000/45);