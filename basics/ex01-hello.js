// server : 서버란 서비스를 제공하는 PC
// client : 서버로부터 서비스를 제공받는 PC
// Client  <---> HTTP <---> Server(WebServer)
//                                  웹서버 프로그램(IIS,tomcat,nginx)
//                                  기능: html 제공, 경로설정
//                                  WAS(웹 애플리케이션 서버)
//                                   웹서버 + 웹컨테이너 기능
// 첫 번째 노드 프로그램 작성
function hello(name) {
  console.log(`${name}님 환영합니다.`);
}

hello("홍길동");
