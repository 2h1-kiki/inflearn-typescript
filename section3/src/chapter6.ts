/**
 * 타입 단언
 */
type Person = {
  name: string
  age: number
}
let person = {} as Person
person.name = 'test'
person.age = 27

type Dog = {
  name: string
  color: string
}

let dog1: Dog = {
  name: '똘똘이',
  color: 'brown',
  breed: '진도',
}

let dog2 = {
  name: '똘똘이',
  color: 'brown',
  breed: '진도',
} as Dog

/**
 * 타입 단언의 규칙
 * 단언식 : 값 as 단언
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 Bdml 서브타입이어야 한다.
 */
let num1 = 10 as never // number타입은 never타입의 슈퍼타입이므로 단언이 가능하다.
let num2 = 10 as unknown // unknown타입은 모든 타입의 슈퍼타입인 전체 집합이므로 unknown타입으로 단언이 가능하다.

let num3 = 10 as unknown as string // number, string타입은 교집합이 없는 타입으로 서로 슈퍼, 서브가 될 수 없어 단언할 수 없다.
/**
 * const 단언
 */
let num4 = 10 as const

let cat = {
  name: '야옹이',
  color: 'yellow',
} as const

/**
 * Non Null 단언
 * 어떤 값이 null이거나 undefined가 아니라고 타입스크립트 컴파일러에 알려준다.
 */
type Post = {
  title: string
  author?: string //익명의 작성자가 게세물 작성을 하므로 ?(Optional Property)로 선언
}

let post: Post = {
  title: '게시글1',
  author: '작성자',
}

// 자바스크립트의 옵셔널체이닝 기법인 ?.로 표기가 된다.
//
const len: number = post.author!.length
