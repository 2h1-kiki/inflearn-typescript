/**
 * 함수 타입의 호환성
 * - 특정 항수타입을 다른 함수 타입으로 취급해도 괜찮은지 판단하는 것
 * - 2가지의 기준이 모두 충족 되어야 한다.
 * 1. 반환값의 타입이 호환 되는가
 * 2. 매개변수의 타입이 호환 되는가
 */

// 기준 1. 반환값이 호환되는 가
type A = () => number
type B = () => 10

let a: A = () => 10 // number
let b: B = () => 10 // number Literal

// 반환값을 업케스팅이 되는 상황으로 호환 가능
// b의 반환값은 number literal 타입이고, a의 반환값은 number 타입으로 b타입이 업케스팅 되는 상황
a = b
// 오류 발생 : 반환값이 다운케스팅이 안되도록 평가가 된다.
// 반환값을 기준으로 number타입을 number literal 타입으로 다운케스팅 되어야하는 상황
// b = a

// 기준2. 매개변수가 호환 되는가
// 2가지의 상황 : 매개변수의 개수가 같을때 or 다를 때
// 2-1 상황. 매개변수의 개수가 같을 때
type C = (value: number) => void
type D = (value: 10) => void

let c: C = (value) => {}
let d: D = (value) => {}

// 매개변수의 호환의 경우 업케스팅은 호환 불가
// 매개변수의 타입을 보면 number < number literal로 다운캐스팅인 경우 호환 가능
// c = d
// 매개변수의 타입을 보면 number literal < number로 다운캐스팅인 경우 호환 가능
d = c

// Animal이 Dog의 슈퍼타입, 프로퍼티가 적을 수록 슈퍼타입
type Animal = {
  name: string
}

type Dog = {
  name: string
  color: string
}

let animalFunc = (animal: Animal) => {
  console.log(animal.name)
}
let dogFunc = (dog: Dog) => {
  console.log(dog.name)
  console.log(dog.color)
}

// 업케스팅
// animalFunc = dogFunc

let testFunc = (animal: Animal) => {
  console.log(animal.name)
  // animal의 정의되지 않은 프로퍼티를 호출하는 것이 불가능하여 업케스팅 불가
  // console.log(animal.color)
}

// 다운케스팅
dogFunc = animalFunc

let testFunc2 = (dog: Dog) => {
  // animal의 정의된 name 속성은 dog 속성에도 있으므로 다운캐스팅은 가능
  console.log(dog.name)
  console.log(dog.color)
}

// 2-2 상황. 매개변수의 개수가 다를 때
// 할당하려는 함수의 매개변수의 개수가 적을 때에만 호환이 된다.
// 매개변수의 타입이 동일해야한다.
type Func1 = (a: number, b: string) => void
type Func2 = (c: number) => void
type Func3 = (a: string) => void

let func1: Func1 = (a, b) => {}
let func2: Func2 = (c) => {}
let func3: Func3 = (a) => {}

// 매개변수가 하나인 Func2의 타입을 매개변수가 두개인 Func1로 취급하는 것은 가능하다.
func1 = func2
// 매개변수가 두개인 Func1의 타입을 매개변수가 한개인 Func2로 취급하는 것은 불가능하다.
// func2 = func1

// func1 = func3
// func2 = func3
// func3 = func2
