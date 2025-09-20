const removeString = function(list,...args) {
    result = []
    for(let i=0;i<list.length;i++) {
        let toRemove = false;

        for(let j=0;j<args.length;j++) {
            if(list[i] === args[j]) {
                toRemove = true;
                break;
            }
        }
        if(toRemove === false) {
            result.push(list[i])

        }

    }
    return result
}




console.log(removeString([1,2,3,4,5],2,3))