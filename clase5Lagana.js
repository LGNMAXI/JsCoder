/*   APUNTES DE LA CLASE.
function User (data) {
        this.nombre = data.nombre;
        this.password = data.password;
        this.plan = data.plan;
}



const user1 = new User ({nombre: "user1", password: "123", plan : "One"});
const user2 = new User ({nombre: "user2", password: "321", plan : "Two"});
const user3 = new User ({nombre: "user3", password: "456", plan : "Three"});
const user4 = new User ({nombre: "user4", password: "654", plan : "Four"});
const user5 = new User ({nombre: "user5", password: "789", plan : "Five"});
const user6 = new User ({nombre: "user6", password: "987", plan : "Six"});
const user7 = new User ({nombre: "user7", password: "135", plan : "Seven"});
const user8 = new User ({nombre: "user8", password: "531", plan : "Eight"});
const user9 = new User ({nombre: "user9", password: "246", plan : "Nine"});



console.log (user1);
console.log (user2);
console.log (user3);
console.log (user4);
console.log (user5);
console.log (user6);
console.log (user7);
console.log (user8);
console.log (user9);
/*
function Vehículo (data) {
        this.peso = data.peso;
        this.altura = data.altura;
        this.ruedas = data.ruedas;
}

const vehículo1 = new Vehículo ({peso: "1000kg", altura: "1.57mts", ruedas:"4" });
const vehículo2 = new Vehículo ({peso: "1200kg", altura: "1.67mts", ruedas:"5" });
const vehículo3 = new Vehículo ({peso: "1400kg", altura: "1.77mts", ruedas:"6" });
const vehículo4 = new Vehículo ({peso: "1600kg", altura: "1.97mts", ruedas:"8" });

console.log (vehículo2);
*/

// LOG IN - 

const btnSignUp = document.querySelector(`.btn`);
btnSignUp.addEventListener("click", llenarObjeto);

function llenarObjeto() {
        const firstName = document.querySelector(".firstName").value;
        const lastName = document.querySelector(".lastName").value;
        const email = document.querySelector(".email").value;
        const user = document.querySelector(".user").value;
        const password = document.querySelector(".password").value;


        const objetoUser =  {
                firstName,
                lastName,
                email,
                user,
                password,
        }

        const nuevoUsuario = new registroUsuarios (objetoUser);
        console.log(nuevoUsuario)
}

function registroUsuarios (datos) {
        this.firstName = datos.firstName;
        this.lastName = datos.lastName;
        this.email = datos.email;
        this.user = datos.user;
        this.password = datos.password;
}



// DESAFÍO NRO 5 . INCORPORAR OBJETOS.

        
        const suspensoMovies = () => {
                function Suspenso(datos){
                        this.nombre = datos.nombre;
                        this.duracion = datos.duracion;
                        this.genero = datos.genero;
                        this.year = datos.year;
                }
                
                const suspenso1  = new Suspenso ({nombre: "Every Breath You Take", duracion: "1.45HS", genero: "Suspenso", year: "2017"});
                const suspenso2  = new Suspenso ({nombre: "The Silencing", duracion: "1.53HS", genero: "Suspenso", year: "2020"});
                const suspenso3  = new Suspenso ({nombre: "Red Dot", duracion: "1.20HS", genero: "Suspenso", year: "2021"});
                const suspenso4 = new Suspenso ({nombre: "Ma", duracion: "1.30HS", genero: "Suspenso", year: "2021"});
                
                
                console.log (suspenso1);
                console.log (suspenso2);
                console.log (suspenso3);
                console.log (suspenso4);
                
                
}
        
        const comediaMovies = () => {
                function Comedia(datos){
                        this.nombre = datos.nombre;
                        this.duracion = datos.duracion;
                        this.genero = datos.genero;
                        this.year = datos.year;
		
                }

		
                
                const comedia1  = new Comedia ({nombre: "Jungle Cruise", duracion: "1.45HS", genero: "Comedia", year: "2017"});
                const comedia2  = new Comedia ({nombre: "SPACE JAM", duracion: "1.53HS", genero: "Comedia", year: "2020"});
                const comedia3  = new Comedia ({nombre: "PINEAPPLE EXPRESS", duracion: "1.20HS", genero: "Comedia", year: "2021"});
                const comedia4 = new Comedia ({nombre: "BAD BOYS FOR LIFE", duracion: "1.30HS", genero: "Comedia", year: "2021"});
}
        


const btnSuspenso = document.querySelector(`.btnSuspenso`);
btnSuspenso.addEventListener("click", suspensoMovies);

const btnComedia = document.querySelector(`.btnComedia`);
btnComedia.addEventListener("click", comediaMovies);










class TerrorMovies {
	constructor(nombre, duracion, genero, año) {
		this.nombre = nombre;
		this.duracion = duracion;
		this.genero = genero;
		this.año = año;
	}

	pelisTerror() {
		console.log(`Las películas de terror disponibles son: ${this.nombre},${this.duracion},${this.genero},${this.año}`)
	}

}

const terrorMovies1  = new TerrorMovies ("The Purge ","1.45HS ","Terror ","2017 ");
const terrorMovies2  = new TerrorMovies ("Host ", "1.53HS ", "Terror ", "2020 ");
const terrorMovies3  = new TerrorMovies ("Escape Room 2 ", "1.20HS ", "Terror ", "2021 ");
const terrorMovies4 = new TerrorMovies ("Don't Breathe 2 ", "1.30HS ", "Terror ","2021 ");
        


let mostrarTerror = ()=> {
	terrorMovies1.pelisTerror();
	terrorMovies2.pelisTerror();
	terrorMovies3.pelisTerror();
	terrorMovies4.pelisTerror();
}


const btnTerror = document.querySelector(`.btnTerror`);
btnTerror.addEventListener("click", mostrarTerror);