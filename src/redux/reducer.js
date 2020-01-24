import { dataAPI } from '../api/api';
import { SET_DATA, SET_KEYS, INITIALIZED_SUCCESS, DIRECT_SORT, REVERSED_SORT,
  setKeys, setData, initializedSuccess } from '../actions/actions';

const initialState = {
  profiles: [],
  keys: [],
  initialized: false,
};

const reducer = (state = initialState, action) => {
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
        profiles: [
          ...state.profiles.sort((a, b) =>
            a[action.key].toLowerCase() > b[action.key].toLowerCase()
              ? 1
              : b[action.key].toLowerCase() > a[action.key].toLowerCase()
              ? -1
              : 0
          ),
        ],
      };
    case REVERSED_SORT:
      return {
        ...state,
        profiles: [
          ...state.profiles.sort((a, b) =>
            b[action.key].toLowerCase() > a[action.key].toLowerCase()
              ? 1
              : a[action.key].toLowerCase() > b[action.key].toLowerCase()
              ? -1
              : 0
          ),
        ],
      };
    default:
      return state;
  }
};

export default reducer;

export const getProfiles = () => dispatch => {
  return dataAPI.getData().then(response => {
    if (response.status === 200) {
      dispatch(setKeys(Object.keys(response.data[0])));
      dispatch(setData(response.data));
    }
  });
};

export const initializeApp = () => dispatch => {
  const promise = dispatch(getProfiles());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};
