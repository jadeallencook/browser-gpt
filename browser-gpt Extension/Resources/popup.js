// grab API key from local storage
const API_KEY = localStorage.getItem("API_KEY");

// cache DOM elements
const keyElem = document.getElementById("key");
const testBtn = document.getElementById("test");

// auto-fill API key if it exists
if (API_KEY) {
  keyElem.value = API_KEY;
}

// update local storage with new API key
document.getElementById("api").onsubmit = (event) => {
  event.preventDefault();
  const key = keyElem.value;
  localStorage.setItem("API_KEY", key);
};

// test API key
testBtn.onclick = () => {
  // make a request to the ChatGPT API
  fetch("https://api.chatgpt.com/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key: API_KEY,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      // display the response
      alert(JSON.stringify(res));
    })
    .catch((err) => {
      // display the error
      alert(err);
    });
};
