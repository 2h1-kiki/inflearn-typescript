// 배열
let numArr: number[] = [1, 2, 3]
let strArr: string[] = ['hello', 'im', 'test']

// 제네릭 문법으로 배열 타입 정의하는 방식
let boolArr: Array<boolean> = [true, false, true]

// 배열에 들어가는 요소들의 타입이 다양할 경우
// Union타입으로 여러 타입들이 있다는 것을 선언해준다.
let multiArr: (string | number)[] = [1, 'hello']

// 다차원 배열의 타입을 정의하는 방법 - 배열을 연달아 달아준다.
// number[] : number타입의 배열을 + [] 저장하는 배열
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
]

// 튜플 : 길이와 타입이 고정된 배열
// - 타입스크립트에서만 특별히 제공하는 타입

// 첫번째 요소 number, 두번째 요소 number로 타입 설정하여,
// 길이와 타입을 고정 할 수 있다.
let tup1: [number, number] = [1, 2]

// 두번째 요소 오류 : 'string' 형식은 'number' 형식에 할당할 수 없습니다.
// tup1 = [1, '2']

let tup2: [number, string, boolean] = [1, '2', true]
/**
 * 첫번째 요소 오류 : 'string' 형식은 'number' 형식에 할당할 수 없습니다.
 * 두번째 요소 오류 : 'number' 형식은 'string' 형식에 할당할 수 없습니다.
 */
// tup2 = ['2', 1, true]
/**
 * '[number]' 형식은 '[number, string, boolean]' 형식에 할당할 수 없습니다.
 * 소스에 1개 요소가 있지만, 대상에 3개가 필요합니다.
 */
// tup2 = [1]

// 튜플은 타입이 아닌, 그냥 배열이라 배열 함수 사용가능
// 따라서 길이 제한을 두더라도 배열의 크기가 변경되더라도 에러발생이 없다.
tup1.push(3)
tup1.pop()
tup1.pop()
tup1.pop()

// 튜플을 사용할 때 유용한 방법
// index별로 다른 값을 사용해야 경우,
// index의 순서와 위치가 헷갈리는 경우 사용
const users: [string, number][] = [
  ['이아무개', 1],
  ['김아무개', 2],
  ['박아무개', 3],
  ['최아무개', 4],
  // [5, '와우'], // 오류: 'string' 형식은 'number' 형식에 할당할 수 없습니다.
]
