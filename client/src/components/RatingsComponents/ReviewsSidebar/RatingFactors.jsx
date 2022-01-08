import React from 'react';
import FactorBar from './FactorBar.jsx';

function RatingFactors ({characteristics}) {
  let factors = [];
  for (const factor in characteristics) {
    factors.push(factor);
  }
  return (
    <div className='factors-breakdown-container'>
      {factors.map((factor) => {
        return (
          <div key={characteristics[factor].id}>
            <p className='factor'>{factor}</p>
            <FactorBar className='factor-bar' characteristics={characteristics} factor={factor} />
          </div>
        );
      })}
    </div>
  );
}

export default RatingFactors;