// Print the first non-repeated character 
let str = 'ENTERTAINMENT'; // R

for (char of str) {
    if (str.indexOf(char) == str.lastIndexOf(char)) {
        console.log(char);
        break;
    }
}