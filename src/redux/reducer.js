const SET_DATA = 'SET_DATA';
const SET_KEYS = 'SET_KEYS';
const DIRECT_SORT = 'DIRECT_SORT';

let initialState = {
    profiles: [],
    keys: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
              ...state, profiles: action.data
            };
        case SET_KEYS:
            return {
              ...state, keys: action.keys
            };
        case DIRECT_SORT:
            return {
              ...state,
                profiles: [...state.profiles.sort((a, b) =>
                    (a[action.key] > b[action.key]) ? 1 : ((b[action.key] > a[action.key]) ? -1 : 0))],
            };
        default:
            return state;
    }
};

export const setData = (data) => ({type: SET_DATA, data});
export const setKeys = (keys) => ({type: SET_KEYS, keys});
export const directSort = (key) => ({type: DIRECT_SORT, key});

export default reducer;