import React from 'react'

const Score = ({ score }) => {
    return (
      <div className="score-section">
        <h3>Total Score: {score}</h3>
      </div>
    );
  };

export default Score;
