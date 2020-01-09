import {dataAPI} from "../api/api";

const SET_DATA = 'SET_DATA';
const SET_KEYS = 'SET_KEYS';
const DIRECT_SORT = 'DIRECT_SORT';
const REVERSED_SORT = 'REVERSED_SORT';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    profiles: [],
    keys: [],
    initialized: false
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
        case INITIALIZED_SUCCESS:
            return {
                ...state, initialized: true
            };
        case DIRECT_SORT:
            return {
              ...state,
                profiles: [...state.profiles.sort((a, b) =>
                    (a[action.key].toLowerCase() > b[action.key].toLowerCase()) ?
                        1 : ((b[action.key].toLowerCase() > a[action.key].toLowerCase()) ? -1 : 0))]
            };
        case REVERSED_SORT:
            return {
                ...state,
                profiles: [...state.profiles.sort((a, b) =>
                    (b[action.key].toLowerCase() > a[action.key].toLowerCase()) ?
                        1 : ((a[action.key].toLowerCase() > b[action.key].toLowerCase()) ? -1 : 0))]
            };
        default:
            return state;
    }
};

export default reducer;

const setData = (data) => ({type: SET_DATA, data});
const setKeys = (keys) => ({type: SET_KEYS, keys});
const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const directSort = (key) => ({type: DIRECT_SORT, key});
export const reversedSort = (key) => ({type: REVERSED_SORT, key});

export const getProfiles = () => (dispatch) => {
    return dataAPI.getData().then(
        response => {
            if(response.status === 200) {
                dispatch(setKeys(Object.keys(response.data[0])));
                dispatch(setData(response.data));
            }
        }
    )
};

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getProfiles());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
};