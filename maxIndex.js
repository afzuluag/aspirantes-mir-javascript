function maxIndex(numArray){
    let vMax;
    let iMax;
    
    if (numArray.length>0){            
        
        vMax=0;

        for(let i=0;i < numArray.length ; i++){
            
            if(numArray[i]>numArray[i+1] && vMax < numArray[i]){
                vMax = numArray[i];
                iMax = i;
            }
        }
    }else{
        iMax = -1;
    }

    return iMax;

}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1