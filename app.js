// write code here
let str = 'I live in Thailand';

let str2 = str.toLowerCase();
let str3 = str2.split('');
str3 = str3.filter(char => char !== ' ');

let result = str3.reduce((acc, cv) => {
    acc[cv] = ( acc[cv] || 0 ) +1;
    return acc
},{});

console.log(result);
