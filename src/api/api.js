import * as axios from "axios";

export const dataAPI = {
  getData() {
      return axios.get('https://raw.githubusercontent.com/blmzv/ah-frontend-intern/master/profiles.json')
  }
};