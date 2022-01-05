import React from 'react';

const ComparisonTable = (props) => {

  console.log(props.comparisonFeatures);

  return (<div>
    <table>
      <thead>
        <tr>
          <th>Main Product</th>
          <th>Feature</th>
          <th>Comparison Product</th>
        </tr>
      </thead>
      <tbody>
        {props.mainFeatures?.map (feature => (
          <tr key = {feature.feature}>
            <td>{feature.value}</td>
            <td>{feature.feature}</td>
            <td>placeholder</td>
          </tr>
        ))}
        {props.comparisonFeatures?.map (feature => (
          <tr key = {feature.feature}>
            <td>placeholder</td>
            <td>{feature.feature}</td>
            <td>{feature.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>);
};

export default ComparisonTable;