document.getElementById("openLoginBtn").addEventListener("click", () => {
  document.getElementById("loginUnavailable").classList.remove("hidden");
});

document.getElementById("closeUnavailable").addEventListener("click", () => {
  document.getElementById("loginUnavailable").classList.add("hidden");
});

document.getElementById("closeUnavailableBtn").addEventListener("click", () => {
  document.getElementById("loginUnavailable").classList.add("hidden");
});
