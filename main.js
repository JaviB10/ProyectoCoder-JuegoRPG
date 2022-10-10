let personajes = []

class Personaje {
    constructor (clase, vida, ataque, defensa, habilidad, descripcion) {
        this.clase = clase;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.habilidad = habilidad;
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

let eleccion = 0

elegirHeroe = () => {
    eleccion = prompt('Opcion 1 : Guerrero - Opcion 2 : Mago - Opcion 3 : Arquero = Ingrese una de las opciones para escoger una personaje: '); 
    switch (eleccion) {
        case "1":
            personajes.push (new Personaje ("Guerrero", 1000, 60, 50, 170, "Clase de personaje cuya mayor habilidad o principal función es el ataque a corta distancia o cuerpo a cuerpo."));
            document.write ("<p> ELEGISTE AL SIGUIENTE PERSONAJE </p>")
            document.write ("<p> Clase: " + personajes[0].clase + "</p>")
            document.write ("<p> Vida: " + personajes[0].vida + "</p>")
            document.write ("<p> Ataque: " + personajes[0].ataque + "</p>")
            document.write ("<p> Defensa: " + personajes[0].defensa + "</p>")
            document.write ("<p> Golpe Martillo: " + personajes[0].habilidad + "</p>")
            document.write ("<p> Descripcion: " + personajes[0].descripcion + "</p>")
            break;
        case "2":
            personajes.push (new Personaje ("Mago", 800, 80, 50, 190, "Clase de personaje con una defensa debil pero cuya habilidad magica le da un ataque superior al resto."));
            document.write ("<p> ELEGISTE AL SIGUIENTE PERSONAJE </p>")
            document.write ("<p> Clase: " + personajes[0].clase + "</p>")
            document.write ("<p> Vida: " + personajes[0].vida + "</p>")
            document.write ("<p> Ataque: " + personajes[0].ataque + "</p>")
            document.write ("<p> Defensa: " + personajes[0].defensa + "</p>")
            document.write ("<p> Golpe Estelar: " + personajes[0].habilidad + "</p>")
            document.write ("<p> Descripcion: " + personajes[0].descripcion + "</p>")
            break;
        case "3":
            personajes.push (new Personaje ("Arquero", 900, 50, 50, 165, "Clase de personaje que efectua ataques a distancia con poco poder pero cuenta con una defensa aceptable."));
            document.write ("<p> ELEGISTE AL SIGUIENTE PERSONAJE </p>")
            document.write ("<p> Clase: " + personajes[0].clase + "</p>")
            document.write ("<p> Vida: " + personajes[0].vida + "</p>")
            document.write ("<p> Ataque: " + personajes[0].ataque + "</p>")
            document.write ("<p> Defensa: " + personajes[0].defensa + "</p>")
            document.write ("<p> Lluvia de Flechas: " + personajes[0].habilidad + "</p>")
            document.write ("<p> Descripcion: " + personajes[0].descripcion + "</p>")
            break;  
        default:
            alert ("Ingrese una de las opciones posibles")    
    }
}

elegirHeroe();

elegirMonstruo =  () => {
    eleccion = Math.ceil(Math.random() * 3);
    console.log (eleccion)
    switch (eleccion) {
        case 1:
            personajes.push (new Villano ("Lobo", 700, 90, 50, "Clase de villano muy rapido en ataques, pero con una defensa normal."));
            document.write ("<p> TE ENFRENTARAS AL SIGUIENTE VILLANO </p>")
            document.write ("<p> Clase: " + personajes[1].clase + "</p>")
            document.write ("<p> Vida: " + personajes[1].vida + "</p>")
            document.write ("<p> Ataque: " + personajes[1].ataque + "</p>")
            document.write ("<p> Defensa: " + personajes[1].defensa + "</p>")
            document.write ("<p> Descripcion: " + personajes[1].descripcion + "</p>")
            break;
        case 2:
            personajes.push (new Villano ("Orco", 1500, 100, 50, "Clase de villano con un ataque muy poderoso, pero con una defensa fragil."));
            document.write ("<p> TE ENFRENTARAS AL SIGUIENTE VILLANO </p>")
            document.write ("<p> Clase: " + personajes[1].clase + "</p>")
            document.write ("<p> Vida: " + personajes[1].vida + "</p>")
            document.write ("<p> Ataque: " + personajes[1].ataque + "</p>")
            document.write ("<p> Defensa: " + personajes[1].defensa + "</p>")
            document.write ("<p> Descripcion: " + personajes[1].descripcion + "</p>")
            break;
        case 3:
            personajes.push (new Villano ("Esqueleto", 500, 40, 50, "Clase de villano con un ataque debil, pero con una de las mejores defensas."));
            document.write ("<p> TE ENFRENTARAS AL SIGUIENTE VILLANO </p>")
            document.write ("<p> Clase: " + personajes[1].clase + "</p>")
            document.write ("<p> Vida: " + personajes[1].vida + "</p>")
            document.write ("<p> Ataque: " + personajes[1].ataque + "</p>")
            document.write ("<p> Defensa: " + personajes[1].defensa + "</p>")
            document.write ("<p> Descripcion: " + personajes[1].descripcion + "</p>")
            break;  
        default:
            alert ("Ingrese una de las opciones posibles")    
    }
}

elegirBoss =  () => {
    eleccion = Math.ceil(Math.random() * 3);
    console.log (eleccion)
    switch (eleccion) {
        case 1:
            personajes.push (new Villano ("Dragon", 3000, 200, 100, ""));
            document.write ("<p> TE ENFRENTARAS AL SIGUIENTE BOSS </p>")
            document.write ("<p> Clase: " + personajes[2].clase + "</p>")
            document.write ("<p> Vida: " + personajes[2].vida + "</p>")
            document.write ("<p> Ataque: " + personajes[2].ataque + "</p>")
            document.write ("<p> Defensa: " + personajes[2].defensa + "</p>")
            break;
        case 2:
            personajes.push (new Villano ("Hechicero Supremo", 2500, 250, 120, ""));
            document.write ("<p> TE ENFRENTARAS AL SIGUIENTE BOSS </p>")
            document.write ("<p> Clase: " + personajes[2].clase + "</p>")
            document.write ("<p> Vida: " + personajes[2].vida + "</p>")
            document.write ("<p> Ataque: " + personajes[2].ataque + "</p>")
            document.write ("<p> Defensa: " + personajes[2].defensa + "</p>")
            break;
        case 3:
            personajes.push (new Villano ("Coloso", 3300, 230, 150, ""));
            document.write ("<p> TE ENFRENTARAS AL SIGUIENTE BOSS </p>")
            document.write ("<p> Clase: " + personajes[2].clase + "</p>")
            document.write ("<p> Vida: " + personajes[2].vida + "</p>")
            document.write ("<p> Ataque: " + personajes[2].ataque + "</p>")
            document.write ("<p> Defensa: " + personajes[2].defensa + "</p>")
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
while (i < 2 && personajes[0].vida > 0) {
    if (i == 1) {
        personajes[0].vida += 200
        document.write ("<p> Has ganado la primer batalla. Le hemos proporcionado a tu Heroe una recarga de vida. </p>")
        document.write ("<hr>")
        personajes.splice(1) 
    }
    elegirMonstruo();
    document.write ("<hr>")
    while (personajes[0].vida > 0 && personajes[1].vida > 0) {
        if (acierto()) {
            personajes[1].vida -= personajes[0].ataque;
            document.write ("<p> El heroe acerto un golpe al monstruo </p>");
            document.write ("<p> La vida del villano ahora es de: " + personajes[1].vida + "</p>");
            document.write ("<hr>")
        } else {
            personajes[0].vida -= personajes[1].ataque;
            document.write ("<p> El monstruo acerto un golpe a tu heroe </p>");
            document.write ("<p> La vida de tu heroe ahora es de: " + personajes[0].vida + "</p>");
            document.write ("<hr>")
        }
    }
    i += 1
}

let golpeCritico = 0
if (i == 2) {
    personajes[0].vida += 600
    personajes[0].ataque += 30
    document.write ("<p> Has ganado tu segunda batalla, ahora te enfrentaras al Boss. Le hemos proprocionado a tu Heroe una recarga de vida </p>")
    document.write ("<hr>")
    elegirBoss();
    document.write ("<hr>")
    while (personajes[0].vida > 0 && personajes[2].vida > 0) {
        if (acierto()) {
            if (golpeCritico == 3){
                personajes[2].vida -= personajes[0].habilidad;
                document.write ("<p> El heroe acerto un golpe critico al boss </p>");
                document.write ("<p> La vida del villano ahora es de: " + personajes[2].vida + "</p>");
                document.write ("<hr>")
                golpeCritico = 0
            }else {
                personajes[2].vida -= personajes[0].ataque;
                document.write ("<p> El heroe acerto un golpe al boss </p>");
                document.write ("<p> La vida del villano ahora es de: " + personajes[2].vida + "</p>");
                document.write ("<hr>")
                golpeCritico += 1
            }
        } else {
            personajes[0].vida -= personajes[2].ataque;
            document.write ("<p> El boss acerto un golpe a tu heroe </p>");
            document.write ("<p> La vida de tu heroe ahora es de: " + personajes[0].vida + "</p>");
            document.write ("<hr>")
        }
    }
}

if (personajes[0].vida <= 0 && i < 2) {
    document.write ("<p> Has perdido, tu " + personajes[0].clase + " ha caido por los furiosos ataques del " + personajes[1].clase + "</p>")
} else if (personajes[0].vida <= 0 && i == 2) {
    document.write ("<p> Has perdido, tu " + personajes[0].clase + " ha caido por los furiosos ataques del " + personajes[2].clase + "</p>")
}
else {
    document.write ("<p> Has ganado, el " + personajes[2].clase + " ha caido derrotado por los furiosos ataques de tu " + personajes[0].clase + "</p>")
}

