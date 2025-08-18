// object 타입으로 선언한 경우
let user = {
    id: 1,
    name: 'test',
};
/*
  object로 타입을 설정한 경우 객체로만 인식하여,
  점표기법으로 객체의 프로퍼티에 접근하려고 할 때 오류 발생
*/
// user.id
// 객체 리터럴 타입으로 객체 내 프로퍼티의 타입 설정을 해주어야한다.
let user2 = {
    id: 1,
    name: 'test',
};
user2.id; // 객체 리터럴타입으로 정의하면 점표기법으로 접근 가능
let dog = {
    name: '돌돌이',
    color: 'brown',
};
user2 = {
    name: '홍길동',
};
let config = {
    apiKey: 'MY API KEY',
};
export {};
// config.apiKey = 'hacked' // 오류 : 읽기 전용 속성이므로 'apiKey'에 할당할 수 없습니다.
