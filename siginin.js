const $loginButton = document.querySelector(".login");

$loginButton.addEventListener("click", () => {
  const $idLen = document.querySelector(".id").value.length;
  const $pwLen = document.querySelector(".pw").value.length;

  if ($idLen === 0 && $pwLen !== 0) {
    alert("아이디를 입력해주세요");
    return 0;
  } else if ($idLen !== 0 && $pwLen === 0) {
    alert("비밀번호를 입력해주세요");
    return 0;
  } else if ($idLen === 0 && $pwLen === 0) {
    alert("아이디와 비밀번호를 입력해주세요");
    return 0;
  }

  const $id = document.querySelector(".id").value;
  const $pw = document.querySelector(".pw").value;

  checkValue($id, $pw);
});

function checkValue(id, pw) {
  let cookies = document.cookie.split("; ");
  //금지 아이디 검사
  for (cookie of cookies) {
    if (cookie.split("=")[0] === `bannedID${id}`) {
      alert("금지된 ID입니다.");
      return 0;
    }
  }
  //값에서 횟수 추출
  let tryCount = null;
  for (cookie of cookies) {
    if (cookie.split("=")[0] === id) {
      tryCount = Number(cookie.split("=")[1]);
    }
  }
  //새로운 아이디일 경우
  if (tryCount === null) {
    document.cookie = `${id}=0; max-age=${60 * 60 * 72};`;
    tryCount = 0;
    sessionStorage.setItem(id, "userID");
    localStorage.setItem(id, "userID");
  }
  //pw 검사
  if (pw !== "validpassword") {
    if (tryCount !== 4) {
      alert("유효한 아이디와 비밀번호를 입력해 주세요.");
    }
    tryCount++;
    document.cookie = `${id}=${tryCount}; max-age=${60 * 60 * 72};`;
  } else {
    alert("로그인 성공!");
    document.cookie = `${id}=0; max-age=${60 * 60 * 72};`;
  }
  //로그인 금지
  if (tryCount === 5) {
    alert("해당 ID로는 1시간 이후 로그인 가능합니다.");
    document.cookie = `${id}=0; max-age=${60 * 60 * 72};`;
    document.cookie = `bannedID${id}=; max-age=3600`;
  }
}

const $logoutButton = document.querySelector(".logout");
$logoutButton.addEventListener("click", clearStorage);

function clearStorage() {
  let cookies = document.cookie.split("; ");
  for (cookie of cookies) {
    let key = cookie.split("=")[0];
    console.log(key);
    document.cookie = `${key}=; max-age=0; path=/Site1`;
  }
  sessionStorage.clear();
  localStorage.clear();
}

// path값까지 정확히 넣기
// split 메서드 사용 시 인덱스 사용 가능
