//Array donde se alojaran los objetos Personaje
let personajes = []

//Clase contructora de objetos
class Personaje {
    constructor (clase, vidaMin, vidaMax, vida, ataqueMin, ataqueMax, defensaMin, defensaMax, habilidadMin, habilidadMax, descripcion) {
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
    }
}

let oprimirJugar = document.getElementById("jugar")
oprimirJugar.onclick = () => {
    let quitarElementos = document.getElementById("quitarElementos")
    quitarElementos.classList.add ("cambio")
    let nuevaSeccion = document.getElementById("nuevoElemento")
    nuevaSeccion.innerHTML = 
    `   
        
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner centrar">
                    <div class="carousel-item active">
                        <div class="d-flex flex-column">
                            <img src="./img/guerrero.png" class="personajesGuerrero" alt="Guerrero">
                            <button class="btnEleccion" type="button" id="guerrero">WARRIOR</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="d-flex flex-column">
                            <img src="./img/mago.png" class="personajesMago" alt="Mago">
                            <button class="btnEleccion" type="button" id="mago">WIZARD</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="d-flex flex-column">
                            <img src="./img/arquero.png" class="personajesArquero" alt="Arquero">
                            <button class="btnEleccion" type="button" id="flechero">ARCHER</button>
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
        
    `
}


//Dependiendo de la eleccion del usuario se crea el objeto deseado (Guerrero - Mago - Arquero). El mismo se guarda en un array.
let eleccionG = document.getElementById ("guerrero")
eleccionG.onclick = () => {
    //Guerrero: Puede tener los siguientes valores 
    // ==> Vida: 100min hasta 200max
    // ==> Ataque: 1min hasta 10max
    // ==> Defensa: 1min hasta 10max
    // ==> Habilidad (Golpe Martillo): 30min hasta 60max
    personajes.push (new Personaje ("Guerrero", 100, 200, 0, 1, 10, 1, 10, 30, 60, "Clase de personaje cuya mayor habilidad o principal función es el ataque a corta distancia o cuerpo a cuerpo."));
    personajes[0].vida = vidaAdquiridaH();
    localStorage.setItem ("Heroe", JSON.stringify(personajes[0]));
    arrancaJuego();
    
}
let eleccionM = document.getElementById ("mago")    
eleccionM.onclick = () => { 
    //Mago: Puede tener los siguientes valores 
    // ==> Vida: 100min hasta 180max
    // ==> Ataque: 1min hasta 15max
    // ==> Defensa: 1min hasta 20max
    // ==> Habilidad (Golpe Estelar): 30min hasta 60max
    personajes.push (new Personaje ("Mago", 100, 180, 0, 1, 15, 1, 20, 30, 60, "Clase de personaje con una defensa debil pero cuya habilidad magica le da un ataque superior al resto."));
    personajes[0].vida = vidaAdquiridaH();
    localStorage.setItem ("Heroe", JSON.stringify(personajes[0]));
    ejecucionJuego();
}
let eleccionA = document.getElementById ("flechero")    
eleccionA.onclick = () => { 
    //Arquero: Puede tener los siguientes valores 
    // ==> Vida: 100min hasta 190max
    // ==> Ataque: 1min hasta 12max
    // ==> Defensa: 1min hasta 20max
    // ==> Habilidad (Lluvia de flechas): 30min hasta 60max
    personajes.push (new Personaje ("Arquero", 100, 190, 0, 1, 12, 1, 20, 30, 60, "Clase de personaje que efectua ataques a distancia con poco poder pero cuenta con una defensa aceptable."));
    personajes[0].vida = vidaAdquiridaH();
    localStorage.setItem ("Heroe", JSON.stringify(personajes[0]));
    ejecucionJuego();
}

let arrancaJuego = () => {
    console.log ("entro acaaaaa")
    let quitarElementos = document.getElementById("carrusel")
    quitarElementos.classList.add ("cambio")
    let modoJuego = document.getElementById("nuevoElemento")
    modoJuego.innerHTML = 
    `
    <div class="contenedorJuego">
            <div class="barraEnemigo">
                <div class="barraNombreEnemigo">

                </div>
                <div class="barraVidaEnemigo">

                </div>
            </div>

            <div class="barraHeroe">
                <div class="barraNombreEnemigo">

                </div>
                <div class="barraVidaEnemigo">

                </div>
            </div>

            <div class="barraPrincipal"> 
                <div class="barraMensajes">

                </div>

                <div class="barraAcciones">
                    <div class="container text-center">
                        <div class="row">
                            <div class="col-6">
                                <button class="btnAcciones" type="button" id="jugar">ATACAR</button>
                            </div>
                            <div class="col-6">
                                <button class="btnAcciones" type="button" id="jugar">DEFENDER</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6 mt-1">
                                <button class="btnAcciones" type="button" id="jugar">HABILIDAD</button>
                            </div>
                            <div class="col-6 mt-1">
                                <button class="btnAcciones" type="button" id="jugar">MOCHILA</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img class="jugadorHeroe" src="./img/knight.png" alt="Knight">
            <img class="jugadorEnemigo" src="./img/esqueleto.png" alt="Esqueleto">

        </div>
    `
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
            personajes.push (new Personaje ("Lobo", 100, 170, 0, 1, 9, 1, 5, 20, 50, "Clase de villano muy rapido en ataques, pero con una defensa normal."));
            personajes[1].vida = vidaAdquiridaM();
            break;
        case 2:
            //Orco: Puede tener los siguientes valores 
            // ==> Vida: 100min hasta 210max
            // ==> Ataque: 1min hasta 17max
            // ==> Defensa: 1min hasta 5max
            // ==> Habilidad (Embestida): 40min hasta 70max
            personajes.push (new Personaje ("Orco", 100, 210, 0, 1, 17, 1, 5, 40, 70, "Clase de villano con un ataque muy poderoso, pero con una defensa fragil."));
            personajes[1].vida = vidaAdquiridaM();
            break;
        case 3:
            //Esqueleto: Puede tener los siguientes valores 
            // ==> Vida: 100min hasta 180max
            // ==> Ataque: 1min hasta 8max
            // ==> Defensa: 1min hasta 25max
            // ==> Habilidad (Resurreccion de muertos): 50min hasta 80max
            personajes.push (new Personaje ("Esqueleto", 100, 180, 0, 1, 8, 1, 25, 50, 80, "Clase de villano con un ataque debil, pero con una de las mejores defensas."));
            personajes[1].vida = vidaAdquiridaM();
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
            personajes.push (new Personaje ("Dragon", 150, 250, 0, 10, 20, 5, 10, 60, 90, ""));
            personajes[1].vida = vidaAdquiridaM();
            break;
        case 2:
            //Hechicero Supremo: Puede tener los siguientes valores 
            // ==> Vida: 150min hasta 220max
            // ==> Ataque: 10min hasta 18max
            // ==> Defensa: 5min hasta 10max
            // ==> Habilidad (Conjuro Maldito): 60min hasta 90max
            personajes.push (new Personaje ("Hechicero Supremo", 150, 220, 0, 10, 18, 5, 10, 60, 90, ""));
            personajes[1].vida = vidaAdquiridaM();
            break;
        case 3:
            //Coloso: Puede tener los siguientes valores 
            // ==> Vida: 150min hasta 240max
            // ==> Ataque: 10min hasta 15max
            // ==> Defensa: 7min hasta 15max
            // ==> Habilidad (Puño de Hierro): 60min hasta 90max
            personajes.push (new Personaje ("Coloso", 150, 240, 0, 10, 15, 7, 15, 60, 90, ""));
            personajes[1].vida = vidaAdquiridaM();
            break;   
    }
}

//Estas dos funciones se encargar de darle vida a los personajes
let vidaAdquiridaH = () => {
    return Math.floor(Math.random() * (personajes[0].vidaMax - personajes[0].vidaMin + 1) + (personajes[0].vidaMin));
}
let vidaAdquiridaM = () => {
    return Math.floor(Math.random() * ((personajes[1].vidaMax) - (personajes[1].vidaMin) + 1) + ((personajes[1].vidaMin)));
}

//Variables para el Heroe
let ataqueH = 0
let defensaH = 0
let habilidadH = 0
let golpeCritico = 0

//Variables para el Villano
let ataqueV = 0
let defensaV = 0
let habilidadV = 0
let golpeCriticoV = 0
let decisionV = 0

//Funcion encargada de alojar un numero del 1 al 3 la cual decidira el movimiento del villano
queHaraVillano = () => {
    decisionV = Math.ceil(Math.random() * 3);
    console.log (decisionV)
    
}

const datosPersonajesH = () => {
    let containerH = document.createElement('div')
    containerH.innerHTML = 
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
}

const heroeAtacara = () => {
    const pulsadorAtaque = document.createElement('button');
    pulsadorAtaque.innerText = "ATACAR"
    document.body.appendChild(pulsadorAtaque);
    pulsadorAtaque.onclick = () => {
        
        //Movimiento de ATAQUE del Heroe
        let movimientoHeroe = document.createElement ('h2')
        movimientoHeroe.innerHTML += `Tu ${personajes[0].clase} decidio ATACAR`
        document.body.appendChild(movimientoHeroe)

        //Puntos de ATAQUE conseguidos por el Heroe
        ataqueH = Math.ceil(Math.random() * (personajes[0].ataqueMax));
        let puntajeHeroe = document.createElement ('p')
        puntajeHeroe.innerHTML += `Tu ${personajes[0].clase} consiguio un ATAQUE de ${ataqueH}`
        document.body.appendChild(puntajeHeroe)

        if (decisionV == 1){
            //Movimiento de ATAQUE del Villano
            let movimientoVillano = document.createElement ('h2')
            movimientoVillano.innerHTML += `El ${personajes[1].clase} decidio ATACAR`
            document.body.appendChild(movimientoVillano)

            //Puntos de ATAQUE conseguidos por el Villano
            ataqueV = Math.ceil(Math.random() * (personajes[1].ataqueMax));
            let puntajeVillano = document.createElement ('p')
            puntajeVillano.innerHTML += `El ${personajes[1].clase} consigues un ATAQUE de ${ataqueV}`
            document.body.appendChild(puntajeVillano)
            
            personajes[1].vida -= ataqueH;
            personajes[0].vida -= ataqueV;

            //Vitalidad de los personajes
            let vitalidadHeroe = document.createElement ('h2')
            vitalidadHeroe.innerHTML += `La vida de tu ${personajes[0].clase} es de ${personajes[0].vida}`
            document.body.appendChild(vitalidadHeroe)
            let vitalidadVillano = document.createElement ('h2')
            vitalidadVillano.innerHTML += `La vida del ${personajes[1].clase} es de ${personajes[1].vida}`
            document.body.appendChild(vitalidadVillano)

            golpeCritico = 1
            golpeCriticoV = 1
        } else if (decisionV == 2) {
            //Movimiento de DEFENSA del Villano
            let movimientoVillano = document.createElement ('h2')
            movimientoVillano.innerHTML += `El ${personajes[1].clase} decidio DEFENDER`
            document.body.appendChild(movimientoVillano)
            
            //Puntos de DEFENSA conseguidos por el Villano
            defensaV = Math.ceil(Math.random() * (personajes[1].defensaMax));
            let puntajeVillano = document.createElement ('p')
            puntajeVillano.innerHTML += `El ${personajes[1].clase} consigues una DEFENSA de ${ataqueV}`
            document.body.appendChild(puntajeVillano)

            if (ataqueH > defensaV){
                ataqueH -= defensaV
                personajes[1].vida -= ataqueH;
                //Vitalidad de los personajes
                let vitalidadHeroe = document.createElement ('h2')
                vitalidadHeroe.innerHTML += `La vida de tu ${personajes[0].clase} es de ${personajes[0].vida}`
                document.body.appendChild(vitalidadHeroe)
                let vitalidadVillano = document.createElement ('h2')
                vitalidadVillano.innerHTML += `La vida del ${personajes[1].clase} es de ${personajes[1].vida}`
                document.body.appendChild(vitalidadVillano)
                golpeCritico = 1 
            } else {
                let sinDaño = document.createElement ('h2')
                sinDaño.innerHTML += `No se produjo ningun daño al villano, su defensa fue mayor a tu ataque`
                document.body.appendChild(sinDaño)
            } 
        } else if (decisionV == 3) {
            //Movimiento de HABILIDAD del Villano
            let movimientoVillano = document.createElement ('h2')
            movimientoVillano.innerHTML += `El ${personajes[1].clase} decidio usar su HABILIDAD`
            
            habilidadGolpe = () => {
                //Puntos de HABILIDAD conseguidos por el Villano
                habilidadV = Math.floor(Math.random() * ((personajes[1].habilidadMax) - (personajes[1].habilidadMin) + 1) + (personajes[1].habilidadMin));
                let puntajeVillano = document.createElement ('p')
                puntajeVillano.innerHTML += `El ${personajes[1].clase} consigue un ATAQUE DE HABILIDAD de ${habilidadV}`
                document.body.appendChild(puntajeVillano)
                golpeCriticoV = 0
            } 
            habilidadGolpe();
            personajes[1].vida -= ataqueH;
            personajes[0].vida -= habilidadV;

            //Vitalidad de los personajes
            let vitalidadHeroe = document.createElement ('h2')
            vitalidadHeroe.innerHTML += `La vida de tu ${personajes[0].clase} es de ${personajes[0].vida}`
            document.body.appendChild(vitalidadHeroe)
            let vitalidadVillano = document.createElement ('h2')
            vitalidadVillano.innerHTML += `La vida del ${personajes[1].clase} es de ${personajes[1].vida}`
            document.body.appendChild(vitalidadVillano)
            golpeCritico = 1
        }
        const continuarPartida = document.createElement('button');
        continuarPartida.innerText = "CONTINUAR"
        document.body.appendChild(continuarPartida);
        continuarPartida.onclick = () => {
            ejecucionJuego();
        }
    }
    const pulsadorDefensa = document.createElement('button');
    pulsadorDefensa.innerText = "DEFENDER"
    document.body.appendChild(pulsadorDefensa);
    pulsadorDefensa.onclick = () => {

        //Movimiento de DEFENSA del Heroe
        let movimientoHeroe = document.createElement ('h2')
        movimientoHeroe.innerHTML += `Tu ${personajes[0].clase} decidio DEFENDER`
        document.body.appendChild(movimientoHeroe)

        //Puntos de DEFENSA conseguidos por el Heroe
        defensaH = Math.ceil(Math.random() * (personajes[0].defensaMax));
        let puntajeHeroe = document.createElement ('p')
        puntajeHeroe.innerHTML += `Tu ${personajes[0].clase} consigues una DEFENSA de ${defensaH}`
        document.body.appendChild(puntajeHeroe)

        if (decisionV == 1){
             //Movimiento de ATAQUE del villano
            let movimientoVillano = document.createElement ('h2')
            movimientoVillano.innerHTML += `El ${personajes[1].clase} decidio ATACAR`
            document.body.appendChild(movimientoVillano)
                    
            //Puntos de ATAQUE conseguidos por el villano
            ataqueV = Math.ceil(Math.random() * (personajes[1].ataqueMax));
            let puntajeVillano = document.createElement ('p')
            puntajeVillano.innerHTML += `El ${personajes[1].clase} consigues un ATAQUE de ${ataqueV}`
            document.body.appendChild(puntajeVillano)
                    
            if (ataqueV > defensaH) {
                ataqueV -= defensaH
                personajes[0].vida -= ataqueV;

                //Vitalidad de los personajes
                let vitalidadHeroe = document.createElement ('h2')
                vitalidadHeroe.innerHTML += `La vida de tu ${personajes[0].clase} es de ${personajes[0].vida}`
                document.body.appendChild(vitalidadHeroe)
                let vitalidadVillano = document.createElement ('h2')
                vitalidadVillano.innerHTML += `La vida del ${personajes[1].clase} es de ${personajes[1].vida}`
                document.body.appendChild(vitalidadVillano)

                golpeCriticoV = 1
            } else {
                let sinDaño = document.createElement ('h2')
                sinDaño.innerHTML += `No sufriste ningun daño por parte del ${personajes[1].clase}, tú defensa fue mayor a su ataque`
                document.body.appendChild(sinDaño)
            }
        } else if (decisionV == 2) {
            let sinDaño = document.createElement ('h2')
            sinDaño.innerHTML += `Tanto tú ${personajes[0].clase} como el ${personajes[1].clase} defendieron en esta ronda. Ninguno recibe daños`
            document.body.appendChild(sinDaño)
        } else if (decisionV == 3) {
            //Movimiento de HABILIDAD del Villano
            let movimientoVillano = document.createElement ('h2')
            movimientoVillano.innerHTML += `El ${personajes[1].clase} decidio usar su HABILIDAD`
            document.body.appendChild(movimientoVillano)
            
            habilidadGolpe = () => {
                //Puntos de HABILIDAD conseguidos por el villano
                habilidadV = Math.floor(Math.random() * ((personajes[1].habilidadMax) - (personajes[1].habilidadMin) + 1) + (personajes[1].habilidadMin));
                let puntajeVillano = document.createElement ('p')
                puntajeVillano.innerHTML += `El ${personajes[1].clase} consigue un ATAQUE DE HABILIDAD de ${habilidadV}`
                document.body.appendChild(puntajeVillano)
                golpeCriticoV = 0
            } 
            habilidadGolpe();
            if (habilidadV > defensaH) {
                habilidadV -= defensaH
                personajes[0].vida -= habilidadV;
                //Vitalidad de los personajes
                let vitalidadHeroe = document.createElement ('h2')
                vitalidadHeroe.innerHTML += `La vida de tu ${personajes[0].clase} es de ${personajes[0].vida}`
                document.body.appendChild(vitalidadHeroe)
                let vitalidadVillano = document.createElement ('h2')
                vitalidadVillano.innerHTML += `La vida del ${personajes[1].clase} es de ${personajes[1].vida}`
                document.body.appendChild(vitalidadVillano)
            } else {
                let sinDaño = document.createElement ('h2')
                sinDaño.innerHTML += `No sufriste ningun daño por parte del ${personajes[1].clase}, tú defensa fue mayor a su ataque`
                document.body.appendChild(sinDaño)
            }
        }
        const continuarPartida = document.createElement('button');
        continuarPartida.innerText = "CONTINUAR"
        document.body.appendChild(continuarPartida);
        continuarPartida.onclick = () => {
            ejecucionJuego();
        }
    }
    const pulsadorHabilidad = document.createElement('button');
    pulsadorHabilidad.innerText = "HABILIDAD"
    document.body.appendChild(pulsadorHabilidad);
    pulsadorHabilidad.onclick = () => {
        
        //Movimiento de HABILIDAD del Heroe
        let movimientoHeroe = document.createElement ('h2')
        movimientoHeroe.innerHTML += `Tu ${personajes[0].clase} decidio usar su HABILIDAD`
        document.body.appendChild(movimientoHeroe)
        
        habilidadGolpe = () => {
            //Puntos de HABILIDAD conseguidos por el Heroe
            habilidadH = Math.floor(Math.random() * ((personajes[0].habilidadMax) - (personajes[0].habilidadMin) + 1) + (personajes[0].habilidadMin));
            let puntajeHeroe = document.createElement ('p')
            puntajeHeroe.innerHTML += `Tu ${personajes[0].clase} consigues un ATAQUE DE HABILIDAD de ${habilidadH}`
            document.body.appendChild(puntajeHeroe)
            golpeCritico = 0
        } 
        habilidadGolpe();
        if (decisionV == 1){
            //Movimiento de ATAQUE del Villano
            let movimientoVillano = document.createElement ('h2')
            movimientoVillano.innerHTML += `El ${personajes[1].clase} decidio ATACAR`
            document.body.appendChild(movimientoVillano)
            
            //Puntos de ATAQUE conseguidos por el Villano
            ataqueV = Math.ceil(Math.random() * (personajes[1].ataqueMax));
            let puntajeVillano = document.createElement ('p')
            puntajeVillano.innerHTML += `El ${personajes[1].clase} consigues un ATAQUE de ${ataqueV}`
            document.body.appendChild(puntajeVillano)
        
            personajes[1].vida -= habilidadH;
            personajes[0].vida -= ataqueV;

            //Vitalidad de los personajes
            let vitalidadHeroe = document.createElement ('h2')
            vitalidadHeroe.innerHTML += `La vida de tu ${personajes[0].clase} es de ${personajes[0].vida}`
            document.body.appendChild(vitalidadHeroe)
            let vitalidadVillano = document.createElement ('h2')
            vitalidadVillano.innerHTML += `La vida del ${personajes[1].clase} es de ${personajes[1].vida}`
            document.body.appendChild(vitalidadVillano)

            golpeCriticoV = 1
        } else if (decisionV == 2) {
            //Movimiento de DEFENSA del Villano
            let movimientoVillano = document.createElement ('h2')
            movimientoVillano.innerHTML += `El ${personajes[1].clase} decidio DEFENDER`
            document.body.appendChild(movimientoVillano)

            //Puntos de DEFENSA conseguidos por el Villano
            defensaV = Math.ceil(Math.random() * (personajes[1].defensaMax));
            let puntajeVillano = document.createElement ('p')
            puntajeVillano.innerHTML += `El ${personajes[1].clase} consigues una DEFENSA de ${ataqueV}`
            document.body.appendChild(puntajeVillano)
            
            if (habilidadH > defensaV){
                habilidadH -= defensaV
                personajes[1].vida -= habilidadH;
                //Vitalidad de los personajes
                let vitalidadHeroe = document.createElement ('h2')
                vitalidadHeroe.innerHTML += `La vida de tu ${personajes[0].clase} es de ${personajes[0].vida}`
                document.body.appendChild(vitalidadHeroe)
                let vitalidadVillano = document.createElement ('h2')
                vitalidadVillano.innerHTML += `La vida del ${personajes[1].clase} es de ${personajes[1].vida}`
                document.body.appendChild(vitalidadVillano)
                
            } else {
                let sinDaño = document.createElement ('h2')
                sinDaño.innerHTML += `No se produjo ningun daño al ${personajes[1].clase}, su defensa fue mayor a tu ataque`
                document.body.appendChild(sinDaño)
            } 
        } else if (decisionV == 3) {
            let movimientoVillano = document.createElement ('h2')
            movimientoVillano.innerHTML += `El ${personajes[1].clase} decidio usar su HABILIDAD`
            document.body.appendChild(movimientoVillano)
            habilidadGolpeV = () => {
                habilidadV = Math.floor(Math.random() * ((personajes[1].habilidadMax) - (personajes[1].habilidadMin) + 1) + (personajes[1].habilidadMin));
                let puntajeVillano = document.createElement ('p')
                puntajeVillano.innerHTML += `El ${personajes[1].clase} consigue un ATAQUE DE HABILIDAD de ${habilidadV}`
                document.body.appendChild(puntajeVillano)
                golpeCriticoV = 0
            } 
            habilidadGolpeV();
            personajes[1].vida -= habilidadH;
            personajes[0].vida -= habilidadV;
            //Vitalidad de los personajes
            let vitalidadHeroe = document.createElement ('h2')
            vitalidadHeroe.innerHTML += `La vida de tu ${personajes[0].clase} es de ${personajes[0].vida}`
            document.body.appendChild(vitalidadHeroe)
            let vitalidadVillano = document.createElement ('h2')
            vitalidadVillano.innerHTML += `La vida del ${personajes[1].clase} es de ${personajes[1].vida}`
            document.body.appendChild(vitalidadVillano)
        }
        const continuarPartida = document.createElement('button');
        continuarPartida.innerText = "CONTINUAR"
        document.body.appendChild(continuarPartida);
        continuarPartida.onclick = () => {
            ejecucionJuego();
        }
    }
}


//Funcion encargada de ejecutar el juego cuando el usuario elija un personaje. El heroe se enfrenta a dos villanos y luego al boss, todo esto si sigue con vida, en caso de quedar sin vida en alguno de los combates el codigo finaliza mostrando el resultado
let repeticion = 0
let segundaVuelta = 0
let victorias = 0
let derrotas = 0
let ejecucionJuego = () => {
    if (repeticion == 0) {
        datosPersonajesH();
        elegirMonstruo();
        const monstruo = document.createElement('div')
        monstruo.innerHTML += 
        `
        <h2> Desde las sombras aparecio un ${personajes[1].clase}, al cual deberas enfrentrar en una batalla a muerte. </h2>
        <ul>
            <li>Clase: ${personajes[1].clase}</li>
            <li>Vida: ${personajes[1].vida}</li>
            <li>Ataque: ${personajes[1].ataqueMin} min hasta ${personajes[0].ataqueMax} max</li>
            <li>Defensa: ${personajes[1].defensaMin} min hasta ${personajes[0].defensaMax} max</li>
            <li>Habilidad: ${personajes[1].habilidadMin} min hasta ${personajes[0].habilidadMax} max</li>
            <li>Descripcion: ${personajes[1].descripcion}</li>
        </ul>
        `
        document.body.appendChild(monstruo)
        repeticion = 1
    } 
    if (repeticion == 1 && segundaVuelta == 1){
        victorias += 1
        localStorage.setItem ("Victorias", victorias);
        datosPersonajesH();
        elegirMonstruo();
        const monstruo = document.createElement('div')
        monstruo.innerHTML += 
        `
        <h2> Desde las sombras aparecio un ${personajes[1].clase}, al cual deberas enfrentrar en una batalla a muerte. </h2>
        <ul>
            <li>Clase: ${personajes[1].clase}</li>
            <li>Vida: ${personajes[1].vida}</li>
            <li>Ataque: ${personajes[1].ataqueMin} min hasta ${personajes[0].ataqueMax} max</li>
            <li>Defensa: ${personajes[1].defensaMin} min hasta ${personajes[0].defensaMax} max</li>
            <li>Habilidad: ${personajes[1].habilidadMin} min hasta ${personajes[0].habilidadMax} max</li>
            <li>Descripcion: ${personajes[1].descripcion}</li>
        </ul>
        `
        document.body.appendChild(monstruo)
        repeticion = 2
    } 
    if (repeticion == 2 && segundaVuelta == 2) {
        victorias += 1
        localStorage.setItem ("Victorias", victorias);
        datosPersonajesH();
        elegirBoss();
        const boss = document.createElement('div')
        boss.innerHTML += 
        `
        <h2> Desde lo mas profundo del infierno aparecio un ${personajes[1].clase}, al cual te deberas enfrentar a muerte. </h2>
        <ul>
            <li>Clase: ${personajes[1].clase}</li>
            <li>Vida: ${personajes[1].vida}</li>
            <li>Ataque: ${personajes[1].ataqueMin} min hasta ${personajes[0].ataqueMax} max</li>
            <li>Defensa: ${personajes[1].defensaMin} min hasta ${personajes[0].defensaMax} max</li>
            <li>Habilidad: ${personajes[1].habilidadMin} min hasta ${personajes[0].habilidadMax} max</li>
        </ul>
        `
        document.body.appendChild(boss)
        repeticion = 1
        segundaVuelta = 3
    }

    if ((personajes[0].vida > 0) && (personajes[1].vida > 0)) {
        queHaraVillano();
        heroeAtacara();
    } else if ((personajes[0].vida > 0) && (personajes[1].vida <= 0)) {
        if (segundaVuelta == 0) {
            console.log ("Ingreso correctamente a esta seccion")
            segundaVuelta = 1
            personajes.splice(1);
        } else if (segundaVuelta == 1) {
            console.log ("Ingreso correctamente a esta segunda seccion")
            segundaVuelta = 2
            personajes.splice(1);
        }
    } else if ((personajes[0].vida <= 0) && (personajes[1].vida > 0)) {
        derrotas += 1
        localStorage.setItem ("Derrotas", derrotas);
        let derrota = document.createElement ('h2')
        derrota.innerHTML += `Lamentablemente tu ${personajes[0].clase} ha caido derrotado por un ${personajes[1].clase} luego de una dura batalla`
        document.body.appendChild(derrota)
    }
    if (repeticion == 1 && segundaVuelta == 3 && (personajes[1].vida < 0)) {
        victorias += 1
        localStorage.setItem ("Victorias", victorias);
        let victoria = document.createElement ('h2')
        victoria.innerHTML += `Tu ${personajes[0].clase} ha salido victorioso en su dura batalla contra el ${personajes[1].clase}`
        document.body.appendChild(victoria)
        console.log ("El juego ha concluido")
    }
}         




