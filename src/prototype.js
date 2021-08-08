const c1 = {
    name:'c1',
    color:'red'
};
const c2 = {
    name:'c2',
    width:300
};
const c3 = {
    name:'c3',
    height:100
};

console.log(c1,c2,c3);


//c1 -> c3 -> c2 -> Object -> null
c1.__proto__= c3;
c3.__proto__= c2;

console.log(c1.toString());
console.log(c1.height)
console.log(c1.width)
console.log(c3.width)
console.log(Object.getPrototypeOf(c1))



//prototype chaning
// 공통적으로 사용할 만한 데이터를 상위 객체에 만들어 놓고, 체이닝을 통해 하위 객체에서 해당 데이터를 재활용할 수 있도록 하는 기법
//모든 객체는 __proto__라는 속성을 갖고있는데, 이 속성은 기본값으로 모든 객체의 조상 Object를 가리킨다.
//__proto__속성을 통해 다른 객체를 가리켜서, 다른 객체의 속성을 체이닝을 통해 호출할 수 있다. (복사되는게 아님)
//ecma2015부터는 __proto__ 는 deprecated. 대신에 Object.getPrototypeOf(obj)를 사용하자.


function Foo(name){
    this.name = name;
};

//함수는 prototype이라는 객체를 가지고 있는데, 함수 자기 자신을 가리킨다. 함수가 가진 __proto__속성에 데이터를 연결시켜준다.
//prototype은 상속에 쓰일 메소드를 저장하는 공간으로 쓰인다. 속성은 생성자에 기술해주자.
Foo.prototype.lastName = 'wow'; //prototype 속성은 함수만 가지고있음


const a = new Foo('aaa');
const b = new Foo('bbb');

// a.__proto__.firstName = 'whee';
Object.getPrototypeOf(a).firstName='whee';

console.log(Foo.prototype);
console.log(a.__proto__.lastName);
console.log(b.__proto__.firstName);

console.log(a.lastName);
console.log(b.lastName);

console.log(Foo.prototype===Object.getPrototypeOf(a));
console.log(Object.getPrototypeOf(Foo));
console.log(Foo.prototype)


//es6에서는 클래스 문법이 나와서, 상속관계를 더 편하게 쓸 수 있게 되었다.