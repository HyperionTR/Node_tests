// referenciando el modulo express
const express= require('express');
const {readFile} = require("fs").promises;

// Inicializando el servidor
const app = express();

// defualt	
app.get("/news", async (resquest, response) => {
	// Leemos el archivo html
	try {
		response.send( await readFile("PagWeb/PERIODICO.HTML", "utf-8") );
	} catch (error) {
		response.status(500).send("Sorry, an error ocurried...");
		console.log(`So, this ocurried... ${error}`);
	}
});

// My best project, ellipsy 
app.get("/", async (resquest, response) => {
	// Sending my Ellipsy project
	try {
		response.send( await readFile("Project-Ellipsy/index.html", "utf-8"));
	} catch (error) {
		response.status(500).send("Sorry, an error ocurried...");
		console.log(`So, this ocurried... ${error}`);
	}
});

// Escuchamos en el puerto 3000, o en el puerto especificado por ENV
app.listen( process.env.PORT || 3000, () => console.log("Servidor HTTP ejecutándose en http://localhost:3000"));

// Defining the use of "static" elements, such as CSS and JS
app.use( express.static("PagWeb") );
app.use( express.static("Project-Ellipsy") );