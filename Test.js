const longurl = document.getElementById("inp1");
const shorturl = document.getElementById("inp2");
const shortOutput = document.getElementById("short");
const longOutput = document.getElementById("long");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function () {
  const url = longurl.value;

  fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.result.short_link);

      const shortUrl = data.result.short_link;
      shortOutput.textContent = shortUrl;

      store(shortUrl);
    })
    .catch((error) => console.log);
});

function store(shortUrl) {
  localStorage.setItem(shortUrl, longurl.value);
}

btn2.addEventListener("click", show);

function show() {
  const shortUrlInputed = shorturl.value;
  const longUrlRestored = localStorage.getItem(shortUrlInputed);
  longOutput.textContent = longUrlRestored;
}
