//			VARIABLES CAROUSEL	

const fila = document.querySelector(".contenedor-carousel");
const peliculas = document.querySelectorAll(".peliculas");
const flechaIzquierda = document.querySelector(".flecha-izquierda");
const flechaDerecha = document.querySelector(".flecha-derecha");




// 	FLECHA DERECHA

flechaDerecha.addEventListener("click", () => {
	fila.scrollLeft += fila.offsetWidth;
	
	/*const indicadorActivo = document.querySelector('.indicadores .activo');
	if (indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
	*/

});




//	FLECHA IZQUIERDA

flechaIzquierda.addEventListener("click", () => {
	fila.scrollLeft -= fila.offsetWidth;
	
/*
	const indicadorActivo = document.querySelector('.indicadores .activo');
	if (indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
*/	
});
/*
//		Paginación

const numeroPaginas = Math.ceil (peliculas.length / 4);
for (let i = 0 ; i < numeroPaginas; i++) {
	const indicador = document.createElement('button');
	document.querySelector(".indicadores").appendChild(indicador)

	if ( i === 0 ) {
		indicador.classList.add('activo');
	}


	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e)=> {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	})

	
}*/