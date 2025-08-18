// 타입 별칭
type User = {
  id: number
  name: string
  nickname: string
  birth: string
  bio: string
  location: string
}

let user: User = {
  id: 1,
  name: 'test',
  nickname: '테스트',
  birth: '2025.01.01',
  bio: '안녕하세요',
  location: '하남시',
}

let user2: User = {
  id: 2,
  name: '홍길동',
  nickname: 'hj',
  birth: '2025.01.01',
  bio: '안녕하세요',
  location: '성남신',
}

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string
}
let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
}

type CountryNumberCodes = {
  [key: string]: number
  Korea: number
}

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
}
