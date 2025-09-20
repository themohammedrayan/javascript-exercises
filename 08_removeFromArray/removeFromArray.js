const removeFromArray = function(list,...args) {
    result = []
    for(let i =0;i<list.length;i++) {
        toRemove = false;

    for(let j = 0;j<args.length;j++) 

        if(list[i] === args[j]) {
            toRemove = true;
            break;
        }
        if(!toRemove) {
            result.push(list[i])
        }
    }
    return result

}

// Do not edit below this line
module.exports = removeFromArray;

