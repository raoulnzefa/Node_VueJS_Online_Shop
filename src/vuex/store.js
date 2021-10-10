//import axios from "axios";
import mutations from "./mutations/mutations"
import actions from "./actions/actions"
import getters from "./getters/getters"
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products:[],
        cart:[],
    },
    mutations,
    actions,
    getters
})
export default store


