/**
 * 제네릭 클래스
 */
class NumberList {

	// 메게변수의 접근제어자가 private이면 this.list = list 생략가능
	constructor(private list: number[]) {}

	push(data: number) {
		this.list.push(data)
	}

	pop() {
		return this.list.pop()
	}

	print() {
		console.log(this.list)
	}
}

const numberList = new NumberList([1, 2, 3])

numberList.pop() // 3제거
numberList.push(4) 
numberList.print() //[1, 2, 4]

/** 
 * 위의 numberList를 stringList로 사용하고 싶다면?
 * > 제네릭 리스트로 만들어준다.
 */ 
class List<T> {

	// 메게변수의 접근제어자가 private이면 this.list = list 생략가능
	constructor(private list: T[]) {}

	push(data: T) {
		this.list.push(data)
	}

	pop() {
		return this.list.pop()
	}

	print() {
		console.log(this.list)
	}
}

const numbers = new List([1, 2, 3])
numbers.pop()
numbers.push(4)
numbers.print()

const stringList = new List(['a', 'b', 'c'])
stringList.pop()
stringList.push('4')
stringList.print()

/**
 * 추가: 제네릭 클래스는 생성자를 호출할 때
 * 생성자의 인수로 전달하는 값을 기준으로 타입 변수에 타입 추론
 * 따라서, 제네릭 인터페이스와 제네릭 타입변수와 다르게
 * new List<number>([1, 2, 3]) 이렇게 클래스 생성시
 * 제네릭으로 타입을 지정하지 않아도 된다.
 */