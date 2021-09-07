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
    },
    addProduct: async ({ commit }, payload) => {
        try {
            let result = await axios.post('http://localhost:3000/products', payload);
            commit('ADD_PRODUCT', result.data);
        } catch (error) {
            console.log(error);
            // or
            throw new Error(error);
        }
    },
    deleteProduct: async ({ commit }, payload) => { // Payload will be the id of the product
        try {
            await axios.delete(`http://localhost:3000/products/${payload}`);
            commit('DELETE_PRODUCT', payload);
        } catch (error) {
            console.log(error);
            // or
            throw new Error(error);
        }
    },
    updateProduct: async ({ commit }, payload) => { // Payload will be the id of the product
        try {
            let result = await axios.put(`http://localhost:3000/products/${payload.id}`, payload); // The whole product is passed. We get the id and 'put' the updated product to that id.
            commit('UPDATE_PRODUCT', result.data);
        } catch (error) {
            console.log(error);
            // or
            throw new Error(error);
        }
    }
}