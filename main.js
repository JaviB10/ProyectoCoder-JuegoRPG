let personajes = []

class Personaje {
    constructor (clase, vida, ataqueMin, ataqueMax, defensaMin, defensaMax, habilidadMin, habilidadMax, descripcion) {
        this.clase = clase;
        this.vida = vida;
        this.ataqueMin = ataqueMin;
        this.ataqueMax = ataqueMax;
        this.defensaMin = defensaMin;
        this.defensaMax = defensaMax;
        this.habilidadMin = habilidadMin;
        this.habilidadMax = habilidadMax;
        this.descripcion = descripcion;
    }
}

class Villano {
    constructor (clase, vida, ataqueMin, ataqueMax, defensaMin, defensaMax, habilidadMin, habilidadMax, descripcion) {
        this.clase = clase;
        this.vida = vida;
        this.ataqueMin = ataqueMin;
        this.ataqueMax = ataqueMax;
        this.defensaMin = defensaMin;
        this.defensaMax = defensaMax;
        this.habilidadMin = habilidadMin;
        this.habilidadMax = habilidadMax;
        this.descripcion = descripcion;
    }
}

let eleccionH = 0

elegirHeroe = () => {
    eleccionH = prompt("Que personaje desea ser para combatir en las batallas \n Opcion 1 : Guerrero \n Opcion 2 : Mago \n Opcion 3 : Arquero"); 
    switch (eleccionH) {
        case "1":
            //Guerrero: Puede tener los siguientes valores 
            // ==> Vida: 100min hasta 200max
            // ==> Ataque: 1min hasta 10max
            // ==> Defensa: 1min hasta 10max
            // ==> Habilidad (Golpe Martillo): 30min hasta 60max
            let vidaGuerrero = () => {
                return Math.floor(Math.random() * (200 - 100 + 1) + 100);
            } 
            personajes.push (new Personaje ("Guerrero", vidaGuerrero(), 1, 10, 1, 10, 30, 60, "Clase de personaje cuya mayor habilidad o principal función es el ataque a corta distancia o cuerpo a cuerpo."));
            document.write ("<p> ELEGISTE AL SIGUIENTE PERSONAJE </p>")
            document.write ("<p> Clase: " + personajes[0].clase + "</p>")
            document.write ("<p> Vida: " + personajes[0].vida + "</p>")
            document.write ("<p> Ataque: " + personajes[0].ataqueMin + "min hasta " + personajes[0].ataqueMax + "max</p>")
            document.write ("<p> Defensa: " + personajes[0].defensaMin + "min hasta " + personajes[0].defensaMax + "max</p>")
            document.write ("<p> Golpe Martillo: " + personajes[0].habilidadMin + "min hasta " + personajes[0].habilidadMax + "max</p>")
            document.write ("<p> Descripcion: " + personajes[0].descripcion + "</p>")
            break;
        case "2":
            //Mago: Puede tener los siguientes valores 
            // ==> Vida: 100min hasta 180max
            // ==> Ataque: 1min hasta 15max
            // ==> Defensa: 1min hasta 20max
            // ==> Habilidad (Golpe Estelar): 30min hasta 60max
            let vidaMago = () => {
                return Math.floor(Math.random() * (180 - 100 + 1) + 100);
            } 
            personajes.push (new Personaje ("Mago", vidaMago(), 1, 15, 1, 20, 30, 60, "Clase de personaje con una defensa debil pero cuya habilidad magica le da un ataque superior al resto."));
            document.write ("<p> ELEGISTE AL SIGUIENTE PERSONAJE </p>")
            document.write ("<p> Clase: " + personajes[0].clase + "</p>")
            document.write ("<p> Vida: " + personajes[0].vida + "</p>")
            document.write ("<p> Ataque: " + personajes[0].ataqueMin + "min hasta " + personajes[0].ataqueMax + "max</p>")
            document.write ("<p> Defensa: " + personajes[0].defensaMin + "min hasta " + personajes[0].defensaMax + "max</p>")
            document.write ("<p> Golpe Estelar: " + personajes[0].habilidadMin + "min hasta " + personajes[0].habilidadMax + "max</p>")
            document.write ("<p> Descripcion: " + personajes[0].descripcion + "</p>")
            break;
        case "3":
            //Arquero: Puede tener los siguientes valores 
            // ==> Vida: 100min hasta 190max
            // ==> Ataque: 1min hasta 12max
            // ==> Defensa: 1min hasta 20max
            // ==> Habilidad (Lluvia de flechas): 30min hasta 60max
            let vidaArquero = () => {
                return Math.floor(Math.random() * (190 - 100 + 1) + 100);
            } 
            personajes.push (new Personaje ("Arquero", vidaArquero(), 1, 12, 1, 20, 30, 60, "Clase de personaje que efectua ataques a distancia con poco poder pero cuenta con una defensa aceptable."));
            document.write ("<p> ELEGISTE AL SIGUIENTE PERSONAJE </p>")
            document.write ("<p> Clase: " + personajes[0].clase + "</p>")
            document.write ("<p> Vida: " + personajes[0].vida + "</p>")
            document.write ("<p> Ataque: " + personajes[0].ataqueMin + "min hasta " + personajes[0].ataqueMax + "max</p>")
            document.write ("<p> Defensa: " + personajes[0].defensaMin + "min hasta " + personajes[0].defensaMax + "max</p>")
            document.write ("<p> Lluvia de flechas: " + personajes[0].habilidadMin + "min hasta " + personajes[0].habilidadMax + "max</p>")
            document.write ("<p> Descripcion: " + personajes[0].descripcion + "</p>")
            break;  
        default:
            alert ("Ingrese una de las opciones posibles")    
    }
}

elegirHeroe();
let eleccionV = 0
elegirMonstruo =  () => {
    eleccionV = Math.ceil(Math.random() * 3);
    console.log (eleccionV)
    switch (eleccionV) {
        case 1:
            //Lobo: Puede tener los siguientes valores 
            // ==> Vida: 100min hasta 170max
            // ==> Ataque: 1min hasta 9max
            // ==> Defensa: 1min hasta 5max
            // ==> Habilidad (Mordida Profunda): 20min hasta 50max
            let vidaLobo = () => {
                return Math.floor(Math.random() * (170 - 100 + 1) + 100);
            } 
            personajes.push (new Villano ("Lobo", vidaLobo(), 1, 9, 1, 5, 20, 50, "Clase de villano muy rapido en ataques, pero con una defensa normal."));
            document.write ("<p> TE ENFRENTARAS AL SIGUIENTE VILLANO </p>")
            document.write ("<p> Clase: " + personajes[1].clase + "</p>")
            document.write ("<p> Vida: " + personajes[1].vida + "</p>")
            document.write ("<p> Ataque: " + personajes[1].ataqueMin + "min hasta " + personajes[1].ataqueMax + "max</p>")
            document.write ("<p> Defensa: " + personajes[1].defensaMin + "min hasta " + personajes[1].defensaMax + "max</p>")
            document.write ("<p> Mordida Profunda: " + personajes[1].habilidadMin + "min hasta " + personajes[1].habilidadMax + "max</p>")
            document.write ("<p> Descripcion: " + personajes[1].descripcion + "</p>")
            break;
        case 2:
            //Orco: Puede tener los siguientes valores 
            // ==> Vida: 100min hasta 210max
            // ==> Ataque: 1min hasta 17max
            // ==> Defensa: 1min hasta 5max
            // ==> Habilidad (Embestida): 40min hasta 70max
            let vidaOrco = () => {
                return Math.floor(Math.random() * (210 - 100 + 1) + 100);
            } 
            personajes.push (new Villano ("Orco", vidaOrco(), 1, 17, 1, 5, 40, 70, "Clase de villano con un ataque muy poderoso, pero con una defensa fragil."));
            document.write ("<p> TE ENFRENTARAS AL SIGUIENTE VILLANO </p>")
            document.write ("<p> Clase: " + personajes[1].clase + "</p>")
            document.write ("<p> Vida: " + personajes[1].vida + "</p>")
            document.write ("<p> Ataque: " + personajes[1].ataqueMin + "min hasta " + personajes[1].ataqueMax + "max</p>")
            document.write ("<p> Defensa: " + personajes[1].defensaMin + "min hasta " + personajes[1].defensaMax + "max</p>")
            document.write ("<p> Embestida: " + personajes[1].habilidadMin + "min hasta " + personajes[1].habilidadMax + "max</p>")
            document.write ("<p> Descripcion: " + personajes[1].descripcion + "</p>")
            break;
        case 3:
            //Esqueleto: Puede tener los siguientes valores 
            // ==> Vida: 100min hasta 180max
            // ==> Ataque: 1min hasta 8max
            // ==> Defensa: 1min hasta 25max
            // ==> Habilidad (Resurreccion de muertos): 50min hasta 80max
            let vidaEsqueleto = () => {
                return Math.floor(Math.random() * (180 - 100 + 1) + 100);
            } 
            personajes.push (new Villano ("Esqueleto", vidaEsqueleto(), 1, 8, 1, 25, 50, 80, "Clase de villano con un ataque debil, pero con una de las mejores defensas."));
            document.write ("<p> TE ENFRENTARAS AL SIGUIENTE VILLANO </p>")
            document.write ("<p> Clase: " + personajes[1].clase + "</p>")
            document.write ("<p> Vida: " + personajes[1].vida + "</p>")
            document.write ("<p> Ataque: " + personajes[1].ataqueMin + "min hasta " + personajes[1].ataqueMax + "max</p>")
            document.write ("<p> Defensa: " + personajes[1].defensaMin + "min hasta " + personajes[1].defensaMax + "max</p>")
            document.write ("<p> Resurreccion de muertos: " + personajes[1].habilidadMin + "min hasta " + personajes[1].habilidadMax + "max</p>")
            document.write ("<p> Descripcion: " + personajes[1].descripcion + "</p>")
            break;  
        default:
            alert ("Ingrese una de las opciones posibles")    
    }
}

let eleccionB = 0
elegirBoss =  () => {
    eleccionB = Math.ceil(Math.random() * 3);
    console.log (eleccionB)
    switch (eleccionB) {
        case 1:
            //Dragon: Puede tener los siguientes valores 
            // ==> Vida: 150min hasta 250max
            // ==> Ataque: 10min hasta 20max
            // ==> Defensa: 5min hasta 10max
            // ==> Habilidad (Bolas de fuego): 60min hasta 90max
            let vidaDragon = () => {
                return Math.floor(Math.random() * (250 - 150 + 1) + 150);
            } 
            personajes.push (new Villano ("Dragon", vidaDragon(), 10, 20, 5, 10, 60, 90, ""));
            document.write ("<p> TE ENFRENTARAS AL SIGUIENTE BOSS </p>")
            document.write ("<p> Clase: " + personajes[1].clase + "</p>")
            document.write ("<p> Vida: " + personajes[1].vida + "</p>")
            document.write ("<p> Ataque: " + personajes[1].ataqueMin + "min hasta " + personajes[1].ataqueMax + "max</p>")
            document.write ("<p> Defensa: " + personajes[1].defensaMin + "min hasta " + personajes[1].defensaMax + "max</p>")
            document.write ("<p> Bolas de Fuego: " + personajes[1].habilidadMin + "min hasta " + personajes[1].habilidadMax + "max</p>")
            break;
        case 2:
            //Hechicero Supremo: Puede tener los siguientes valores 
            // ==> Vida: 150min hasta 220max
            // ==> Ataque: 10min hasta 18max
            // ==> Defensa: 5min hasta 10max
            // ==> Habilidad (Conjuro Maldito): 60min hasta 90max
            let vidaHechicero = () => {
                return Math.floor(Math.random() * (220 - 150 + 1) + 150);
            }
            personajes.push (new Villano ("Hechicero Supremo", vidaHechicero(), 10, 18, 5, 10, 60, 90, ""));
            document.write ("<p> TE ENFRENTARAS AL SIGUIENTE BOSS </p>")
            document.write ("<p> Clase: " + personajes[1].clase + "</p>")
            document.write ("<p> Vida: " + personajes[1].vida + "</p>")
            document.write ("<p> Ataque: " + personajes[1].ataqueMin + "min hasta " + personajes[1].ataqueMax + "max</p>")
            document.write ("<p> Defensa: " + personajes[1].defensaMin + "min hasta " + personajes[1].defensaMax + "max</p>")
            document.write ("<p> Cojuro Maldito: " + personajes[1].habilidadMin + "min hasta " + personajes[1].habilidadMax + "max</p>")
            break;
        case 3:
            //Coloso: Puede tener los siguientes valores 
            // ==> Vida: 150min hasta 240max
            // ==> Ataque: 10min hasta 15max
            // ==> Defensa: 7min hasta 15max
            // ==> Habilidad (Puño de Hierro): 60min hasta 90max
            let vidaColoso = () => {
                return Math.floor(Math.random() * (240 - 150 + 1) + 150);
            }
            personajes.push (new Villano ("Coloso", vidaColoso(), 10, 15, 7, 15, 60, 90, ""));
            document.write ("<p> TE ENFRENTARAS AL SIGUIENTE BOSS </p>")
            document.write ("<p> Clase: " + personajes[1].clase + "</p>")
            document.write ("<p> Vida: " + personajes[1].vida + "</p>")
            document.write ("<p> Ataque: " + personajes[1].ataqueMin + "min hasta " + personajes[1].ataqueMax + "max</p>")
            document.write ("<p> Defensa: " + personajes[1].defensaMin + "min hasta " + personajes[1].defensaMax + "max</p>")
            document.write ("<p> Puño de Hierro: " + personajes[1].habilidadMin + "min hasta " + personajes[1].habilidadMax + "max</p>")
            break;  
        default:
            alert ("Ingrese una de las opciones posibles")    
    }
}

document.write ("<hr>")

let ataqueH = 0
let defensaH = 0
let habilidadH = 0
let golpeCritico = 0
let decisionH = 0
queEligeHacerHeroe = () => {
    
    if (golpeCritico >= 3) {
        decisionH = Math.ceil(Math.random() * 3);
    }
    decisionH = Math.ceil(Math.random() * 2);
}

let ataqueV = 0
let defensaV = 0
let habilidadV = 0
let golpeCriticoV = 0
let decisionV = 0
queHaraVillano = () => {
    if (golpeCriticoV >= 3) {
        decisionV = Math.ceil(Math.random() * 3);
    }
    decisionV = Math.ceil(Math.random() * 2);
}

let i = 0
while (i < 3 && personajes[0].vida > 0) {
    if (i == 1) {
        personajes[0].vida += 100
        document.write ("<p> Has ganado la primer batalla. Le hemos proporcionado a tu Heroe una recarga de vida. </p>")
        document.write ("<hr>")
    }
    if (i == 0 || i == 1){
        elegirMonstruo();
        document.write ("<hr>")
    }
    if (i == 2){
        personajes[0].vida += 150
        document.write ("<p> Has ganado tu segunda batalla, ahora te enfrentaras al Boss. Le hemos proprocionado a tu Heroe una recarga de vida </p>")
        document.write ("<hr>")
        elegirBoss();
        document.write ("<hr>")
    }
    while (personajes[0].vida > 0 && personajes[1].vida > 0) {
        queEligeHacerHeroe(decisionH);
        queHaraVillano(decisionV);
        if (decisionH == 1) {
            document.write ("<p> Decidiste ATACAR con tu " + personajes[0].clase + "</p>")
            if (decisionV == 1){
                document.write ("<p> El villano decidio ATACAR con su " + personajes[1].clase + "</p>")
                ataqueH = Math.ceil(Math.random() * (personajes[0].ataqueMax));
                document.write ("<p> Consigues un ATAQUE de " + ataqueH + "</p>")
                ataqueV = Math.ceil(Math.random() * (personajes[1].ataqueMax));
                document.write ("<p> El villano consigue un ATAQUE de " + ataqueV + "</p>")
                personajes[1].vida -= ataqueH;
                personajes[0].vida -= ataqueV;
                document.write ("<p> La vida del villano es de " + personajes[1].vida + "</p>")
                document.write ("<p> La vida de tu heroe es de " + personajes[0].vida + "</p>")
                golpeCritico = 1
                golpeCriticoV = 1
                continue;
            } else if (decisionV == 2) {
                document.write ("<p> El villano decidio DEFENDER con su " + personajes[1].clase + "</p>")
                ataqueH = Math.ceil(Math.random() * (personajes[0].ataqueMax));
                document.write ("<p> Consigues un ATAQUE de " + ataqueH + "</p>")
                defensaV = Math.ceil(Math.random() * (personajes[1].defensaMax));
                document.write ("<p> El villano consigue una DEFENSA de " + defensaV + "</p>")
                if (ataqueH > defensaV){
                    ataqueH -= defensaV
                    personajes[1].vida -= ataqueH;
                    document.write ("<p> La vida del villano es de " + personajes[1].vida + "</p>")
                    golpeCritico = 1 
                } else {
                    document.write ("<p> No se produjo ningun daño al villano, su defensa fue mayor a tu ataque </p>")
                } 
            } else if (decisionV == 3) {
                document.write ("<p> El villano decidio usar su HABILIDAD con su " + personajes[1].clase + "</p>")
                ataqueH = Math.ceil(Math.random() * (personajes[0].ataqueMax));
                document.write ("<p> Consigues un ATAQUE de " + ataqueH + "</p>")
                habilidadGolpe = () => {
                    habilidadV = Math.floor(Math.random() * ((personajes[1].habilidadMax) - (personajes[1].habilidadMin) + 1) + (personajes[1].habilidadMin));
                    document.write ("<p> El villano consigue un ATAQUE DE HABILIDAD de " + defensaV + "</p>")
                    golpeCriticoV = 0
                } 
                habilidadGolpe();
                personajes[1].vida -= ataqueH;
                personajes[0].vida -= habilidadV;
                document.write ("<p> La vida del villano es de " + personajes[1].vida + "</p>")
                document.write ("<p> La vida de tu heroe es de " + personajes[0].vida + "</p>")
                golpeCritico = 1
            }
        } else if (decisionH == 2) {
            document.write ("<p> Decidiste DEFENDER con tu " + personajes[0].clase + "</p>")
            if (decisionV == 1){
                document.write ("<p> El villano decidio ATACAR con su " + personajes[1].clase + "</p>")
                defensaH = Math.ceil(Math.random() * (personajes[0].defensaMax));
                document.write ("<p> Consigues una DEFENSA de " + defensaV + "</p>")
                ataqueV = Math.ceil(Math.random() * (personajes[1].ataqueMax));
                document.write ("<p> El villano consigue un ATAQUE de " + defensaV + "</p>")
                if (ataqueV > defensaH) {
                    ataqueV -= defensaH
                    personajes[0].vida -= ataqueV;
                    document.write ("<p> La vida de tu heroe es de " + personajes[0].vida + "</p>")
                    golpeCriticoV = 1
                } else {
                    document.write ("No sufriste ningun daño por parte del villano, tú defensa fue mayor a su ataque")
                }
            } else if (decisionV == 2) {
                document.write ("Tanto tú como el villano defendieron en esta ronda. Ninguno recibe daños")
            } else if (decisionV == 3) {
                document.write ("<p> El villano decidio usar su HABILIDAD con su " + personajes[1].clase + "</p>")
                defensaH = Math.ceil(Math.random() * (personajes[0].defensaMax));
                document.write ("<p> Consigues una DEFENSA de " + defensaV + "</p>")
                habilidadGolpe = () => {
                    habilidadV = Math.floor(Math.random() * ((personajes[1].habilidadMax) - (personajes[1].habilidadMin) + 1) + (personajes[1].habilidadMin));
                    document.write ("<p> El villano consigue un ATAQUE DE HABILIDAD de " + defensaV + "</p>")
                    golpeCriticoV = 0
                } 
                habilidadGolpe();
                if (habilidadV > defensaH) {
                    habilidadV -= defensaH
                    personajes[0].vida -= habilidadV;
                    document.write ("<p> La vida de tu heroe es de " + personajes[0].vida + "</p>")
                } else {
                    document.write ("No sufriste ningun daño por parte del villano, tú defensa fue mayor a su ataque")
                }
            }
        } else if (decisionH == 3) {
            document.write ("<p> Decidiste usar la HABILIDAD de tu " + personajes[0].clase + "</p>")
            if (decisionV == 1){
                document.write ("<p> El villano decidio ATACAR con su " + personajes[1].clase + "</p>")
                habilidadGolpe = () => {
                    habilidadH = Math.floor(Math.random() * ((personajes[0].habilidadMax) - (personajes[0].habilidadMin) + 1) + (personajes[0].habilidadMin));
                    document.write ("<p> Consigues un ATAQUE DE HABILIDAD de " + defensaV + "</p>")
                    golpeCritico = 0
                } 
                habilidadGolpe();
                ataqueV = Math.ceil(Math.random() * (personajes[1].ataqueMax));
                document.write ("<p> El villano consigue un ATAQUE de " + ataqueV + "</p>")
                personajes[1].vida -= habilidadH;
                personajes[0].vida -= ataqueV;
                document.write ("<p> La vida del villano es de " + personajes[1].vida + "</p>")
                document.write ("<p> La vida de tu heroe es de " + personajes[0].vida + "</p>")
                golpeCriticoV = 1
            } else if (decisionV == 2) {
                document.write ("<p> El villano decidio DEFENDER con su " + personajes[1].clase + "</p>")
                habilidadGolpe = () => {
                    habilidadH = Math.floor(Math.random() * ((personajes[0].habilidadMax) - (personajes[0].habilidadMin) + 1) + (personajes[0].habilidadMin));
                    document.write ("<p> Consigues un ATAQUE DE HABILIDAD de " + defensaV + "</p>")
                    golpeCritico = 0
                } 
                habilidadGolpe();
                defensaV = Math.ceil(Math.random() * (personajes[1].defensaMax));
                document.write ("<p> El villano consigue una DEFENSA de " + defensaV + "</p>")
                if (habilidadH > defensaV){
                    habilidadH -= defensaV
                    personajes[1].vida -= habilidadH;
                    document.write ("<p> La vida del villano es de " + personajes[1].vida + "</p>")
                } else {
                    document.write ("No se produjo ningun daño al villano, su defensa fue mayor a tu ataque")
                } 
            } else if (decisionV == 3) {
                document.write ("<p> El villano decidio usar su HABILIDAD con su " + personajes[1].clase + "</p>")
                habilidadGolpe = () => {
                    habilidadH = Math.floor(Math.random() * ((personajes[0].habilidadMax) - (personajes[0].habilidadMin) + 1) + (personajes[0].habilidadMin));
                    document.write ("<p> Consigues un ATAQUE DE HABILIDAD de " + defensaV + "</p>")
                    golpeCritico = 0
                } 
                habilidadGolpe();
                habilidadGolpeV = () => {
                    habilidadV = Math.floor(Math.random() * ((personajes[1].habilidadMax) - (personajes[1].habilidadMin) + 1) + (personajes[1].habilidadMin));
                    document.write ("<p> El villano consigue un ATAQUE DE HABILIDAD de " + defensaV + "</p>")
                    golpeCriticoV = 0
                } 
                habilidadGolpeV();
                personajes[1].vida -= habilidadH;
                personajes[0].vida -= habilidadV;
                document.write ("<p> La vida del villano es de " + personajes[1].vida + "</p>")
                document.write ("<p> La vida de tu heroe es de " + personajes[0].vida + "</p>")
            }
        }
    }
    i += 1
    if (i < 3 && personajes[0].vida > 0) {
        personajes.splice(1); 
    }
    
}    

if (personajes[0].vida <= 0) {
    document.write ("<p> Has perdido, tu " + personajes[0].clase + " ha caido por los furiosos ataques del " + personajes[1].clase + "</p>")
} 
else {
    document.write ("<p> Has ganado, el " + personajes[1].clase + " ha caido derrotado por los furiosos ataques de tu " + personajes[0].clase + "</p>")
} 