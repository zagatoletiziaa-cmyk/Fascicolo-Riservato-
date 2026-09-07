function apriFascicolo() {
  document.querySelector(".copertina").style.display = "none";
  document.querySelector(".contenuto").style.display = "block";
  window.scrollTo(0, 0);
}

function chiudiFascicolo() {
  document.querySelector(".contenuto").style.display = "none";
  document.querySelector(".copertina").style.display = "block";
  document.querySelector(".segreto").style.display = "none";
  document.querySelector(".bottone").style.display = "block";
  window.scrollTo(0, 0);
}

function sblocca() {
  document.querySelector(".segreto").style.display = "block";
  document.querySelector(".bottone").style.display = "none";
}
