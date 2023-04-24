const dis = document.querySelector("#dis");
const but = document.querySelectorAll("button");

but.forEach((items) => {
  items.onclick = () => {
    if (items.id == "clear") {
      dis.innerText = "";
    } else if (items.id == "backspace") {
      let string = dis.innerText.toString();
      dis.innerText = string.substr(0, string.length - 1);
    } else if (dis.innerText != "" && items.id == "equal") {
      dis.innerText = eval(dis.innerText);
    } else if (dis.innerText == "" && items.id == "equal") {
      dis.innerText = "Empty!";
      setTimeout(() => (dis.innerText = ""), 2000);
    } else {
      dis.innerText += items.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};