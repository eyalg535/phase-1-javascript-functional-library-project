function myEach(collection, callback){
    const needToIterate = Array.isArray(collection) ? collection : Object.values(collection);
    needToIterate.forEach(element => callback(element));
    return collection
}

function myMap(collection, callback){
    const needToIterate = Array.isArray(collection) ? collection : Object.values(collection);
    const arrayToReturn = [];
    // needToMap.forEach(e => {
    //     const mappedObject = callback(e)
    //     arrayToReturn.push(mappedObject)
    // })
    //return arrayToReturn
    for(let i = 0; i < needToIterate.length; i++){
        const mappedObject = callback(needToIterate[i])
        arrayToReturn.push(mappedObject)
    }
    return arrayToReturn
}
    
function myReduce(collection, callback, acc){
    const needToIterate = Array.isArray(collection) ? collection : Object.values(collection);
    //acc = acc? acc : needToIterate[0];
    for(let i = 0; i < needToIterate.length; i++){
        //acc = callback(acc, needToIterate[i],collection)
        if(i === 0 && acc === undefined){
            acc = needToIterate[0]
        }else{
            acc = callback(acc, needToIterate[i], collection)
        }
    }

    return acc 

}

function myFind(collection, callback){
    const needToIterate = Array.isArray(collection) ? collection : Object.values(collection);

    for(let i = 0; i < needToIterate.length; i++){
       let val = needToIterate[i]
        if(callback(val)){
            return val
        }
    }
    
     return undefined

}



function myFilter(collection, callback){
    const needToIterate = Array.isArray(collection) ? collection : Object.values(collection);
    let newArray = [];
    
    for (let value of needToIterate){
        if (callback(value)) newArray.push(value)
 }
 return newArray
}

function mySize(collection){
    const needToIterate = Array.isArray(collection) ? collection : Object.values(collection);
    return needToIterate.length
}

function myFirst(array, n){
    //if(array == null){
        //return void 0;
    if(n == null){
        return array[0]
    }else if(n < 0){
        return []
    }
    return array.slice(0, n)
}

function myLast(array, n){
    if(n == null){
        return array[array.length -1]
    }
    return array.slice(Math.max(array.length -n, 0))
}

function myKeys(object){
    let arr = []
    for (let key in object){
        arr.push(key)
    }
    return arr
}

function myValues(object){
    let arr = []
    for ( let value in object){
        arr.push(object[value])
    }
    return arr
}




    

