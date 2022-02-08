class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get nombre() {
        return this._nombre;
    }

    set direccion(value) {
        this._direccion = value;
    }
    get direccion() {
        return this._direccion;
    }

    set telefono(value) {
        this._telefono = value;
    }
    get telefono() {
        return this._telefono;
    }
    datasPropietarios() {
        return `El nombre del dueño es: ${this._nombre}. El domicilio es: ${this._direccion} , y el número telefonico de contacto es: ${this._telefono}`;
    }
}

class Animal extends Propietario {
    constructor(tipo, nombre, direccion, telefono) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    set tipo(value) {
        this._tipo = value;
    }
    get tipo() {
        return `El tipo de animal es un: ${this._tipo}.`;
    }

}

class Mascota extends Animal {
    constructor(nombrem, enfermedad, tipo, nombre, direccion, telefono) {
        super(tipo, nombre, direccion, telefono);
        this._nombrem = nombrem;
        this._enfermedad = enfermedad;
    }
    set nombre(value) {
        this._nombrem = value;
    }
    get nombre() {
        return this._nombrem;
    }

    set enfermedad(value) {
        this._enfermedad = value;
    }
    get enfermedad() {
        return this._enfermedad;
    }
}

const formulario = document.querySelector("#formulario")
const propietario = document.querySelector("#propietario")
const direccion = document.querySelector("#direccion")
const telefono = document.querySelector("#telefono")
const nombreMascota = document.querySelector("#nombreMascota")
const enfermedad = document.querySelector("#enfermedad")
const tipo = document.querySelector("#tipo")


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    if (tipo.value === "perro") {
        console.log(`El tipo de animal es un ${tipo.value}`)
        const perrito1 = new Mascota(nombreMascota.value, enfermedad.value, tipo.value, propietario.value, direccion.value, telefono.value)
        resultado.innerHTML = `   <ul>
        <li>${perrito1.datasPropietarios()}</li>
        <li>El tipo de animal es un: ${tipo.value}, mientras que el nombre de la mascota es: ${nombreMascota.value} y la enfermedad es ${enfermedad.value}  </li>
    </ul>`
    }

    if (tipo.value === "gato") {
        console.log(`El tipo de animal es un ${tipo.value}`)
        const gatito1 = new Mascota(nombreMascota.value, enfermedad.value, tipo.value, propietario.value, direccion.value, telefono.value)
        resultado.innerHTML = `   <ul>
        <li>${gatito1.datasPropietarios()}</li>
        <li>El tipo de animal es un: ${tipo.value}, mientras que el nombre de la mascota es: ${nombreMascota.value} y la enfermedad es ${enfermedad.value}  </li>
    </ul>`
    }

    if (tipo.value === "conejo") {
        console.log(`El tipo de animal es un ${tipo.value}`)
        const conejito1 = new Mascota(nombreMascota.value, enfermedad.value, tipo.value, propietario.value, direccion.value, telefono.value)
        resultado.innerHTML = `   <ul>
        <li>${conejito1.datasPropietarios()}</li>
        <li>El tipo de animal es un: ${tipo.value}, mientras que el nombre de la mascota es: ${nombreMascota.value} y la enfermedad es ${enfermedad.value}  </li>
    </ul>`
    }

})