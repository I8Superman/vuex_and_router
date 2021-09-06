// Here we decleare our mutations. Mutations are the thingies that actually change the state

export default {
    SET_PRODUCTS: (state, payload) => { // arguments: state tells what to change, payload is the data we are adding/changing
        state.productList = payload;
    },
    ADD_PRODUCT: (state, payload) => {
        state.productList.push(payload);
    },
    DELETE_PRODUCT: (state, payload) => {
        state.productList = state.productList.filter(product => product.id != payload);
    },
    UPDATE_PRODUCT: (state, payload) => {
        state.productList = state.productList.map(product => { // We build a new array from the single updated product and the products that weren't updated
            if (product.id === payload.id) { // When we get to the product that needs to be updated, we return the updated product instead.
                return payload;
            }
            return product; // In all other cases, we return the (not updated) products as they are
        })
    }
}