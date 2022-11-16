const nuevaSeccion = document.querySelector("#nuevoElemento")
const nuevaMusica = document.querySelector("#musicaJuego")

//Array donde se alojaran los objetos Personaje.
let personajes = []

//Clase contructora de objetos la cual alojara los datos que tendra cada personaje.
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

//Funcion la cual nos llevara a la siguiente pantalla del juego
const oprimirJugar = document.querySelector("#jugar")
oprimirJugar.onclick = () => {
    pantallaCarga();
    setTimeout(elegirHeroe,2000)
}
const ultimoHeroe = document.querySelector("#ultimoHeroe")
ultimoHeroe.onclick = () => {
    const lastHero = localStorage.getItem("heroe")
    if (lastHero == null) {
        Swal.fire(`TODAVIA NO HAS UTILIZADO NINGUN PERSONAJE`)
    } else {
        Swal.fire(`EL ULTIMO PERSONAJE UTILIZADO FUE ${lastHero}`)
    }
        
}

//Funcion que muestra una pantalla que simula una espera para cargar la siguiente pantalla 
const pantallaCarga = () => {
    nuevaSeccion.innerHTML = 
    `
    <div class="position-absolute bottom-0 end-1 translate-middle-y" id="contenedorCarga">

            <div id="carga">

            </div>

    </div>
    `
    nuevaSeccion.classList.remove("bannerPrincipal")
    let eleccionImagen = Math.ceil(Math.random() * 4);
    if (eleccionImagen == 1) {
        nuevaSeccion.classList.add("bannerCarga")
    } else if (eleccionImagen == 2) {
        nuevaSeccion.classList.add("bannerCargaDos")
    } else if (eleccionImagen == 3) {
        nuevaSeccion.classList.add("bannerCargaTres")
    } else {
        nuevaSeccion.classList.add("bannerCargaCuatro")
    }
    nuevaMusica.innerHTML = ``
}

//Funcion encargada de mostrar los personajes (Heroes), los cuales el usuario podra seleccionar para jugar, los mismo se crearan mediante un constructor el cual tendra informacion de los datos del JSON, y se guardaran dentro de un array
const elegirHeroe = () => {
    nuevaMusica.innerHTML = `<audio src="./assets/musica/soundtrackEleccion.mp3" autoplay="autoplay" loop="loop"></audio>`
    nuevaSeccion.innerHTML = 
    `   
    <main class="bannerEleccion" id="batalla">

        <div class="container text-center">

            <div class="row contenedorSegundo">

                <div class="col-12 d-flex align-items-center justify-content-center">

                    <h2 class="tamañoFuenteH2 mensajeEleccion colorBlanco">SELECT YOUR CHARACTER</h2>

                </div>
                <div class="col-12">

                    <div class="carousel slide" id="carouselExampleCaptions" data-bs-ride="false">

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
                                        
                                            <img class="personajesGuerrero rounded-5" src="./assets/img/personajes/knight.jpg" alt="Guerrero">

                                        </div>
                                        <div class="col-12">

                                            <img class="btnEleccionPersonaje" id="knight" src="./assets/img/btns/btnKnight.png" alt="Boton de eleccion">

                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div class="carousel-item">

                                <div class="container text-center">

                                    <div class="row">

                                        <div class="col-12">

                                            <img class="personajesGuerrero rounded-5" src="./assets/img/personajes/wizard.jpg" alt="Mago">

                                        </div>
                                        <div class="col-12">

                                            <img class="btnEleccionPersonaje" id="wizard" src="./assets/img/btns/btnWizard.png" alt="Boton de eleccion">

                                        </div>

                                    </div>

                                </div>

                            </div>
                            <div class="carousel-item">

                                <div class="container text-center">

                                    <div class="row">

                                        <div class="col-12">

                                            <img class="personajesGuerrero rounded-5" src="./assets/img/personajes/archer.jpg" alt="Arquero">

                                        </div>
                                        <div class="col-12">

                                            <img class="btnEleccionPersonaje" id="archer" src="./assets/img/btns/btnArcher.png" alt="Boton de eleccion">

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
    //Dependiendo de la eleccion del usuario se crea el objeto deseado (KNIGHT - WIZARD - ARCHER). El mismo se guarda en un array.
    const eleccionG = document.querySelector ("#knight")
    eleccionG.onclick = () => {
        obtenerApiLocalKnight();
    }
    const eleccionM = document.querySelector ("#wizard")    
    eleccionM.onclick = () => { 
        obtenerApiLocalWizard();
    }
    const eleccionA = document.querySelector ("#archer")    
    eleccionA.onclick = () => { 
        obtenerApiLocalArcher();
    }
}

//Funciones encargadas de llamar al archivo JSON para la obtencion de datos de los personajes (Heroes).
const obtenerApiLocalKnight = () => {
    fetch("data/data.json")
        .then((respuesta) => {
            return respuesta.json()
        })
        .then((datos) => {
            const knightJson = datos.find(element => element.id == 1);
            personajes.push(knightJson);
            localStorage.setItem("heroe", personajes[0].clase)
            personajes[0].vida = vidaAdquiridaH();
            pantallaCarga();
            setTimeout(mostrarEnemigo,2000)
            
        })
        .catch((error) => {
            console.log(error)
        })
}
const obtenerApiLocalWizard = () => {
    fetch("data/data.json")
        .then((respuesta) => {
            return respuesta.json()
        })
        .then((datos) => {
            const wizardJson = datos.find(element => element.id == 2);
            personajes.push(wizardJson);
            localStorage.setItem("heroe", personajes[0].clase)
            personajes[0].vida = vidaAdquiridaH();
            pantallaCarga();
            setTimeout(mostrarEnemigo,2000)
        })
        .catch((error) => {
            console.log(error)
        })
}
const obtenerApiLocalArcher = () => {
    fetch("data/data.json")
        .then((respuesta) => {
            return respuesta.json()
        })
        .then((datos) => {
            const archerJson = datos.find(element => element.id == 3);
            personajes.push(archerJson);
            localStorage.setItem("heroe", personajes[0].clase)
            personajes[0].vida = vidaAdquiridaH();
            pantallaCarga();
            setTimeout(mostrarEnemigo,2000)
        })
        .catch((error) => {
            console.log(error)
        })
}

//Mediante un numero random se elige un Monstruo, el mismo crea un objeto con los datos del mismo y se guarda dentro del array personajes
let eleccionM = 0
const elegirMonstruo =  () => {
    eleccionM = Math.ceil(Math.random() * 3);
    console.log (eleccionM)
    switch (eleccionM) {
        case 1:
            //WARRIOR WOLF: Puede tener los siguientes valores 
            // ==> Vida: 100min hasta 170max
            // ==> Ataque: 1min hasta 9max
            // ==> Defensa: 1min hasta 5max
            // ==> Habilidad (Mordida Profunda): 20min hasta 50max
            personajes.push (new Personaje ("WARRIOR WOLF", 100, 170, 0, 1, 9, 1, 5, 20, 50, "", "./assets/img/personajes/warriorWolfJuego.png"));
            personajes[1].vida = vidaAdquiridaM();
            break;
        case 2:
            //ZOMBIE ORC: Puede tener los siguientes valores 
            // ==> Vida: 100min hasta 210max
            // ==> Ataque: 1min hasta 17max
            // ==> Defensa: 1min hasta 5max
            // ==> Habilidad (Embestida): 40min hasta 70max
            personajes.push (new Personaje ("ZOMBIE ORC", 100, 210, 0, 1, 17, 1, 5, 40, 70, "", "./assets/img/personajes/zombieOrcJuego.png"));
            personajes[1].vida = vidaAdquiridaM();
            break;
        case 3:
            //SKELETON: Puede tener los siguientes valores 
            // ==> Vida: 100min hasta 180max
            // ==> Ataque: 1min hasta 8max
            // ==> Defensa: 1min hasta 25max
            // ==> Habilidad (Resurreccion de muertos): 50min hasta 80max
            personajes.push (new Personaje ("SKELETON", 100, 180, 0, 1, 8, 1, 25, 50, 80, "", "./assets/img/personajes/skeletonJuego.png"));
            personajes[1].vida = vidaAdquiridaM();
            break; 
    }
}

//Mediante un numero random se elige un Boss, el mismo crea un objeto con los datos del mismo y se guarda dentro del array personajes
let eleccionB = 0
const elegirBoss =  () => {
    eleccionB = Math.ceil(Math.random() * 3);
    console.log (eleccionB)
    switch (eleccionB) {
        case 1:
            //CANNIBAL: Puede tener los siguientes valores 
            // ==> Vida: 150min hasta 250max
            // ==> Ataque: 10min hasta 20max
            // ==> Defensa: 5min hasta 10max
            // ==> Habilidad (BOLAS DE FUEGO): 60min hasta 90max
            personajes.push (new Personaje ("CANNIBAL", 150, 250, 0, 10, 20, 5, 10, 60, 90, "", "./assets/img/personajes/cannibalJuego.png"));
            personajes[1].vida = vidaAdquiridaM();
            break;
        case 2:
            //ALUCARD: Puede tener los siguientes valores 
            // ==> Vida: 150min hasta 220max
            // ==> Ataque: 10min hasta 18max
            // ==> Defensa: 5min hasta 10max
            // ==> Habilidad (HIPNOSIS): 60min hasta 90max
            personajes.push (new Personaje ("ALUCARD", 150, 220, 0, 10, 18, 5, 10, 60, 90, "", "./assets/img/personajes/alucardJuego.png"));
            personajes[1].vida = vidaAdquiridaM();
            break;
        case 3:
            //ASTAROTH and BELFEGOR: Puede tener los siguientes valores 
            // ==> Vida: 150min hasta 240max
            // ==> Ataque: 10min hasta 15max
            // ==> Defensa: 7min hasta 15max
            // ==> Habilidad (PURGATORIO): 60min hasta 90max
            personajes.push (new Personaje ("ASTAROTH and BELFEGOR", 150, 240, 0, 10, 15, 7, 15, 60, 90, "", "./assets/img/personajes/demonsJuego.png"));
            personajes[1].vida = vidaAdquiridaM();
            break;   
    }
}

//Estas dos funciones se encargar de darle puntos de vida a los personajes (Heroes, Monstruos y Boss)
const vidaAdquiridaH = () => {
    return Math.floor(Math.random() * (personajes[0].vidaMax - personajes[0].vidaMin + 1) + (personajes[0].vidaMin));
}
const vidaAdquiridaM = () => {
    return Math.floor(Math.random() * ((personajes[1].vidaMax) - (personajes[1].vidaMin) + 1) + ((personajes[1].vidaMin)));
}

//Funcion que se encarga de mostrar la pantalla donde se vera reflejado el enemigo con el cual deberas enfrentarte
const mostrarEnemigo = () => {
    elegirMonstruo();
    nuevaSeccion.classList.remove("bannerCarga")
    nuevaMusica.innerHTML = `<audio src="./assets/musica/soundtrackBatalla.mp3" autoplay="autoplay" loop="loop"></audio>`
    nuevaSeccion.innerHTML = 
    `
    <main class="bannerEleccion">

        <div class="container text-center">

            <div class="row contenedorPrimero">

                <div class="col-12">

                    <h2 class="tamañoFuenteH2 mensajeEleccion colorRojo">YOUR ENEMY</h2>

                </div>
                <div class="col-12">

                    <img class="personajesMonstruo rounded-5" id="villano" alt="Villano">

                </div>
                <div class="col-12">

                    <img class="btnIrBatalla" id="comenzarJuego" src="./assets/img/btns/btnStartBattle.png" alt="Boton de comienzo">

                </div>

            </div>

        </div>

    </main>
    `
    const imagenMonstruo = document.querySelector("#villano")
    if (eleccionM == 1){
        imagenMonstruo.setAttribute('src', "./assets/img/personajes/warriorWolf.jpg")
    } else if (eleccionM == 2) {
        imagenMonstruo.setAttribute('src', "./assets/img/personajes/zombieOrc.jpg")
    } else {
        imagenMonstruo.setAttribute('src', "./assets/img/personajes/skeleton.jpg")
    }
    document.querySelector("#comenzarJuego").onclick = () => {
        nuevaSeccion.classList.remove("bannerEleccion")
        setTimeout(arrancaJuego, 200);
    }
}

//Funcion que se encarga de mostrar la pantalla donde se vera reflejado el enemigo con el cual deberas enfrentarte
const mostrarBoss = () => {
    elegirBoss();
    nuevaSeccion.innerHTML = 
    `
    <main class="bannerEleccion">

        <div class="container text-center">

            <div class="row contenedorPrimero">

                <div class="col-12">

                    <h2 class="tamañoFuenteH2 mensajeEleccion colorRojo">TU ENEMIGO ES EL SIGUIENTE</h2>

                </div>
                <div class="col-12">

                    <img class="personajesMonstruo rounded-5" id="villano" alt="Villano">

                </div>
                <div class="col-12">

                    <img class="btnIrBatalla" id="comenzarJuego" src="./assets/img/btns/btnStartBattle.png" alt="Boton de comienzo">

                </div>

            </div>

        </div>

    </main>
    `
    const imagenBoss = document.querySelector("#villano")
    if (eleccionB == 1){
        imagenBoss.setAttribute('src', "./assets/img/personajes/cannibal.jpg")
    } else if (eleccionB == 2) {
        imagenBoss.setAttribute('src', "./assets/img/personajes/alucard.jpg")
    } else {
        imagenBoss.setAttribute('src', "./assets/img/personajes/demons.jpg")
    }
    document.querySelector("#comenzarJuego").onclick = () => {
        setTimeout(arrancaJuego, 200);
    }
}

//Variables para el Heroe
let ataqueH = 0
let defensaH = 0
let habilidadH = 0
let golpeCriticoH = 0
//Variables para el Villano
let ataqueM = 0
let defensaM = 0
let habilidadM = 0
let golpeCriticoV = 0
let decisionM = 0

//Funcion donde se desarrolla toda la interfaz principal de la batalla, con los botones principales.
const arrancaJuego = () => {
    nuevaSeccion.innerHTML = 
    `
    <main class="bannerBatalla">

        <div class="container-fluid text-center">

            <div class="row contenedorTercero">

                <div class="col-6 bannerDatosPersonajes text-start">

                    <h2 class="tamañoLetra colorBlanco"> <img class="icons" src="./assets/img/class.png" alt="Logo casco"> ${personajes[0].clase}</h2>
                    <h2 class="tamañoLetra colorBlanco" id="vidaH"> <img class="icons" src="./assets/img/hp.png" alt="Logo HP"> ${personajes[0].vida}</h2>   
                    <h2 class="tamañoLetra colorBlanco" id="atkH"> <img class="icons" src="./assets/img/atk.png" alt="Logo ATK"> ${personajes[0].ataqueMin}min a ${personajes[0].ataqueMax}max</h2>
                    <h2 class="tamañoLetra colorBlanco" id="defH"> <img class="icons" src="./assets/img/def.png" alt="Logo DEF"> ${personajes[0].defensaMin}min a ${personajes[0].defensaMax}max</h2>      
                    <h2 class="tamañoLetra colorBlanco" id="habilidadH"> </h2>
                    <h2 class="tamañoLetra colorBlanco" id="vidaContinuarH"> </h2>

                </div>
                <div class="col-6 bannerDatosPersonajes text-start">

                    <h2 class="tamañoLetra colorBlanco"> <img class="icons" src="./assets/img/class.png" alt="Logo casco"> ${personajes[1].clase}</h2>
                    <h2 class="tamañoLetra colorBlanco" id="vidaM"> <img class="icons" src="./assets/img/hp.png" alt="Logo HP"> ${personajes[1].vida}</h2>
                    <h2 class="tamañoLetra colorBlanco"> <img class="icons" src="./assets/img/atk.png" alt="Logo ATK"> ${personajes[1].ataqueMin}min a ${personajes[1].ataqueMax}max</h2>
                    <h2 class="tamañoLetra colorBlanco"> <img class="icons" src="./assets/img/def.png" alt="Logo DEF"> ${personajes[1].defensaMin}min a ${personajes[1].defensaMax}max</h2>
                    <h2 class="tamañoLetra colorBlanco" id="habilidadM"> </h2>

                </div>
                <div class="col-6">

                    <img class="jugadorHeroe" src="${personajes[0].imagen}" alt="Heroe">

                </div>
                <div class="col-6">

                    <img class="jugadorHeroe" src="${personajes[1].imagen}" alt="Enemigo">

                </div>
                <div class="col-12 barraPrincipal">

                    <div class="container-fluid text-center">

                        <div class="row">

                            <div class="col-6 d-flex flex-column justify-content-around">

                                <h2 class="tamañoFuenteH2 colorNaranja" id="movimientoH"></h2>
                                <p class="colorBlanco" id="puntosH"></p>
                                <h2 class="tamañoFuenteH2 colorNaranja" id="movimientoM"></h2>
                                <p class="colorBlanco" id="puntosM"></p>

                            </div>
                            <div class="col-6">

                                <div class="container text-center">

                                    <div class="row contenedorAcciones" id="barraAcciones">

                                        <div class="col-4">

                                            <img class="btnAcciones" id="atacar" src="./assets/img/btns/btnAtk.png" alt="Boton de ataque">

                                        </div>
                                        <div class="col-4">

                                            <img class="btnAcciones" id="defender" src="./assets/img/btns/btnDef.png" alt="Boton de defensa">

                                        </div>
                                        <div class="col-4" id="btnHabilidad">
                                            
                                        </div>
                                        <div class="col-4">

                                            <img class="btnAcciones" id="mochila" src="./assets/img/btns/btnChest.png" alt="Boton de items">

                                        </div>
                                        <div class="col-4">

                                            <img class="btnAcciones" id="opcion" src="./assets/img/btns/btnOptions.png" alt="Boton de opciones">

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
    if (golpeCriticoH < 3) {
        document.querySelector("#btnHabilidad").innerHTML = `<img class="btnAcciones" id="habilidad" src="./assets/img/btns/btnSkillNula.png" alt="Boton de habilidad">`
    } else {
        document.querySelector("#btnHabilidad").innerHTML = `<img class="btnAcciones" id="habilidad" src="./assets/img/btns/btnSkill.png" alt="Boton de habilidad">`
    }
    
    const movimientoH = document.querySelector("#movimientoH")
    const puntosH = document.querySelector("#puntosH")
    const movimientoM = document.querySelector("#movimientoM")
    const puntosM = document.querySelector("#puntosM")
    cuantosCorazonesHeroe();
    cuantaHabilidadMonstruo();
    cuantaHabilidadHeroe();
    //Pulsador de ATK - Dentro se dara a conocer el movimiento del enemigo y como se desarrolla el movimiento de ambos.
    const pulsadorAtaque = document.querySelector('#atacar');
    pulsadorAtaque.onclick = () => {

        //Movimiento de ATAQUE del Heroe
        movimientoH.innerHTML = `Tu ${personajes[0].clase} decidio ATACAR`
        //Puntos de ATAQUE conseguidos por el Heroe
        ataqueH = Math.ceil(Math.random() * (personajes[0].ataqueMax));
        puntosH.innerHTML = `Tu ${personajes[0].clase} consiguio un ATAQUE de ${ataqueH} puntos`

        queHaraMonstruo();
        if (decisionM == 1){
            decisionAtaqueM();
            personajes[1].vida -= ataqueH;
            personajes[0].vida -= ataqueM;
            vitalidadPersonajes();
            //Contador de golpes para activar habilidad
            golpeCriticoH += 1
            golpeCriticoV += 1

        } else if (decisionM == 2) {
            decisionDefensaM();
            if (ataqueH > defensaM){
                ataqueH -= defensaM
                personajes[1].vida -= ataqueH;
                //Vitalidad de los personajes
                vitalidadPersonajes();
                //Contador de golpes para activar habilidad
                golpeCriticoH += 1 
            } else {
                golpeCriticoV += 1 
                Swal.fire('La defensa de tu enemigo supero el poder de tu ataque. No le has provocado daño')
            } 
            
        } else if (decisionM == 3) {
            decisionHabilidadM();
            personajes[1].vida -= ataqueH;
            personajes[0].vida -= habilidadM;
            //Vitalidad de los personajes
            vitalidadPersonajes();
            //Contador de golpes para activar habilidad
            golpeCriticoH += 1
        }
        cuantaHabilidadHeroe();
        cuantaHabilidadMonstruo();
        habilitarHabilidad();
        verificarVida();
    }
    //Pulsador de DEF - Dentro se dara a conocer el movimiento del enemigo y como se desarrolla el movimiento de ambos.
    const pulsadorDefensa = document.querySelector('#defender');
    pulsadorDefensa.onclick = () => {
        
        //Movimiento de DEFENSA del Heroe
        movimientoH.innerHTML = `Tu ${personajes[0].clase} decidio DEFENDER`
        //Puntos de DEFENSA conseguidos por el Heroe
        defensaH = Math.ceil(Math.random() * (personajes[0].defensaMax));
        puntosH.innerHTML = `Tu ${personajes[0].clase} consigues una DEFENSA de ${defensaH} puntos`
        queHaraMonstruo();

        if (decisionM == 1){
            decisionAtaqueM();
            if (ataqueM > defensaH) {
                ataqueM -= defensaH
                personajes[0].vida -= ataqueM;
                //Vitalidad de los personajes
                vitalidadPersonajes();
                //Contador de golpes para activar habilidad
                golpeCriticoV += 1
            } else {
                golpeCriticoH += 1
                Swal.fire('Tu defensa supero el poder de tu enemigo. No has recibido daño')
            }
        } else if (decisionM == 2) {
            puntosH.innerHTML = ``
            movimientoM.innerHTML = `El ${personajes[1].clase} decidio DEFENDER`
            puntosM.innerHTML = ``
            Swal.fire('Ya que ambos se han defendido ninguno recibe daños')
        } else if (decisionM == 3) {
            decisionHabilidadM();
            if (habilidadM > defensaH) {
                habilidadM -= defensaH
                personajes[0].vida -= habilidadM;
                //Vitalidad de los personajes
                vitalidadPersonajes();
            } else {
                Swal.fire('Tu defensa supero el poder de tu enemigo. No has recibido daño')
            }
        }
        cuantaHabilidadHeroe();
        cuantaHabilidadMonstruo();
        habilitarHabilidad();
        verificarVida();
    }
    //Pulsador de SKILL - Dentro se dara a conocer el movimiento del enemigo y como se desarrolla el movimiento de ambos.
    const pulsadorHabilidad = document.querySelector('#habilidad');
    pulsadorHabilidad.onclick = () => {
        if (golpeCriticoH >= 3) {
            
            //Movimiento de HABILIDAD del Heroe
            movimientoH.innerHTML = `Tu ${personajes[0].clase} decidio usar su HABILIDAD`
            //Puntos de HABILIDAD conseguidos por el Heroe
            habilidadH = Math.floor(Math.random() * ((personajes[0].habilidadMax) - (personajes[0].habilidadMin) + 1) + (personajes[0].habilidadMin));
            puntosH.innerHTML = `Tu ${personajes[0].clase} consigues un ATAQUE DE HABILIDAD de ${habilidadH} puntos`
            //Contador de golpes para activar habilidad
            golpeCriticoH = 0
            queHaraMonstruo();

            if (decisionM == 1){
                decisionAtaqueM();
                personajes[1].vida -= habilidadH;
                personajes[0].vida -= ataqueM;
                //Vitalidad de los personajes
                vitalidadPersonajes();
                //Contador de golpes para activar habilidad
                golpeCriticoV += 1
            } else if (decisionM == 2) {
                decisionDefensaM();
                if (habilidadH > defensaM){
                    habilidadH -= defensaM
                    personajes[1].vida -= habilidadH;
                    //Vitalidad de los personajes
                    vitalidadPersonajes();
                } else {
                    golpeCriticoV += 1
                    Swal.fire('La defensa de tu enemigo supero el poder de tu ataque. No le has provocado daño')
                } 
                
            } else if (decisionM == 3) {
                decisionHabilidadM();
                personajes[1].vida -= habilidadH;
                personajes[0].vida -= habilidadM;
                //Vitalidad de los personajes
                vitalidadPersonajes();
                
            }
            cuantaHabilidadHeroe();
            cuantaHabilidadMonstruo();
            habilitarHabilidad();
            verificarVida();
        }         
    }
    //Pulsador de CHEST - Dentro del mismo habran botones los cuales serviran para mejorar al personaje.
    const pulsadorCofre = document.querySelector('#mochila');
    pulsadorCofre.onclick = () => { 
        btnCofre();
    }
    //Pulsador de OPTIONS - Dentro del mismo habran botones para el usuario con respecto al funcionamiento del juego.
    const pulsadorOpciones = document.querySelector('#opcion');
    pulsadorOpciones.onclick = () => { 
        btnOpcion();
    }
}

//Funcion encargada de alojar un numero del 1 al 3 la cual decidira el movimiento del Enemigo
const queHaraMonstruo = () => {
    if (golpeCriticoV >= 3) {
        decisionM = Math.ceil(Math.random() * 3);
        console.log (decisionM)
    } else {
        decisionM = Math.ceil(Math.random() * 2);
        console.log (decisionM)
    }
}

//Funciones encargadas de mostrar el movimiento y los puntos obtenidos por el enemigo.
const decisionAtaqueM = () => {
    //Movimiento de ATAQUE del Villano
    movimientoM.innerHTML = `El ${personajes[1].clase} decidio ATACAR`
    //Puntos de ATAQUE conseguidos por el Villano
    ataqueM = Math.ceil(Math.random() * (personajes[1].ataqueMax));
    puntosM.innerHTML = `El ${personajes[1].clase} consigue un ATAQUE de ${ataqueM} puntos`
}
const decisionDefensaM = () => {
    //Movimiento de DEFENSA del Villano
    movimientoM.innerHTML = `El ${personajes[1].clase} decidio DEFENDER`
    //Puntos de DEFENSA conseguidos por el Villano
    defensaM = Math.ceil(Math.random() * (personajes[1].defensaMax));
    puntosM.innerHTML = `El ${personajes[1].clase} consigue una DEFENSA de ${defensaM} puntos`
}
const decisionHabilidadM = () => {
    //Movimiento de HABILIDAD del Villano
    movimientoM.innerHTML = `El ${personajes[1].clase} decidio usar su HABILIDAD`
    //Puntos de HABILIDAD conseguidos por el Enemigo
    habilidadM = Math.floor(Math.random() * ((personajes[1].habilidadMax) - (personajes[1].habilidadMin) + 1) + (personajes[1].habilidadMin));
    puntosM.innerHTML = `El ${personajes[1].clase} consigue un ATAQUE DE HABILIDAD de ${habilidadM} puntos`
    golpeCriticoV = 0
}
//Funcion encargada de restablecer la vitalidad de los personajes despues de cada ronda.
const vitalidadPersonajes = () => {
    //Vitalidad de los personajes
    const vitalidadHeroe = document.querySelector("#vidaH")
    vitalidadHeroe.innerHTML = `<img class="icons" src="./assets/img/hp.png" alt="Logo HP"> ${personajes[0].vida}`
    const vitalidadMonstruo = document.querySelector("#vidaM")
    vitalidadMonstruo.innerHTML = `<img class="icons" src="./assets/img/hp.png" alt="Logo HP"> ${personajes[1].vida}`
}
//Funcion encargad de habilitar y deshabilitar el boton de SKILL
const habilitarHabilidad = () => {
    const habilitarSkill = document.querySelector("#habilidad")
    if (golpeCriticoH == 3) {
        habilitarSkill.setAttribute('src',"./assets/img/btns/btnSkill.png")
    } else if (golpeCriticoH == 0) {
        habilitarSkill.setAttribute('src',"./assets/img/btns/btnSkillNula.png")
    }
}
//Funcion encargada de mostrar los puntos de habilidad de los personajes (hereos, monstruos y boss)
const cuantaHabilidadHeroe = () => {
    const puntosHabilidadH = document.querySelector("#habilidadH")
    if (golpeCriticoH == 0) {
        puntosHabilidadH.innerHTML = `<img class="landscape" src="./assets/img/skillPointCero.png" alt="">`
    } else if (golpeCriticoH == 1) {
        puntosHabilidadH.innerHTML = `<img class="landscape" src="./assets/img/skillPointOne.png" alt="">`
    } else if (golpeCriticoH == 2) {
        puntosHabilidadH.innerHTML = `<img class="landscape" src="./assets/img/skillPointTwo.png" alt="">`
    } else {
        puntosHabilidadH.innerHTML = `<img class="landscape" src="./assets/img/skillPointThree.png" alt="">`
    }
}
const cuantaHabilidadMonstruo = () => {
    const puntosHabilidadM = document.querySelector("#habilidadM")
    if (golpeCriticoV == 0) {
        puntosHabilidadM.innerHTML = `<img class="landscape" src="./assets/img/skillPointCero.png" alt="">`
    } else if (golpeCriticoV == 1) {
        puntosHabilidadM.innerHTML = `<img class="landscape" src="./assets/img/skillPointOne.png" alt="">`
    } else if (golpeCriticoV == 2) {
        puntosHabilidadM.innerHTML = `<img class="landscape" src="./assets/img/skillPointTwo.png" alt="">`
    } else {
        puntosHabilidadM.innerHTML = `<img class="landscape" src="./assets/img/skillPointThree.png" alt="">`
    }
}
//Funcion encargada de mostrar los corazones que le quedan al heroe para utilizar en caso de querer continuar la partida
const cuantosCorazonesHeroe = () => {
    const corazonesH = document.querySelector("#vidaContinuarH")
    if (corazones == 0) { 
        corazonesH.innerHTML = `<img class="landscape" src="./assets/img/heartCero.png" alt="">`
    } else if (corazones == 1) {
        corazonesH.innerHTML = `<img class="landscape" src="./assets/img/heartOne.png" alt="">`
    } else if (corazones == 2) {
        corazonesH.innerHTML = `<img class="landscape" src="./assets/img/heartTwo.png" alt="">`
    } else {
        corazonesH.innerHTML = `<img class="landscape" src="./assets/img/heartThree.png" alt="">`
    }
}

//Funcion encargada de mostrar los botones dentro del boton opcion y la funcionalidad de cada uno
const btnOpcion = () => {
    const btnOpciones = document.querySelector("#barraAcciones")
    btnOpciones.innerHTML = 
    `
    <div class="container text-center">

        <div class="row contenedorAcciones">

            <div class="col-4">

                <img class="btnAcciones" id="musicaOn" src="./assets/img/btns/btnMusicOn.png" alt="Boton para musica">

            </div>
            <div class="col-4">

                <img class="btnAcciones" id="musicaOff" src="./assets/img/btns/btnMusicOff.png" alt="Boton para musica">

            </div>
            <div class="col-4">
                
            </div>
            <div class="col-4 ">

                <img class="btnAcciones" id="abandonar" src="./assets/img/btns/btnLeave.png" alt="Boton para abandonar">

            </div>
            <div class="col-4">

                <img class="btnAcciones" id="volverAcciones" src="./assets/img/btns/btnBack.png" alt="Boton para volver">

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
        nuevaMusica.innerHTML = `<audio id="musicaBatalla" autoplay="autoplay" loop="loop"></audio>`
    }
    const reproducirMusicaOn = document.querySelector("#musicaOn")
    reproducirMusicaOn.onclick = () => {
        nuevaMusica.innerHTML = `<audio id="musicaBatalla" src="./assets/musica/soundtrackBatalla.mp3" autoplay="autoplay" loop="loop"></audio>` 
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
    const btnAumentos = document.querySelector("#barraAcciones")
    btnAumentos.innerHTML = 
    `
    <div class="container text-center">

        <div class="row contenedorAcciones">

            <div class="col-4 ">

                <img class="btnAcciones" id="masVida" alt="Boton para mas vida">

            </div>
            <div class="col-4">

                <img class="btnAcciones" id="masAtaque" alt="Boton para mas ataque">

            </div>
            <div class="col-4">

                <img class="btnAcciones" id="masDefensa" alt="Boton para mas defensa">

            </div>
            <div class="col-4">

                <img class="btnAcciones" id="puntoHabilidad" alt="Boton para punto de habilidad">

            </div>
            <div class="col-4">

                <img class="btnAcciones" id="volverAcciones" src="./assets/img/btns/btnBack.png" alt="Boton para volver">

            </div>

        </div>

    </div>
    `
    const btnHp = document.querySelector("#masVida")
    if (puntoVida == 1) {
        btnHp.setAttribute('src', "./assets/img/btns/btnMostHp.png")
    } else {
        btnHp.setAttribute('src', "./assets/img/btns/btnMostHpNula.png")
    }
    const btnAtk = document.querySelector("#masAtaque")
    if (puntoAtaque == 1) {
        btnAtk.setAttribute('src', "./assets/img/btns/btnMostAtk.png")
    } else {
        btnAtk.setAttribute('src', "./assets/img/btns/btnMostAtkNula.png")
    }
    const btnDef = document.querySelector("#masDefensa")
    if (puntoDefensa == 1) {
        btnDef.setAttribute('src', "./assets/img/btns/btnMostDef.png")
    } else {
        btnDef.setAttribute('src', "./assets/img/btns/btnMostDefNula.png")
    }
    const btnSkill = document.querySelector("#puntoHabilidad")
    if (puntoHabilidad == 1) {
        btnSkill.setAttribute('src', "./assets/img/btns/btnMostSkill.png")
    } else {
        btnSkill.setAttribute('src', "./assets/img/btns/btnMostSkillNula.png")
    }

    const pulsadorMasVida = document.querySelector("#masVida")
    pulsadorMasVida.onclick = () => {
        if (puntoVida == 1){
            personajes[0].vida += 50
            vitalidadPersonajes();
            movimientoH.innerHTML = `Has utilizado una pocion para curarte`
            puntosH.innerHTML = ``
            movimientoM.innerHTML = ``
            puntosM.innerHTML = ``
            puntoVida = 0 
        }
        if (puntoVida == 0){
            btnHp.setAttribute('src', "./assets/img/btns/btnMostHpNula.png")
        }
    }
    const pulsadorMasAtaque = document.querySelector("#masAtaque")
    pulsadorMasAtaque.onclick = () => {
        if (puntoAtaque == 1){
            personajes[0].ataqueMax += 2
            document.querySelector("#atkH").innerHTML = `<img class="icons" src="./assets/img/atk.png" alt=""> ${personajes[0].ataqueMin}min a ${personajes[0].ataqueMax}max`
            movimientoH.innerHTML = `Has utilizado una pocion para aumentar tu ataque`
            puntosH.innerHTML = ``
            movimientoM.innerHTML = ``
            puntosM.innerHTML = ``
            puntoAtaque = 0
        }
        if (puntoAtaque == 0){
            btnAtk.setAttribute('src', "./assets/img/btns/btnMostAtkNula.png")
        }
    }
    const pulsadorMasDefensa = document.querySelector("#masDefensa")
    pulsadorMasDefensa.onclick = () => {
        if (puntoDefensa >= 1){
            personajes[0].defensaMax += 2
            document.querySelector("#defH").innerHTML = `<img class="icons" src="./assets/img/def.png" alt=""> ${personajes[0].defensaMin}min a ${personajes[0].defensaMax}max`
            movimientoH.innerHTML = `Has utilizado una pocion para aumentar tu defensa`
            puntosH.innerHTML = ``
            movimientoM.innerHTML = ``
            puntosM.innerHTML = ``
            puntoDefensa = 0
        }
        if (puntoDefensa == 0){
            btnDef.setAttribute('src', "./assets/img/btns/btnMostDefNula.png")
        }
    }
    const pulsadorMasHabilidad = document.querySelector("#puntoHabilidad")
    pulsadorMasHabilidad.onclick = () => {
        if (puntoHabilidad >= 1){
            golpeCriticoH +=1
            cuantaHabilidadHeroe();
            movimientoH.innerHTML = `Has utilizado una pocion para adquirir un punto de habilidad`
            puntosH.innerHTML = ``
            movimientoM.innerHTML = ``
            puntosM.innerHTML = ``
            puntoHabilidad = 0
        }
        if (puntoHabilidad == 0){
            btnSkill.setAttribute('src', "./assets/img/btns/btnMostSkillNula.png")
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

                    <img class="btnAccionesDos" id="continuar" src="./assets/img/btns/btnContinue.png" alt="Boton para continuar">

                </div>
                <div class="col-12">

                    <img class="btnAccionesDos" id="abandonar" src="./assets/img/btns/btnLeave.png" alt="Boton para abandonar">

                </div>

            </div>

        </div>
        `
        document.querySelector ("#continuar").onclick = () => { 
            verificarCorazones();
        }
        document.querySelector ("#abandonar").onclick = () => { 
            derrotaHeroe();
        }
    }else if (personajes[1].vida <= 0 && enfrentamiento == 0) {
        golpeCriticoV = 0
        personajes.splice(1)
        setTimeout(mostrarEnemigo, 400)
        enfrentamiento = 1
        if (personajes[0].vida <= 0) {
            verificarVida()
        }
    } else if (personajes[1].vida <= 0 && enfrentamiento == 1) {
        golpeCriticoV = 0
        personajes.splice(1)
        setTimeout(mostrarBoss, 400)
        enfrentamiento = 2
        if (personajes[0].vida <= 0) {
            verificarVida()
        }
    }
    else if (personajes[1].vida <= 0 && enfrentamiento == 2) {
        setTimeout(victoriaHeroe, 400)
    }
}

//Funcion encargada de verificar si el heroe puede utilizar corazones para continuar con la partida
let corazones = 3
const verificarCorazones = () => {
    if (corazones > 0) {
        personajes[0].vida = vidaAdquiridaH();
        vitalidadPersonajes();
        corazones -= 1
        arrancaJuego();
        movimientoH.innerHTML = `Has utilizado una vida para continuar con la batalla`
    } else {
        setTimeout(derrotaHeroe, 500)
    }
}

//Funcion encargada de mostrar en pantalla la victoria del heroe
const victoriaHeroe = () => {
    nuevaMusica.innerHTML = `<audio src="./assets/musica/soundtrackVictoria.mp3" autoplay="autoplay"></audio>`
    nuevaSeccion.innerHTML = 
    `
    <main class="bannerVictoria">

        <div class="container text-center">

            <div class="row contenedorPrimero">

                <div class="col-12">

                    <h2 class="tamañoFuenteH2 mensajeEleccion colorBlanco">YOU HAVE EMERGED VICTORIOUS FROM THE CONFRONTATION</h2>

                </div>
                <div class="col-12">

                    <img class="movimientoVictoria" src="./assets/img/logos/logoVictory.png" alt="Logo de victoria">

                </div>
                <div class="col-12">

                    <img class="btnIrBatalla" id="btnVolverInicio" src="./assets/img/btns/btnBack.png" alt="Boton para volver">

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
    nuevaMusica.innerHTML = `<audio src="./assets/musica/soundtrackDerrota.mp3" autoplay="autoplay"></audio>`
    nuevaSeccion.innerHTML = 
    `
    <main class="bannerDerrota">

        <div class="container text-center">

            <div class="row contenedorPrimero">

                <div class="col-12">

                    <h2 class="tamañoFuenteH2 mensajeEleccion colorRojo">YOU HAVE SUFFERED AN ABYSSMAL DEFEAT</h2>

                </div>

                <div class="col-12">

                    <img class="movimientoDerrota" src="./assets/img/logos/logoDefeat.png" alt="Logo de derrota">

                </div>
                <div class="col-12">

                    <img class="btnIrBatalla" id="btnVolverInicio" src="./assets/img/btns/btnBack.png" alt="Boton para volver">

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








