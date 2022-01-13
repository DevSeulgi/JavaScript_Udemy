let color = "black"
// let 변수를 선언하는 것 color 변수이름 id
console.log(color)
//console에 로그(해당값)를 넣겠다는 뜻
//변수이름은 복사 + 붙여넣기 하기! 스펠링 오류 많이 남.
//변수이름은 유니크해야함. 두 개 이상이 있을 수 없음.
let color2 = "pink"
console.log(color, color2)
//let을 안쓰고 변수이름을 새로 지정하면 덮어쓰기 가능
color2 = "green"
console.log(color2)

const color3 = "pink"
console.log(color)
//const변수에 있는 값을 바꾸고 싶지 않을 때 (ex.password) const는 재할당이 안됨
// ||는 or, &&는 and

let a = 1
let b = 2
a = 2
b = 1
console.log(a,b)

console.log((1+3)**2)
console.log(6%2)
console.log(7.5%2)
console.log(5==5)
console.log(5===5)
console.log(5=="5")
console.log(5==="5")
console.log(5!=5.0)
console.log(5!==5.0)
console.log(!true)
console.log(!false)
//const, var, let 차이 공부, 호이스팅 공부, 전역변수/지역변수

//let fruit = "banna"
//let fruit2 = "apple"
//let fruit3 = "grape"
//let fruit4 = "mango"
let fruit = ["banana", "apple", "grape", "mango"]
console.log(fruit)
console.log(fruit[0])
//Index는 0번부터 시작한다.
console.log(fruit[3])
fruit[0]="cherry"
console.log(fruit)
fruit[2]="tomato"
console.log(fruit[2])

fruit.pop()
console.log(fruit)
//pop : 마지막에 있는 아이템을 뺌

fruit.push("pineapple")
console.log(fruit)
//push : 해당 값을 포함

console.log(fruit.includes("apple"))
//includes : 아이템이 있는지 없는지 확인

console.log(fruit.indexOf("apple"))
//indexOf : 아이템이 몇 번째에 있는지 알려줌

console.log(fruit.slice(2))
//2번째 이후의 값만 노출

console.log(fruit.slice(1,3))
//1부터 2까지, 3은 포함 안 함

fruit.splice(2,1)
console.log(fruit)
//(시작점,개수). 시작점으로 부터 몇개의 개수를 삭제하고 싶은지
//slice는 기존의 배열을 건들지 않고, 새로운 배열을 만드는 것.
//splice는 기존의 배열을 자름.

let extrafruit = fruit.slice(1,3)
console.log(extrafruit)
