const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    for (let i = 0; i < string.length / 2; i++){
        if (string[i] !== string[string.length - i - 1]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
