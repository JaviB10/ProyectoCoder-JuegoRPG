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


let heroe = () => {
    heroe = prompt('Opcion 1 : Guerrero - Opcion 2 : Mago - Opcion 3 : Arquero = Ingrese una de las opciones para escoger una personaje: '); 
    switch (heroe) {
        case "1":
            heroe = new Personaje ("Guerrero", 1000, 60, "Clase de personaje cuya mayor habilidad o principal función es el ataque a corta distancia o cuerpo a cuerpo.");
            document.write ("<p> ELEGISTE AL SIGUIENTE PERSONAJE </p>")
            document.write ("<p> Clase: " + heroe.clase + "</p>")
            document.write ("<p> Vida: " + heroe.vida + "</p>")
            document.write ("<p> Ataque: " + heroe.ataque + "</p>")
            document.write ("<p> Descripcion: " + heroe.descripcion + "</p>")
            break;
        case "2":
            heroe = new Personaje ("Guerrero", 1000, 60, "Clase de personaje cuya mayor habilidad o principal función es el ataque a corta distancia o cuerpo a cuerpo.");
            document.write ("<p> ELEGISTE AL SIGUIENTE PERSONAJE </p>")
            document.write ("<p> Clase: " + heroe.clase + "</p>")
            document.write ("<p> Vida: " + heroe.vida + "</p>")
            document.write ("<p> Ataque: " + heroe.ataque + "</p>")
            document.write ("<p> Descripcion: " + heroe.descripcion + "</p>") 
            break;
        case "3":
            heroe = new Personaje ("Guerrero", 1000, 60, "Clase de personaje cuya mayor habilidad o principal función es el ataque a corta distancia o cuerpo a cuerpo.");
            document.write ("<p> ELEGISTE AL SIGUIENTE PERSONAJE </p>")
            document.write ("<p> Clase: " + heroe.clase + "</p>")
            document.write ("<p> Vida: " + heroe.vida + "</p>")
            document.write ("<p> Ataque: " + heroe.ataque + "</p>")
            document.write ("<p> Descripcion: " + heroe.descripcion + "</p>") 
            break;  
        default:
            alert ("Ingrese una de las opciones posibles")    
    }
}
heroe();

document.write ("<hr>")

let monstruo =  () => {
    let eleccionVillano = Math.ceil(Math.random() * 3);
    console.log (eleccionVillano)
    if (eleccionVillano == 1) {
        monstruo = new Villano ("Lobo", 700, 90, "Clase de villano muy rapido en ataques, pero con una defensa normal.");
        document.write ("<p> TE ENFRENTARAS AL SIGUIENTE VILLANO </p>")
        document.write ("<p> Clase: " + monstruo.clase + "</p>")
        document.write ("<p> Vida: " + monstruo.vida + "</p>")
        document.write ("<p> Ataque: " + monstruo.ataque + "</p>")
        document.write ("<p> Descripcion: " + monstruo.descripcion + "</p>")
    } 
    else if (eleccionVillano == 2) {
        monstruo = new Villano ("Orco", 1500, 100, "Clase de villano con un ataque muy poderoso, pero con una defensa fragil.");
        document.write ("<p> TE ENFRENTARAS AL SIGUIENTE VILLANO </p>")
        document.write ("<p> Clase: " + monstruo.clase + "</p>")
        document.write ("<p> Vida: " + monstruo.vida + "</p>")
        document.write ("<p> Ataque: " + monstruo.ataque + "</p>")
        document.write ("<p> Descripcion: " + monstruo.descripcion + "</p>")
    } 
    else {
        monstruo = new Villano ("Esqueleto", 500, 40, "Clase de villano con un ataque debil, pero con una de las mejores defensas.");
        document.write ("<p> TE ENFRENTARAS AL SIGUIENTE VILLANO </p>")
        document.write ("<p> Clase: " + monstruo.clase + "</p>")
        document.write ("<p> Vida: " + monstruo.vida + "</p>")
        document.write ("<p> Ataque: " + monstruo.ataque + "</p>")
        document.write ("<p> Descripcion: " + monstruo.descripcion + "</p>")
    }
}
monstruo();

document.write ("<hr>")

let acierto = () => {
	let golpeHeroe = Math.ceil(Math.random() * 4);
	document.write ("<p> Golpe de heroe " + golpeHeroe + "</p>");
	let golpeVillano = Math.ceil(Math.random() * 4);
	document.write ("<p> Golpe de villano " + golpeVillano + "</p>");
	return golpeHeroe >= golpeVillano;
};

while (heroe.vida > 0 && monstruo.vida > 0) {
	if (acierto()) {
		monstruo.vida -= heroe.ataque;
		document.write ("<p> El heroe acerto un golpe al monstruo </p>");
		document.write ("<p> La vida del villano ahora es de: " + monstruo.vida + "</p>");
        document.write ("<hr>")
	} else {
		heroe.vida -= monstruo.ataque;
		document.write ("<p> El monstruo acerto un golpe a tu heroe </p>");
		document.write ("<p> La vida de tu heroe ahora es de: " + heroe.vida + "</p>");
        document.write ("<hr>")
	}
}

if (heroe.vida == 0) {
    document.write ("<p> Has perdido, tu " + heroe.clase + " ha caido por los furiosos ataques del " + monstruo.clase + "</p>")
} else {
    document.write ("<p> Has ganado, el " + monstruo.clase + " ha caido derrotado por los furiosos ataques de tu " + heroe.clase + "</p>")
}



