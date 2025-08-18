/**
 * 클래스
 * 객체를 이용해서 실세계의 존재하는 사물이나 사람을 표현하는 경우가 많다.
 */

// 학생을 관리하는 어떤 프로그램을 만들어야 할 때
// 학생을 표현하는 객체를 여러개 만들려면 중복 코드가 만들어진다.

let studentA = {
	name: '학생A',
	grade: 'A+',
	age: 27,
	study() {
		console.log('열심히 공부 해')
	},
	introduce() {
		console.log('안녕하세요!')
	}
}
// let studentB = {
// 	name: '학생B',
// 	grade: 'B-',
// 	age: 27,
// 	study() {
// 		console.log('열심히 공부 해')
// 	},
// 	introduce() {
// 		console.log('안녕하세요!')
// 	}
// }

// 똑같은 모양의 객체를 찍어내듯이 한 줄로 만들 수 있는게 클래스다.
// - 클래스는 붕어빵 기계 객체는 붕어빵
// 클래스 명은 앞글자를 대문자로 하는 파스칼기법을 사용한다.
class Student {
	// 필드 - 클래스가 만들어낼 객체 프로퍼티 (어떤 모양의 객체를 만들지 정의)
	// 필드를 설정하면 - Student클래스가 만들어내는 객체는 필드가 반드시 포함된다.
	name
	grade
	age

	// 생성자 - 클래스 호출 시 실제 객체를 만드는 매서드
	constructor(name, grade, age) {
		// this는 클래스가 만들고 있는 객체
		this.name = name
		this.grade = grade
		this.age = age
	}

	// 메서드 만들기
	study() {
		console.log('열심히 공부해')
	}

	// this를 메서드 안에서 이용하면 
	// 객체의 프로퍼티 값들을 메서드에 적용 가능
	introduce() {
		console.log(`안녕하세요! ${this.name} 입니다.`)
	}
}

// 인스턴스 : 클래스를 이용해 만든 객체
// new 클래스명을 선언하면 -> 생성자 호출
let studentB = new Student('학생', 'B-', 27)
console.log('studentB : ', studentB)
// 클래스 안에 메서드 호출
studentB.study()
studentB.introduce()

// 터미널 node src/chapter0.js 실행

// 복습겸 새로운 클래스 생성 + 상속
// class StudentDeveloper {
// 	name
// 	grade
// 	age
// 	favoriteSkill
	
// 	constructor(name, grade, age, favoriteSkill) {
// 		this.name = name
// 		this.grade = grade
// 		this.age = age
// 		this.favoriteSkill = favoriteSkill
// 	}

// 	// 메서드 만들기
// 	study() {
// 		console.log('열심히 공부해')
// 	}
	
// 	introduce() {
// 		console.log(`안녕하세요! ${this.name} 입니다.`)
// 	}
	
// 	programming() {
// 		console.log(`${this.favoriteSkill}로 프로그래밍 함`)
// 	}
// }

// Student와 StudentDeveloper도 중복코드가 존재한다.
// 중복 삭제를 위해 상속진행
class StudentDeveloper extends Student{
	favoriteSkill
	
	constructor(name, grade, age, favoriteSkill) {
		// 부모 클래스에 student와 동일한 필드를 전달한다.
		super(name, grade, age)
		this.favoriteSkill = favoriteSkill
	}

	// 메서드 만들기
	programming() {
		console.log(`${this.favoriteSkill}로 프로그래밍 함`)
	}
}

let studentDeveloper = new StudentDeveloper('학생 개발자', 'B+', 27, 'Typescript')
console.log('studentDeveloper: ', studentDeveloper)
studentDeveloper.study()
studentDeveloper.introduce()
studentDeveloper.programming()

// 수업관련 아티클 확인 필요
// [핸드북] 자바스크립트 클래스 소개
// https://ts.winterlood.com/f9862331-98d2-4afc-a8f7-f9f1d6cf3d43#a281ac82f6a0415ead2ccd15294b1959
// 자바스크립트 클래스
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes

