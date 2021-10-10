import axios from "axios";

export default {
    GET_PRODUCTS_FROM_API({commit}){
        return axios('http://localhost:3000/products', {
            method: "GET"
        })
            .then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);
                return products;
            })
    },
    ADD_TO_CART({commit}, product){
        commit('SET_CART', product);
    },
    DELETE_FROM_CART({commit}, index){
        commit('REMOVE_FROM_CART', index);
    },
    INCREASE_QUANTITY({commit}, index){
        commit('INCREASE_QUANTITY', index);
    },
    DECREASE_QUANTITY({commit}, index){
        commit('DECREASE_QUANTITY', index);
    }
}