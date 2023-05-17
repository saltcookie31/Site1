//아이디 처리
const id = document.querySelector(".id");
const idCheckResult = document.querySelector(".id-check-result");

function isEmail(asValue) {
  var regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return regExp.test(asValue);
}

id.oninput = function () {
  let isEmailType = isEmail(id.value);

  if (isEmailType === true) {
    idCheckResult.innerText = "이메일 형식입니다.";
  } else {
    idCheckResult.innerText = "이메일 형식이 아닙니다.";
  }
};

//비밀번호 처리
const pw = document.querySelector(".pw");
const pwCheck = document.querySelector(".pw-check");
const pwCheckResult = document.querySelector(".pw-check-result");

pw.oninput = pwCheck.oninput = function passWordCheck() {
  if (pw.value === pwCheck.value) {
    pwCheckResult.innerText = "비밀번호가 일치합니다.";
  } else {
    pwCheckResult.innerText = "비밀번호가 일치하지 않습니다.";
  }
};

//학번, 학과 처리
const numAndMajor = [
  {
    name: "기계공학부",
    dept_nums: ["20"],
  },
  {
    name: "산업경영학부",
    dept_nums: ["80"],
  },
  {
    name: "컴퓨터공학부",
    dept_nums: ["35", "36"],
  },
  {
    name: "메카트로닉스공학부",
    dept_nums: ["40"],
  },
  {
    name: "고용서비스정책학과",
    dept_nums: ["85"],
  },
  {
    name: "디자인공학부",
    dept_nums: ["51"],
  },
  {
    name: "에너지신소재화학공학부",
    dept_nums: ["74"],
  },
  {
    name: "전기전자통신공학부",
    dept_nums: ["61"],
  },
  {
    name: "건축공학부",
    dept_nums: ["72"],
  },
];
const studentNumber = document.querySelector(".student-number");
const major = document.querySelector(".major");

studentNumber.addEventListener("change", findMajor);

function findMajor() {
  if (studentNumber.value.length === 10) {
    let majorTwoNums = studentNumber.value.slice(5, 7);

    for (let obj of numAndMajor) {
      for (let nums of obj.dept_nums) {
        if (majorTwoNums === nums) {
          major.innerText = obj.name;
          break;
        } else {
          major.innerText = "유효한 학번을 입력하세요";
        }
      }

      if (major.innerText !== "유효한 학번을 입력하세요") break;
    }
  } else {
    major.innerText = "유효한 학번을 입력하세요";
  }
}

//전화번호 처리
const telephoneinput = (target) => {
  target.value = target.value
    .replace(/[^0-9]/g, "")
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
    .replace(/(\-{1,2})$/g, "");
};

//회원가입 버튼 처리
const cancelButton = document.querySelector(".cancel");

function goToSignin() {
  location.href = "./로그인.html";
}

cancelButton.addEventListener("click", goToSignin);

const changeImage = document.querySelector("#change-image");

changeImage.addEventListener("click", function () {
  const catImage = document.querySelector("#cat-image");
  axios
    .get("https://api.thecatapi.com/v1/images/search?size=full")
    .then((imageData) => {
      let imageURL = imageData.data[0].url;
      catImage.src = `${imageURL}`;
    });
});
