/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// js : 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 전달
// ts : 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 전달

// 함수 선언 식에서 타입을 정의하는 방법
function func(a: number, b: number): number {
  return a + b
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number): number => a + b

/**
 * 함수의 매개변수
 */
// 기본값을 기준으로 매개변수의 타입을 자동 추론한다.
// 필수 매개변수가 앞쪽으로 와야한다.
function introduce(name = 'test', age: number, tall?: number) {
  console.log(`name : ${name}`)
  if (typeof tall === 'number') {
    console.log(`tall : ${tall + 10}`)
  }
}

introduce('와하', 21, 123)
introduce('오호', 21)

/**
 * 나머지 매개변수 : rest parameter
 */
// 매개변수의 갯수를 정하고 싶다면 튜플타입으로 작성하면 된다. [number, number, number]
function getSum(...rest: number[]) {
  let sum = 0
  rest.forEach((it) => (sum += it))
  return sum
}
getSum(1, 2, 3) //6
getSum(1, 2, 3, 4, 5)
