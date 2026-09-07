function apriFascicolo() {
  document.querySelector(".copertina").style.display = "none";
  document.querySelector(".contenuto").style.display = "block";
  window.scrollTo(0, 0);
}

function chiudiFascicolo() {
  document.querySelector(".contenuto").style.display = "none";
  document.querySelector(".copertina").style.display = "block";

  document.querySelector(".sbloccato").style.display = "none";
  document.querySelector(".bottone").style.display = "block";

  document.querySelector("#errore").textContent = "";

  document.querySelector("#codice1").value = "";
  document.querySelector("#codice2").value = "";
  document.querySelector("#codice3").value = "";

  window.scrollTo(0, 0);
}

function verificaCodice() {

  const parte1 = document.querySelector("#codice1").value.trim();
  const parte2 = document.querySelector("#codice2").value.trim().toUpperCase();
  const parte3 = document.querySelector("#codice3").value.trim();

  const errore = document.querySelector("#errore");

  if (parte1 === "04" && parte2 === "E" && parte3 === "05") {

    errore.textContent = "";

    document.querySelector(".verifica").style.display = "none";
    document.querySelector(".sbloccato").style.display = "block";

    window.scrollTo(0, document.body.scrollHeight);

  } else {

    const messaggi = [
      "ACCESSO NEGATO. Rilevata una risposta errata.",
      "Il sistema non è convinto. Rileggi il dossier.",
      "Stai cercando una password. Non è una password.",
      "Il soggetto potrebbe essere meno intelligente del previsto.",
      "Ritenta, genio."
    ];

    const casuale =
      messaggi[Math.floor(Math.random() * messaggi.length)];

    errore.textContent = casuale;
  }
}
