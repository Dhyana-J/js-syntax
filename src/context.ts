//Context는 execution, lexical(사전적) 두 가지가 존재

const person = {
    name:'Lee jun ho',
    age:25,
    getAge(){
        return this.age; //this는 이 속성의 소유자를 의미한다.
    }
}

person.age;
person.getAge(); //age:25 실행 맥락상 소유자가 person으로 지정이 되어있다.

const age = person.getAge;

age(); //age:undefined 실행 맥락상 소유자를 모른다! 그래서 undefined
age.call(person); //age:25 이런식으로 명확하게 맥락을 지정해줄 수 있다. 


class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
        this.getAge = this.getAge.bind(this);
    }
    getAge(){
        console.log(this.age);
        return this.age;
    }
    getName = () => { //Arrow function을 사용하면 lexical context 적용! 자동으로 바인딩해준다.
        console.log(this.name);
        return this.name
    };
}

const p2 = new Person('Lee jun ho',25);

p2.getAge();
const myAge = p2.getAge;
myAge.call(p2);
myAge();

p2.getName();
const myName = p2.getName;
myName();