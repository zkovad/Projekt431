import React, { useState } from "react";

const questions = [
  {
    id: 1,
    text: "Wie gut bist du im Ausdrücken deiner Gedanken durch Sprache?",
    intelligenceType: "linguistic"
  },
  {
    id: 2,
    text: "Wie gut kannst du Informationen in Büchern verstehen und daraus lernen?",
    intelligenceType: "linguistic"
  },
  {
    id: 3,
    text: "Wie gut bist du im Erlernen neuer Sprachen?",
    intelligenceType: "linguistic"
  },
  {
    id: 4,
    text: "Wie gut kannst du Geschichten erzählen oder schreiben?",
    intelligenceType: "linguistic"
  },
  {
    id: 5,
    text: "Wie gut bist du im Argumentieren und Überzeugen von anderen?",
    intelligenceType: "linguistic"
  },
  {
    id: 6,
    text: "Wie gut kannst du komplexe Anweisungen verstehen und befolgen?",
    intelligenceType: "linguistic"
  },
  {
    id: 7,
    text: "Wie gut bist du im Verstehen und Interpretieren von Gedichten?",
    intelligenceType: "linguistic"
  },
  {
    id: 8,
    text: "Wie gut bist du im Verwenden von Metaphern und sprachlichen Bildern?",
    intelligenceType: "linguistic"
  },
  // Kategorie: Logisch-mathematische Intelligenz
  {
    id: 9,
    text: "Wie gut bist du im Lösen von mathematischen Problemen?",
    intelligenceType: "logical"
  },
  {
    id: 10,
    text: "Wie gut bist du im Erkennen von logischen Mustern und Zusammenhängen?",
    intelligenceType: "logical"
  },
  {
    id: 11,
    text: "Wie gut bist du im Analysieren und Lösen von komplexen Rätseln?",
    intelligenceType: "logical"
  },
  {
    id: 12,
    text: "Wie gut bist du im Verwenden von logischen Argumenten und Beweisen?",
    intelligenceType: "logical"
  },
  {
    id: 13,
    text: "Wie gut bist du im Planen und Durchführen von Experimenten?",
    intelligenceType: "logical"
  },
  {
    id: 14,
    text: "Wie gut bist du im Verständnis von mathematischen Symbolen und Gleichungen?",
    intelligenceType: "logical"
  },
  {
    id: 15,
    text: "Wie gut bist du im Programmieren und Entwickeln von Algorithmen?",
    intelligenceType: "logical"
  },
  {
    id: 16,
    text: "Wie gut bist du im Erkennen von Fehlern in logischen Argumentationen?",
    intelligenceType: "logical"
  },
  // Kategorie: Räumlich-visuelle Intelligenz
  {
    id: 17,
    text: "Wie gut kannst du dir räumliche Objekte und Formen vorstellen und manipulieren?",
    intelligenceType: "spatial"
  },
  {
    id: 18,
    text: "Wie gut bist du im Lesen und Verwenden von Karten und Diagrammen?",
    intelligenceType: "spatial"
  },
  {
    id: 19,
    text: "Wie gut bist du im Erkennen von visuellen Mustern und Details?",
    intelligenceType: "spatial"
  },
  {
    id: 20,
    text: "Wie gut bist du im Entwerfen und Gestalten von visuellen Kunstwerken?",
    intelligenceType: "spatial"
  },
  {
    id: 21,
    text: "Wie gut bist du im Orientieren und Navigieren in unbekannten Umgebungen?",
    intelligenceType: "spatial"
  },
  {
    id: 22,
    text: "Wie gut bist du im Vorstellen von dreidimensionalen Objekten und Perspektiven?",
    intelligenceType: "spatial"
  },
  {
    id: 23,
    text: "Wie gut bist du im Erkennen und Verwenden von Farben und Schattierungen?",
    intelligenceType: "spatial"
  },
  {
    id: 24,
    text: "Wie gut bist du im Erkennen von versteckten Bildern oder Symbolen?",
    intelligenceType: "spatial"
  },
  // Kategorie: Körperlich-kinästhetische Intelligenz
  {
    id: 25,
    text: "Wie gut bist du in Sportarten, die körperliche Geschicklichkeit erfordern?",
    intelligenceType: "bodilyKinesthetic"
  },
  {
    id: 26,
    text: "Wie gut bist du im Ausführen feinmotorischer Aufgaben?",
    intelligenceType: "bodilyKinesthetic"
  },
  {
    id: 27,
    text: "Wie gut bist du im Tanzen und Koordinieren von Bewegungen zur Musik?",
    intelligenceType: "bodilyKinesthetic"
  },
  {
    id: 28,
    text: "Wie gut bist du im Spielen von Instrumenten, die körperliche Geschicklichkeit erfordern?",
    intelligenceType: "bodilyKinesthetic"
  },
  {
    id: 29,
    text: "Wie gut bist du im Erkennen und Nachahmen von Körperhaltungen und -bewegungen?",
    intelligenceType: "bodilyKinesthetic"
  },
  {
    id: 30,
    text: "Wie gut bist du im Durchführen von handwerklichen und handwerklichen Tätigkeiten?",
    intelligenceType: "bodilyKinesthetic"
  },
  {
    id: 31,
    text: "Wie gut bist du im Beherrschen von Körperkontrolle und -balance?",
    intelligenceType: "bodilyKinesthetic"
  },
  {
    id: 32,
    text: "Wie gut bist du im Ausführen von akrobatischen oder athletischen Bewegungen?",
    intelligenceType: "bodilyKinesthetic"
  },
  // Kategorie: Musikalische Intelligenz
  {
    id: 33,
    text: "Wie gut kannst du musikalische Klänge wahrnehmen und unterscheiden?",
    intelligenceType: "musical"
  },
  {
    id: 34,
    text: "Wie gut kannst du Rhythmen erkennen und nachahmen?",
    intelligenceType: "musical"
  },
  {
    id: 35,
    text: "Wie gut bist du im Spielen von musikalischen Instrumenten?",
    intelligenceType: "musical"
  },
  {
    id: 36,
    text: "Wie gut bist du im Singen und Nachahmen von Melodien?",
    intelligenceType: "musical"
  },
  {
    id: 37,
    text: "Wie gut bist du im Komponieren und Arrangieren von musikalischen Stücken?",
    intelligenceType: "musical"
  },
  {
    id: 38,
    text: "Wie gut bist du im Verstehen und Interpretieren von musikalischen Noten und Symbolen?",
    intelligenceType: "musical"
  },
  {
    id: 39,
    text: "Wie gut bist du im Erkennen von musikalischen Stilen und Genres?",
    intelligenceType: "musical"
  },
  {
    id: 40,
    text: "Wie gut bist du im Nachahmen und Imitieren von musikalischen Klängen?",
    intelligenceType: "musical"
  },
  // Kategorie: Interpersonale Intelligenz
  {
    id: 41,
    text: "Wie gut bist du im Verstehen und Empathisieren mit den Gefühlen anderer Menschen?",
    intelligenceType: "interpersonal"
  },
  {
    id: 42,
    text: "Wie gut bist du im Etablieren und Aufrechterhalten von Beziehungen zu anderen Menschen?",
    intelligenceType: "interpersonal"
  },
  {
    id: 43,
    text: "Wie gut bist du im Lösen von Konflikten und Vermitteln zwischen verschiedenen Personen?",
    intelligenceType: "interpersonal"
  },
  {
    id: 44,
    text: "Wie gut bist du im Erkennen von nonverbalen Signalen und Körpersprache?",
    intelligenceType: "interpersonal"
  },
  {
    id: 45,
    text: "Wie gut bist du im Verstehen und Respektieren der unterschiedlichen Perspektiven anderer Menschen?",
    intelligenceType: "interpersonal"
  },
  {
    id: 46,
    text: "Wie gut bist du im Verstehen von Gruppendynamiken und -prozessen?",
    intelligenceType: "interpersonal"
  },
  {
    id: 47,
    text: "Wie gut bist du im Einflussnehmen und Überzeugen von anderen Menschen?",
    intelligenceType: "interpersonal"
  },
  {
    id: 48,
    text: "Wie gut bist du im Zusammenarbeiten und Koordinieren von Aktivitäten mit anderen?",
    intelligenceType: "interpersonal"
  },
  // Kategorie: Intrapersonale Intelligenz
  {
    id: 49,
    text: "Wie gut kennst und verstehst du deine eigenen Stärken und Schwächen?",
    intelligenceType: "intrapersonal"
  },
  {
    id: 50,
    text: "Wie gut bist du im Setzen von persönlichen Zielen und Verfolgen deiner Träume?",
    intelligenceType: "intrapersonal"
  },
  {
    id: 51,
    text: "Wie gut bist du im Reflektieren und Analysieren deiner eigenen Gedanken und Emotionen?",
    intelligenceType: "intrapersonal"
  },
  {
    id: 52,
    text: "Wie gut bist du im Erkennen und Verfolgen deiner persönlichen Werte und Überzeugungen?",
    intelligenceType: "intrapersonal"
  },
  {
    id: 53,
    text: "Wie gut bist du im Planen und Organisieren deiner eigenen Zeit und Aufgaben?",
    intelligenceType: "intrapersonal"
  },
  {
    id: 54,
    text: "Wie gut bist du im Bewältigen von Stress und Herausforderungen?",
    intelligenceType: "intrapersonal"
  },
  {
    id: 55,
    text: "Wie gut bist du im Fördern von Selbstmotivation und Selbstvertrauen?",
    intelligenceType: "intrapersonal"
  },
  {
    id: 56,
    text: "Wie gut bist du im Reflektieren und Lernen aus deinen eigenen Erfahrungen?",
    intelligenceType: "intrapersonal"
  },
  // Kategorie: Naturistische Intelligenz
  {
    id: 57,
    text: "Wie gut bist du im Erkennen und Verstehen von natürlichen Phänomenen und Prozessen?",
    intelligenceType: "naturalist"
  },
  {
    id: 58,
    text: "Wie gut bist du im Identifizieren und Benennen von verschiedenen Pflanzen und Tieren?",
    intelligenceType: "naturalist"
  },
  {
    id: 59,
    text: "Wie gut bist du im Beobachten und Beschreiben von natürlichen Umgebungen?",
    intelligenceType: "naturalist"
  },
  {
    id: 60,
    text: "Wie gut bist du im Verstehen und Anwenden von ökologischen Prinzipien und Zusammenhängen?",
    intelligenceType: "naturalist"
  },
  {
    id: 61,
    text: "Wie gut bist du im Erkennen von natürlichen Rhythmen und Jahreszeiten?",
    intelligenceType: "naturalist"
  },
  {
    id: 62,
    text: "Wie gut bist du im Wahrnehmen und Verstehen von Wetter- und Klimabedingungen?",
    intelligenceType: "naturalist"
  },
  {
    id: 63,
    text: "Wie gut bist du im Erkennen von Umweltproblemen und Entwicklung von Lösungsansätzen?",
    intelligenceType: "naturalist"
  },
  {
    id: 64,
    text: "Wie gut bist du im Etablieren und Pflegen von Verbindungen zur Natur und Umwelt?",
    intelligenceType: "naturalist"
  }
];

const App = () => {
  const [intelligenceScores, setIntelligenceScores] = useState({
    linguistic: 0,
    logical: 0,
    spatial: 0,
    bodilyKinesthetic: 0,
    musical: 0,
    interpersonal: 0,
    intrapersonal: 0,
    naturalist: 0
  });

  const displayQuestion = (question) => {
    const { id, text } = question;

    return (
      <div key={id} className="question">
        <h3>Frage {id}</h3>
        <p>{text}</p>
        <label htmlFor={`answer-${id}`}>Bewerte deine Antwort von 1 bis 5:</label>
        <input type="number" id={`answer-${id}`} min="1" max="5" required />
      </div>
    );
  };

  const calculateIntelligenceType = () => {
    for (const question of questions) {
      const { id, intelligenceType } = question;
      const answerInput = document.getElementById(`answer-${id}`);
      const answer = parseInt(answerInput.value);

      if (isNaN(answer) || answer < 1 || answer > 5) {
        alert("Bitte gib eine gültige Bewertung von 1 bis 5 ein.");
        return;
      }

      setIntelligenceScores((prevScores) => ({
        ...prevScores,
        [intelligenceType]: prevScores[intelligenceType] + answer
      }));
    }

    let maxScore = 0;
    let intelligenceType = "";

    for (const [type, score] of Object.entries(intelligenceScores)) {
      if (score > maxScore) {
        maxScore = score;
        intelligenceType = type;
      }
    }

    const resultContainer = document.getElementById("result-container");
    resultContainer.textContent = `Dein Intelligenztyp ist: ${intelligenceType}`;
  };

  return (
    <div>
      <h1>Fragekatalog</h1>
      <div id="question-container">
        {questions.map((question) => displayQuestion(question))}
      </div>
      <button id="submit-button" onClick={calculateIntelligenceType}>
        Auswerten
      </button>
      <div id="result-container"></div>
    </div>
  );
};

export default App;