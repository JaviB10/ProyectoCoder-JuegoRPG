class Personaje {
    constructor (clase, vida, ataque, descripcion) {
        this.clase = clase;
        this.vida = vida;
        this.ataque = ataque;
        this.descripcion = descripcion;
    }
}

class Villano {
    constructor (clase, vida, ataque, descripcion) {
        this.clase = clase;
        this.vida = vida;
        this.ataque = ataque;
        this.descripcion = descripcion;
    }
}


console.log ("1: GUERRERO")
console.log ("2: MAGO")
console.log ("3: ARQUERO")


let heroe = () => {
    heroe = prompt('Opcion 1 : Guerrero - Opcion 2 : Mago - Opcion 3 : Arquero = Ingrese una de las opciones para escoger una personaje: '); 
    if (heroe == 1) {
        heroe = new Personaje ("Guerrero", 1000, 60, "Clase de personaje cuya mayor habilidad o principal función es el ataque a corta distancia o cuerpo a cuerpo.");
    }else if (heroe == 2) {
        heroe = new Personaje ("Mago", 800, 80, "Clase de personaje con una defensa debil pero cuya habilidad magica le da un ataque superior al resto.");
    }else {
        heroe = new Personaje ("Arquero", 900, 50, "Clase de personaje que efectua ataques a distancia con poco poder pero cuenta con una defensa aceptable.");
    }
    console.log ("El heroe que escogiste para enfrentar a los villanos es un " + heroe.clase)
}
heroe();

let monstruo =  () => {
    let eleccionVillano = Math.ceil(Math.random() * 3);
    console.log (eleccionVillano)
    if (eleccionVillano == 1) {
        monstruo = new Villano ("Lobo", 700, 90, "Clase de villano muy rapido en ataques, pero con una defensa normal.");
    } 
    else if (eleccionVillano == 2) {
        monstruo = new Villano ("Orco", 1500, 100, "Clase de villano con un ataque muy poderoso, pero con una defensa fragil.");
    } 
    else {
        monstruo = new Villano ("Esqueleto", 500, 40, "Clase de villano con un ataque debil, pero con una de las mejores defensas.");
    }
    console.log ("El villano con el que te enfrentaras es un " + monstruo.clase)
}
monstruo();

let acierto = () => {
	let golpeHeroe = Math.ceil(Math.random() * 4);
	console.log("golpe de heroe " + golpeHeroe);
	let golpeVillano = Math.ceil(Math.random() * 4);
	console.log("golpe de villano " + golpeVillano);
	return golpeHeroe >= golpeVillano;
};

while (heroe.vida > 0 && monstruo.vida > 0) {
	if (acierto()) {
		monstruo.vida -= heroe.ataque;
		console.log("El heroe acerto un golpe al monstruo");
		console.log("La vida del villano ahora es de: " + monstruo.vida);
	} else {
		heroe.vida -= monstruo.ataque;
		console.log("El monstruo acerto un golpe a tu heroe");
		console.log("La vida de tu heroe ahora es de: " + heroe.vida);
	}
}

if (heroe.vida == 0) {
    console.log ("Has perdido, tu " + heroe.clase + " ha caido por los furiosos ataques del " + monstruo.clase)
} else {
    console.log ("Has ganado, el " + monstruo.clase + " ha caido derrotado por los furiosos ataques de tu " + heroe.clase)
}



