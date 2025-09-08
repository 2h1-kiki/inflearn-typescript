/**
 * Mapped Type(맵드 타입)
 * - 기존 객체 타입을 기반으로 새로운 객체 타입을 만드는 타입 조작 기능
 */
interface User {
	id: number
	name: string
	age: number
}

function fetchUser() {
	// api 호출해서 받아왔다고 쳐!
	return {
		id: 1,
		name: '사람',
		age: 18
	}
}

// Mapped Type으로 타입을 선언할 때는 interface가 아닌 type으로만 선언 가능!
type PartialUser = {
	// id?: number
	// name?: string
	// age?: number

	// 모든 프로퍼티를 선택적 프로퍼티로 만들려면?
	// > []뒤에 ?로 선택적 프로퍼티를 만든다.
	[key in keyof User]?: User[key]
	// [key in "id" | "name" | "age"]: User[key]
}

// 모든 프로퍼티 타입을 boolean 타입으로 선언할 때
type BooleanUser = {
	[key in keyof User]: boolean
}

// 모든 프로퍼티 타입을 readonly로 선언할 때
type ReadonlyUser = {
	readonly [key in keyof User]: User[key]
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
	// 여기서 특정 user의 age만 변경하고 싶을때
	// User객체를 타입으로 선언이 되어있어, age의 객체 값만 보내줄 수 없다.
}

updateUser({age: 17})