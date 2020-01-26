// @flow

import { dataAPI } from '../api/api';
import {
  SET_DATA,
  SET_KEYS,
  INITIALIZED_SUCCESS,
  DIRECT_SORT,
  REVERSED_SORT,
  setKeys,
  setData,
  initializedSuccess,
} from '../actions/actions';

const initialState = {
  profiles: [],
  keys: [],
  initialized: false,
};

const Sort = (key: string, ...profilesArray: Array<Object>): Array<Object> => {
  return profilesArray.sort((obj1: Object, obj2: Object) =>
    obj1[key].toLowerCase() > obj2[key].toLowerCase()
      ? 1
      : obj2[key].toLowerCase() > obj1[key].toLowerCase()
      ? -1
      : 0
  );
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
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    case DIRECT_SORT:
      return {
        ...state,
        profiles: Sort(action.key, ...state.profiles),
      };
    case REVERSED_SORT:
      return {
        ...state,
        profiles: Sort(action.key, ...state.profiles).reverse(),
      };
    default:
      return state;
  }
};

export default reducer;

export const getProfiles = () => (dispatch: any): Object => {
  return dataAPI.getData().then(response => {
    try {
      dispatch(setKeys(Object.keys(response.data[0])));
      dispatch(setData(response.data));
    } catch (e) {
      alert(response.statusText);
    }
  });
};

export const initializeApp = () => (dispatch: any) => {
  const promise = dispatch(getProfiles());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};
