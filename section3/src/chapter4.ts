/**
 * 합집합 - Union 타입
 */

type Dog = {
  name: string
  color: string
}

type Person = {
  name: string
  language: string
}

type Union1 = Dog | Person

// Dog타입의 프로퍼티만
let union1: Union1 = {
  name: '',
  color: '',
}

// Person타입의 프로퍼티만
let union2: Union1 = {
  name: '',
  language: '',
}
// Dog + Person타입 모든 프로퍼티
let union3: Union1 = {
  name: '',
  color: '',
  language: '',
}

// Dog + Person 겹치는 타입만
// let union4: Union1 = {
//   name: '',
// }

/**
 * 교집합 타입 - Intersection 타입
 */
let variable: number & string

type Dog2 = {
  name: string
  color: string
}

type Person2 = {
  name: string
  language: string
}

type Intersection = Dog2 & Person2
let intersection: Intersection = {
  name: '',
  color: '',
  language: '',
}
