import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux';
import searchCall from '../../../_data/fake_api_call';

const mapStateToProps = (store) => ({
  limit: store.dashboard.limit,
  offset: store.dashboard.offset
});

const mapDispatchToProps = (dispatch) => ({
  searchCall: (payload) => dispatch(searchCall(payload)),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Toolbar extends React.Component {

  constructor(props) {
    super(props);

    this.onClearClick = this.onClearClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      searchVal: ''
    }
  }

  onClearClick() {
    this.setState({
      ...this.state,
      searchVal: ''
    }, () => {
      if (this.props.searchCall) {
        this.props.searchCall({
          searchBid: this.state.searchVal,
          limit: this.props.limit,
          offset: this.props.offset
        });
      }
    });
  }

  onInputChange(e) {
    this.setState({
      ...this.state,
      searchVal: e.target.value
    }, () => {
      clearTimeout(window.inputTimeout);
      window.inputTimeout = setTimeout(() => {
        if (this.props.searchCall) {
          this.props.searchCall({
            searchBid: this.state.searchVal,
            limit: this.props.limit,
            offset: this.props.offset
          });
        }
      }, 500);
    });
  }

  render() {
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Table Dashboard</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="Search" value={this.state.searchVal} onChange={this.onInputChange}/>
          </FormGroup>
          {
            this.state.searchVal.length > 0 &&
            <Button onClick={this.onClearClick}>Clear</Button>
          }
        </Navbar.Form>
      </Navbar>
    );
  }
}

