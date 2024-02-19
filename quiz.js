document.getElementById("quizForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Forhindrer at skjemaet sendes inn på vanlig måte

  var score = 0; // Variabel for å lagre poengsummen

  // Gå gjennom hvert spørsmål
  var questions = document.getElementsByClassName("question");
  for (var i = 0; i < questions.length; i++) {
    var question = questions[i];
    var radios = question.querySelectorAll('input[type="radio"]');
    var correctAnswer = question.querySelector(".correct-answer");

    // Sjekk hvilket svar som er valgt
    for (var j = 0; j < radios.length; j++) {
      var radio = radios[j];
      if (radio.checked) {
        // Sjekk om svaret er riktig
        if (radio.value === "b") {
          score++; // Øk poengsummen hvis svaret er riktig
        }
        break; // Avslutt løkken når svaret er funnet
      }
    }
  }

  // Vis resultatet til brukeren i et varsel
  var alertBox = document.getElementById("alertBox");
  var scoreText = document.getElementById("scoreText");
  scoreText.textContent = "Du fikk " + score + " av 5 riktig.";
  alertBox.style.display = "block"; // Vis varselet
});

document.getElementById("closeBtn").addEventListener("click", function () {
  window.location.href = "index.html"; // Send brukeren tilbake til indexsiden når de klikker på "kryss ut"-knappen
});
