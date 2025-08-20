/**
 * 제네릭 인터페이스와 제네릭 타입 별칭
 */

// 제네릭 인터페이스는 제네릭 함수 만들때와 동일
interface KeyPair<K, V> {
	key: K,
	value: V
}
/**
 * 제네릭 인터페이스는 타입으로 어떤 변수에 정의할 때
 * 반! 드! 시! 꺽쇄를 열고 타입변수에 타입을 직접 할당해야한다.
 * 
 * (참고사항)
 * 타입변수 = 타입파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
 * 로 불린다.
 * 
 * 제네릭 인터페이스는 
 * 하나의 인터페이스로 다양한 타입의 객체를 표현할 수 있다.
 */
let keyPair: KeyPair<string, number> = {
	key: 'key',
	value: 0
}

let keyPair2: KeyPair<boolean, string[]> = {
	key: true,
	value: ['1']
}

/**
 * 제네릭 인터페이스 && 인덱스 시그니처 문법
 * 두 개를 함께 사용하면 유연한 객체 타입을 만들 수 있다.
 */

/**
 * 인덱스 시그니처란?
 * 프로퍼티에 key와 value의 타입에 관련된 규칙만 만족하면
 * 어떤 객체든 허용하는 아주 유연한 객체 타입을 만드는 문법
 */
interface NumberMap {
	[key: string]: number;
}
/**
 * 인덱스 시그니처 문법에 맞춰서 key는 string타입,
 * value는 number타입이면 뭐든 허용하는 타입
 */
let numberMap1: NumberMap = {
	key: -12332,
	key2: 123123
}

/**
 * 제네릭 + 인덱스 시그니처 문법 사용하여
 * value의 타입을 자유롭게 허용가능한 인터페이스 선언
 * 
 * - 하나의 타입으로 다양한 객체 표현 가능
 */
interface Map<V> {
	[key: string]: V
}

let stringMap: Map<string> = {
	key: 'value'
}
let booleanMap: Map<boolean> = {
	key: true
}

/**
 * 제네릭 타입 별칭
 * - 제네릭 타입별칭도 타입으로 사용할 때
 * 	우리가 직접 타입 변수에 할당할 타입을 직접 지정해야함
 * > 제네릭 인터페이스와 문법만 다를 뿐 거의 동일
 */

type Map2<V> = {
	[key: string]: V
}

let stringMap2: Map2<string> = {
	key: 'hello'
}

/**
 * 제네릭 인터페이스의 활용 예시
 * - 유저관리 프로그램 만들기
 * > 유저 구분 : 학생 / 개발자
 */
interface Student {
	type: 'student', // 타입이 string literal로 student
	school: string
}
interface Developer {
	type: 'developer', // 타입이 string literal로 developer
	skill: string
}

/**
 * Student와 Developer는 서로소 집합으로 Union으로 묶으면
 * 서로소 유니온 타입이 된다.
 * -> 서로소 유니온 타입은 type을 좁힐 때 유용하다.
 */

// Student와 Developer를 모두 아우르는 User 인터페이스 선언
interface User {
	name: string;
	profile: Student | Developer
}

// 학생만 할 수 있는 기능
function goToSchool(user: User) {
	// 학생만 구분할 수 있는 프로퍼티가 없어 타입가드를 통해
	// 학생만 해당 함수를 사용할 수 있도록함
	if(user.profile.type !== 'student') {
		console.log('너 학생 아니잖아! 꺼져!')
		return
	}

	const school = user.profile.school
	console.log(`${school}로 등교 완료`)
}

const developerUser: User = {
	name: '나는 개발자라네',
	profile: {
		type: 'developer',
		skill: 'Typescript'
	}
}

const studentUser: User = {
	name: '나는 학생이라구',
	profile: {
		type: 'student',
		school: '어딘가 있겄지'
	}
}

/**
 * 위의 코드에서 타입이 많아지거나 했을 때 해당 코드는 복잡해진다.
 * 
 * 제네릭을 이용하여 위의 코드 깔끔하게 만들기
 * - User 인터페이스를 제네릭 인터페이스로 변경
 */

interface User2<T> {
	name: string;
	profile: T;
}

// 제네릭 인터페이스는 변수의 타입을 정의하면 
// 동시에 타입변수에 할당할 타입을 직접 명시해줘야한다.
function goToCompany(user: User2<Developer>) {
	const skill = user.profile.skill
	console.log(`${skill}을 갖고 있음`)
}

// 제네릭 인터페이스를 메게변수로 받게되면 자동으로 타입좁히기가 된다.
// goToCompany(studentUser) // Student타입은 전달이 불가하다.

const developerUser2: User2<Developer> = {
	name: '홍길동',
	profile: {
		type: 'developer',
		skill: 'Java'
	}
}

const studentUser2: User2<Student> = {
	name: '아무개',
	profile: {
		type: 'student',
		school: '서울대'
	}
}