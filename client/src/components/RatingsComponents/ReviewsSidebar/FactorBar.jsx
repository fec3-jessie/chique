import React from 'react';

function FactorBar ({characteristics, factor}) {
  let factorPercent = Math.round((Number(characteristics[factor].value) / 5) * 100);

  const factorGrades = {
    'Size': ['A size too small', 'Perfect', 'A size too big'],
    'Width': ['Too narrow', 'Perfect', 'Too Wide'],
    'Comfort': ['Uncomfortable', 'Ok', 'Perfect'],
    'Quality': ['Poor', 'What I expected', 'Perfect'],
    'Length': ['Runs short', 'Perfect', 'Runs long'],
    'Fit': ['Runs tight', 'Perfect', 'Runs long']
  };


  // let bgc = '#124B3A'; // to see inner bar uncomment this line,  and comment out line 17
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
  };

  const arrowStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'bold'
  };

  return (
    <>
      <div style={barStyles}>
        <div style={barFillerStyles}><span className='factor-arrow' style={arrowStyles}>{'▼'}</span>
        </div>
      </div>
      <div className='factor-low-mid-high'>
        <p>{factorGrades[factor][0]}</p>
        <p>{factorGrades[factor][1]}</p>
        <p>{factorGrades[factor][2]}</p>
      </div>
    </>
  );
}

export default FactorBar;