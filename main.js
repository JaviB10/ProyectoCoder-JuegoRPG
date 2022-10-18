//Array donde se alojaran los objetos Personaje y Villano
let personajes = []

//Clases contructoras de objetos
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

//Dependiendo de la eleccion del usuario se crea el objeto deseado (Guerrero - Mago - Arquero)
let eleccionG = document.getElementById ("guerrero")
eleccionG.onclick = () => {
    //Guerrero: Puede tener los siguientes valores 
    // ==> Vida: 100min hasta 200max
    // ==> Ataque: 1min hasta 10max
    // ==> Defensa: 1min hasta 10max
    // ==> Habilidad (Golpe Martillo): 30min hasta 60max
    let vidaGuerrero = () => {
        return Math.floor(Math.random() * (200 - 100 + 1) + 100);
    } 
    personajes.push (new Personaje ("Guerrero", vidaGuerrero(), 1, 10, 1, 10, 30, 60, "Clase de personaje cuya mayor habilidad o principal función es el ataque a corta distancia o cuerpo a cuerpo."));
    ejecucionJuego();
}
let eleccionM = document.getElementById ("mago")    
eleccionM.onclick = () => { 
    //Mago: Puede tener los siguientes valores 
    // ==> Vida: 100min hasta 180max
    // ==> Ataque: 1min hasta 15max
    // ==> Defensa: 1min hasta 20max
    // ==> Habilidad (Golpe Estelar): 30min hasta 60max
    let vidaMago = () => {
        return Math.floor(Math.random() * (180 - 100 + 1) + 100);
    } 
    personajes.push (new Personaje ("Mago", vidaMago(), 1, 15, 1, 20, 30, 60, "Clase de personaje con una defensa debil pero cuya habilidad magica le da un ataque superior al resto."));
    ejecucionJuego();
}
let eleccionA = document.getElementById ("flechero")    
eleccionA.onclick = () => { 
    //Arquero: Puede tener los siguientes valores 
    // ==> Vida: 100min hasta 190max
    // ==> Ataque: 1min hasta 12max
    // ==> Defensa: 1min hasta 20max
    // ==> Habilidad (Lluvia de flechas): 30min hasta 60max
    let vidaArquero = () => {
        return Math.floor(Math.random() * (190 - 100 + 1) + 100);
    } 
    personajes.push (new Personaje ("Arquero", vidaArquero(), 1, 12, 1, 20, 30, 60, "Clase de personaje que efectua ataques a distancia con poco poder pero cuenta con una defensa aceptable."));
    ejecucionJuego();
}

//Al azar se crea un objeto el cual es el villano
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
            
            break; 
    }
}

//Al azar se crea un objeto el cual es el boss
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
            break;   
    }
}

//Funcion encargada de alojar un numero del 1 al 3 la cual decidira el movimiento del heroe
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

//Funcion encargada de alojar un numero del 1 al 3 la cual decidira el movimiento del villano
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

//Funcion encargada de ejecutar el juego cuando el usuario elija un personaje. El heroe se enfrenta a dos villanos y luego al boss, todo esto si sigue con vida, en caso de quedar sin vida en alguno de los combates el codigo finaliza mostrando el resultado
let ejecucionJuego = () => {
    let i = 0
    while (i < 3 && personajes[0].vida > 0) {
        if (i == 1) {
            personajes[0].vida += 100
            document.write ("<p> Has ganado la primer batalla. Le hemos proporcionado a tu Heroe una recarga de vida. </p>")
            document.write ("<hr>")
        }
        if (i == 0 || i == 1){
            elegirMonstruo();
            let containerH = document.createElement ('div')
            containerH.innerHTML += 
            `
            <ul>
                <li>Clase: ${personajes[0].clase}</li>
                <li>Vida: ${personajes[0].vida}</li>
                <li>Ataque: ${personajes[0].ataqueMin} min hasta ${personajes[0].ataqueMax} max</li>
                <li>Defensa: ${personajes[0].defensaMin} min hasta ${personajes[0].defensaMax} max</li>
                <li>Habilidad: ${personajes[0].habilidadMin} min hasta ${personajes[0].habilidadMax} max</li>
                <li>Descripcion: ${personajes[0].descripcion}</li>
            </ul>
            `
            document.body.appendChild(containerH)
            let containerM = document.createElement ('div')
            containerM.innerHTML += 
            `
            <ul>
                <li>Clase: ${personajes[1].clase}</li>
                <li>Vida: ${personajes[1].vida}</li>
                <li>Ataque: ${personajes[1].ataqueMin} min hasta ${personajes[0].ataqueMax} max</li>
                <li>Defensa: ${personajes[1].defensaMin} min hasta ${personajes[0].defensaMax} max</li>
                <li>Habilidad: ${personajes[1].habilidadMin} min hasta ${personajes[0].habilidadMax} max</li>
                <li>Descripcion: ${personajes[1].descripcion}</li>
            </ul>
            `
            document.body.appendChild(containerM)
        }
        if (i == 2){
            personajes[0].vida += 150
            elegirBoss();
            const containerH2 = document.createElement ('div')
            containerH2.innerHTML += 
            `
            <ul>
                <li>Clase: ${personajes[0].clase}</li>
                <li>Vida: ${personajes[0].vida}</li>
                <li>Ataque: ${personajes[0].ataqueMin} min hasta ${personajes[0].ataqueMax} max</li>
                <li>Defensa: ${personajes[0].defensaMin} min hasta ${personajes[0].defensaMax} max</li>
                <li>Habilidad: ${personajes[0].habilidadMin} min hasta ${personajes[0].habilidadMax} max</li>
                <li>Descripcion: ${personajes[0].descripcion}</li>
            </ul>
            `
            document.body.appendChild(containerH2)
            const containerB = document.createElement ('div')
            containerB.innerHTML += 
            `
            <ul>
                <li>Clase: ${personajes[1].clase}</li>
                <li>Vida: ${personajes[1].vida}</li>
                <li>Ataque: ${personajes[1].ataqueMin} min hasta ${personajes[0].ataqueMax} max</li>
                <li>Defensa: ${personajes[1].defensaMin} min hasta ${personajes[0].defensaMax} max</li>
                <li>Habilidad: ${personajes[1].habilidadMin} min hasta ${personajes[0].habilidadMax} max</li>
                <li>Descripcion: ${personajes[1].descripcion}</li>
            </ul>
            `
            document.body.appendChild(containerB)
        }
        while (personajes[0].vida > 0 && personajes[1].vida > 0) {
            queEligeHacerHeroe(decisionH);
            queHaraVillano(decisionV);
            const pulsador = document.createElement ('ATACAR')
            pulsador.onclick = () => {

                //Movimiento de ATAQUE del Heroe
                let movimientoHeroe = document.createElement ('h2')
                movimientoHeroe.innerHTML += `Decidiste ATACAR con tu ${personajes[0].clase}`
                document.body.appendChild(movimientoHeroe)

                //Puntos de ATAQUE conseguidos por el Heroe
                ataqueH = Math.ceil(Math.random() * (personajes[0].ataqueMax));
                let puntajeHeroe = document.createElement ('h2')
                puntajeHeroe.innerHTML += `Consigues un ATAQUE de ${ataqueH}`
                document.body.appendChild(puntajeHeroe)

                if (decisionV == 1) {

                    //Movimiento de ATAQUE del Villano
                    let movimientoVillano = document.createElement ('h2')
                    movimientoVillano.innerHTML += `El villano decidio ATACAR con su ${personajes[1].clase}`
                    document.body.appendChild(movimientoVillano)

                    //Puntos de ATAQUE conseguidos por el Villano
                    ataqueV = Math.ceil(Math.random() * (personajes[1].ataqueMax));
                    let puntajeVillano = document.createElement ('h2')
                    puntajeVillano.innerHTML += `El villano consigues un ATAQUE de ${ataqueV}`
                    document.body.appendChild(puntajeVillano)
                    
                    personajes[1].vida -= ataqueH;
                    personajes[0].vida -= ataqueV;

                    //Vitalidad de los personajes
                    let vitalidadHeroe = document.createElement ('h2')
                    vitalidadHeroe.innerHTML += `La vida de tu heroe es de ${personajes[0].vida}`
                    document.body.appendChild(vitalidadHeroe)
                    let vitalidadVillano = document.createElement ('h2')
                    vitalidadVillano.innerHTML += `La vida del villano es de ${personajes[1].vida}`
                    document.body.appendChild(vitalidadVillano)

                    golpeCritico = 1
                    golpeCriticoV = 1

                } 
                else if (decisionV == 2) {

                    //Movimiento de DEFENSA del Villano
                    let movimientoVillano = document.createElement ('h2')
                    movimientoVillano.innerHTML += `El villano decidio defender con su ${personajes[1].clase}`
                    document.body.appendChild(movimientoVillano)
                    
                    //Puntos de DEFENSA conseguidos por el Villano
                    defensaV = Math.ceil(Math.random() * (personajes[1].defensaMax));
                    let puntajeVillano = document.createElement ('h2')
                    puntajeVillano.innerHTML += `El villano consigues una DEFENSA de ${ataqueV}`
                    document.body.appendChild(puntajeVillano)

                    if (ataqueH > defensaV){
                        ataqueH -= defensaV
                        personajes[1].vida -= ataqueH;
                        //Vitalidad de los personajes
                        let vitalidadHeroe = document.createElement ('h2')
                        vitalidadHeroe.innerHTML += `La vida de tu heroe es de ${personajes[0].vida}`
                        document.body.appendChild(vitalidadHeroe)
                        let vitalidadVillano = document.createElement ('h2')
                        vitalidadVillano.innerHTML += `La vida del villano es de ${personajes[1].vida}`
                        document.body.appendChild(vitalidadVillano)
                        golpeCritico = 1 
                    } else {
                        let sinDaño = document.createElement ('h2')
                        sinDaño.innerHTML += `No se produjo ningun daño al villano, su defensa fue mayor a tu ataque`
                        document.body.appendChild(sinDaño)
                    } 
                } 
                else if (decisionV == 3) {

                    //Movimiento de HABILIDAD del Villano
                    let movimientoVillano = document.createElement ('h2')
                    movimientoVillano.innerHTML += `El villano decidio usar su habilidad con su ${personajes[1].clase}`
                    
                    habilidadGolpe = () => {
                        //Puntos de HABILIDAD conseguidos por el Villano
                        habilidadV = Math.floor(Math.random() * ((personajes[1].habilidadMax) - (personajes[1].habilidadMin) + 1) + (personajes[1].habilidadMin));
                        let puntajeVillano = document.createElement ('h2')
                        puntajeVillano.innerHTML += `El villano consigue un ATAQUE DE HABILIDAD de ${habilidadV}`
                        document.body.appendChild(puntajeVillano)
                        golpeCriticoV = 0
                    } 
                    habilidadGolpe();
                    personajes[1].vida -= ataqueH;
                    personajes[0].vida -= habilidadV;

                    //Vitalidad de los personajes
                    let vitalidadHeroe = document.createElement ('h2')
                    vitalidadHeroe.innerHTML += `La vida de tu heroe es de ${personajes[0].vida}`
                    document.body.appendChild(vitalidadHeroe)
                    let vitalidadVillano = document.createElement ('h2')
                    vitalidadVillano.innerHTML += `La vida del villano es de ${personajes[1].vida}`
                    document.body.appendChild(vitalidadVillano)
                    golpeCritico = 1
                }
            }    
            const pulsador2 = document.createElement ('DEFENDER')
            pulsador2.onclick = () => {

                //Movimiento de DEFENSA del Heroe
                let movimientoHeroe = document.createElement ('h2')
                movimientoHeroe.innerHTML += `Decidiste DEFENDER con tu ${personajes[0].clase}`
                document.body.appendChild(movimientoHeroe)

                //Puntos de DEFENSA conseguidos por el Heroe
                defensaH = Math.ceil(Math.random() * (personajes[0].defensaMax));
                let puntajeHeroe = document.createElement ('h2')
                puntajeHeroe.innerHTML += `Consigues una DEFENSA de ${defensaH}`
                document.body.appendChild(puntajeHeroe)

                if (decisionV == 1){

                    //Movimiento de ATAQUE del villano
                    let movimientoVillano = document.createElement ('h2')
                    movimientoVillano.innerHTML += `El villano decidio ATACAR con su ${personajes[1].clase}`
                    document.body.appendChild(movimientoVillano)
                    
                    //Puntos de ATAQUE conseguidos por el villano
                    ataqueV = Math.ceil(Math.random() * (personajes[1].ataqueMax));
                    let puntajeVillano = document.createElement ('h2')
                    puntajeVillano.innerHTML += `El villano consigues un ATAQUE de ${ataqueV}`
                    document.body.appendChild(puntajeVillano)
                    
                    if (ataqueV > defensaH) {
                        ataqueV -= defensaH
                        personajes[0].vida -= ataqueV;

                        //Vitalidad de los personajes
                        let vitalidadHeroe = document.createElement ('h2')
                        vitalidadHeroe.innerHTML += `La vida de tu heroe es de ${personajes[0].vida}`
                        document.body.appendChild(vitalidadHeroe)
                        let vitalidadVillano = document.createElement ('h2')
                        vitalidadVillano.innerHTML += `La vida del villano es de ${personajes[1].vida}`
                        document.body.appendChild(vitalidadVillano)

                        golpeCriticoV = 1
                    } else {
                        let sinDaño = document.createElement ('h2')
                        sinDaño.innerHTML += `No sufriste ningun daño por parte del villano, tú defensa fue mayor a su ataque`
                        document.body.appendChild(sinDaño)
                    }
                } else if (decisionV == 2) {

                    let sinDaño = document.createElement ('h2')
                    sinDaño.innerHTML += `Tanto tú como el villano defendieron en esta ronda. Ninguno recibe daños`
                    document.body.appendChild(sinDaño)
                    
                } else if (decisionV == 3) {

                    //Movimiento de HABILIDAD del Villano
                    let movimientoVillano = document.createElement ('h2')
                    movimientoVillano.innerHTML += `El villano decidio usar su HABILIDAD con su ${personajes[1].clase}`
                    document.body.appendChild(movimientoVillano)
                    
                    habilidadGolpe = () => {
                        //Puntos de HABILIDAD conseguidos por el villano
                        habilidadV = Math.floor(Math.random() * ((personajes[1].habilidadMax) - (personajes[1].habilidadMin) + 1) + (personajes[1].habilidadMin));
                        let puntajeVillano = document.createElement ('h2')
                        puntajeVillano.innerHTML += `El villano consigue un ATAQUE DE HABILIDAD de ${habilidadV}`
                        document.body.appendChild(puntajeVillano)
                        golpeCriticoV = 0
                    } 
                    habilidadGolpe();
                    if (habilidadV > defensaH) {
                        habilidadV -= defensaH
                        personajes[0].vida -= habilidadV;
                        //Vitalidad de los personajes
                        let vitalidadHeroe = document.createElement ('h2')
                        vitalidadHeroe.innerHTML += `La vida de tu heroe es de ${personajes[0].vida}`
                        document.body.appendChild(vitalidadHeroe)
                        let vitalidadVillano = document.createElement ('h2')
                        vitalidadVillano.innerHTML += `La vida del villano es de ${personajes[1].vida}`
                        document.body.appendChild(vitalidadVillano)
                    } else {
                        let sinDaño = document.createElement ('h2')
                        sinDaño.innerHTML += `No sufriste ningun daño por parte del villano, tú defensa fue mayor a su ataque`
                        document.body.appendChild(sinDaño)
                    }
                }
            }
            const pulsador3 = document.createElement ('HABILIDAD')
            pulsador3.onclick = () => {  
                //Movimiento de HABILIDAD del Heroe
                let movimientoHeroe = document.createElement ('h2')
                movimientoHeroe.innerHTML += `Decidiste HABILIDAD con tu ${personajes[0].clase}`
                document.body.appendChild(movimientoHeroe)
                
                habilidadGolpe = () => {
                    //Puntos de HABILIDAD conseguidos por el Heroe
                    habilidadH = Math.floor(Math.random() * ((personajes[0].habilidadMax) - (personajes[0].habilidadMin) + 1) + (personajes[0].habilidadMin));
                    let puntajeHeroe = document.createElement ('h2')
                    puntajeHeroe.innerHTML += `Consigues un ATAQUE DE HABILIDAD de ${habilidadH}`
                    document.body.appendChild(puntajeHeroe)
                    golpeCritico = 0
                } 
                habilidadGolpe();

                if (decisionV == 1){
                    //Movimiento de ATAQUE del Villano
                    let movimientoVillano = document.createElement ('h2')
                    movimientoVillano.innerHTML += `El villano decidio ATACAR con su ${personajes[1].clase}`
                    document.body.appendChild(movimientoVillano)
                    
                    //Puntos de ATAQUE conseguidos por el Villano
                    ataqueV = Math.ceil(Math.random() * (personajes[1].ataqueMax));
                    let puntajeVillano = document.createElement ('h2')
                    puntajeVillano.innerHTML += `El villano consigues un ATAQUE de ${ataqueV}`
                    document.body.appendChild(puntajeVillano)
                
                    personajes[1].vida -= habilidadH;
                    personajes[0].vida -= ataqueV;

                    //Vitalidad de los personajes
                    let vitalidadHeroe = document.createElement ('h2')
                    vitalidadHeroe.innerHTML += `La vida de tu heroe es de ${personajes[0].vida}`
                    document.body.appendChild(vitalidadHeroe)
                    let vitalidadVillano = document.createElement ('h2')
                    vitalidadVillano.innerHTML += `La vida del villano es de ${personajes[1].vida}`
                    document.body.appendChild(vitalidadVillano)

                    golpeCriticoV = 1
                } else if (decisionV == 2) {
                    //Movimiento de DEFENSA del Villano
                    let movimientoVillano = document.createElement ('h2')
                    movimientoVillano.innerHTML += `El villano decidio DEFENDER con su ${personajes[1].clase}`
                    document.body.appendChild(movimientoVillano)

                    //Puntos de DEFENSA conseguidos por el Villano
                    defensaV = Math.ceil(Math.random() * (personajes[1].defensaMax));
                    let puntajeVillano = document.createElement ('h2')
                    puntajeVillano.innerHTML += `El villano consigues una DEFENSA de ${ataqueV}`
                    document.body.appendChild(puntajeVillano)
                    
                    if (habilidadH > defensaV){
                        habilidadH -= defensaV
                        personajes[1].vida -= habilidadH;
                        //Vitalidad de los personajes
                        let vitalidadHeroe = document.createElement ('h2')
                        vitalidadHeroe.innerHTML += `La vida de tu heroe es de ${personajes[0].vida}`
                        document.body.appendChild(vitalidadHeroe)
                        let vitalidadVillano = document.createElement ('h2')
                        vitalidadVillano.innerHTML += `La vida del villano es de ${personajes[1].vida}`
                        document.body.appendChild(vitalidadVillano)
                        
                    } else {
                        let sinDaño = document.createElement ('h2')
                        sinDaño.innerHTML += `No se produjo ningun daño al villano, su defensa fue mayor a tu ataque`
                        document.body.appendChild(sinDaño)
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
}
