/**
 * 첫번째 사례
 * 1. 메게변수로 어떤 타입이던 들어올 수 있는 제네릭 함수로 선언하기
 * 2. 메게변수로 서로 다른 타입으로 들어올 수 있는 제네릭 함수 선언하기.
 * - 제네릭함수의 타입변수는 여러개 선언하는 것도 가능하고, 
 *   필요한 상황에서 여러개 선언해서 시용하는 것도 가능
 */

// a, b 어떤 타입의 값이 들어올지 몰라 타입변수로 제네릭 함수 선언
function swap<T>(a: T, b: T) {
	return [b, a]
}

const [a, b] = swap(1, 2)

/**
 * swap 제네릭 함수의 메게변수로 다른 타입을 전달하면 에러 발생
 * 타입변수는 이미 첫번째 메게변수로 String타입 "1"로 할당 되었기에
 * 두번째 메게변수로 2의 메게변수로 number type으로 할당 불가
 */
// const [a1, b2] = swap("1", 2) 

/** 
 * 메게변수 마다 다른 타입으로 받으려고 할 때,
 * 타입변수 2개를 제네릭으로 선언하여, U라는 타입변수를 추가한다.
 */
function swap2<T, U>(a: T, b: U) {
	return [b, a]
}

const [c, d] = swap2('1', 2)

/**
 * 두번째 사례
 * - 제네릭 함수로 어떤 타입의 배열도 받을 수 있고,
 * 	배열의 첫번째 요소를 반환하는데 타입까지 잘 추론되도록 선언하기
 * - 
 */

/**
 * 원래 제네릭 함수로 변경하듯이 타입변수 T, 메게변수 타입 T로 변경하면
 * 반환하는 data[0]에서 오류가 발생한다.
 * - 오류 : '0' 형식의 식을 'unknown' 인덱스 형식에 사용할 수 없으므로 요소에 암시적으로 'any' 형식이 있습니다.
 * - 오류발생 원인 : 타입변수 T에 어떤 타입이 할당될지 모르기 때문에 최대한 오류가 발생하지 
 *   않도록 제한하기 위해	typescript가 타입변수의 타입을 unknown으로 출원하기에 인덱스 접근시 오류 발생
 * - 위의 오류를 없에주기 위해 메게변수의 타입을 T[]로 변경
 *   > T가 어떤 타입이 올지 몰라 unknown타입이긴 한데 
 *     그래도 데이터 타입은 unknown 배열타입 이라고 정의해준 것
 */
function returnFirstValue<T>(data: T[]) {
	return data[0]
}

let num = returnFirstValue([1, 2, 3])

/**
 * 배열의 첫번째 인덱스와 두번째 인덱스의 타입이 다를 경우 제네릭 함수에서
 * 첫번째 요소를 추론할 때 Union타입으로 추론한다.
 * 아래의 경우 string | number로 str타입을 추론한다.
 * typescript에서는 배열 안에 number값이 먼저 올지 string값이
 * 먼저 올지 알 수 없기 때문
 */
let str = returnFirstValue([1, 'hello', 'mynameis'])

/**
 * Union타입으로 추론되는 것이 아닌 배열의 타입에 맞춰서
 * 첫번째 타입이 number면 반환되는 첫번째 인덱스 타입도 
 * number로 추론되게 하기위해서는?
 * > 메게변수의 타입을 튜플타입으로 제네릭 함수 선언
 * > 튜플타입은 특정 인덱스에 해당하는 요소의 타입을 지정할 수 있기 때문
 * > 튜플타입 배열은 []안에 첫번째 타입을 T로하고, 나머지 타입은 ...unknown[]로 정의
 * > 첫번쨰 인텍스 외에는 나머지 타입은 몇개가 들어오든, 무슨 타입이든 알 필요가 없기 떄문
 */
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
	return data[0]
}

let firstDataNumber = returnFirstValue2([1, 'hello', 'mynameis'])

/**
 * 세번째 사례
 * - length가 존재하는 값들만 전달 받을 수 있는 제네릭 함수 선언
 * - 단, 메게변수로 전달되는 값의 타입이 여러가지일 때 
 * > T의 타입을 제한하여 length가 없는 프로퍼티는 들어올 수 없게 한다.
 * > length로 제한할떄는 extends 확장을 써서,
 * 	 T extends {length: number}
 * 		- T라는 타입은 length가 number인 property를 가지고 있는 
 *      객체를 확장하는 타입으로 length라는 프로퍼티는 무조건 갖고있어야한다.
 *      > interface InterfaceB extends InterfaceA{} 이런경우
 *        InterfaceA가 갖고있는 프로퍼티는 InterfaceB가 무조건 갖고있는 것과 동일
 */
function getLength<T extends {length: number}>(data: T) {
	return data.length
}

let var1 = getLength([1, 2, 3])
let var2 = getLength('12345')
let var3 = getLength({length : 10})
// let var4 = getLength(10) // number 타입의 값은 length 프로퍼티가 없어 허용X