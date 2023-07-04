import React, { useState } from 'react';
import Result from './result';
import questionData from './questionsData';
import styles from './app.module.css';

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (answer) => {
    setAnswers([...answers, { ...questionData[currentQuestionIndex], answer }]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const renderContent = () => {
    if (currentQuestionIndex < questionData.length) {
      const currentQuestion = questionData[currentQuestionIndex];
      return (
        <div>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{currentQuestion.question}</p>
          <button className={styles.ja} onClick={() => handleAnswer(true)}>
            Ja
          </button>
          <button className={styles.nein} onClick={() => handleAnswer(false)}>
            Nein
          </button>
        </div>
      );
    } else {
      return <Result answers={answers} />;
    }
  };

  return (
    <div className="app">
      <h1>Intelligence Type Test</h1>
      {renderContent()}
    </div>
  );
};

export default App;
