import {createReducer} from 'redux-act';
import {
  fetchDashboardDataPending,
  fetchDashboardDataSuccess,
  fetchDashboardDataError,
  selectRow,
  toggleSelection
} from '../actions/dashboard';
import forEach from 'lodash/forEach';

const initState = {
  fetching: false,
  error: null,
  data: null,
};

export default createReducer({
  [fetchDashboardDataPending]: (state, payload) => {
    return {...state, ...payload, fetching: true};
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
    console.log(state.data)
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
  },
  [toggleSelection]: (state, payload) => {
    const obj = {};
    forEach(state.data, (el) => {
      el.checked = payload;
      obj[el.ID] = el;
    });

    return {
      ...state,
      data: obj
    };
  }
}, initState);