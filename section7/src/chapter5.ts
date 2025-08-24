/**
 * Promise 프로미스
 * - 프로미스 생성자에는 함수를 하나 인수로 전달해야한다.
 * - 함수의 역할 : 실행자 함수로 비동처리를 실제로 하는 함수
 * - resolve 함수, reject 함수 내부에서 비동기 처리 진행
 */
const promise = new Promise((resolve, reject) => {
	// 호출 할 API가 없으므로 3초 후에 
	// resolve를 호출하고 결과값 20을 전달한다.
	setTimeout(() => {
		// 비동기 작업이 성공했을때 호출하는 함수 = resolove()
		// 인수로 전달하는 값은 비동기 작업의 결과값이 된다.
		resolve(20)
	}, 3000)

	// 비동기 작업이 실패했을 때 호출하는 함수 = reject()
	// 인수로 실패의 이유를 넣는다.
})

promise.then((response) => {
	console.log(response) // 20 -> response 타입은 unknown이라 연산 불가
	// 타입스크립트는 resolve, reject함수로 전달된 결과값의 타입을 추론할 수 없다.
	// 따라서, response값은 unknown 타입으로 추론한다.
})
/**
 * resolve(20)을 전달하므로, response값은 number여야한다.
 * 자바스크립트의 내장 클래스인 Promise는 typescript에서 제네릭 클래스로
 * type이 별도로 선언되어 있기에 promise의 생성자 호출 시
 * new Promise<number> number타입을 비동기의 결과값으로 추론하도록 제네릭을 사용하면
 * then()의 비동기 결과값인 response는 number타입으로 추론되게 된다.
 * 
 * 따라서, promise의 생성자를 호출 할 때 type변수를 할당해 주면
 * 비동기 처리 결과 값인 type을 우리가 직접 명시할 수 있다.
 */
const genericPromise = new Promise<number>((resolve, reject) => {
	setTimeout(() => {
		// resolve(20)
		reject('~때문에 실패')
	}, 3000)
})

genericPromise.then((response) => {
	console.log('genericPromise response : ', response * 10) // number 타입으로로 추론되고 있어 연산 가능
})

/**
 * reject함수의 인수타입이 any타입이므로
 * catch로 전달되는 error도 any타입으로 추론된다.
 * promise의 catch()를 사용할 때 메게변수의 타입을 정확히 알 수 없다.
 * 그냥 Any타입으로 들어오게 된다.
 * 이 값은 타입변수로도 확실히 타입 지정이 불가하다.
 * 
 * 따라서, 에러 메게변수를 사용할 때, 타입좁히기를 통해서 에러처리를 한다.
 * 실패했을 때 타입은 정해줄 수 없다.
 */
genericPromise.catch((error) => {
	if(typeof error === 'string') {
		console.log(error)
	}
})

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 * 
 * [예시 상황]
 * - 서버로부터 하나의 게시글 데이터를 불러오는 함수 생성
 */
interface Post {
	id: number
	title: string
	content: string
}
/**
 * 게시글 불러오는 함수
 * class는 타입으로 사용 가능 
 * -> fetchPost의 타입은 클래스인 Promise<post>타입
 * 
 * promise를 반환하는 함수에서는 함수에 반환타입을 넣고,
 * promise 생성자 호출에는 반환값을 넣지 않는 방식을 추천
 * -> 함수 선언만 보아도, 어떤 값이 반환되는지 알수 있기 때문
 */
function fetchPost(): Promise<Post> {
	// promise의 리턴 타입을 제네릭으로 선언하는게 아닌
	// return new Promise<Post>((resolve, reject) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				id: 1,
				title: '게시글 제목',
				content: '게시글 컨텐츠'
			})
		}, 3000)
	})
}

const postRequest = fetchPost()

postRequest.then((post) => {
	post.id
})