/**
 * 선언 합침
 */

interface Person {
  name: string
}

interface Person {
  age: number
}

const person: Person = {
  name: '',
  age: 10,
}

/**
 * 모듈 보강
 */

interface Lib {
  a: number
  b: number
}

interface Lib {
  c: string
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: 'hello',
}
