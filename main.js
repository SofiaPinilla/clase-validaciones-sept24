const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const btn = document.querySelector(".btn");
const msgDiv = document.querySelector(".msg");

function greeting(e) {
  e.preventDefault();
  if (inputName.value === "" || inputEmail.value === "") {
    // console.log("Please enter all fields");
    msgDiv.innerText = "Please enter all fields";
  } else if (/(\w+?@\w+?\x2E.+)/.test(inputEmail.value) !== true) {
    msgDiv.innerHTML = "Please enter a correct email";
  } else {
    // console.log("success")
    msgDiv.innerHTML = "<p>Success</p>";
  }
  setTimeout(function () {
    // console.log("han pasado 3 segundos")
    msgDiv.innerText = "";
  }, 3000);
}

btn.addEventListener("click", greeting);

//**EXPRESIONES REGULARES */

let re;

re = /hello/i;

re = /^h/i;

re = /World$/i;

re = /^hello$/i;

re = /^h..l.lo$/i;

const result = re.test("H**LaLO");
console.log(result);
