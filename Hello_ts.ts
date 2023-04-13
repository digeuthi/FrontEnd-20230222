console.log('Hello Typescript');

// 변수
var number: number; //변수타입 변수명 : 데이터 타입 ; 까지가 선언
number = 10;
//number = 'string';

let string = 'string'; //초기화 할때 들어오는 데이터 타입으로 맞춰지게 된다
//string = 10;

// 함수
const funtion = (/**매개변수 받을적에는 any 포함 형태 만들면 안된다*/ arg/*매개변수 이름*/ :number):string/*함수반환값 타입*/  => {
    //상수 변수 타입 설정해놓고 function으로 변수명 설정하니까 빨간줄 떴다. funtion으로 설정해서 하면 안뜸
    return string; //지정한 문자열을 return해줘야한다
};

// 객체
// 1. class 이용
class Object1 {
    prop1: string;
    prop2: number;

    constructor(prop1: string, prop2: number){ //생성자를 따로 만들어서 사용해줘야한다 -> 귀찮다?
        this.prop1=prop1;
        this.prop2=prop2;
    };
};

const object1: Object1 = {prop1 : 'prop1', prop2 : 2};
//변수타입 변수명 : 객체 

//2. type 키워드 사용
type Object2 = {
    prop1: string,
    prop2: number
}
const object2: Object2 = {prop1 : 'prop1', prop2 : 2};

//인터페이스를 이용해서 쓰이는 규칙 그대로 가져올수있다?
// 3. interface 활용
interface Object3 {
    prop1 : string;
    prop2 : number;
    func1?/**필수가 아닌애로 만들어준다 */: (arg1: number) => string; 
    //인터페이스에서 메서드를 선언만 하고 싶을땐 함수의 타입만 지정할수있다. 선언부만 작성할 수 있다.
}
const object3: Object3 | null = null; //ts에서는 null을 넣으려면 | 사용해서 받을 수 있다. java에서는 됐나...객체에

interface Object4 {
    prop3: string;
    prop4: number;
}
//ts는 타입을 합칠수 있다. 
const object4 : Object3 & Object4 = {prop1 : 'prop1', prop2 : 2, prop3 : 'prop3', prop4 : 4}

//0413 추가
//4. enum 열거형 타입
enum Fruits{
    APPLE = '사과',
    BANANA = '바나나',
    MELON = '메론'
}

//const fruit: Fruits = 'a'; //Fruits에 해당하지 않는 값이 오면 빨간줄뜬다
const fruit: Fruits = Fruits.APPLE;
console.log(fruit);

