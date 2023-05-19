function join(arreglo){
    
    let cadena="";

    for(let i=0;i < arreglo.length ; i++){
            
        cadena = cadena + arreglo[i] + " ";
    }

    return cadena;
}

console.log(join([1, 3, "-"])) // 1 3 2
console.log(join(["Andres", "Zuluaga",""])) // Andres Zuluaga
console.log(join([])) // []