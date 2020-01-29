// @flow

export const SET_DATA = 'SET_DATA';
export const SET_KEYS = 'SET_KEYS';
export const SET_SORT_PARAMS = 'SET_SORT_PARAMS';
export const SET_STATUS = 'SET_STATUS';
export const SET_ERROR = 'SET_ERROR';

export const setData = (data: Array<Object>) => ({ type: SET_DATA, data });
export const setKeys = (keys: Array<string>) => ({ type: SET_KEYS, keys });
export const setCurSortParams = (key: string, sortType: string) => ({
  type: SET_SORT_PARAMS,
  key,
  sortType,
});
export const setStatus = (status: Array<boolean>) => ({
  type: SET_STATUS,
  status,
});
export const setError = (error: string) => ({ type: SET_ERROR, error });
