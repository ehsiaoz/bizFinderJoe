import * as React from 'react';
import { Link } from 'react-router';
class BizCard extends React.Component {

  render() {
    let {img_url, name, snippet, _id} = this.props.bizData;
    let default_image = "http://unforgettablewebdesigns.com/wp-content/plugins/testimonial/assets/frontend/css/images/placeholder.png"
    return (
      <div className = {this.props.index % 2 === 0 ? "bizCard" : "bizCard odd"}>
        <div className="row">
          <div className="col-md-4">
              <img className="biz-thumbnails" src={img_url ? img_url : default_image} alt="" height="225" width="225"/>
          </div>
          <div className="col-md-8">
            <h4><Link to={`/biz/${_id}`} >{name}</Link></h4>
            <p>{snippet}</p>
            <a className="btn btn-default" href="#">More Info</a>
          </div>
      </div>
    </div>
    );
  }
}

// BizCard.propTypes = {
//   //our biz card takes in a prop that is an object
//   bizData: React.PropTypes.object
// }

export {BizCard};
