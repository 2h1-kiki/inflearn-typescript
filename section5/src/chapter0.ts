/**
 * 인터페이스
 */

interface Person {
  readonly name: string
  age?: number
  sayHi(): void
  sayHi(a: number, b: number): void
  // sayHi: () => void
  // sayHi: (a: number, b: number) => void
}
// sayHi: () => void

type Func = {
  (): void
}

const func: Func = () => {}

const person: Person = {
  name: 'test',
  // age: 13,
  sayHi: function () {
    console.log('Hi')
  },
}

// person.name = '홍길동'

type Type1 = number | string
type Type2 = number & string
