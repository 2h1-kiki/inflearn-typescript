/**
 * keyof 연산자
 * - 객체타입으로부터 프로퍼티의 모든 key들을 string literal union 타입으로 추출하는 연산자
 * - 해당 연산자는 타입에만 사용이 가능하다.
 */

interface Person {
	name: string
	age: number
}

const person: Person = {
	name: 'test',
	age: 18
}

function getPropertyKey (person: Person, key: keyof Person) {
	return person[key]
}

getPropertyKey(person, 'name')

/**
 * keyof typeof {변수}
 * - 타입 정의를 객체타입을 쓰지 않고 변수로 타입을 선언할 떄
 */

const job = {
	name: '개발자',
	position: 'front',
}

type Job = typeof job

function getPropertyKeyInJob (job:Job, key: keyof typeof job) {
	return job[key]
}

getPropertyKeyInJob(job, 'position')