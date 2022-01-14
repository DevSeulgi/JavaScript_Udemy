//if(조건문){
//  조건이 충족되면 할 일들
//}

if(true){
  console.log("조건은 참입니다")
}

if(true){
  console.log("조건은 참입니다")
}else {
  console.log("거짓입니다")
}

if(false){
  console.log("조건은 참입니다")
}else {
  console.log("거짓입니다")
}
//false면 else로

let age = 21
if(age > 20){
  console.log("운전이 가능합니다.")
}else {
  console.log("운전이 불가능합니다.")
}

age = 18
if(age > 20){
  console.log("운전이 가능합니다.")
}else {
  console.log("운전이 불가능합니다.")
}

age = 18
if(age > 20){
  console.log("운전이 가능합니다.")
} else if(age >=18) {
  console.log("오토바이 운전만 가능합니다.")
}
else {
  console.log("운전이 불가능합니다.")
}
//else가 만족하지 않을 경우 마지막으로 else if로 간다.

age = 21
if(age >= 18){
  console.log("오토바이 운전만 가능합니다.")
} else if(age > 20) {
  console.log("운전이 가능합니다.")
}
else {
  console.log("운전이 불가능합니다.")
}
//앞 순서에서 조건이 참으로 만족돼버리면, if문은 종료 됨.
//범위가 작은 순으로 순서를 정해주는 것이 중요.

age = 21
if(18<=age && age<20){
  console.log("오토바이 운전만 가능합니다.")
} else if(age > 20) {
  console.log("운전이 가능합니다.")
}
else {
  console.log("운전이 불가능합니다.")
}
// &&는 and의 의미. ||는 or의 의미.

age = 21
let licence = true
// 있으면 true. 없으면 false.
if(age>20) {
  if(licence == true) {
    console.log("운전이 가능합니다.")
  } else {
    console.log("면허가 필요합니다.")
  }
} else {
  console.log("운전이 불가능합니다.")
}
// ==는 같다는 의미. !=는 not의 의미.
