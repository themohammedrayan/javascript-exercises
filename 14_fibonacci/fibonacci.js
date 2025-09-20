const fibonacci = function(k) {
    num = parseInt(k)
    let a = []
    if(num<0) {
        return 'OOPS'
    }
    if(num ===0) {
        return 0
    }
    for(let i = 0;i<=num;i++) {
        if(i ===0) {
            a.push(1)
        }
        else if(i ===1) {
            a.push(1)
        }
        else {
            a.push(a[i-2] + a[i-1])
        }   
    }
    return a[num-1]
};

// Do not edit below this line
module.exports = fibonacci;

console.log(fibonacci(28))