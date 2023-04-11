const loginButton = document.querySelector(".login");

loginButton.onclick = function () {
  const id = document.querySelector(".id").value.length;
  const pw = document.querySelector(".pw").value.length;

  if (id !== 0 && pw !== 0) {
    alert("로그인 완료");
  } else if (id === 0 && pw !== 0) {
    alert("아이디를 입력해주세요");
  } else if (id !== 0 && pw === 0) {
    alert("비밀번호를 입력해주세요");
  } else {
    alert("아이디와 비밀번호를 입력해주세요");
  }
};
