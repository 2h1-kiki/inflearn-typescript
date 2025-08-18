// unknown 타입
function unknownExam() {
  // 모든 타입을 UpCasting 가능
  let a: unknown = 1
  let b: unknown = 'hello'
  let c: unknown = true
  let d: unknown = null
  let e: unknown = undefined
  let f: unknown = {}

  let unknownVar: unknown
  // 모든 타입의 DownCasting 불가능
  // let num: number = unknownVar
  // let str: string = unknownVar
  // let bool: boolean = unknownVar
}

// Never 타입
function nevereExam() {
  // 해당 함수가 반환하는 것 자체가 불가능한 상태
  // 반환할 수 있는게 없는 공집합인 상
  function neverFunc(): never {
    while (true) {}
  }

  // 모든 타입에 업케스팅 가능
  let num: number = neverFunc()
  let str: string = neverFunc()
  let bool: boolean = neverFunc()

  // 모든 타입을 다운케스팅하는 것은 불가능
  // 어떠한 값도 저장하면 안되는 변수의 타입으로 설정할 수 있다.
  // let never1: never = 10
  // let never2: never = 'string'
  // let never3: never = true
}

// void 타입
function voidExam() {
  // 반환값이 없는 함수
  function voidFunc() {
    console.log('hi')
  }

  // void는 undefined의 슈퍼타입으로
  // undefined를 Upcasting은 가능
  let voidVar: void = undefined
}

// any 타입
function anyExam() {
  let unknownVar: unknown
  let anyVar: any
  let undefinedVar: undefined
  let neverVar: never

  // unknown타입을 다운케스팅이 가능하다.
  anyVar = unknownVar

  // any타입을 다운케스팅 할 수 있다.
  undefinedVar = anyVar

  // neverVar = anyVar
}
