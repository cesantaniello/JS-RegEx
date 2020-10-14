var expresion2 = /[01]/;
var expresion3 = /[^01]/;

console.log(expresion2.test('1010100100110001'));
console.log(expresion3.test('1010100100110001'));
console.log(expresion3.test('10101001200110001'));