import React from 'react';

function FactorBar ({characteristics, factor}) {
  let factorPercent = Math.round((Number(characteristics[factor].value) / 5) * 100);

  // console.log('this is the factor value;::::', factor, characteristics[factor].value, test);


  // let bgc = '#124B3A'; // to see inner bar uncomment
  let bgc = '#FFFFFF';

  const barStyles = {
    height: 15,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 35,
    margin: 15
  };

  const barFillerStyles = {
    height: '100%',
    width: `${factorPercent}%`,
    backgroundColor: bgc,
    borderRadius: 'inherit',
  }

  const arrowStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold'
  }

  return (
    <>
      <div style={barStyles}>
        <div style={barFillerStyles}><span className='factor-arrow' style={arrowStyles}>{`▼`}</span>
        </div>
      </div>
      <div className='factor-low-mid-high'>
        <p>low</p>
        <p>mid</p>
        <p>high</p>
      </div>
    </>
  )
}

export default FactorBar;