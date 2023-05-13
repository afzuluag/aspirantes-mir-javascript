function max(numArray){

    let vMax;
    
    if (numArray.length>0){            
        
        vMax=0;

        for(let i=0;i < numArray.length ; i++){
            
            if(numArray[i]>vMax){
                vMax = numArray[i];                
            }
        }

        return vMax;
    }else{
        return undefined;
    }    
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 6])) // 10
console.log(max([])) // undefined

