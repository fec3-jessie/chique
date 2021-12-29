import React from 'react';
import axios from 'axios'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import checkmark from '/Users/danielghaly/Desktop/Hack Reactor/fec3/client/src/components/OverviewComponents/stars/checkmark.png'

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);


    this.state = {

    }

  }

  componentDidMount() {



  }


  render () {



    return (
      <>
      <div id = 'main-image'> </div>
      <div id = 'carousel'> </div>

        <div id = 'selected-style'>Style: (Selected Style)</div>
        <div id = 'styles-container'>
        {output}
        </div>
      </div>
      </>
    )
  }
}




export default StyleSelector;


