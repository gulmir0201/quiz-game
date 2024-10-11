import React from 'react'

const OptionButtons = ({ options, isAnswered, handleAnswerClick }) => {
    return (
      <div className="options">
        <div>
          <button onClick={() => handleAnswerClick("A")} disabled={isAnswered}>
            A: {options.A}
          </button>
          <button onClick={() => handleAnswerClick("B")} disabled={isAnswered}>
            B: {options.B}
          </button>
        </div>
        <div>
          <button onClick={() => handleAnswerClick("C")} disabled={isAnswered}>
            C: {options.C}
          </button>
          <button onClick={() => handleAnswerClick("D")} disabled={isAnswered}>
            D: {options.D}
          </button>
        </div>
      </div>
    );
  };

export default OptionButtons;
