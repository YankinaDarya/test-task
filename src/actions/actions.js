export const SET_DATA = 'SET_DATA';
export const SET_KEYS = 'SET_KEYS';
export const DIRECT_SORT = 'DIRECT_SORT';
export const REVERSED_SORT = 'REVERSED_SORT';
export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export const setData = data => ({ type: SET_DATA, data });
export const setKeys = keys => ({ type: SET_KEYS, keys });
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });
export const directSort = key => ({ type: DIRECT_SORT, key });
export const reversedSort = key => ({ type: REVERSED_SORT, key });
