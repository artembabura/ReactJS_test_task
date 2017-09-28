import realData from './real_json';
import {
  fetchDashboardDataPending,
  fetchDashboardDataSuccess,
  fetchDashboardDataError
} from '../store/actions/dashboard';
import filter from 'lodash/filter';

export default (payload) => {
  return function (dispatch, getState) {

    dispatch(fetchDashboardDataPending(payload));

    return new Promise(resolve => {
      setTimeout(resolve, 500);
    }).then(() => {

      const {
        offset,
        limit,
        searchBid = getState().dashboard.searchBid
      } = payload;

      let data = {...realData};
      let sliced = data.values.slice(offset*limit, limit * (offset+1) + 1);
      let fullSize = data.values.length;

      if (searchBid && searchBid.toString().length > 0) {
        sliced = filter(sliced, (el) => {
          return el[0].includes(searchBid.toString())
        });
        fullSize = sliced.length;
      }

      dispatch(fetchDashboardDataSuccess({
        columns: data.columns,
        values: sliced,
        fullSize
      }));
    }).catch(e => {
      dispatch(fetchDashboardDataError(e))
    });
  };
};