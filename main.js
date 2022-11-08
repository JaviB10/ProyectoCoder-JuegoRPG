//Array donde se alojaran los objetos Personaje
let personajes = []

//Clase contructora de objetos
class Personaje {
    constructor (clase, vidaMin, vidaMax, vida, ataqueMin, ataqueMax, defensaMin, defensaMax, habilidadMin, habilidadMax, descripcion, imagen) {
        this.clase = clase;
        this.vidaMin = vidaMin;
        this.vidaMax = vidaMax;
        this.vida = vida;
        this.ataqueMin = ataqueMin;
        this.ataqueMax = ataqueMax;
        this.defensaMin = defensaMin;
        this.defensaMax = defensaMax;
        this.habilidadMin = habilidadMin;
        this.habilidadMax = habilidadMax;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}

//Al azar se crea un objeto el cual es el Monstruo
let eleccionV = 0
const elegirMonstruo =  () => {
    eleccionV = Math.ceil(Math.random() * 3);
    console.log (eleccionV)
    switch (eleccionV) {
        case 1:
            //WARRIOR WOLF: Puede tener los siguientes valores 
            // ==> Vida: 100min hasta 170max
            // ==> Ataque: 1min hasta 9max
            // ==> Defensa: 1min hasta 5max
            // ==> Habilidad (Mordida Profunda): 20min hasta 50max
            personajes.push (new Personaje ("WARRIOR WOLF", 100, 170, 0, 1, 9, 1, 5, 20, 50, "Clase de villano muy rapido en ataques, pero con una defensa normal.", "./img/warriorWolfJuego.svg"));
            personajes[1].vida = vidaAdquiridaM();
            break;
        case 2:
            //ZOMBIE ORC: Puede tener los siguientes valores 
            // ==> Vida: 100min hasta 210max
            // ==> Ataque: 1min hasta 17max
            // ==> Defensa: 1min hasta 5max
            // ==> Habilidad (Embestida): 40min hasta 70max
            personajes.push (new Personaje ("ZOMBIE ORC", 100, 210, 0, 1, 17, 1, 5, 40, 70, "Clase de villano con un ataque muy poderoso, pero con una defensa fragil.", "./img/zombieOrcJuego.svg"));
            personajes[1].vida = vidaAdquiridaM();
            break;
        case 3:
            //SKELETON: Puede tener los siguientes valores 
            // ==> Vida: 100min hasta 180max
            // ==> Ataque: 1min hasta 8max
            // ==> Defensa: 1min hasta 25max
            // ==> Habilidad (Resurreccion de muertos): 50min hasta 80max
            personajes.push (new Personaje ("SKELETON", 100, 180, 0, 1, 8, 1, 25, 50, 80, "Clase de villano con un ataque debil, pero con una de las mejores defensas.", "./img/skeletonJuego.svg"));
            personajes[1].vida = vidaAdquiridaM();
            break; 
    }
}

//Al azar se crea un objeto el cual es el Boss
let eleccionB = 0
const elegirBoss =  () => {
    eleccionB = Math.ceil(Math.random() * 3);
    console.log (eleccionB)
    switch (eleccionB) {
        case 1:
            //Dragon: Puede tener los siguientes valores 
            // ==> Vida: 150min hasta 250max
            // ==> Ataque: 10min hasta 20max
            // ==> Defensa: 5min hasta 10max
            // ==> Habilidad (BOLAS DE FUEGO): 60min hasta 90max
            personajes.push (new Personaje ("DRAGON", 150, 250, 0, 10, 20, 5, 10, 60, 90, "", "./img/dragonJuego.svg"));
            personajes[1].vida = vidaAdquiridaM();
            break;
        case 2:
            //DRACULA: Puede tener los siguientes valores 
            // ==> Vida: 150min hasta 220max
            // ==> Ataque: 10min hasta 18max
            // ==> Defensa: 5min hasta 10max
            // ==> Habilidad (HIPNOSIS): 60min hasta 90max
            personajes.push (new Personaje ("DRACULA", 150, 220, 0, 10, 18, 5, 10, 60, 90, "", "./img/draculaJuego.svg"));
            personajes[1].vida = vidaAdquiridaM();
            break;
        case 3:
            //DEMONS: Puede tener los siguientes valores 
            // ==> Vida: 150min hasta 240max
            // ==> Ataque: 10min hasta 15max
            // ==> Defensa: 7min hasta 15max
            // ==> Habilidad (PURGATORIO): 60min hasta 90max
            personajes.push (new Personaje ("DEMONS", 150, 240, 0, 10, 15, 7, 15, 60, 90, "", "./img/demonsJuego.svg"));
            personajes[1].vida = vidaAdquiridaM();
            break;   
    }
}

//Estas dos funciones se encargar de darle puntos de vida a los personajes (heroes, monstruos y boss)
const vidaAdquiridaH = () => {
    return Math.floor(Math.random() * (personajes[0].vidaMax - personajes[0].vidaMin + 1) + (personajes[0].vidaMin));
}
const vidaAdquiridaM = () => {
    return Math.floor(Math.random() * ((personajes[1].vidaMax) - (personajes[1].vidaMin) + 1) + ((personajes[1].vidaMin)));
}

//Variables para el Heroe
let ataqueH = 0
let defensaH = 0
let habilidadH = 0
let golpeCriticoH = 0

//Variables para el Villano
let ataqueV = 0
let defensaV = 0
let habilidadV = 0
let golpeCriticoV = 0
let decisionV = 0

//Funcion encargada de alojar un numero del 1 al 3 la cual decidira el movimiento del monstruo o boss
const queHaraMonstruo = () => {
    if (golpeCriticoV >= 3) {
        decisionV = Math.ceil(Math.random() * 3);
        console.log (decisionV)
    } else {
        decisionV = Math.ceil(Math.random() * 2);
        console.log (decisionV)
    }
}


//Funcion encargada de mostrar los personajes (Heroes), los cuales el usuario podra seleccionar para jugar, los mismo se crearan y se guardaran dentro de un array
const elegirHeroe = () => {
    const cambioMusica = document.querySelector("#musicaJuego")
    cambioMusica.innerHTML = `<audio src="./musica/soundtrackEleccion.mp3" autoplay="autoplay" loop="loop"></audio>`
    const seccionHereoEleccion = document.getElementById("nuevoElemento")
    seccionHereoEleccion.innerHTML = 
    `   
    <main class="bannerEleccion" id="batalla">
        <div class="container text-center">
            <div class="row contenedorSegundo">
                <div class="col-12 d-flex align-items-center justify-content-center">
                    <h2 class="tamañoFuenteH2 mensajeEleccion">ESCOGE TU PERSONAJE</h2>
                </div>
                <div class="col-12">
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner centrar">
                            <div class="carousel-item active">
                                <div class="container text-center">
                                    <div class="row">
                                        <div class="col-12">
                                            <img src="./img/knight.png" class="personajesGuerrero rounded-5" alt="Guerrero">
                                        </div>
                                        <div class="col-12">
                                            <img class="btnEleccionPersonaje" src="./img/btnKnight.svg" alt="Boton de eleccion" id="knight">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="carousel-item">
                                <div class="container text-center">
                                    <div class="row">
                                        <div class="col-12">
                                            <img src="./img/wizard.png" class="personajesGuerrero rounded-5" alt="Mago">
                                        </div>
                                        <div class="col-12">
                                            <img class="btnEleccionPersonaje" src="./img/btnWizard.svg" alt="Boton de eleccion" id="wizard">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="container text-center">
                                    <div class="row">
                                        <div class="col-12">
                                            <img src="./img/archer.png" class="personajesGuerrero rounded-5" alt="Arquero">
                                        </div>
                                        <div class="col-12">
                                            <img class="btnEleccionPersonaje" src="./img/btnArcher.svg" alt="Boton de eleccion" id="archer">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
    `
    //Dependiendo de la eleccion del usuario se crea el objeto deseado (Guerrero - Mago - Arquero). El mismo se guarda en un array.
    let eleccionG = document.getElementById ("knight")
    eleccionG.onclick = () => {
        //Guerrero: Puede tener los siguientes valores 
        // ==> Vida: 100min hasta 200max
        // ==> Ataque: 1min hasta 10max
        // ==> Defensa: 1min hasta 15max
        // ==> Habilidad (Golpe Martillo): 30min hasta 60max
        personajes.push (new Personaje ("KNIGHT", 100, 200, 0, 1, 10, 1, 15, 30, 60, "Clase de personaje cuya mayor habilidad o principal función es el ataque a corta distancia o cuerpo a cuerpo.", "./img/knightJuego.svg"));
        personajes[0].vida = vidaAdquiridaH();
        localStorage.setItem ("Heroe", JSON.stringify(personajes[0]));
        mostrarEnemigo();
    }
    let eleccionM = document.getElementById ("wizard")    
    eleccionM.onclick = () => { 
        //Mago: Puede tener los siguientes valores 
        // ==> Vida: 100min hasta 180max
        // ==> Ataque: 1min hasta 15max
        // ==> Defensa: 1min hasta 20max
        // ==> Habilidad (Golpe Estelar): 30min hasta 60max
        personajes.push (new Personaje ("WIZARD", 100, 180, 0, 1, 15, 1, 20, 30, 60, "Clase de personaje con una defensa debil pero cuya habilidad magica le da un ataque superior al resto.", "./img/wizardJuego.svg"));
        personajes[0].vida = vidaAdquiridaH();
        localStorage.setItem ("Heroe", JSON.stringify(personajes[0]));
        mostrarEnemigo();
    }
    let eleccionA = document.getElementById ("archer")    
    eleccionA.onclick = () => { 
        //Arquero: Puede tener los siguientes valores 
        // ==> Vida: 100min hasta 190max
        // ==> Ataque: 1min hasta 12max
        // ==> Defensa: 1min hasta 20max
        // ==> Habilidad (Lluvia de flechas): 30min hasta 60max
        personajes.push (new Personaje ("ARCHER", 100, 190, 0, 1, 12, 1, 20, 30, 60, "Clase de personaje que efectua ataques a distancia con poco poder pero cuenta con una defensa aceptable.", "./img/archerJuego.svg"));
        personajes[0].vida = vidaAdquiridaH();
        localStorage.setItem ("Heroe", JSON.stringify(personajes[0]));
        mostrarEnemigo();
    }
}

let oprimirJugar = document.getElementById("jugar")
oprimirJugar.onclick = () => {
    setTimeout(elegirHeroe, 200);
}

//Funcion encargada de el boss con el que se debera enfrentar el heroe
const mostrarEnemigo = () => {
    elegirMonstruo();
    const cambioMusica = document.querySelector("#musicaJuego")
    cambioMusica.innerHTML = `<audio src="./musica/soundtrackBatalla.mp3" autoplay="autoplay" loop="loop"></audio>`
    const seccionMonstruoEleccion = document.getElementById("nuevoElemento")
    seccionMonstruoEleccion.innerHTML = 
    `
    <main class="bannerEleccion">
        <div class="container text-center">
            <div class="row contenedorPrimero">
                <div class="col-12">
                    <h2 class="tamañoFuenteH2 mensajeEleccion">TU ENEMIGO ES EL SIGUIENTE</h2>
                </div>
                <div class="col-12">
                    <img class="personajesMonstruo rounded-5" alt="Villano" id="villano">
                </div>
                <div class="col-12">
                    <img class="btnIrBatalla" src="./img/btnStartBattle.svg" alt="Boton de comienzo" id="comenzarJuego">
                </div>
            </div>
        </div>
    </main>
    `
    if (eleccionV == 1){
        document.querySelector("#villano").setAttribute('src', "./img/warriorWolf.jpg")
    } else if (eleccionV == 2) {
        document.querySelector("#villano").setAttribute('src', "./img/zombieOrc.jpg")
    } else {
        document.querySelector("#villano").setAttribute('src', "./img/skeleton.jpg")
    }
    document.querySelector("#comenzarJuego").onclick = () => {
        setTimeout(arrancaJuego, 200);
    }
}

//Funcion encargada de el boss con el que se debera enfrentar el heroe
const mostrarBoss = () => {
    elegirBoss();
    const seccionBossEleccion = document.getElementById("nuevoElemento")
    seccionBossEleccion.innerHTML = 
    `
    <main class="bannerEleccion">
        <div class="container text-center">
            <div class="row contenedorPrimero">
                <div class="col-12">
                    <h2 class="tamañoFuenteH2 mensajeEleccion">TU ENEMIGO ES EL SIGUIENTE</h2>
                </div>
                <div class="col-12">
                    <img class="personajesMonstruo rounded-5" alt="Villano" id="villano">
                </div>
                <div class="col-12">
                    <img class="btnIrBatalla" src="./img/btnStartBattle.svg" alt="Boton de comienzo" id="comenzarJuego">
                </div>
            </div>
        </div>
    </main>
    `
    if (eleccionB == 1){
        document.querySelector("#villano").setAttribute('src', "./img/dragon.jpg")
        
    } else if (eleccionB == 2) {
        document.querySelector("#villano").setAttribute('src', "./img/dracula.jpg")
    } else {
        document.querySelector("#villano").setAttribute('src', "./img/demons.jpg")
    }
    document.querySelector("#comenzarJuego").onclick = () => {
        setTimeout(arrancaJuego, 200);
    }
}

const habilitarHabilidad = () => {
    if (golpeCriticoH == 3) {
        document.querySelector("#habilidad").setAttribute('src',"./img/btnHabilidad.svg")
    }
}
const deshabilitarHabilidad = () => {
    document.querySelector("#habilidad").setAttribute('src',"./img/btnHabilidadNula.svg")
}

//Funcion encargada de calcular el golpe de habildiad del monstruo, boss
const habilidadGolpeEnemigo = () => {
    //Puntos de HABILIDAD conseguidos por el Enemigo
    habilidadV = Math.floor(Math.random() * ((personajes[1].habilidadMax) - (personajes[1].habilidadMin) + 1) + (personajes[1].habilidadMin));
    document.querySelector("#puntosM").innerHTML = `El ${personajes[1].clase} consigue un ATAQUE DE HABILIDAD de ${habilidadV} puntos`
    golpeCriticoV = 0
} 

//Funcion encargada de mostrar los puntos de habilidad de los personajes (hereos, monstruos y boss)
const cuantaHabilidadHeroe = () => {
    if (golpeCriticoH == 0) {
        document.querySelector("#habilidadH").innerHTML = `hab = <img class="landscape" src="./img/puntosHabilidadCero.svg" alt="">`
    } else if (golpeCriticoH == 1) {
        document.querySelector("#habilidadH").innerHTML = `hab = <img class="landscape" src="./img/puntosHabilidadUno.svg" alt="">`
    } else if (golpeCriticoH == 2) {
        document.querySelector("#habilidadH").innerHTML = `hab = <img class="landscape" src="./img/puntosHabilidadDos.svg" alt="">`
    } else {
        document.querySelector("#habilidadH").innerHTML = `hab = <img class="landscape" src="./img/puntosHabilidadTres.svg" alt="">`
    }
}
const cuantaHabilidadMonstruo = () => {
    if (golpeCriticoV == 0) {
        document.querySelector("#habilidadM").innerHTML = `hab = <img class="landscape" src="./img/puntosHabilidadCero.svg" alt="">`
    } else if (golpeCriticoV == 1) {
        document.querySelector("#habilidadM").innerHTML = `hab = <img class="landscape" src="./img/puntosHabilidadUno.svg" alt="">`
    } else if (golpeCriticoV == 2) {
        document.querySelector("#habilidadM").innerHTML = `hab = <img class="landscape" src="./img/puntosHabilidadDos.svg" alt="">`
    } else {
        document.querySelector("#habilidadM").innerHTML = `hab = <img class="landscape" src="./img/puntosHabilidadTres.svg" alt="">`
    }
}

//Funcion encargada de mostrar los corazones que le quedan al heroe para utilizar en caso de querer continuar la partida
const cuantosCorazonesHeroe = () => {
    if (corazones == 0) {
        document.querySelector("#vidaContinuarH").innerHTML = `rep = <img class="landscape" src="./img/vidaCero.svg" alt="">`
    } else if (corazones == 1) {
        document.querySelector("#vidaContinuarH").innerHTML = `rep = <img class="landscape" src="./img/vidaUno.svg" alt="">`
    } else if (corazones == 2) {
        document.querySelector("#vidaContinuarH").innerHTML = `rep = <img class="landscape" src="./img/vidaDos.svg" alt="">`
    } else {
        document.querySelector("#vidaContinuarH").innerHTML = `rep = <img class="landscape" src="./img/vidaTres.svg" alt="">`
    }
}

//Funcion donde se desarrolla toda la interfaz principal de la batalla, con los botones principales.
const arrancaJuego = () => {
    const seccionBatalla = document.getElementById("nuevoElemento")
    seccionBatalla.innerHTML = 
    `
    <main class="bannerBatalla">
        <div class="container-fluid text-center">
            <div class="row contenedorTercero">
                <div class="col-6 bannerDatosPersonajes text-center">
                    <h2 class="tamañoFuenteH2"> Class = ${personajes[0].clase}</h2>
                    <h2 class="tamañoFuenteH2" id="vidaH">HP = ${personajes[0].vida}</h2>
                    <h2 class="tamañoFuenteH2" id="atkH"> atk = ${personajes[0].ataqueMin}min a ${personajes[0].ataqueMax}max</h2>
                    <h2 class="tamañoFuenteH2" id="defH"> def = ${personajes[0].defensaMin}min a ${personajes[0].defensaMax}max</h2>
                    <h2 class="tamañoFuenteH2" id="habilidadH"> </h2>
                    <h2 class="tamañoFuenteH2" id="vidaContinuarH"> </h2>
                </div>
                <div class="col-6 bannerDatosPersonajes text-center">
                    <h2 class="tamañoFuenteH2"> Class: ${personajes[1].clase}</h2>
                    <h2 class="tamañoFuenteH2" id="vidaM">HP: ${personajes[1].vida}</h2>
                    <h2 class="tamañoFuenteH2"> atk: ${personajes[1].ataqueMin}min a ${personajes[1].ataqueMax}max</h2>
                    <h2 class="tamañoFuenteH2"> def: ${personajes[1].defensaMin}min a ${personajes[1].defensaMax}max</h2>
                    <h2 class="tamañoFuenteH2" id="habilidadM"> </h2>
                </div>
                <div class="col-6">
                    <img class="jugadorHeroe" src="${personajes[0].imagen}" alt="Personaje Heroe">
                </div>
                <div class="col-6">
                    <img class="jugadorHeroe" src="${personajes[1].imagen}" alt="Personaje Monstruo">
                </div>
                <div class="col-12 barraPrincipal">
                    <div class="container-fluid text-center">
                        <div class="row">
                            <div class="col-6 d-flex flex-column justify-content-around">
                                <h2 class="tamañoFuenteH2" id="movimientoH"></h2>
                                <p id="puntosH"></p>
                                <h2 class="tamañoFuenteH2" id="movimientoM"></h2>
                                <p id="puntosM"></p>
                            </div>
                            <div class="col-6">
                                <div class="container text-center">
                                    <div class="row contenedorAcciones" id="barraAcciones">
                                        <div class="col-4">
                                            <img class="btnAcciones" src="./img/btnAtaque.svg" alt="Boton de ataque" id="atacar">
                                        </div>
                                        <div class="col-4">
                                            <img class="btnAcciones" src="./img/btnDefensa.svg" alt="Boton de defensa" id="defender">
                                        </div>
                                        <div class="col-4" id="btnHabilidad">
                                            
                                        </div>
                                        <div class="col-4">
                                            <img class="btnAcciones" src="./img/btnCofre.svg" alt="Boton de items" id="mochila">
                                        </div>
                                        <div class="col-4">
                                            <img class="btnAcciones" src="./img/btnOpciones.svg" alt="Boton de opciones" id="opcion">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
    `
    document.querySelector("main").classList.remove("bannerPrincipal")
    if (golpeCriticoH < 3) {
        document.querySelector("#btnHabilidad").innerHTML = `<img class="btnAcciones" src="./img/btnHabilidadNula.svg" alt="Boton de habilidad" id="habilidad">`
    } else {
        document.querySelector("#btnHabilidad").innerHTML = `<img class="btnAcciones" src="./img/btnHabilidad.svg" alt="Boton de habilidad" id="habilidad">`
    }
    
    cuantosCorazonesHeroe();
    cuantaHabilidadMonstruo();
    cuantaHabilidadHeroe();
    document.querySelector("#vidaH").innerHTML = `HP = ${personajes[0].vida}`
    document.querySelector("#vidaM").innerHTML = `HP = ${personajes[1].vida}`
    const pulsadorAtaque = document.querySelector('#atacar');
    pulsadorAtaque.onclick = () => {
        //Movimiento de ATAQUE del Heroe
        document.querySelector("#movimientoH").innerHTML = `Tu ${personajes[0].clase} decidio ATACAR`
        //Puntos de ATAQUE conseguidos por el Heroe
        ataqueH = Math.ceil(Math.random() * (personajes[0].ataqueMax));
        document.querySelector("#puntosH").innerHTML = `Tu ${personajes[0].clase} consiguio un ATAQUE de ${ataqueH} puntos`
        queHaraMonstruo();
        if (decisionV == 1){
            //Movimiento de ATAQUE del Villano
            document.querySelector("#movimientoM").innerHTML = `El ${personajes[1].clase} decidio ATACAR`
            //Puntos de ATAQUE conseguidos por el Villano
            ataqueV = Math.ceil(Math.random() * (personajes[1].ataqueMax));
            document.querySelector("#puntosM").innerHTML = `El ${personajes[1].clase} consigues un ATAQUE de ${ataqueV} puntos`
            
            personajes[1].vida -= ataqueH;
            personajes[0].vida -= ataqueV;

            //Vitalidad de los personajes
            document.querySelector("#vidaH").innerHTML = `HP = ${personajes[0].vida}`
            document.querySelector("#vidaM").innerHTML = `HP = ${personajes[1].vida}`

            //Contador de golpes para activar habilidad
            golpeCriticoH += 1
            golpeCriticoV += 1

        } else if (decisionV == 2) {
            //Movimiento de DEFENSA del Villano
            document.querySelector("#movimientoM").innerHTML = `El ${personajes[1].clase} decidio DEFENDER`
            //Puntos de DEFENSA conseguidos por el Villano
            defensaV = Math.ceil(Math.random() * (personajes[1].defensaMax));
            document.querySelector("#puntosM").innerHTML = `El ${personajes[1].clase} consigues una DEFENSA de ${defensaV} puntos`

            if (ataqueH > defensaV){
                ataqueH -= defensaV
                personajes[1].vida -= ataqueH;
                //Vitalidad de los personajes
                document.querySelector("#vidaM").innerHTML = `HP = ${personajes[1].vida}`
                //Contador de golpes para activar habilidad
                golpeCriticoH += 1 
            
            } else {
                golpeCriticoV += 1 
                Swal.fire('La defensa de tu enemigo supero el poder de tu ataque. No le has provocado daño')
            } 
            
        } else if (decisionV == 3) {
            //Movimiento de HABILIDAD del Villano
            document.querySelector("#movimientoM").innerHTML = `El ${personajes[1].clase} decidio usar su HABILIDAD`
            
            habilidadGolpeEnemigo();
            personajes[1].vida -= ataqueH;
            personajes[0].vida -= habilidadV;

            //Vitalidad de los personajes
            document.querySelector("#vidaH").innerHTML = `HP = ${personajes[0].vida}`
            document.querySelector("#vidaM").innerHTML = `HP = ${personajes[1].vida}`
            //Contador de golpes para activar habilidad
            golpeCriticoH += 1
        }
        cuantaHabilidadHeroe();
        cuantaHabilidadMonstruo();
        habilitarHabilidad();
        verificarVida();
    }
    const pulsadorDefensa = document.querySelector('#defender');
    pulsadorDefensa.onclick = () => {
        //Movimiento de DEFENSA del Heroe
        document.querySelector("#movimientoH").innerHTML = `Tu ${personajes[0].clase} decidio DEFENDER`

        //Puntos de DEFENSA conseguidos por el Heroe
        defensaH = Math.ceil(Math.random() * (personajes[0].defensaMax));
        document.querySelector("#puntosH").innerHTML = `Tu ${personajes[0].clase} consigues una DEFENSA de ${defensaH} puntos`
        queHaraMonstruo();
        if (decisionV == 1){
            //Movimiento de ATAQUE del villano
            document.querySelector("#movimientoM").innerHTML = `El ${personajes[1].clase} decidio ATACAR`
                    
            //Puntos de ATAQUE conseguidos por el villano
            ataqueV = Math.ceil(Math.random() * (personajes[1].ataqueMax));
            document.querySelector("#puntosM").innerHTML = `El ${personajes[1].clase} consigues un ATAQUE de ${ataqueV} puntos`
                    
            if (ataqueV > defensaH) {
                ataqueV -= defensaH
                personajes[0].vida -= ataqueV;

                //Vitalidad de los personajes
                document.querySelector("#vidaH").innerHTML = `HP = ${personajes[0].vida}`
                document.querySelector("#vidaM").innerHTML = `HP = ${personajes[1].vida}`
                //Contador de golpes para activar habilidad
                golpeCriticoV += 1

            } else {
                golpeCriticoH += 1

                Swal.fire('Tu defensa supero el poder de tu enemigo. No has recibido daño')
            }
            
        } else if (decisionV == 2) {
            document.querySelector("#puntosH").innerHTML = ``
            document.querySelector("#movimientoM").innerHTML = `El ${personajes[1].clase} decidio DEFENDER`
            document.querySelector("#puntosM").innerHTML = ``
            Swal.fire('Ya que ambos se han defendido ninguno recibe daños')
        } else if (decisionV == 3) {
            //Movimiento de HABILIDAD del Villano
            document.querySelector("#movimientoM").innerHTML = `El ${personajes[1].clase} decidio usar su HABILIDAD`
            
            habilidadGolpeEnemigo();
            if (habilidadV > defensaH) {
                habilidadV -= defensaH
                personajes[0].vida -= habilidadV;
                //Vitalidad de los personajes
                document.querySelector("#vidaH").innerHTML = `HP = ${personajes[0].vida}`
                
            } else {
                Swal.fire('Tu defensa supero el poder de tu enemigo. No has recibido daño')
            }
            
        }
        cuantaHabilidadHeroe();
        cuantaHabilidadMonstruo();
        habilitarHabilidad();
        verificarVida();
    }
    const pulsadorHabilidad = document.querySelector('#habilidad');
    pulsadorHabilidad.onclick = () => {
        if (golpeCriticoH >= 3) {
            deshabilitarHabilidad();
            //Movimiento de HABILIDAD del Heroe
            document.querySelector("#movimientoH").innerHTML = `Tu ${personajes[0].clase} decidio usar su HABILIDAD`

            //Puntos de HABILIDAD conseguidos por el Heroe
            habilidadH = Math.floor(Math.random() * ((personajes[0].habilidadMax) - (personajes[0].habilidadMin) + 1) + (personajes[0].habilidadMin));
            document.querySelector("#puntosH").innerHTML = `Tu ${personajes[0].clase} consigues un ATAQUE DE HABILIDAD de ${habilidadH} puntos`
            //Contador de golpes para activar habilidad
            golpeCriticoH = 0
            queHaraMonstruo();
            if (decisionV == 1){
                //Movimiento de ATAQUE del Villano
                document.querySelector("#movimientoM").innerHTML = `El ${personajes[1].clase} decidio ATACAR`
                
                //Puntos de ATAQUE conseguidos por el Villano
                ataqueV = Math.ceil(Math.random() * (personajes[1].ataqueMax));
                document.querySelector("#puntosM").innerHTML = `El ${personajes[1].clase} consigues un ATAQUE de ${ataqueV} puntos`

                personajes[1].vida -= habilidadH;
                personajes[0].vida -= ataqueV;

                //Vitalidad de los personajes
                document.querySelector("#vidaH").innerHTML = `HP = ${personajes[0].vida}`
                document.querySelector("#vidaM").innerHTML = `HP = ${personajes[1].vida}`
                //Contador de golpes para activar habilidad
                golpeCriticoV += 1
                
            } else if (decisionV == 2) {
                //Movimiento de DEFENSA del Villano
                document.querySelector("#movimientoM").innerHTML = `El ${personajes[1].clase} decidio DEFENDER`

                //Puntos de DEFENSA conseguidos por el Villano
                defensaV = Math.ceil(Math.random() * (personajes[1].defensaMax));
                document.querySelector("#puntosM").innerHTML = `El ${personajes[1].clase} consigues una DEFENSA de ${ataqueV}`
                
                if (habilidadH > defensaV){
                    habilidadH -= defensaV
                    personajes[1].vida -= habilidadH;

                    //Vitalidad de los personajes
                    document.querySelector("#vidaM").innerHTML = `HP = ${personajes[1].vida}`
                    
                } else {
                    golpeCriticoV += 1

                    Swal.fire('La defensa de tu enemigo supero el poder de tu ataque. No le has provocado daño')
                } 
                
            } else if (decisionV == 3) {
                document.querySelector("#movimientoM").innerHTML = `El ${personajes[1].clase} decidio usar su HABILIDAD`
                
                habilidadGolpeEnemigo();
                personajes[1].vida -= habilidadH;
                personajes[0].vida -= habilidadV;
                //Vitalidad de los personajes
                document.querySelector("#vidaH").innerHTML = `HP = ${personajes[0].vida}`
                document.querySelector("#vidaM").innerHTML = `HP = ${personajes[1].vida}`
                
            }
            cuantaHabilidadHeroe();
            cuantaHabilidadMonstruo();
            habilitarHabilidad();
            verificarVida();
        }         
    }
    const pulsadorCofre = document.querySelector('#mochila');
    pulsadorCofre.onclick = () => { 
        btnCofre();
    }
    const pulsadorOpciones = document.querySelector('#opcion');
    pulsadorOpciones.onclick = () => { 
        btnOpcion();
    }
}

//Funcion encargada de mostrar los botones dentro del boton opcion y la funcionalidad de cada uno
const btnOpcion = () => {
    document.querySelector("#barraAcciones").innerHTML = 
    `
    <div class="container text-center">
        <div class="row contenedorAcciones">
            <div class="col-4">
                <img class="btnAcciones" src="./img/btnMusicaOn.svg" alt="Boton para musica" id="musicaOn">
            </div>
            <div class="col-4">
                <img class="btnAcciones" src="./img/btnMusicaOff.svg" alt="Boton para musica" id="musicaOff">
            </div>
            <div class="col-4">
                
            </div>
            <div class="col-4 ">
                <img class="btnAcciones" src="./img/btnAbandonarPartida.svg" alt="Boton para abandonar" id="abandonar">
            </div>
            <div class="col-4">
                <img class="btnAcciones" src="./img/btnVolverAcciones.svg" alt="Boton para volver" id="volverAcciones">
            </div>
            
        </div>
    </div>
    `
    const abandonarPartida = document.querySelector("#abandonar")
    abandonarPartida.onclick = () => {
        Swal.fire({
            title: 'Estas seguro que desea abandonar?',
            text: "Perderas todo el progreso de la pelea.",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, abandonar'
        }).then((result) => {
            if (result.isConfirmed) {
                location.reload()
            }
        })
    }
    const reproducirMusicaOf = document.querySelector("#musicaOff")
    reproducirMusicaOf.onclick = () => {
        let musicaJuego = document.querySelector("#musicaJuego")
        musicaJuego.innerHTML = `<audio  autoplay="autoplay" loop="loop" id="musicaBatalla"></audio>`
    }
    const reproducirMusicaOn = document.querySelector("#musicaOn")
    reproducirMusicaOn.onclick = () => {
        let musicaJuego = document.querySelector("#musicaJuego")
        musicaJuego.innerHTML = `<audio src="./musica/soundtrackBatalla.mp3" autoplay="autoplay" loop="loop" id="musicaBatalla"></audio>` 
    }
    const volverAcciones = document.querySelector("#volverAcciones")
    volverAcciones.onclick = () => {
        arrancaJuego();
    }
}


//Funcion encargada de mostrar los botones dentro de la opcion cofre y la funcionalida de cada uno
let puntoVida = 1
let puntoAtaque = 1
let puntoDefensa = 1
let puntoHabilidad = 1
const btnCofre = () => {
    document.querySelector("#barraAcciones").innerHTML = 
    `
    <div class="container text-center">
        <div class="row contenedorAcciones">
            <div class="col-4 ">
                <img class="btnAcciones" alt="Boton para mas vida" id="masVida">
            </div>
            <div class="col-4">
                <img class="btnAcciones" src="./img/btnMasAtaque.svg" alt="Boton para mas ataque" id="masAtaque">
            </div>
            <div class="col-4">
                <img class="btnAcciones" src="./img/btnMasDefensa.svg" alt="Boton para mas defensa" id="masDefensa">
            </div>
            <div class="col-4">
                <img class="btnAcciones" src="./img/btnMasHabilidad.svg" alt="Boton para punto de habilidad" id="puntoHabilidad">
            </div>
            <div class="col-4">
                <img class="btnAcciones" src="./img/btnVolverAcciones.svg" alt="Boton para volver" id="volverAcciones">
            </div>
        </div>
    </div>
    `
    if (puntoVida == 1) {
        document.querySelector("#masVida").setAttribute('src', "./img/btnMasVida.svg")
    } else {
        document.querySelector("#masVida").setAttribute('src', "./img/btnMasVidaNula.svg")
    }

    if (puntoAtaque == 1) {
        document.querySelector("#masAtaque").setAttribute('src', "./img/btnMasAtaque.svg")
    } else {
        document.querySelector("#masAtaque").setAttribute('src', "./img/btnMasAtaqueNula.svg")
    }

    if (puntoDefensa == 1) {
        document.querySelector("#masDefensa").setAttribute('src', "./img/btnMasDefensa.svg")
    } else {
        document.querySelector("#masDefensa").setAttribute('src', "./img/btnMasDefensaNula.svg")
    }

    if (puntoHabilidad == 1) {
        document.querySelector("#puntoHabilidad").setAttribute('src', "./img/btnMasHabilidad.svg")
    } else {
        document.querySelector("#puntoHabilidad").setAttribute('src', "./img/btnMasHabilidadNula.svg")
    }

    const pulsadorMasVida = document.querySelector("#masVida")
    pulsadorMasVida.onclick = () => {
        if (puntoVida == 1){
            personajes[0].vida += 50
            document.querySelector("#vidaH").innerHTML = `HP = ${personajes[0].vida}`
            document.querySelector("#movimientoH").innerHTML = `Has utilizado una pocion para curarte`
            document.querySelector("#puntosH").innerHTML = ``
            document.querySelector("#movimientoM").innerHTML = ``
            document.querySelector("#puntosM").innerHTML = ``
            puntoVida = 0 
        }
        if (puntoVida == 0){
            document.querySelector("#masVida").setAttribute('src', "./img/btnMasVidaNula.svg")
        }
    }
    const pulsadorMasAtaque = document.querySelector("#masAtaque")
    pulsadorMasAtaque.onclick = () => {
        if (puntoAtaque == 1){
            personajes[0].ataqueMax += 2
            document.querySelector("#atkH").innerHTML = `atk: ${personajes[0].ataqueMin}min a ${personajes[0].ataqueMax}max`
            document.querySelector("#movimientoH").innerHTML = `Has utilizado una pocion para aumentar tu ataque`
            document.querySelector("#puntosH").innerHTML = ``
            document.querySelector("#movimientoM").innerHTML = ``
            document.querySelector("#puntosM").innerHTML = ``
            puntoAtaque = 0
        }
        if (puntoAtaque == 0){
            document.querySelector("#masAtaque").setAttribute('src', "./img/btnMasAtaqueNula.svg")
        }
    }
    const pulsadorMasDefensa = document.querySelector("#masDefensa")
    pulsadorMasDefensa.onclick = () => {
        if (puntoDefensa >= 1){
            personajes[0].defensaMax += 2
            document.querySelector("#defH").innerHTML = `def: ${personajes[0].defensaMin}min a ${personajes[0].defensaMax}max`
            document.querySelector("#movimientoH").innerHTML = `Has utilizado una pocion para aumentar tu defensa`
            document.querySelector("#puntosH").innerHTML = ``
            document.querySelector("#movimientoM").innerHTML = ``
            document.querySelector("#puntosM").innerHTML = ``
            puntoDefensa = 0
        }
        if (puntoDefensa == 0){
            document.querySelector("#masDefensa").setAttribute('src', "./img/btnMasDefensaNula.svg")
        }
    }
    const pulsadorMasHabilidad = document.querySelector("#puntoHabilidad")
    pulsadorMasHabilidad.onclick = () => {
        if (puntoHabilidad >= 1){
            cuantaHabilidadHeroe();
            golpeCriticoH +=1
            document.querySelector("#movimientoH").innerHTML = `Has utilizado una pocion para adquirir un punto de habilidad`
            document.querySelector("#puntosH").innerHTML = ``
            document.querySelector("#movimientoM").innerHTML = ``
            document.querySelector("#puntosM").innerHTML = ``
            puntoHabilidad = 0
        }
        if (puntoHabilidad == 0){
            document.querySelector("#puntoHabilidad").setAttribute('src', "./img/btnMasHabilidadNula.svg")
        }
    }
    const volverAcciones = document.querySelector("#volverAcciones")
    volverAcciones.onclick = () => {
        arrancaJuego();
    }
}

//Funcion encargada de verificar la vida de los personajes y determinar si continua la batalla
let enfrentamiento = 0
const verificarVida = () => {
    if (personajes[0].vida <= 0 && personajes[1].vida > 0) {
        document.querySelector("#barraAcciones").innerHTML =
        `
        <div class="container text-center">
            <div class="row contenedorAcciones d-flex align-content-around">
                <div class="col-12">
                    <img class="btnAcciones" src="./img/btnContinuar.svg" alt="Boton para continuar" id="continuar">
                </div>
                <div class="col-12">
                    <img class="btnAcciones" src="./img/btnAbandonarPartida.svg" alt="Boton para abandonar" id="abandonar">
                </div>
            </div>
        </div>
        `
        document.getElementById ("continuar").onclick = () => { 
            verificarCorazones();
        }
        document.getElementById ("abandonar").onclick = () => { 
            derrotaHeroe();
        }
    }else if (personajes[1].vida <= 0 && enfrentamiento == 0) {
        golpeCriticoV = 0
        personajes.splice(1)
        setTimeout(mostrarEnemigo, 500)
        enfrentamiento = 1
    } else if (personajes[1].vida <= 0 && enfrentamiento == 1) {
        golpeCriticoV = 0
        personajes.splice(1)
        setTimeout(mostrarBoss, 500)
        enfrentamiento = 2
    }
    else if (personajes[1].vida <= 0 && enfrentamiento == 2) {
        setTimeout(victoriaHeroe, 500)
    }
}

//Funcion encargada de verificar si el heroe puede utilizar corazones para continuar con la partida
let corazones = 3
const verificarCorazones = () => {
    if (corazones > 0) {
        personajes[0].vida = vidaAdquiridaH();
        document.querySelector("#vidaH").innerHTML = `HP = ${personajes[0].vida}`
        corazones -= 1
        arrancaJuego();
        document.querySelector("#movimientoH").innerHTML = `Has utilizado una vida para continuar con la batalla`
    } else {
        setTimeout(derrotaHeroe, 500)
    }
}

//Funcion encargada de mostrar en pantalla la victoria del heroe
const victoriaHeroe = () => {
    const cambioMusica = document.querySelector("#musicaJuego")
    cambioMusica.innerHTML = `<audio src="./musica/soundtrackVictoria.mp3" autoplay="autoplay"></audio>`
    const seccionVictoria = document.getElementById("nuevoElemento")
    seccionVictoria.innerHTML = 
    `
    <main class="bannerVictoria">
        <div class="container text-center">
            <div class="row contenedorPrimero">
                <div class="col-12">
                    <h2 class="tamañoFuenteH2 mensajeEleccion">HAS SALIDO VICTORIOSO DEL ENFRENTAMIENTO</h2>
                </div>
                <div class="col-12">
                    <img class="movimientoVictoria" src="./img/victoria.png" alt="Logo de victoria">
                </div>
                <div class="col-12">
                    <img class="btnIrBatalla" src="./img/btnBack.svg" alt="Boton para volver" id="btnVolverInicio">
                </div>
            </div>
        </div>
    </main> 
    `
    document.querySelector("#btnVolverInicio").onclick = () => {
        puntoVida = 1
        puntoAtaque = 1
        puntoDefensa = 1
        puntoHabilidad = 1
        golpeCriticoH = 0
        golpeCriticoV = 0
        corazones = 3
        enfrentamiento = 0
        personajes.splice(0)
        personajes.splice(1)
        elegirHeroe();
    }
}

//Funcion encargada de mostrar en pantalla la derrota del heroe
const derrotaHeroe = () => {
    const cambioMusica = document.querySelector("#musicaJuego")
    cambioMusica.innerHTML = `<audio src="./musica/soundtrackDerrota.mp3" autoplay="autoplay"></audio>`
    const seccionDerrota = document.getElementById("nuevoElemento")
    seccionDerrota.innerHTML = 
    `
    <main class="bannerDerrota">
        <div class="container text-center">
            <div class="row contenedorPrimero">
                <div class="col-12">
                    <h2 class="tamañoFuenteH2 mensajeEleccion">HAS SUFRIDO UNA DERROTA ABISMAL</h2>
                </div>
                <div class="col-12">
                    <img class="movimientoDerrota" src="./img/derrota.png" alt="Logo de derrota">
                </div>
                <div class="col-12">
                    <img class="btnIrBatalla" src="./img/btnBack.svg" alt="Boton para volver" id="btnVolverInicio">
                </div>
            </div>
        </div>
    </main> 
    `
    document.querySelector("#btnVolverInicio").onclick = () => {
        puntoVida = 1
        puntoAtaque = 1
        puntoDefensa = 1
        puntoHabilidad = 1
        golpeCriticoH = 0
        golpeCriticoV = 0
        corazones = 3
        enfrentamiento = 0
        personajes.splice(0)
        personajes.splice(1)
        elegirHeroe();
    }
}








