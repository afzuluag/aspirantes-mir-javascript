function maxIndex(numArray){
             
    if (numArray.length>0){            
        
        let vMax=0;
        let iMax;

        for(let i=0;i < numArray.length ; i++){
            
            if(numArray[i]>vMax){
                vMax = numArray[i];
                iMax = i;
            }
        }

        return iMax;
    }else{
        return -1;
    }    
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1