import * as React from 'react';

var BizCard = React.createClass(

class BizCard extends React.Component {

  initializeState() {
    this.setState({
      name:
      snippet:
      img_url:
    });
  }

  const { name , snippet, } = this.props;
  const { snippet } = this.props;
  const {img_url} = this.props;

  componentWillMount() {
    this.initializeState();
    this.getBusinesses();
  }


  //get businesses from database
  getBusinesses() {
    this.startLoading();
    axios.get('/api/businesses')
    .then((response) =>{
      console.log('response', response);
      this.endLoading();
      this.setState({
        businesses: response.data
      });
      console.log('businesses array', this.state.businesses)
    })
    .catch(() => {
      console.log('error', error);
      this.endLoading();
    });
  }


  handleUpdateTextInput(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    //prevent submit from refreshing the page
    event.preventDefault();
    console.log('Save', this.state);
    this.props.submitAction(this.state);
  }

  startLoading() {
        this.setState({
          loading: true
        })
    }

    endLoading() {
      this.setState({
        loading: false
      });
    }

  render() {

    return (
      <div>
        <div class="row">
          <div class="col-md-4">
              <img class="biz-thumbnails" src={img_url} alt="" height="225" width="225"/>
          </div>
          <div class="col-md-8">
            <h4>{name}</h4>
            <p>{snippet}</p>
            <a class="btn btn-default" href="#">More Info</a>
          </div>
      </div>
      <div class="empty">
      </div>
    </div>
    );
  }
}
