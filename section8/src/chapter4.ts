/**
 * 템플릿 리터럴 타입
 * - 스트링 리터럴 타입을 기반으로 특정 패턴을 갖는 String타입을 만드는 기능
 * - 문자열로 상황을 여러가지 표현해야할 때 유용하게 사용 가능
 */

type Animal = 'dog' | 'cat' | 'rabit'
type Color = 'red' | 'blue' | 'yello'

type AnimalColor = `${Animal}-${Color}`