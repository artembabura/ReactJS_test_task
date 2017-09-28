import React from 'react';
import Table from '../Table';
import Pagination from "../Pagination";
import Button from 'react-bootstrap/lib/Button';

export default class DashboardTable extends React.Component {

  constructor(props) {
    super(props);

    this.onToggleSelection = this.onToggleSelection.bind(this);
  }

  onToggleSelection(payload) {
    if (this.props.toggleSelection) {
      this.props.toggleSelection(payload);
    }
  }

  render() {

    return (
      this.props.fetching ?
        <p>Loading...</p>
        : <div>
            <Button bsStyle='primary' onClick={() => this.onToggleSelection(true)}>Select All</Button>
            <Button bsStyle='primary' onClick={() => this.onToggleSelection(false)}>Un Select All</Button>
            <Table data={this.props.data} onSelect={this.props.onSelect}/>
            <Pagination
              changePageLength={this.props.changePageLength}
              fullSize={this.props.fullSize}
              limit={this.props.limit}
              offset={this.props.offset}
            />
        </div>
    );
  }
}