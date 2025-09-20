const palindromes = function (string) {
    let clean = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reverseString = '';
    for(let i=clean.length-1;i>=0;i--) {

        reverseString += clean[i]
    }
    if(reverseString === clean) {
       return true;
    
    }
    return false;
};

console.log(palindromes("r3ace3car"))
// Do not edit below this line
module.exports = palindromes;


