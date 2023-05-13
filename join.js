function join(arreglo){
    
    let cadena="";

    for(let i=0;i < arreglo.length ; i++){
            
        cadena = cadena + arreglo[i] + " ";
    }

    return cadena;
}

console.log(join([1, 3, 2])) // 1 3 2
console.log(join(["Camilo", "Sebastian", "Natalia", "Pedro"])) // Camilo Sebastian Natalia Pedro
console.log(join([])) // []