// grab API key from local storage
const { API_KEY } = localStorage.getItem("API_KEY");

// update local storage with new API key
document.getElementById("api").onsubmit = (event) => {
  event.preventDefault();
  const key = document.getElementById("key").value;
  localStorage.setItem("API_KEY", key);
};
