const longurl = document.getElementById("inp1").value;
const shorturl = document.getElementById("inp2").value;
const shortOutput = document.getElementById("short");
const longOutput = document.getAnimations("long");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", store);

function store() {
  localStorage.setItem("long_url", "longurl");
}

btn2.addEventListener("click", show);

function show() {
  const storedValue = localStorage.getItem("long_url");
  longOutput.textContent = storedValue;
}
