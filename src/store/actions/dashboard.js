import { createAction } from 'redux-act';

export const fetchDashboardDataPending = createAction('DASHBOARD_FETCH_DATA_PENDING');
export const fetchDashboardDataSuccess = createAction('DASHBOARD_FETCH_DATA_SUCCESS');
export const fetchDashboardDataError = createAction('DASHBOARD_FETCH_DATA_ERROR');

export const selectRow = createAction('DASHBOARD_SELECT_ROW');