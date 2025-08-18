/**
 * 타입스크립트 인터페이스와 클래스를 함께 사용하는 방법
 */
interface CharacterInterface {
	name: string;
	moveSpeed: number;
	move(): void;
}

// Interface 설계도 대로 클래스 객체를 생성하도록 구현
class Character implements CharacterInterface {

	// Interface는 무조건 public 필드만 정의 할 수 있어
	// private, protected 필드가 필요하면 생성자에 추가로 적어주면 된다.
	constructor(public name: string, public moveSpeed: number) {
	}

	move() {
		console.log(`${this.moveSpeed} 속도 이동!`)
	}
}