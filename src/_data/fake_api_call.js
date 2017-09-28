import realData from './real_json';
import {
  fetchDashboardDataPending,
  fetchDashboardDataSuccess,
  fetchDashboardDataError
} from '../store/actions/dashboard';

export default (payload) => {
  return function (dispatch) {

    dispatch(fetchDashboardDataPending(payload));

    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    }).then(() => {

      const {offset , limit} = payload;

      let data = {...realData};
      const sliced = data.values.slice(offset*limit, limit * (offset+1));

      dispatch(fetchDashboardDataSuccess({
        columns: realData.columns,
        values: sliced,
        fullSize: data.values.length
      }));
    }).catch(e => {
      dispatch(fetchDashboardDataError(e))
    });
  };
};