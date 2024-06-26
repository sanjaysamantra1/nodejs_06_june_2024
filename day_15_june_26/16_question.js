const inputArr = [
    'b', 'a', 'k', 'e', '',
    'c', 'a', 'k', 'e', '',
    'e', 'a', 't'
];
// output = ['bake', 'cake', 'eat'];
/* let output = [];
let word = '';
for (let char of inputArr) {
    word = word + char;
    if (char === '') {
        output.push(word);
        word = '';
    }
}
output.push(word);
console.log(output); */

let result = [];
let startInd = 0;
for (ind in inputArr) {
    if (inputArr[ind] === '') {
        let word = inputArr.slice(startInd, ind).join('');
        result.push(word);
        startInd = ind;
    }
    if (inputArr.lastIndexOf('') == ind) {
        let lastWord = inputArr.slice(ind, inputArr.length).join('');
        result.push(lastWord)
    }
}
console.log(result)