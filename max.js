function max(numArray){

    let vMax;
    
    if (numArray.length>0){            
        
        vMax=0;

        for(let i=0;i < numArray.length ; i++){
            
            if(numArray[i]>numArray[i+1] && vMax < numArray[i]){
                vMax = numArray[i];
            }
        }
    }else{
        vMax = undefined;
    }

    return vMax;
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined

