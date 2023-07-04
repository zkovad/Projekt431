import React from 'react';

const Result = ({ answers }) => {
  const calculateResult = () => {
    let categoryCounts = {
      Peppig: 0,
      Modern: 0,
      Trendy: 0,
      Jung: 0,
      Kreativ: 0,
      Unkompliziert: 0
    };

    answers.forEach((answer) => {
      const { category, answer: value } = answer;
      if (value) {
        categoryCounts[category] += 1;
      }
    });

    let maxCategory = '';
    let maxCount = 0;

    Object.entries(categoryCounts).forEach(([category, count]) => {
      if (count > maxCount) {
        maxCategory = category;
        maxCount = count;
      }
    });

    return maxCategory;
  };

  const result = calculateResult();

  return (
    <div className="result">
      <h2>Ergebnis</h2>
      <p>Dein Intelligenztyp ist: {result}</p>
    </div>
  );
};

export default Result;
