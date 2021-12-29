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

    var output = [];


    for (var i = 0; i < this.props.thumbnails.length; i++) {

      var element;

      if (this.props.selectedStyle.toString() === i.toString()) {

        element = [<div id = 'image-container'> <img id = {this.props.thumbnails[i].index} className = 'thumbnail-image' onClick = {this.props.handleStyleClick} src = {this.props.thumbnails[i].url} /> <i class="fas fa-check"></i> </div>]
      } else {
        element = [<div id = 'image-container'> <img id = {this.props.thumbnails[i].index} className = 'thumbnail-image' onClick = {this.props.handleStyleClick} src = {this.props.thumbnails[i].url} /> </div>]

      }


      output.push(element[0])
    }

    // console.log('test', this.props.results[Number(this.props.selectedStyle)].name)

    // {this.props.results[Number(this.props.selectedStyle)].name}

    return (
      <>
      <div id = 'style-container'>
        <div id = 'selected-style'>Style: </div>
        <div id = 'styles-container'>
        {output}
        </div>
      </div>
      </>
    )
  }
}




export default StyleSelector;


