import { createSelector } from 'reselect';

const Sort = (
  key: string,
  profilesArray: Array<Object>,
  sortType: string
): Array<Object> => {
  if (!key) {
    return profilesArray;
  }
  const sortedArray = [
    ...profilesArray.sort((obj1: Object, obj2: Object) =>
      obj1[key].toLowerCase() > obj2[key].toLowerCase()
        ? 1
        : obj2[key].toLowerCase() > obj1[key].toLowerCase()
        ? -1
        : 0
    ),
  ];
  if (sortType === 'direct') {
    return sortedArray;
  } else {
    return sortedArray.reverse();
  }
};

const getCurKey = state => {
  return state.currentKey;
};

const getProfiles = state => {
  return state.profiles;
};

const currentType = state => {
  return state.currentType;
};

export const getSortedData = createSelector(
  [getCurKey, getProfiles, currentType],
  (currentKey, profiles, currentType) => {
    return Sort(currentKey, profiles, currentType);
  }
);
