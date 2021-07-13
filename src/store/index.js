import {createStore} from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";


const state = {
  token: '',
  menu: '',
  userId: ''
}

export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {
    moduleA
  }
})
