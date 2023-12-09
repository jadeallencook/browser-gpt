const OPEN_AI_API_KEY = localStorage.getItem("OPEN_AI_API_KEY");
console.log({ OPEN_AI_API_KEY });

document.getElementById("api").onsubmit = function () {
  console.log("api");
  const key = document.getElementById("key").value;
  localStorage.setItem("OPEN_AI_API_KEY", key);
};
