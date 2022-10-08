class Personaje {
    constructor (clase, vida, ataque, defensa, descripcion) {
        this.clase = clase;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.descripcion = descripcion;
    }
}

class Villano {
    constructor (clase, vida, ataque, defensa, descripcion) {
        this.clase = clase;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.descripcion = descripcion;
    }
}

let elegirHeroe = () => {
    elegirHeroe = prompt('Opcion 1 : Guerrero - Opcion 2 : Mago - Opcion 3 : Arquero = Ingrese una de las opciones para escoger una personaje: '); 
    switch (elegirHeroe) {
        case "1":
            elegirHeroe = new Personaje ("Guerrero", 1000, 60, 50, "Clase de personaje cuya mayor habilidad o principal función es el ataque a corta distancia o cuerpo a cuerpo.");
            document.write ("<p> ELEGISTE AL SIGUIENTE PERSONAJE </p>")
            document.write ("<p> Clase: " + elegirHeroe.clase + "</p>")
            document.write ("<p> Vida: " + elegirHeroe.vida + "</p>")
            document.write ("<p> Ataque: " + elegirHeroe.ataque + "</p>")
            document.write ("<p> Defensa: " + elegirHeroe.defensa + "</p>")
            document.write ("<p> Descripcion: " + elegirHeroe.descripcion + "</p>")
            break;
        case "2":
            elegirHeroe = new Personaje ("Mago", 800, 80, 50, "Clase de personaje con una defensa debil pero cuya habilidad magica le da un ataque superior al resto.");
            document.write ("<p> ELEGISTE AL SIGUIENTE PERSONAJE </p>")
            document.write ("<p> Clase: " + elegirHeroe.clase + "</p>")
            document.write ("<p> Vida: " + elegirHeroe.vida + "</p>")
            document.write ("<p> Ataque: " + elegirHeroe.ataque + "</p>")
            document.write ("<p> Defensa: " + elegirHeroe.defensa + "</p>")
            document.write ("<p> Descripcion: " + elegirHeroe.descripcion + "</p>") 
            break;
        case "3":
            elegirHeroe = new Personaje ("Arquero", 900, 50, 50, "Clase de personaje que efectua ataques a distancia con poco poder pero cuenta con una defensa aceptable.");
            document.write ("<p> ELEGISTE AL SIGUIENTE PERSONAJE </p>")
            document.write ("<p> Clase: " + elegirHeroe.clase + "</p>")
            document.write ("<p> Vida: " + elegirHeroe.vida + "</p>")
            document.write ("<p> Ataque: " + elegirHeroe.ataque + "</p>")
            document.write ("<p> Defensa: " + elegirHeroe.defensa + "</p>")
            document.write ("<p> Descripcion: " + elegirHeroe.descripcion + "</p>") 
            break;  
        default:
            alert ("Ingrese una de las opciones posibles")    
    }
}
elegirHeroe();
document.write ("<hr>")

let monstruo = 0
let elegirMonstruo =  () => {
    monstruo = Math.ceil(Math.random() * 3);
    console.log (monstruo)
    switch (monstruo) {
        case 1:
            monstruo = new Villano ("Lobo", 700, 90, 50, "Clase de villano muy rapido en ataques, pero con una defensa normal.");
            document.write ("<p> TE ENFRENTARAS AL SIGUIENTE VILLANO </p>")
            document.write ("<p> Clase: " + monstruo.clase + "</p>")
            document.write ("<p> Vida: " + monstruo.vida + "</p>")
            document.write ("<p> Ataque: " + monstruo.ataque + "</p>")
            document.write ("<p> Defensa: " + monstruo.defensa + "</p>")
            document.write ("<p> Descripcion: " + monstruo.descripcion + "</p>")
            break;
        case 2:
            monstruo = new Villano ("Orco", 1500, 100, 50, "Clase de villano con un ataque muy poderoso, pero con una defensa fragil.");
            document.write ("<p> TE ENFRENTARAS AL SIGUIENTE VILLANO </p>")
            document.write ("<p> Clase: " + monstruo.clase + "</p>")
            document.write ("<p> Vida: " + monstruo.vida + "</p>")
            document.write ("<p> Ataque: " + monstruo.ataque + "</p>")
            document.write ("<p> Defensa: " + monstruo.defensa + "</p>")
            document.write ("<p> Descripcion: " + monstruo.descripcion + "</p>")
            break;
        case 3:
            monstruo = new Villano ("Esqueleto", 500, 40, 50, "Clase de villano con un ataque debil, pero con una de las mejores defensas.");
            document.write ("<p> TE ENFRENTARAS AL SIGUIENTE VILLANO </p>")
            document.write ("<p> Clase: " + monstruo.clase + "</p>")
            document.write ("<p> Vida: " + monstruo.vida + "</p>")
            document.write ("<p> Ataque: " + monstruo.ataque + "</p>")
            document.write ("<p> Defensa: " + monstruo.defensa + "</p>")
            document.write ("<p> Descripcion: " + monstruo.descripcion + "</p>")
            break;  
        default:
            alert ("Ingrese una de las opciones posibles")    
    }
}

let elegirBoss =  () => {
    elegirBoss = Math.ceil(Math.random() * 3);
    console.log (elegirBoss)
    switch (elegirBoss) {
        case 1:
            elegirBoss = new Villano ("Dragon", 3000, 200, 100, "");
            document.write ("<p> TE ENFRENTARAS AL SIGUIENTE BOSS </p>")
            document.write ("<p> Clase: " + elegirBoss.clase + "</p>")
            document.write ("<p> Vida: " + elegirBoss.vida + "</p>")
            document.write ("<p> Ataque: " + elegirBoss.ataque + "</p>")
            document.write ("<p> Defensa: " + elegirBoss.defensa + "</p>")
            break;
        case 2:
            elegirBoss = new Villano ("Hechicero Supremo", 2500, 250, 120, "");
            document.write ("<p> TE ENFRENTARAS AL SIGUIENTE BOSS </p>")
            document.write ("<p> Clase: " + elegirBoss.clase + "</p>")
            document.write ("<p> Vida: " + elegirBoss.vida + "</p>")
            document.write ("<p> Ataque: " + elegirBoss.ataque + "</p>")
            document.write ("<p> Defensa: " + elegirBoss.defensa + "</p>")
            break;
        case 3:
            elegirBoss = new Villano ("Coloso", 3300, 230, 150, "");
            document.write ("<p> TE ENFRENTARAS AL SIGUIENTE BOSS </p>")
            document.write ("<p> Clase: " + elegirBoss.clase + "</p>")
            document.write ("<p> Vida: " + elegirBoss.vida + "</p>")
            document.write ("<p> Ataque: " + elegirBoss.ataque + "</p>")
            document.write ("<p> Defensa: " + elegirBoss.defensa + "</p>")
            break;  
        default:
            alert ("Ingrese una de las opciones posibles")    
    }
}

document.write ("<hr>")

let acierto = () => {
	let golpeHeroe = Math.ceil(Math.random() * 4);
	document.write ("<p> Golpe de heroe " + golpeHeroe + "</p>");
	let golpeVillano = Math.ceil(Math.random() * 4);
	document.write ("<p> Golpe de villano " + golpeVillano + "</p>");
	return golpeHeroe >= golpeVillano;
};

let i = 0
while (i < 2 && elegirHeroe.vida > 0) {
    if (i == 1) {
        elegirHeroe.vida += 200
        document.write ("<p> Has ganado la primer batalla. Le hemos proporcionado a tu Heroe una recarga de vida. </p>") 
    }
    elegirMonstruo();
    document.write ("<hr>")
    while (elegirHeroe.vida > 0 && monstruo.vida > 0) {
        if (acierto()) {
            monstruo.vida -= elegirHeroe.ataque;
            document.write ("<p> El heroe acerto un golpe al monstruo </p>");
            document.write ("<p> La vida del villano ahora es de: " + monstruo.vida + "</p>");
            document.write ("<hr>")
        } else {
            elegirHeroe.vida -= monstruo.ataque;
            document.write ("<p> El monstruo acerto un golpe a tu heroe </p>");
            document.write ("<p> La vida de tu heroe ahora es de: " + elegirHeroe.vida + "</p>");
            document.write ("<hr>")
        }
    }
    i += 1
}

if (i == 2) {
    elegirHeroe.vida += 600
    elegirHeroe.ataque += 30
    document.write ("<p> Has ganado tu segunda batalla, ahora te enfrentaras al Boss. Le hemos proprocionado a tu Heroe una recarga de vida </p>")
    elegirBoss();
    while (elegirHeroe.vida > 0 && elegirBoss.vida > 0) {
        if (acierto()) {
            elegirBoss.vida -= elegirHeroe.ataque;
            document.write ("<p> El heroe acerto un golpe al monstruo </p>");
            document.write ("<p> La vida del villano ahora es de: " + elegirBoss.vida + "</p>");
            document.write ("<hr>")
        } else {
            elegirHeroe.vida -= elegirBoss.ataque;
            document.write ("<p> El monstruo acerto un golpe a tu heroe </p>");
            document.write ("<p> La vida de tu heroe ahora es de: " + elegirHeroe.vida + "</p>");
            document.write ("<hr>")
        }
    }
}

if (elegirHeroe.vida <= 0 && i < 2) {
    document.write ("<p> Has perdido, tu " + elegirHeroe.clase + " ha caido por los furiosos ataques del " + monstruo.clase + "</p>")
} else if (elegirHeroe.vida <= 0 && i == 2) {
    document.write ("<p> Has perdido, tu " + elegirHeroe.clase + " ha caido por los furiosos ataques del " + elegirBoss.clase + "</p>")
}
else {
    document.write ("<p> Has ganado, el " + elegirBoss.clase + " ha caido derrotado por los furiosos ataques de tu " + elegirHeroe.clase + "</p>")
}