import React from 'react';
import Table from '../Table';
import Pagination from "../Pagination";

export default class DashboardTable extends React.Component {

  render() {
    return (
      this.props.fetching ?
        <p>Loading...</p>
        : <div>
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