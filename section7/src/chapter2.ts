/**
 * map 메서드 따로 정의하기
 */
const arr = [1, 2, 3]
const newArr = arr.map((it) => it * 2)

function map<T>(arr: T[], callback:(item: T) => T) {
	let result = []
	for(let i=0; i<arr.length; i++) {
		result.push(callback(arr[i]))
	}
	return result
}


map(arr, (it) => it * 2)
map(['hi', 'hello'], (it) => it.toUpperCase())

/**
 * 따로 정의한 map함수에서 2개의 메게변수를 받는데,
 * 타입변수 T로만 타입을 정의했기 때문에
 * callback함수는 배열 타입에 맞춰서 정해지게 된다.
 * 메게변수로 받는 arr배열 타입과 callback 함수의 return 타입을
 * 다르게 하기 위해서는 chapter1의 swap함수처럼 제네릭으로
 * 2개의 타입변수를 선언하면 된다.
 */
function map2<T, U>(arr: T[], callback:(item: T) => U) {
	let result = []
	for(let i=0; i<arr.length; i++) {
		result.push(callback(arr[i]))
	}
	return result
}
// 첫번째 메게변수는 string[]
// 두번째 메게변수의 callback 함수의 반환타입은 number
map2(['hi', 'hello'], (it) => parseInt(it))

/**
 * forEach 메서드 따로 정의하기
 */
const arr2 = [1, 2, 3]
arr2.forEach((it) => console.log(it))

function forEach<T>(arr: T[], callback: (item: T) => void) {
	for (let i=0; i<arr.length; i++) {
		callback(arr[i])
	}
}
forEach(arr2, (it) => {
	// foreEach 함수로 전달하는 arr2의 타입과 it이 동일해야한다.
	console.log(it.toFixed)
})

forEach(['123', '456'], (it) => {it})