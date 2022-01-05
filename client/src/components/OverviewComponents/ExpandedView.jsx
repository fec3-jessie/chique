import React from 'react';
import ReactDom from 'react-dom';
import LeftArrowExpanded from './LeftArrowExpanded.jsx';
import RightArrowExpanded from './RightArrowExpanded.jsx';


class ExpandedView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  handleLeftArrowExpanded() {
    var length = this.props.images[Number(this.props.selectedStyle)].length;
    if (this.state.currentIndex === 0) {
      this.setState({currentIndex: length - 1});
    } else {
      this.setState({currentIndex: this.state.currentIndex - 1});
    }
  }

  handleRightArrowExpanded() {
    var length = this.props.images[Number(this.props.selectedStyle)].length;
    if (this.state.currentIndex === length - 1) {
      this.setState({currentIndex: 0});
    } else {
      this.setState({currentIndex: this.state.currentIndex + 1});
    }
  }

  render () {
    if (this.props.images) {
      console.log(this.props.images[Number(this.props.selectedStyle)]);

    }


    return ReactDom.createPortal(
      <>
        {this.props.expandedView ?
          <div className = 'modal display-block'>

            <div className= ".modal-main">
              <div class = 'expanded-view-container'>
                <div id = 'expanded-image-container'>
                  <LeftArrowExpanded handleLeftArrowExpanded = {this.handleLeftArrowExpanded.bind(this)} />
                  <img id = 'expanded-image' src = {this.props.images ? this.props.images[Number(this.props.selectedStyle)][this.state.currentIndex].url : ''}
                  />
                  <RightArrowExpanded handleRightArrowExpanded = {this.handleRightArrowExpanded.bind(this)}/>
                </div>
              </div>
            </div>

          </div> :
          <div className = '.modal display-none'>

            <div className= ".modal-main">
              <img id = 'expanded-image' src = {this.props.images ? this.props.images[Number(this.props.selectedStyle)][0].url : ''}/>
            </div>

          </div> }
      </>,
      document.getElementById('thumbnail-portal')

    );

  }

}
export default ExpandedView;