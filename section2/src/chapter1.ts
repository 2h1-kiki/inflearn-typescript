// number
let num1: number = 123
let num2: number = -123
let num3: number = 0.123
let num4: number = Infinity
let num5: number = -Infinity
let num6: number = NaN

// 오류 발생하는 경우 - 타입에 맞지 않는 함수, 값 넣을 때
// num1 = 'hello' // number 타입에 String 넣을 때
// num1.toUpperCase() // number 타입에 string 함수 사용시

// number type에서 사용이 가능한 함수는 가능
num1.toFixed()

// string
let str1: string = 'hello'
let str2: string = 'hello'
let str3: string = `hello ${num1}`

// boolean
let bool1: boolean = true
let bool2: boolean = false

// typescript에서는 null, undefined를 타입으로 지정되어있다.
// null
let null1: null = null

// undefined
let unde1: undefined = undefined

// 리터럴 타입
let numA: 10 = 10
let strA: 'hello' = 'hello'
let boolA: true = true
