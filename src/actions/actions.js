export const SET_DATA = 'SET_DATA';
export const SET_KEYS = 'SET_KEYS';
export const SORT = 'SORT';
export const SET_STATUS = 'SET_STATUS';
export const SET_ERROR = 'SET_ERROR';

export const setData = data => ({ type: SET_DATA, data });
export const setKeys = keys => ({ type: SET_KEYS, keys });
export const setCurSortParams = (key, sortType) => ({
  type: SORT,
  key,
  sortType,
});
export const setStatus = status => ({ type: SET_STATUS, status });
export const setError = error => ({ type: SET_ERROR, error });
