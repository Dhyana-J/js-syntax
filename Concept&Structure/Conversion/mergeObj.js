const sourceObj = {
    traits: {
        first_name: {
            value: 'Bob',
            source_id: 1,
            updated_at: 1623238587468,
        },
        emails_opened_last_30_days: {
            value: 33,
            source_id: 2,
            updated_at: 162323858601089,
        },
    },
    cursor: {
        url: '/v1/spaces/lgJ4AAjFN4',
        has_more: false,
        next: '',
    },
}

const testObj = {
    a: 1,
    b: 2,
}

//스프레드 연산자나 Object.assign을 해도 객체 Depth가 2번째 부터는 깊은복사가 아니라 얕은복사(참조)된다.
//그러므로 깊은 복사를 위한 방법을 사용해야함. 객체 안의 value를 직접 꺼내서 할당해줘야한다

// const a = Object.assign({}, testObj)
// const b = testObj
// const c = { ...testObj }

// a.a = 'hello'
// console.log(a)
// console.log(b)
// console.log(c)

// b.a = 'hola'
// console.log(a)
// console.log(b)
// console.log(c)

// c.a = 'bonjour'
// console.log(a)
// console.log(b)
// console.log(c)
console.log('=================================')

//깊은복사
// const newObj1 = JSON.parse(JSON.stringify(sourceObj)) //객체 데이터가 크면 성능 떨어짐
const newObj1 = deepCopyObj(sourceObj)

//좋은 방법이 있을까..?
//직접 복사하는 함수를 만드는 수 밖에
function deepCopyObj(obj) {
    const clone = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
        //키만 있고 값에 null인 경우도 typeof에서 object뜸
        if (typeof obj[key] === 'object' && obj[key] != null) {
            clone[key] = deepCopyObj(obj[key])
        } else {
            clone[key] = obj[key]
        }
    }
    return clone
}

//얕은복사, Depth 2부터는 얕은복사가 이루어진다
const newObj2 = Object.assign({}, sourceObj)
const newObj3 = { ...sourceObj }

newObj2.traits.first_name.source_id = 'xxxxxx'

console.log(sourceObj.traits.first_name)
console.log(newObj1.traits.first_name)
console.log(newObj2.traits.first_name)
console.log(newObj3.traits.first_name)

newObj3.traits.first_name.source_id = 'oooooo'

console.log(sourceObj.traits.first_name)
console.log(newObj1.traits.first_name)
console.log(newObj2.traits.first_name)
console.log(newObj3.traits.first_name)

newObj1.traits.first_name.source_id = 'great'

console.log(sourceObj.traits.first_name)
console.log(newObj1.traits.first_name)
console.log(newObj2.traits.first_name)
console.log(newObj3.traits.first_name)

console.log('=================================')

const store = {
    user: null,
    cart: [],
    config: {
        multiDevice: false,
        lastLoginDate: 'Wed Jun 09 2021 11:11:11 GMT+0900',
    },
}

const newObject5 = {
    ...deepCopyObj(store),
    config: {
        ...store.config,
        lastLoginDate: new Date(),
    },
}

newObject5.config.multiDevice = true
console.log(store)
console.log(newObject5)

const DefaultStyle = {
    color: '#fff',
    fontColor: '#999',
    fontSize: 14,
    fontWeight: 200,
}

function createParagraph(config) {
    config = {
        ...DefaultStyle,
        ...config,
    }
    console.log(config)
}

createParagraph({ fontSize: 88 })
