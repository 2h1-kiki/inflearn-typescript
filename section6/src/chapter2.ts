/**
 * 접근제어자
 * access modifier
 * - 클래스를 만들 때 특정 필드나 메서드에 
 *   접근할 수 있는 범위를 설정하는 문법
 * - 접근제어자 종류 : Public, Private, Protected
 */

class Employee {
	//필드
	// name: string;
	private name: string;
	// age: number;
	protected age: number;
	position: string; 

	// 생성자
	constructor(name: string, age: number, position: string) {
		this.name = name;
		this.age = age;
		this.position = position;
	}

	// 메서드
	work() {
		console.log(`${this.name} 일함`);
	}
}

// 클래스 인스턴스 생성
const employee = new Employee('홍길동', 27, 'developer')
// 생성된 인스턴스는 객체로 객체 프로퍼티에 접근 후 수정 가능
// employee.name = '아무개'
// employee.age = 30
employee.position = '디자이너'
// 수정이 가능한 이유는 객체이고,
// 클래스에 접근제어자가 public으로 아무제약이 없는 접근제어자로
// 공공의 값으로 자유롭게 접근가능
// public은 기본값으로 생략 가능

// Employee클래스의 name필드를 private으로 접근제어자를 설정 시
// 위의 employee.name = '아무개' 코드가 오류가 나고 있다.
// 오류내용 : 'name' 속성은 private이며 'Employee' 클래스 내에서만 액세스할 수 있습니다.
// 점표기법으로 프로퍼티를 접근할 수 없고, read-only랑 다르다.
// read-only는 읽을수 있다.
// 접근하고 싶다면 class 내에서 접근 가능

// 상속받은 클래스 내에서도 private으로 된 name 필드는 접근 불간
class ExecutiveOfficer extends Employee {
	// 필드
	officeNumber: number;

	constructor(name: string, age: number, position:string, officeNumber: number) {
		super(name, age, position) 
		this.officeNumber = officeNumber
	}

	func() {
		// this.name // 오류 발생 : 'name' 속성은 private이며 'Employee' 클래스 내에서만 액세스할 수 있습니다.
		this.age // 상속받은 클래스의 메서드에서는 접근 허용
	}
}

// 외부에서는 접근이 안되더라도 상속받은 클래스 내에서는 접근이 가능한 접근제어자
// protected를 Employee 클래스의 age 필드를 변경하면
// 외부 employee.age = 30에 접근이 불가하여 오류가 발생하지만
// 오류 : 'age' 속성은 보호된 속성이며 'Employee' 클래스 및 해당 하위 클래스 내에서만 액세스할 수 있습니다.
// 상속된 클래스의 메서드에서는 접근이 허용 된다.

// 접근제어자는 생성자에도 선언이 가능하다. 
// Employee class의 생성자의 메게변수에 접근제어자를 추가하면
// constructor(private name: string, protected age: number, position: string)
// 메게변수 오류발생 : name, age는 식별자가 중복되었습니다.
// 메게변수에 접근제어자 추가 시 자동으로 필드를 만들어서 중복이 된다.

// 생성자의 메게변수에 접근제어자를 추가하면 
// 자동으로 필드 추가, 필드의 값 초기화도 자동으로 한다.
class EmployeeB {
	//필드

	// 생성자
	constructor(private name: string, protected age: number, public position: string) {
		// 자동으로 초기화하여 this.name = name으로 초기화 하지 않아도 된다.
	}

	// 메서드
	work() {
		console.log(`${this.name} 일함`);
	}
}

console.log(employee)

/**
 * 접근제어자는 객체지향 프로그래밍을 할 때 대단히 중요한 역할을 하는 문법으로
 * 객제지향에서는 은닉화라고 해서
 * 클래스 인스턴스 (클래스로 만든 객체 프로퍼티)를
 * 외부에서 수정할 수 없도록 막는게 일반적
 * 이유 : 잘못 수정 시 다른 메서드나 클래스에도 여파가 미칠 수 있기 떄문
 */