// for문
for(let i=1; i<=10; i++) {
  console.log("금호!!", i)
}
//i++는 i=i+1의 줄임말

//짝수만 프린트하고 싶을 때 (1)
for(let i=0; i<=10; i++) {
  if(i%2==0) {
    console.log("은하!!", i)
  }
}

//짝수만 프린트하고 싶을 때 (2)
for(let i=0; i<=10; i+=2) {
    console.log("동해!!", i)
  }
// i+=2 -> i=i+2
// i+=5 -> i=i+5

//(2)의 방식이 좀 더 빠름

//구구단 만들기
for(let i=2; i<=9; i++) {
  for(let j =1; j<=9; j++) {
    console.log(i+'*'+j+'='+i*j)
  }
}

//while문
while(buttonclick == true) {
  console.log("while문 실행", i)
  i++;
}
//for은 정확히 범위를 알 때, while은 그 범위를 모를 때


let alphabet = ["a","b","c","d"]
for(let i=0; i<alphabet.length; i++) {
  console.log(alphabet[i])
}
//length : 아이템 갯수를 알려줌


function makeBurger(type,size,num){
  if(num<1){
    return "버거 갯수가 0개 입니다."
  }
  console.log("매개변수 값은?", type)
  console.log("빵두기")
  console.log("상추두기")

  if(type == "불고기"){
    console.log("고기패티두기")
  } else if(type == "새우"){
    console.log("새우패티두기")
  }

  console.log("뚜겅덮기")
  console.log(type,"버거",size,"사이즈",num,"개 준비완료")

  return "완료되었습니다."
  //return을 만나는 순간 함수가 끝이 남.
}

let result = makeBurger("새우","M",0)
console.log("버거 프로세스 결과", result)
