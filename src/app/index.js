import React from 'react';
import Toolbar from "./components/Toolbar";
import TableDashboard from './components/TableDashboard';
import Layout from './components/Layout';

export default class Application extends React.Component {
  render() {
    return (
      <div>
        <Toolbar/>
        <Layout>
          <TableDashboard/>
        </Layout>
      </div>
    );
  }
}