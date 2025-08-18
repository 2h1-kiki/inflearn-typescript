/**
 * 함수 타입 표현식 (function type expression)
 */
// 타입 별칭을 이용하여 타입 정의
type Operation = (a: number, b: number) => number

const add: Operation = (a, b) => a + b
const sub: Operation = (a, b) => a - b
const multiply: Operation = (a, b) => a * b
const divied: Operation = (a, b) => a / b

/**
 * 호출 시그니처 (콜 시그니처)
 * - 함수 타입 표현식과 동일하게 함수의 타입을 별도로 정의하는 방식
 * 객체타입을 정의하듯이 정의한 이유는
 * - 자바스크립트의 함수는 객체이므로 객체타입 정의하듯 정의할 수 있다.
 * 하이브리드 타입
 * - 호출 시그니처의 경우 객체 타입이므로 프로퍼티를 추가적으로 정의할 수 있다.
 * - 해당 타입은 함수로 사용 가능하고, 객체로 사용이 가능하다.
 */
type Operation2 = {
  (a: number, b: number): number
}
const add2: Operation2 = (a, b) => a + b
const sub2: Operation2 = (a, b) => a - b
const multiply2: Operation2 = (a, b) => a * b
const divied2: Operation2 = (a, b) => a / b

function func(a: number): void {}

type VoidFunc = {
  (a: number): void
}
function voidFunc(a: VoidFunc) {}
