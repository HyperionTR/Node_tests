// referenciando el modulo express
const express= require('express');
const {readFile} = require("fs");

// Inicializando el servidor
const app = express();

// defualt	
app.get("/", (resquest, response) => {

	// Leemos el archivo html
	readFile("PagWeb/PERIODICO.HTML", "utf-8", (error, data) => {

		if ( error ) {
			response.status(500).send("An error ocurred...");
			console.log(error);
		}

		response.send(data);
	} );

});


// Escuchamos en el puerto 3000, o en el puerto especificado por ENV
app.listen( process.env.PORT || 3000, () => console.log("Servidor HTTP ejecutándose en http://localhost:3000"));

// Defining the use of "static" elements, such as CSS and JS
app.use( express.static("PagWeb") );