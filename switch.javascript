//switch문과 삼항연산식

let menu = 4

//if(menu == 1){
//  console.log("물건 사기")
//} else if(menu == 2){
//  console.log("잔고확인")
//} else if(menu == 3){
//  console.log("히스토리 확인")
//} else {
//  console.log("홈으로 돌아가기")
//}

switch (menu){
  case 1 :
    console.log("물건 사기")
    break;
  case 2 :
    console.log("잔고확인")
    break;
  case 3 :
    console.log("히스토리 확인")
    break;
  case 4 :
    console.log("홈으로 돌아가기")
    break;
}

//switch는 값이 딱 하나로 떨어지는 경우에 사용 가능.

let answer = menu <=3? "범위 안에 숫자입니다" : "범위 밖의 숫자입니다."
console.log(answer)
//삼항연산식 조건? 'true 일 때 : flase 일 때'
