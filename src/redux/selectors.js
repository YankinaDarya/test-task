// @flow

import { createSelector } from 'reselect';

const Sort = (
  key: string,
  profilesArray: Array<{ obj: string }>,
  sortType: string
): Array<{ obj: string }> => {
  if (!key) {
    return profilesArray;
  }
  const sortedArray = [
    ...profilesArray.sort((obj1: { obj: string }, obj2: { obj: string }) =>
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

const getCurKey = (state: Object): { currentKey: string } => {
  return state.currentKey;
};

const getProfiles = (state: Object): { profiles: Array<{ obj: string }> } => {
  return state.profiles;
};

const currentType = (state: Object): { currentType: string } => {
  return state.currentType;
};

export const getSortedData = createSelector(
  [getCurKey, getProfiles, currentType],
  (currentKey, profiles, currentType) => {
    return Sort(currentKey, profiles, currentType);
  }
);
