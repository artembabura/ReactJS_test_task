import React from 'react';
import DashboardTable from './components/DashboardTable';
import { connect } from 'react-redux';
import fetchDashboardData from '../../../_data/fake_api_call';
import { selectRow }from '../../../store/actions/dashboard';
import dashboard from "../../../store/reducers/dashboard";

const mapStateToProps = (store) => ({
  dashboardData: store.dashboard.data,
  fetching: store.dashboard.fetching,
  fullSize: store.dashboard.fullSize,
  limit: store.dashboard.limit,
  offset: store.dashboard.offset
});

const mapDispatchToProps = (dispatch) => ({
  fetchDashboardData: (payload) => dispatch(fetchDashboardData(payload)),
  selectRow: (id) => dispatch(selectRow(id))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class extends React.Component {

  constructor(props) {
    super(props);

    this.selectRow = this.selectRow.bind(this);
    this.fetchDashboardData = this.fetchDashboardData.bind(this);
  }

  fetchDashboardData(payload) {
    this.props.fetchDashboardData(payload);
  }

  componentDidMount() {
    this.fetchDashboardData({offset: 0, limit: 50});
  }

  selectRow(id) {
    this.props.selectRow(id)
  }

  render() {
    return (
      <DashboardTable
        fetching={this.props.fetching}
        data={this.props.dashboardData}
        onSelect={this.selectRow}
        changePageLength={this.fetchDashboardData}
        fullSize={this.props.fullSize}
        limit={this.props.limit}
        offset={this.props.offset}
      />
    );
  }
}