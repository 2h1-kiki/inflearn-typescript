/**
 * 타입스크립트의 클래스
 */


const employee = {
	name: '개발자A',
	age: 23,
	position: 'developer',
	work() {
		console.log('일함')
	}
}

/**
 * 필드의 타입을 설정하지 않아 any타입으로 추론해야할 떄
 * tsconfig.json에 "noImplicitAny": false로 설정 시 
 * 암시적 Any를 허용하지 않을 것인지에 대한 속성으로 false면 허용하도록 하는 것
 * 기본값은 true여서 건드리지 않는 것이 좋다.
 */
class Employee {
	//필드
	name: string;
	age: number;
	position: string; 

	// 생성자
	constructor(name: string, age: number, position: string) {
		this.name = name;
		this.age = age;
		this.position = position;
	}

	// 메서드
	work() {
		console.log('일함');
	}
}

const employeeB = new Employee('테스트', 27, '개발자');
console.log(employeeB);

/**
 * 타입스크립트 클래스는 자바스크립트 클래스로 취급이 되면서
 * 동시에 타입으로 취급
 * 
 * 클래스자체가 하나의 타입으로 작용
 * 따라서 employeeB의 경우 const employeeB: Employee
 * Employee Class가 타입으로 노출 되고 있다.
 * 
 * 이걸 활용하면
 */
const employeeC: Employee = {
	name: '',
	age: 0,
	position: '',
	work() {
		
	},
}

/**
 * 타입스크립트의 클래스는 타입으로도 활용 가능하다.
 * 이럴 수 있는 이유는?
 * Typescript는 구조적으로 타입을 결정하는 구조적 타입 시스템이라서 가능
 */

// Employee클래스를 확장한 더 세분화된 클래스 하나더 만들기
class ExecutiveOfficer extends Employee {
	// 필드
	officeNumber: number;

	constructor(name: string, age: number, position:string, officeNumber: number) {
		super(name, age, position) 
		this.officeNumber = officeNumber
	}
}
// 타입스크립트에서는 super()를 생략하면 오류가 생긴다
// 속성값이 빠지면 오류 발생하여 Javascript보다 안전하게 사용 가능