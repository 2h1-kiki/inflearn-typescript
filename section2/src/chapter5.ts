enum Role {
  ADMIN,
  USER = 20,
  GUEST,
}

enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: 'test',
  role: Role.ADMIN,
  language: Language.korean,
}
const user2 = {
  name: '홍길동',
  role: Role.USER,
}
const user3 = {
  name: '아무개',
  role: Role.GUEST,
}

console.log(user1, user2, user3)
