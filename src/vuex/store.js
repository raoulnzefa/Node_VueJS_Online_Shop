//import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
    state: {
        products:[]
    },
    getters: {
        PRODUCTS(state){
            return state.products;
        }
    }
})
export default store
//const app = createApp({})

//app.use(store)

