/**
 * 인터페이스의 확장
 */

type Animal = {
  name: string
  age: number
}

// Animal을 가지면서 추가 프로퍼티를 갖는 서브 프로퍼티 정의
interface Dog extends Animal {
  isBark: boolean
}
const dog: Dog = {
  name: '',
  age: 1,
  isBark: true,
}

interface Cat extends Animal {
  isScratch: boolean
}

interface Chicken extends Animal {
  isFly: boolean
}

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: '',
  age: 1,
  isBark: true,
  isScratch: true,
}
