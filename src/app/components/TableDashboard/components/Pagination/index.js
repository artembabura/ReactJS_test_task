import React from 'react';
import BSButton from 'react-bootstrap/lib/Button';
import BSPagination from 'react-bootstrap/lib/Pagination';

const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
  }
};

export default class Pagination extends React.Component {

  constructor(props) {
    super(props);

    this.handlePageSelect = this.handlePageSelect.bind(this);
    this.changePageLength = this.changePageLength.bind(this);
  }

  handlePageSelect(evtKey) {
    this.props.changePageLength({offset: evtKey-1, limit: this.props.limit});
  }

  changePageLength(e) {
    if (this.props.changePageLength) {
      this.props.changePageLength({offset: 0, limit: e.target.getAttribute('page-length')});
    }
  }

  render() {

    const pagesLengths = [1000, 500, 200, 100, 50];
    const pages = pagesLengths.map((length, i) => (
      <BSButton bsStyle={parseInt(this.props.limit) === length ? "primary" : "default"} key={i} onClick={this.changePageLength} page-length={length}>
        { length }
      </BSButton>
    ));

    return (
      <div style={style.container}>
        Page:
        <BSPagination
            ellipsis
            items={Math.ceil(this.props.fullSize / this.props.limit)}
            maxButtons={5}
            activePage={this.props.offset + 1}
            onSelect={this.handlePageSelect}
        />
        Items per page: { pages }
      </div>
    )
  }
}