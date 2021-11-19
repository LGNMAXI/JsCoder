// DESAFÍO SEMANAL. 

/*
const generosPeliculas = ["Terror", "Comedia", "Drama", "Ciencia Ficción", "Suspenso", "Acción",];



const arrayTerrorBtn = generosPeliculas.find((peliculaTerror) => peliculaTerror === "Terror");
console.log(arrayTerrorBtn);

const arrayComediaBtn = generosPeliculas.find((peliculaComedia) => peliculaComedia === "Comedia")
console.log(arrayComediaBtn);

*/

// DESAFIO COMPLEMENTARIO.


class Pelicula {
	constructor(name, year, genero) {
		this.name = name.toUpperCase ();;
		this.year = parseInt(year);
		this.genero = genero.toUpperCase();

	}

	
}

const movies = [];


movies.push(new Pelicula("X", 2017, "Acción"));
movies.push(new Pelicula("B", 2013, "Terror"));
movies.push(new Pelicula("M", 2015, "Aventura"));
movies.push(new Pelicula("A", 2021, "Ficción"));
movies.push(new Pelicula("L", 2022, "Suspenso"));


let ordenYear = () => {
	movies.sort((ma, mb) => {
		if (ma.year < mb.year) return -1;
		return 1
	})
}

ordenYear ();

console.log(movies)

