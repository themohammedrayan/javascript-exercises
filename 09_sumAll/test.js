const sumAll = function(x,y) {
    if(!Number.isInteger(x) || !Number.isInteger(y) || x < 0|| y < 0) {
        return "ERROR"
    }
    let sum = 0
    let a,b
    if(x<y){
        a = x;
        b = y;
    }
    else {
        a = y;
        b = x;
    }
    for(i=0;i<b;i++) {
        sum += a+i

    }
    return sum

};

console.log(sumAll(4,1))