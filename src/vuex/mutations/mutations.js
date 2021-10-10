export default {
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products
    },
    SET_CART: (state, product) => {
        if (state.cart.length){
            let isItemExist = false;
            state.cart.map(function (item){
                if (item.article === product.article){
                    isItemExist = true
                    item.quantity++
                }
            })
            if (!isItemExist){
                state.cart.push(product)
            }
        }else{
            state.cart.push(product)
        }
    },
    REMOVE_FROM_CART: (state, index) => {
        state.cart.splice(index,1)
    },
    INCREASE_QUANTITY: (state, index) => {
        state.cart[index].quantity++
    },
    DECREASE_QUANTITY: (state, index) => {
        if (state.cart[index].quantity > 1){
            state.cart[index].quantity--
        }
    },
}