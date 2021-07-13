import {SET_MENU, SET_TOKEN, SET_USER_ID} from "./mutations-type";

export default {

  [SET_TOKEN](state, token) {
    state.token = token;
  },
  [SET_MENU](state, menu) {
    state.menu = menu;
  },
  [SET_USER_ID](state, userId) {
    state.userId = userId;
  }

}