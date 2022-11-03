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
            personajes.push (new Personaje ("Warrior Wolf", 100, 170, 0, 1, 9, 1, 5, 20, 50, "Clase de villano muy rapido en ataques, pero con una defensa normal.", "./img/loboJuego.png"));
            personajes[1].vida = vidaAdquiridaM();
            break;
        case 2:
            //Orco: Puede tener los siguientes valores 
            // ==> Vida: 100min hasta 210max
            // ==> Ataque: 1min hasta 17max
            // ==> Defensa: 1min hasta 5max
            // ==> Habilidad (Embestida): 40min hasta 70max
            personajes.push (new Personaje ("Zombie Orc", 100, 210, 0, 1, 17, 1, 5, 40, 70, "Clase de villano con un ataque muy poderoso, pero con una defensa fragil.", "./img/orcoJuego.png"));
            personajes[1].vida = vidaAdquiridaM();
            break;
        case 3:
            //Esqueleto: Puede tener los siguientes valores 
            // ==> Vida: 100min hasta 180max
            // ==> Ataque: 1min hasta 8max
            // ==> Defensa: 1min hasta 25max
            // ==> Habilidad (Resurreccion de muertos): 50min hasta 80max
            personajes.push (new Personaje ("Skeleton", 100, 180, 0, 1, 8, 1, 25, 50, 80, "Clase de villano con un ataque debil, pero con una de las mejores defensas.", "./img/esqueletoJuego.png"));
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
            personajes.push (new Personaje ("Dragon", 150, 250, 0, 10, 20, 5, 10, 60, 90, "", "./img/dragonJuego.png"));
            personajes[1].vida = vidaAdquiridaM();
            break;
        case 2:
            //Hechicero Supremo: Puede tener los siguientes valores 
            // ==> Vida: 150min hasta 220max
            // ==> Ataque: 10min hasta 18max
            // ==> Defensa: 5min hasta 10max
            // ==> Habilidad (Conjuro Maldito): 60min hasta 90max
            personajes.push (new Personaje ("Hechicero Supremo", 150, 220, 0, 10, 18, 5, 10, 60, 90, "", "./img/hechiceroJuego.png"));
            personajes[1].vida = vidaAdquiridaM();
            break;
        case 3:
            //Coloso: Puede tener los siguientes valores 
            // ==> Vida: 150min hasta 240max
            // ==> Ataque: 10min hasta 15max
            // ==> Defensa: 7min hasta 15max
            // ==> Habilidad (Puño de Hierro): 60min hasta 90max
            personajes.push (new Personaje ("Demonios", 150, 240, 0, 10, 15, 7, 15, 60, 90, "", "./img/demoniosJuego.png"));
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
let golpeCriticoH = 0

//Variables para el Villano
let ataqueV = 0
let defensaV = 0
let habilidadV = 0
let golpeCriticoV = 0
let decisionV = 0

//Funcion encargada de alojar un numero del 1 al 3 la cual decidira el movimiento del villano
queHaraVillano = () => {
    if (golpeCriticoV >= 3) {
        decisionV = Math.ceil(Math.random() * 3);
        console.log (decisionV)
    } else {
        decisionV = Math.ceil(Math.random() * 2);
        console.log (decisionV)
    }
}

//Funcion encargada de ejecutar el juego cuando el usuario elija un personaje. El heroe se enfrenta a dos villanos y luego al boss, todo esto si sigue con vida, en caso de quedar sin vida en alguno de los combates el codigo finaliza mostrando el resultado
    

let elegirHeroe = () => {
    let nuevaSeccion = document.getElementById("nuevoElemento")
    nuevaSeccion.innerHTML = 
    `   
    <main class="bannerEleccion">
        <h2 class="mensajeEleccion p-2">ESCOGE TU PERSONAJE</h2>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner centrar">
                        <div class="carousel-item active">
                            <div class="d-flex flex-column">
                                <img src="./img/knight.png" class="personajesGuerrero rounded-5" alt="Guerrero">
                                <img class="btnEleccion" src="./img/btnKnight.png" alt="Boton de eleccion" id="knight">
                            </div>
                            
                        </div>
                        
                        <div class="carousel-item">
                            <div class="d-flex flex-column">
                                <img src="./img/wizard.png" class="personajesGuerrero rounded-5" alt="Mago">
                                <img class="btnEleccion" src="./img/btnWizard.png" alt="Boton de eleccion" id="wizard">
                                
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="d-flex flex-column">
                                <img src="./img/archer.png" class="personajesGuerrero rounded-5" alt="Arquero">
                                <img class="btnEleccion" src="./img/btnArcher.png" alt="Boton de eleccion" id="archer">
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
    </main>
    `
    //Dependiendo de la eleccion del usuario se crea el objeto deseado (Guerrero - Mago - Arquero). El mismo se guarda en un array.
    let eleccionG = document.getElementById ("knight")
    eleccionG.onclick = () => {
        //Guerrero: Puede tener los siguientes valores 
        // ==> Vida: 100min hasta 200max
        // ==> Ataque: 1min hasta 10max
        // ==> Defensa: 1min hasta 10max
        // ==> Habilidad (Golpe Martillo): 30min hasta 60max
        personajes.push (new Personaje ("KNIGHT", 100, 200, 0, 1, 10, 1, 10, 30, 60, "Clase de personaje cuya mayor habilidad o principal función es el ataque a corta distancia o cuerpo a cuerpo.", "./img/knightJuego.png"));
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
        personajes.push (new Personaje ("WIZARD", 100, 180, 0, 1, 15, 1, 20, 30, 60, "Clase de personaje con una defensa debil pero cuya habilidad magica le da un ataque superior al resto.", "./img/wizardJuego.png"));
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
        personajes.push (new Personaje ("ARCHER", 100, 190, 0, 1, 12, 1, 20, 30, 60, "Clase de personaje que efectua ataques a distancia con poco poder pero cuenta con una defensa aceptable.", "./img/archerJuego.png"));
        personajes[0].vida = vidaAdquiridaH();
        localStorage.setItem ("Heroe", JSON.stringify(personajes[0]));
        mostrarEnemigo();
    }
}



let oprimirJugar = document.getElementById("jugar")
oprimirJugar.onclick = () => {
    elegirHeroe();
}

let mostrarEnemigo = () => {
    elegirMonstruo();
    let segundaSeccion = document.getElementById("nuevoElemento")
    segundaSeccion.innerHTML = 
    `
    <main class="bannerEleccion">
        <div class="d-flex flex-column align-items-center justify-content-around medidaDivEnemigo">
            <h2 class="mensajeEleccion pb-5">TU ENEMIGO ES EL SIGUIENTE</h2>
            <img class="rounded-5" alt="Villano" id="villano">
            <img class="btnContinuarJugar" src="./img/btnBatalla.png" alt="Boton de comienzo" id="comenzarJuego">
            
            
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
        arrancaJuego();
    }
}

let mostrarBoss = () => {
    elegirBoss();
    let segundaSeccion = document.getElementById("nuevoElemento")
    segundaSeccion.innerHTML = 
    `
    <div class="d-flex flex-column align-items-center justify-content-around medidaDivEnemigo">
        <h2 class="mensajeEleccion colorAmarillo">Te enfrentaras al siguiente enemigo</h2>
        <div id="villano">
            
        </div>
        <button class="btnContinuarJugar" type="button" id="comenzarJuego">IR A LA BATALLA</button>
        
    </div>
    `
    if (eleccionB == 1){
        document.querySelector("#villano").innerHTML = `<img class="enemigo" src="./img/dragon.png" alt="Dragon">`
    } else if (eleccionB == 2) {
        document.querySelector("#villano").innerHTML = `<img class="enemigo" src="./img/hechicero.png" alt="Hechiero Supremo">`
    } else {
        document.querySelector("#villano").innerHTML = `<img class="enemigo" src="./img/demonios.png" alt="Demonios">`
    }
    document.querySelector("#comenzarJuego").onclick = () => {
        arrancaJuego();
    }
}

let habilitarHabilidad = () => {
    if (golpeCriticoH == 3) {
        document.querySelector("#habilidad").setAttribute('src',"./img/btnHabilidad.png")
        
    }
}
let deshabilitarHabilidad = () => {
    document.querySelector("#habilidad").setAttribute('src',"./img/btnHabilidadNula.png")
    
    
}

let habilidadGolpeEnemigo = () => {
    //Puntos de HABILIDAD conseguidos por el Enemigo
    habilidadV = Math.floor(Math.random() * ((personajes[1].habilidadMax) - (personajes[1].habilidadMin) + 1) + (personajes[1].habilidadMin));
    document.querySelector("#puntosM").innerHTML = `El ${personajes[1].clase} consigue un ATAQUE DE HABILIDAD de ${habilidadV} puntos`
    golpeCriticoV = 0
} 

let arrancaJuego = () => {
    let segundaSeccion = document.getElementById("nuevoElemento")
    segundaSeccion.innerHTML = 
    `
    <div class="text-center contenedorJuego">
        <div class="row">
            <div class="col-5 d-flex">
                <div class="barraEnemigo m-2">
                    <div class="barraNombreEnemigo" id="nombreE">
                        <h3 class="d-flex justify-content-start nombreHeroe"> CLASE = ${personajes[1].clase} </h3>
                    </div>
                    <div class="barraVidaEnemigo">
                        <h2 class="vidaHeroe d-flex justify-content-start" id="vidaM"> </h2>
                    </div>
                </div>
            </div>
            <div class="col-7 d-flex justify-content-center">
                <img src="${personajes[1].imagen}" alt="Esqueleto">
            </div>
        </div>
        <div class="row">
            <div class="col-7 d-flex justify-content-center" id="imagenH">
                <img class="jugadorHeroe" src="${personajes[0].imagen}" alt="Knight">
            </div>
            <div class="col-5 d-flex align-items-end justify-content-end">
                <div class="barraHeroe me-2">
                    <div class="barraNombreHeroe">
                        <h2 class="d-flex justify-content-start nombreHeroe"> CLASE = ${personajes[0].clase} </h2>
                    </div>
                    <div class="barraVidaHeroe">
                        <h2 class="vidaHeroe d-flex justify-content-start" id="vidaH"> </h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <div class="barraPrincipal mt-5 d-flex"> 
                    <div class="barraMensajes">
                        <h2 id="movimientoH"> </h2>
                        <p id="puntosH"> </p>
                        <h2 id="movimientoM"></h2>
                        <p id="puntosM"></p>
                    </div>

                    <div class="barraAcciones" id="barraAcciones" >
                        <div class="container text-center">
                            <div class="row">
                                <div class="col-6">
                                    <img class="btnAcciones" src="./img/btnAtaque.png" alt="Boton de ataque" id="atacar">
                                </div>
                                <div class="col-6">
                                    <img class="btnAcciones" src="./img/btnDefensa.png" alt="Boton de defensa" id="defender">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6 mt-1" id="btnHabilidad">
                                    
                                </div>
                                <div class="col-6 mt-1">
                                    <img class="btnAcciones" src="./img/btnCofre.png" alt="Boton de items" id="mochila">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    if (golpeCriticoH < 3) {
        document.querySelector("#btnHabilidad").innerHTML = `<img class="btnAcciones" src="./img/btnHabilidadNula.png" alt="Boton de habilidad" id="habilidad">`
    } else {
        document.querySelector("#btnHabilidad").innerHTML = `<img class="btnAcciones" src="./img/btnHabilidad.png" alt="Boton de habilidad" id="habilidad">`
    }
    
    
    console.log(personajes)

    document.querySelector("#vidaH").innerHTML = `HP = ${personajes[0].vida}`
    document.querySelector("#vidaM").innerHTML = `HP = ${personajes[1].vida}`
    const pulsadorAtaque = document.querySelector('#atacar');
    pulsadorAtaque.onclick = () => {
        //Movimiento de ATAQUE del Heroe
        document.querySelector("#movimientoH").innerHTML = `Tu ${personajes[0].clase} decidio ATACAR`
        //Puntos de ATAQUE conseguidos por el Heroe
        ataqueH = Math.ceil(Math.random() * (personajes[0].ataqueMax));
        document.querySelector("#puntosH").innerHTML = `Tu ${personajes[0].clase} consiguio un ATAQUE de ${ataqueH} puntos`
        queHaraVillano();
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
        queHaraVillano();
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
                Swal.fire('Tu defensa supero el poder de tu enemigo. No has recibido daño')
            }
            
        } else if (decisionV == 2) {
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
            queHaraVillano();
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
            verificarVida();
        }         
    }
    
}
let derrotaHeroe = () => {
    let segundaSeccion = document.getElementById("nuevoElemento")
    segundaSeccion.innerHTML = 
    `
    <div class="d-flex flex-column align-items-center justify-content-around medidaDivEnemigo">
        <h2 class="mensajeEleccion colorAmarillo">Has sufrido una derrota abismal</h2>
        <div id="villano">
            <img class="movimientoDerrota" src="./img/derrota.png" alt="Knight">
        </div>
        <button class="btnContinuarJugar" type="button" id="btnVolverInicio">VOLVER AL INICIO</button>
        
    </div>
    `
    document.querySelector("#btnVolverInicio").onclick = () => {
        elegirHeroe();
    }
}

let victoriaHeroe = () => {
    let segundaSeccion = document.getElementById("nuevoElemento")
    segundaSeccion.innerHTML = 
    `
    <div class="d-flex flex-column align-items-center justify-content-around medidaDivEnemigo">
        <h2 class="mensajeEleccion colorAmarillo">Has salido victorioso de la lucha</h2>
        <div id="villano">
            <img class="movimientoVictoria" src="./img/victoria.png" alt="Knight">
        </div>
        <button class="btnContinuarJugar" type="button" id="btnVolverInicio">VOLVER AL INICIO</button>
        
    </div>
    `
    document.querySelector("#btnVolverInicio").onclick = () => {
        elegirHeroe();
    }
}

let corazones = 1
let verificarCorazones = () => {
    if (corazones > 0) {
        personajes[0].vida = vidaAdquiridaH();
        document.querySelector("#vidaH").innerHTML = `HP = ${personajes[0].vida}`
        corazones -= 1
        arrancaJuego();
        document.querySelector("#movimientoH").innerHTML = `Has utilizado una vida para continuar con la batalla`
    } else {
        corazones = 1
        personajes.splice(0)
        personajes.splice(1)
        derrotaHeroe();
    }
}


let enfrentamiento = 0
let verificarVida = () => {
    if (personajes[0].vida <= 0 && personajes[1].vida > 0) {
        document.querySelector("#barraAcciones").innerHTML =
        `
        <div class="container text-center">
            <div class="row">
                <div class="col-6">
                    <img class="btnAcciones" src="./img/btnContinuar.png" alt="Boton para continuar" id="continuar">
                </div>
                <div class="col-6">
                    <img class="btnAcciones" src="./img/btnAbandonar.png" alt="Boton para abandonar" id="abandonar">
                </div>
            </div>
        </div>
        `
        document.getElementById ("continuar").onclick = () => { 
            verificarCorazones();
        }
        document.getElementById ("abandonar").onclick = () => { 
            personajes.splice(0)
            personajes.splice(1)
            derrotaHeroe();
        }
    }else if (personajes[1].vida <= 0 && enfrentamiento == 0) {
        personajes.splice(1)
        mostrarEnemigo();
        enfrentamiento = 1
    } else if (personajes[1].vida <= 0 && enfrentamiento == 1) {
        personajes.splice(1)
        mostrarBoss();
        enfrentamiento = 2
    }
    else if (personajes[1].vida <= 0 && enfrentamiento == 2) {
        victoriaHeroe();
    }
}

