//줄바꿈 처리 하고 싶으면 백틱기호 사용
// const str = 'hello word' 에러발생
//const str = `hello 
//word`
const str = ` 
010-1234-5678 
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd     
`
// `` 문자데이터 만들어 주기 띄어쓰기 에러가 발생이 안됨
const h = `  the hello world        !


`
// @ 기호를 기준으로 앞쪽 뒤쪽 데이터 출력해보기
console.log(
    str.match(/.{1,}(?=@)/g)
)