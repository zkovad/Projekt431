import React, { useState } from 'react';
import Result from './result';
import questionsData from './questionsData';

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const renderContent = () => {
    if (currentQuestionIndex < questionsData.length) {
      return (
        <div>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{questionsData[currentQuestionIndex].question}</p>
          <button className = {styles.ja} onClick={() => handleAnswer(true)}>Ja</button>
          <button className = {styles.nein} onClick={() => handleAnswer(false)}>Nein</button>
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
