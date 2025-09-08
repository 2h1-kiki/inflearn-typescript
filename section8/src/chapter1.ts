/**
 * Indexed Access Type
 * - 인덱스를 이용해 타입 내 특정 프로퍼티 타입 추출하는 타입
 * - 객체, 배열, 튜플에서 사용가능
 * - 복잡하고 큰 타입에서 우리가 필요하 타입 추출이 가능!!
 */

/**
 * 객체 프로퍼티의 타입 추출
 */
interface Post {
	title: string
	content: string
	author: {
		id: number
		name: string
		age: number
	}
}

const post: Post = {
	title: '게시글 제목',
	content: '게시글 본문',
	author: {
		id: 1,
		name: '작성자',
		age: 27,
	}
}

// 작성자의 id와 이름을 붙여서 출력하는 함수
// author의 프로퍼티가 늘어났을 때 ex) author: {id: string, name: stirng} 이렇게 선언을 하면 번거롭다.
// 이럴 때 인덱스드 엑세스 타입을 정의한다. Post['author'] > 이렇게 정의하면 프로퍼티가 늘어나도 문제 없음!
// Post["author"]에서 String Literal 타입인 "author"은 인덱스라고 부른다. 
// > 인덱스를 이용해 특정 타입에 접근하여 Indexed Access Type
// > 인덱스에는 값이 아닌, 타입만 들어갈 수 있다.
function printAuthorInfo(author: Post['author']) {
	console.log(`${author.id}-${author.name}`)
}

//인덱스에 값을 넣게 되면 오류가 발생한다. > 'authorKey' 형식을 인덱스 형식으로 사용할 수 없습니다.
const authorKey = "author"
// function printAuthorInfo2(author: Post[authorKey]) { }

// 만약 id타입만 갖고 오고 싶다면
function printAuthorInfo3(author: Post['author']['id']) {
	console.log({author})
}

/**
 * 배열 요소의 타입 추출
 */
// type PostList = Post[]
type PostList = {
	title: string
	content: string
	author: {
		id: number
		name: string
		age: number
	}
}[]

/**
 * 배열 타입으로부터 요소의 타입을 추출할 때,
 * 인덱스에 number타입을 넣어주면 된다.
 * Number Literal 타입으로 [0]이렇게 넣어줘도 동일하게 동작
 */
const posts: PostList[number] = {
	title: '게시글 제목',
	content: '게시글 본문',
	author: {
		id: 1,
		name: '작성자',
		age: 27,
	}
}

function printAuthorInfoToPostList(author: PostList[number]['author']) {
	console.log(`${author.name}-${author.id}`)
}

/**
 * 튜플 요소의 타입 추출하기
 */
type Tup = [number, string, boolean]

type TupNumber = Tup[0]

type TupString = Tup[1]

type TupBoolean = Tup[2]

// 튜플 타입 안에 모든 타입의 최적의 공통 타입을 뽑는다.
// string | number | boolean
type TupUnion = Tup[number]