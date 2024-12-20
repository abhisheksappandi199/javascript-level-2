function owelCount(str){
    const arr = str.split('')
    const obj = {}
    arr.forEach(element => {
        if(obj.hasOwnProperty(element)){
            obj[element] +=  1
        }
        else {
            obj[element] = 1
        }
    })
    //return obj
}

console.log(owelCount('abhishek'));