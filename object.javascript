let patient = {
  name :"hyein",
  age : 30,
  disease : "love"
}
//객체 {} 어레이 []

console.log(patient)
console.log(patient.name)
//원하는 값만 출력하고 싶을 때

console.log(patient.age)
console.log(patient["age"])
//출력되는 값은 같다.

patient.name = "HI"
patient.age = 25
//원하는 값을 선택적으로 바꿀 수 있다.
console.log(patient)

let patientList = [{name:"Kumho", age:4},{name:"Eunha", age:2},{name:"Donghae", age:1}]

console.log(patientList)
console.log("첫번째 환자는:", patientList[0])

console.log("첫번째 환자의 나이는?:", patientList[0].age)
console.log("첫번째 환자의 나이는?:", patientList[0]["age"])
//두개는 같다.

console.log("두번째 환자의 이름:", patientList[1].name)
//인덱스의 숫자는 0부터 센다.
