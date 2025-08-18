/**
 * 기본 타입간의 호환성
 */
let num1: number = 10
let num2: 10 = 10

num1 = num2

/**
 * 객체 타입의 호환성
 */

type Book = {
  name: string
  price: number
}

type ProgrammingBook = {
  name: string
  price: number
  skill: string
}

let book: Book
let programmingBook: ProgrammingBook = {
  name: '한 입크리고 잘라먹는 리엑트',
  price: 33000,
  skill: 'reactjS',
}

book = programmingBook
// programmingBook = book

/**
 * 초과 프로퍼티 검사
 * 변수를 초기화 할 때 초기화하는 값으로 개체 리터럴을 사용하면 발동하는 검사
 * - 실제 타입에는 정의하지 않은 초과 프로퍼티를 작성하면, 안되도록 막는 검사
 */
let book2: Book = {
  name: '한 입크리고 잘라먹는 리엑트',
  price: 33000,
  // skill: 'reactjS',
}

/**
 * 초과 프로퍼티 검사를 피하기 위해서
 * 초기화 할 떄, 개체 리터럴을 사용한 것이 아니면 허용
 */
let book3: Book = programmingBook

function func(book: Book) {}
// 인수로 개체 리터럴을 전달하면 초과프로퍼티 검사가 발동한다.
func({
  name: '한 입크리고 잘라먹는 리엑트',
  price: 33000,
  // skill: 'reactjS',
})
// 서브타입 객체를 넣으려고 한다면, 변수에 저장한 후 인수로 전달
func(programmingBook)
