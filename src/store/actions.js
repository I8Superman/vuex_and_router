import axios from "axios";

export default {
    // setProducts is the action we call from our components. The action will then perform the 'mutation' of the state/data.
    setProducts: async ({ commit }, payload) => { // Note that setProducts is NOT the async func. Async is in front of the anonymous func. setProduct is a property called by the dispatch method from ListProduct.vue
        try {
            let result = await axios.get('http://localhost:3000/products');
            commit('SET_PRODUCTS', result.data) // Here we send/commit our mutation. We name mutations in CAPS. We also pass the fetched data as an argument
        } catch (error) {
            console.log(error);
            // or
            throw new Error(error);
        }
    }
}