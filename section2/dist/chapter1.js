// number
let num1 = 123;
let num2 = -123;
let num3 = 0.123;
let num4 = Infinity;
let num5 = -Infinity;
let num6 = NaN;
// 오류 발생하는 경우 - 타입에 맞지 않는 함수, 값 넣을 때
// num1 = 'hello' // number 타입에 String 넣을 때
// num1.toUpperCase() // number 타입에 string 함수 사용시
// number type에서 사용이 가능한 함수는 가능
num1.toFixed();
// string
let str1 = 'hello';
let str2 = 'hello';
let str3 = `hello ${num1}`;
// boolean
let bool1 = true;
let bool2 = false;
// typescript에서는 null, undefined를 타입으로 지정되어있다.
// null
let null1 = null;
// undefined
let unde1 = undefined;
// 리터럴 타입
let numA = 10;
let strA = 'hello';
let boolA = true;
export {};
