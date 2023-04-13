console.log('Hello JacaScript!');

// 한줄 주석
/* 부분 주석 */ 

//일반적인 연산은 자바와 유사함
// 변수 선언 방법
// 1. 변수의 타입이 존재하지 않는다 
//      선언할때 타입을 지정하지 않는다
// data의 타입은 있는데, 변수의 타입은 없다.
var variable_name; //선언 , ;없어도 되지만 그냥 찍는 습관 들이기
var variable_name = '변수 값'; //선언과 동시에 초기화
console.log(variable_name.trim());
variable_name = 10; //var과 let 모두 동일하게 데이터 타입을 지정하지않고, 출력할수있고 타입의 변경도 그냥 된다. 변수의 타입이 없다.
//console.log(variable_name.trim()); //문자열이 아닌 숫자에 대해서는 trim이라는 메서드가 없기때문에 오류가 뜬다. 이걸 미리 알수가 없다

// 2. 변수 선언 키워드
// 2-1 var, let, const
var variable_name; //변수 이름이 중복 허용이 된다? var의 문제점 
if(10==10){
    var variable_name2 = '변수';
}
console.log(variable_name2); //코드블록 내에 지역변수로 선언을 했는데 밖에서도 실행이 된다. 

let let_variable_1;
// let let_variable_1; //let으로는 중복허용이 불가! var의 문제를 해결, 
//let : 블록변수 키워드 선언된 동일블럭 내에서 중복허용불가하고 블록내에서만 적용 (기존 자바 변수선언처럼)

if(10 == 10){
    let let_variable_2 = '블럭 변수';
}
//console.log(let_variable_2); //let 사용해서 선언하면 블럭 밖에서 호출 불가, 오류뜬다

const const_variable_1 = '상수'; //선언과 동시에 초기화해줘야한다. 자바에서는 final로 선언후 초기화가능한데, 이건 무조건 초기화까지!
//const_variable_1 = '변경 상수'; //이것도 오류로 뜬다 상수는 변경되지 않는다. 컴파일 기능이 없기때문에 바로 확인할수가 없다

// 3. 데이터의 타입
// 자바는 컴파일 언어라서 각각 타입들이 있는데 기본적으로 숫자형태
// js 에서는 정수 실수를 나누지 않는다. num이라는 타입, null이라는 타입, undefined라는 타입 ...
// 3-1 문자열 string : '' 또는 "" js는 참조변수가 아니므로 소문자로표현
let stringVariable = '문자열';
let stringVariable2 = "문자열";
// html상에서 스크립트 용으로 쓸때는 로우스네이크케이스로 하지만 노드로빼서 개발언어로 사용할때는 로우카멜케이스로 사용!
// css에서는 하이픈으로 띄어쓰기 다 표시한다
console.log(typeof(stringVariable,stringVariable2)); //typeof : 타입을 반환해준다 , js에서 오류를 대비해서 if안에 typeof써서 조건 걸어서 사용가능
// 3-2 숫자 number : 정수, 실수 모두 포함 
let numberVariable = 10;
let numberVariable2 = 1.5;
console.log(typeof(numberVariable,numberVariable2));
// 3-3 논리 boolean : true, false
let booleanVariable = true;
console.log(typeof(booleanVariable));
// 3-4 null
let nullVariable = null; 
console.log(typeof(nullVariable)); //object로 출력되지만 null타입이 있다고 생각해주기
// 3-5 배열 : []
let arrayVariable = [1, 'A', false]; //js에서 동일한 타입만 올 필요없다 , type는 object
arrayVariable[0]; //자바에서는 get사용해서 값을 보여주는데 js는 이렇게 사용
// 3-6 객체 : {}
let objectVariable = { //자바에서는 객체 만드려면 클래스 만들어사 작성해야하는데 js는 바로 만들수있다.
    /**키 : 값 , 형태로 나열 : 이런 구조 json**/
    "key" : "value",
    "name" : "John",
    "age" : 20,
    "object" : {
        "key1" : 1
    }
};
//웹상에서 네트워크통신을 할때 객체형태로 보내거나 받아야한다면 json형태로 사용된다
// 4. 연산자 (자바와 다른 점만 기술)
// 4-1 나눗셈 연산자 
let number1 = 10 / 3; //실수정수 타입이 존재하지않아서 바로 실수로 답이 나온다
console.log(number1);
// 4-2 제곱 연산자 (**)
let number2 = 10 ** 3;
console.log(number2);
// 4-3 비교연산 ==, === 이 다 다른 의미
let numberValue10 = 10;
let stringValue10 = '10';
console.log(numberValue10 == stringValue10); //true , 데이터의 타입은 비교하지않고 문자열을 숫자로 바꾸거나 숫자를 문자로 바꿔서 서로 비교
console.log(numberValue10 === stringValue10); //false, 데이터의 타입까지 비교를 해서 다르면 다르다고 뜬다.

// 5. if 조건 / 논리연산의 항에 대한 이야기
let tmpValue = null; // js에서 문자열의 경우 빈 문자열은 false, 공백이든 다른 문자값은 true
//숫자도 0을 제외한 모든 값들은 true, 0은 false / 빈 배열, 빈 객체는 true 
//0과 빈문자열을 false인데 배열과 객체는 왜 true? : 참조 주소값이 들어가서 참조변수 형태로 존재하므로 true로 나오게된다.
//object에서는 false를 표현할수 없나? -> 값이 0이거나 없으면 false로 인식한다. !참조변수에 값이 없는 것=null!
if(tmpValue/**조건 자리에 모든 타입의 변수가 올수있다, boolean이 아니더라도**/) console.log('true');
else console.log('false'); 

// 6. js의 class , 객체지향을 지원을 한다(제어자는 존재하지 않는다)
class Human{
    name; //인스턴스 변수
    age;
    address;
    //메서드는 사용안된다.
    //생성자를 오버로드해서 만드는건 불가
    constructor(name,age,address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    // constructor(age){
    //     this.age = age; -> 오류뜬다
    // } js에서는 하나의 생성자만 가질수 있다.
}
// js는 일반적으로 class기반으로 돌아가지는 않는다. 객체를 정의한 설계도에 가깝다? 
// 바로 {}해서 생성가능하기 때문에 잘 쓰진 않지만, 틀에 맞게 작성하겠다는 조건이 있다면 
let humanObject = new Human('John', 30, '부산'); // 이렇게 자바처럼 할수 있지만 잘 안쓴다
console.log(humanObject.name);
console.log(humanObject.nema); //undefined뜸
//console.log(HumanObject.nema.trim()); //undefined라는 오류뜸

// es6 es8 js의 버전
// js의 객체를 편하게 다룰수 있는 방법 : 비구조화 할당

// 7. 비구조화 할당
//const { name, age, address } = humanObject ; //dto를 통해서 데이터를 주고받을때 그 값을 하나씩 꺼내오게되는데 js는 이런 방식으로 바로 받을수있다.
let { name, ...others } = humanObject; // ... spread 연산자
console.log(name);
console.log(others);

name = 'Micle';
humanObject = { ...humanObject, name }; //객체 내부에서 ...하면 하나씩 다 분해가 된다
// {name, age, address}로 다 분해해서 넣은다음 {name, age, address, name}을 해준것.
// spread 이용한 경우 name이 중복되는 경우 뒤에 오는 것으로 덮어씌우고 처음 온것을 날려버리게 된다.
console.log(humanObject);

const tmpArray = [1, 'A', true];
const [number, ...otherArray] = tmpArray;
console.log(number);
console.log/**이건 메서드**/(otherArray);

// 8. 함수선언
//js에서는 함수라고한다. java에서는 메서드
//인스턴스 내부나 클래스 내부에 있으면 메서드. 그 밖에 있으면 함수 function이라고 한다
function function1 (arg, arg2){ //함수도 반환타입 지정하지 않는다

}

function1(1,2); //호출하는 방식

//변수의 타입이 없다 = 변수에 저장할수 있는 메모리 공간이 한정되어 있지않다 
//함수도 변수에 들어갈수 있나? 변수처럼 선언해서 쓰고싶다 -> 화살표 함수라는걸로 들어가게 할수있다.
const function2 = (/**매개변수자리*/ arg1, arg2) => {/**구현부**/ //콜백 형태

}
function2(1,2);



