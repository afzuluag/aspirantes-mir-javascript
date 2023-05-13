function sum(numArray){
    
    let sumT=0;
    
    for(let i=0;i < numArray.length ; i++){
        sumT = numArray[i] + sumT;
    }

    return sumT;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0