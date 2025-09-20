const repeatString = function(string,num) {
    if (num < 0) return 'ERROR'
    let result = '';
    for (let i=0; i<num; i++) {
        result += string
    } //similar to for i in range(start,end,repeater) i++ ==> i+1 
    return result
};

// Do not edit below this line
module.exports = repeatString;

