function a() {
  console.log("RUN A");
} // 함수 선언문. 함수명 a가 곧 변수명.
a(); // 실행 OK.

var b = function() {
  console.log("RUN B");
}; // (익명) 함수 표현식. 변수명 b가 곧 함수명.
b(); // 실행 OK.

var c = function d() {
  console.log("RUN C");
}; // 기명 함수 표현식. 변수명은 c, 함수명은 d.
c(); // 실행 OK.
d(); // 에러!