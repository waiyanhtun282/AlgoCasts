// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    return str.split('').reduce((prev,char) =>  char+prev,'');
    // return str.split('').reverse().join('');
    // let reversed ='';
    // for(let chracter of str) {
    //     console.log(chracter);
    //     reversed =chracter+reversed;
    // };
    // return reversed;
}
// console.log(reverse('apple'))
module.exports = reverse;
