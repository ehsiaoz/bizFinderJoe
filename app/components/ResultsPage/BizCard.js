import * as React from 'react';
import { Link } from 'react-router';
class BizCard extends React.Component {

  render() {
    let {thumbnail_url, name, desc_snippet, _id} = this.props.bizData;
    let default_image = "http://unforgettablewebdesigns.com/wp-content/plugins/testimonial/assets/frontend/css/images/placeholder.png"
    return (
      <div className = {this.props.index % 2 === 0 ? "bizCard" : "bizCard odd"}>
        <div className="row">
          <div className="col-md-4">
              <img className="biz-thumbnails" src={thumbnail_url ? thumbnail_url : default_image} alt="" height="225" width="225"/>
          </div>
          <div className="col-md-8">
            <div className='row bizcard_title'>
              <h4><Link to={`/biz/${_id}`} >{name}</Link></h4>
            </div>
            <div className='row biz_info'>
              <p className="info">Address: </p>{this.props.bizData.street_address}<br/>
              <p className="info">Phone: </p>{this.props.bizData.phone}<br/>
              <p className="info">Website: </p>{this.props.bizData.website_url}<br/>
            </div>
            <div className='row desc_snippet_row'>
              {desc_snippet}
            </div>
            <div className='row button_row'>
              <div className='col-md-2 col-md-offset-8'>
                <Link to={`/biz/${_id}`} ><a className="btn btn-default more_button">More Info</a></Link>
              </div>
            </div>
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
