// OBJETOS TIPO JSON

const json_pelota = {
    forma: "esferica",
    color: "naranja",
    textura: "rugosa",
    accion: "bota",
    peso: "550gr"
};

// el nombre de las propiedades puede ir o no 
const usuario = {
    nombre: "Melina",
    apellido: "Rivera",
    direcciones: ["casa", "trabajo", {}, 5, [], true, "10"]
};

const boton = {
    style: {
        backgroundColor: "rojo"
    }
};

// Acceso a propiedades
// boton.style.backgroudColor
// variable.propiedad

console.log(json_pelota);
console.log(json_pelota.textura); // imprime "rugosa" que es el valor de la variable json_pelora y su propiedad llamada "textura"

// Ejemplo extra
console.log(usuario.nombre);
console.log(boton.style.backgroundColor);

console.log(parseInt(usuario.direcciones[6])) //imprime el "10" del objeto  usuario

const arreglo=[ ]
arreglo[10]="Meme"
console.log(arreglo)

json_pelota.nombre="pelotita"
console.log(json_pelota)

console.log(`json_pelota["nombre"]:`, json_pelota["nombre"]);


// Estas dos, son lo mismo:
const nombre="Delia"

const alumno={
    nombre

}
