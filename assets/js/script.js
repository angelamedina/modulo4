let urlBase = "https://swapi.dev/api/people/";

class Personaje {
    constructor(nombre, estatura, peso) {
        this.nombre = nombre;
        this.estatura = estatura;
        this.peso = peso
    }
}

const getData = async (id) => {
    let response = await fetch(urlBase + id);
    let data = await response.json();
    let { name: nombre, height: estatura, mass: peso } = data;
    let nuevoPersonaje = new Personaje(nombre, estatura, peso);
    return nuevoPersonaje;
};

function* gen(idInicio, idTermino) {
    for (let index = idInicio; index <= idTermino; index++) {
        yield getData(index);
    }
}
let g = gen(1, 5); // "Generator { }"

let contenedorPersonajes = document.getElementById("personajes");

const cargarDatos = (personaje) => {
    contenedorPersonajes.innerHTML += `<div class="card card-body border-danger">
           <h6 class="card-text">${personaje.nombre}</h6>
           <p>Estatura: ${personaje.estatura}cm.  Peso: ${personaje.peso}Kg.</p>
         </div>`;

};

btnSiguiente.addEventListener("click", async () => {
    let resultado = g.next();
    if (resultado.done) {
        g = gen(1, 5);
        contenedorPersonajes.innerHTML = "";
        alert("Quinto personaje es el último de la lista.");
    } else {
        let personaje = await resultado.value;
        cargarDatos(personaje);
    }
});


/* segunda card */
let g2 = gen(6, 11); 

let contenedorPersonajes2 = document.getElementById("personajes2");

const cargarDatos2 = (personaje) => {
    contenedorPersonajes2.innerHTML += `<div class=" card card-body">
           <h6 class="card-text">${personaje.nombre}</h6>
           <p>Estatura: ${personaje.estatura}cm.  Peso: ${personaje.peso}Kg.</p>
         </div>`;

};


btnSiguiente2.addEventListener("click", async () => {
    let resultado = g2.next();
    if (resultado.done) {
        g2 = gen(6, 11);
        contenedorPersonajes2.innerHTML = "";
        alert("Último personaje secundario del listado para ver.");
    } else {
        let personaje = await resultado.value;
        cargarDatos2(personaje);
    }
});

/* tercera card */
let g3 = gen(11, 17); // "Generator { }"

let contenedorPersonajes3 = document.getElementById("personajes3");

const cargarDatos3 = (personaje) => {
    contenedorPersonajes3.innerHTML += `<div class=" card card-body border-primary">
           <h6 class="card-text">${personaje.nombre}</h6>
           <p>Estatura: ${personaje.estatura}cm.  Peso: ${personaje.peso}Kg.</p>
         </div>`;

};


btnSiguiente3.addEventListener("click", async () => {
    let resultado = g3.next();
    if (resultado.done) {
        g3 = gen(11, 17);
        contenedorPersonajes3.innerHTML = "";
        alert("Último personaje del listado para ver.");
    } else {
        let personaje = await resultado.value;
        cargarDatos3(personaje);
    }
});