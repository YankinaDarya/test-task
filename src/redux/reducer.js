// @flow

import { dataAPI } from '../api/api';
import {
  SET_DATA,
  SET_KEYS,
  SORT,
  SET_STATUS,
  SET_ERROR,
  setKeys,
  setData,
  setStatus,
  setError,
} from '../actions/actions';

const STATUSES = {
  loading: false,
  error: false,
  success: false,
};

const initialState = {
  profiles: [],
  keys: [],
  status: [STATUSES.loading, STATUSES.error, STATUSES.success],
  error: '',
  currentKey: '',
  currentType: '',
};

const reducer = (state: Object = initialState, action: Object): Object => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        profiles: action.data,
      };
    case SET_KEYS:
      return {
        ...state,
        keys: action.keys,
      };
    case SET_STATUS:
      return {
        ...state,
        status: [...action.status],
      };
    case SORT:
      return {
        ...state,
        currentKey: action.key,
        currentType: action.sortType,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;

export const getProfiles = () => (dispatch: any): Object => {
  return dataAPI.getData().then(response => {
    if (response.status === 200) {
      dispatch(setKeys(Object.keys(response.data[0])));
      dispatch(setData(response.data));
      dispatch(setStatus([false, false, true]));
    } else {
      dispatch(setStatus([false, true, false]));
      dispatch(setError(`${response.status} ${response.statusText}`));
    }
  });
};

export const initializeApp = () => (dispatch: any) => {
  dispatch(setStatus([true, false, false]));
  dispatch(getProfiles());
};
