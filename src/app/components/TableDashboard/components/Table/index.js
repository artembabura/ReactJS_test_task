import React from 'react';
import BSTable from 'react-bootstrap/lib/Table';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import map from 'lodash/map';

export default class Table extends React.Component {

  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(evtKey) {
    if (this.props.onSelect) {
      this.props.onSelect(evtKey.target.id);
    }
  }

  render() {

    const bodyRows = !this.props.data ? null: map(this.props.data, (row) => (
      <tr key={row.ID}>
        <td>
          <Checkbox checked={Boolean(row.checked)} onClick={this.onSelect} id={row.ID}/>
        </td>
        <td>{row.ID}</td>
        <td>{row.sVisits}</td>
        <td>{row.vVisits}</td>
        <td>{row.Clicks}</td>
        <td>{row.Conversions}</td>
        <td>{row.Revenue}</td>
        <td>{row.Spend}</td>
        <td>{row.Revenue - row.Spend}</td>
        <td>{row.Clicks / row.vVisits * 100 || null}</td>
        <td>{row.Conversions / row.Clicks * 100 || null}</td>
        <td>{row.Conversions / row.vVisits * 100 || null}</td>
        <td>{row.Profit / row.Spend * 100 || null}</td>
        <td>{row.Revenue / row.Clicks || null}</td>
        <td>{row.Revenue / row.vVisits || null}</td>
      </tr>
    ));

    return (
      <BSTable bordered condensed hover>
        <thead>
        <tr>
          <th></th>
          <th>Bid</th>
          <th>sVisits</th>
          <th>vVisits</th>
          <th>Clicks</th>
          <th>Conversions</th>
          <th>Revenue</th>
          <th>Spend</th>
          <th>Profit</th>
          <th>CTR</th>
          <th>CR</th>
          <th>CV</th>
          <th>ROI</th>
          <th>EPC</th>
          <th>EPV</th>
        </tr>
        </thead>
        <tbody>
          { bodyRows }
        </tbody>
      </BSTable>
    )
  }
}

