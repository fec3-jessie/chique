import React from 'react';
import ReactDom from 'react-dom';
import LeftArrowExpanded from './LeftArrowExpanded.jsx';
import RightArrowExpanded from './RightArrowExpanded.jsx';


class ExpandedView extends React.Component {
  constructor(props) {
    super(props);
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
                  <LeftArrowExpanded />
                  <img id = 'expanded-image' src = {this.props.images ? this.props.images[Number(this.props.selectedStyle)][0].url : ''}
                  />
                  <RightArrowExpanded />
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