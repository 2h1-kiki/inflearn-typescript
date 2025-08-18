/**
 * 타입 추론
 * : 점진적인 타입시스템으로 변수에 값을 초기화 하면, 타입 선언이 없어도, 자동적으로 타입을 추론하는 시스템
 */
// 추론 : let a: number
let a = 10
// 추론 : let b: string
let b = 'hello'
/**
 * 자동 타입 추론
 * let c: {
    id: number;
    name: string;
    profile: {
        nickname: string;
    };
    urls: string[];
	}	
 */
let c = {
  id: 1,
  name: 'test',
  profile: {
    nickname: 'stop',
  },
  urls: ['https://test.com'],
}
/**
 * 자동 타입 추론
 * let id: number
 * let name: string
 * let profile: {
    nickname: string;
}
 */
let {id, name, profile} = c

/**
 * 자동 타입 추론
 * let one: number
 * let two: string
 * let three: boolean
 */
let [one, two, three] = [1, 'hello', true]

// 추론 : function func(message?: string): string
function func(message = 'hello') {
  return 'hello'
}

/**
 * 암묵적 any타입, any타입의 진화
 */
let d: any
d = 10
d.toFixed()
d.toUpperCase()

d = 'hello'
d.toUpperCase()
d.toFixed()

const num = 10
const str = 'hello'

let arr = [1, 'string']
