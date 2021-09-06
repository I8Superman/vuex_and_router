// Here we decleare our mutations. Mutations are the thingies that actually change the state

export default {
    SET_PRODUCTS: (state, payload) => { // arguments: state tells what to change, payload is the data we are adding/changing
        state.productList = payload;
    }
}