let input = 'Rabindra Nath Tagore';
//output: 'R. N. tagore'
let wordsArr = input.split(' ');
console.log(wordsArr);

let result = '';
for (let i = 0; i < wordsArr.length; i++) {
    let word = wordsArr[i];
    if (i === wordsArr.length - 1) {
        result = result + word;
    } else {
        result = result + word[0] + '. '
    }
}
console.log(result);

