import {createReducer} from 'redux-act';
import {
  fetchDashboardDataPending,
  fetchDashboardDataSuccess,
  fetchDashboardDataError,
  selectRow
} from '../actions/dashboard';
import find from 'lodash/find';

const initState = {
  fetching: false,
  error: null,
  data: null
};

export default createReducer({
  [fetchDashboardDataPending]: (state, payload) => {
    return {state, ...payload, fetching: true};
  },
  [fetchDashboardDataSuccess]: (state, payload) => {

    const { values, columns, fullSize} = payload;

    const obj = {};

    values.forEach(data => {
      obj[data[0]] = data.reduce((prev, curr, i) => ({
        ...prev,
        [columns[i]]: curr
      }), {});
    });

    return {...state, fetching: false, data: obj, fullSize};
  },
  [fetchDashboardDataError]: (state, payload) => {
    return {...state, fetching: false, error: payload};
  },
  [selectRow]: (state, id) => {
    let row = state.data[id];
    return {
      ...state,
      data: {
        ...state.data,
        [id]: {
          ...row,
          checked: !row.checked
        }
      }
    };
  }
}, initState);