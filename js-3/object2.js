let persona = {
    nombre: "Andres",
    edad: 39,
    ciudad: "Pereira",
    profesion: "Ing Sistemas"
}

for (let llave in persona) {
    if (persona.hasOwnProperty(llave)) {
      console.log(persona[llave])
    }
}

function presentacion(Object){

    return Object.nombre + " " + Object.edad + " " + Object.ciudad;
}

let mensaje = presentacion(persona);

console.log(mensaje);

persona.hobbies = ["senderismo", "ciclismo", "lectura"];

console.log(persona.hobbies);

for (let i = 0; i < persona.hobbies.length; i ++) {
    console.log(persona.hobbies[i]);
  }