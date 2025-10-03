// abrir aviso quando clicar em entrar
document.getElementById("openLoginBtn").addEventListener("click", () => {
  document.getElementById("loginUnavailable").classList.remove("hidden");
});

// fechar aviso
document.getElementById("closeUnavailable").addEventListener("click", () => {
  document.getElementById("loginUnavailable").classList.add("hidden");
});

document.getElementById("closeUnavailableBtn").addEventListener("click", () => {
  document.getElementById("loginUnavailable").classList.add("hidden");
});
