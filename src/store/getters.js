// Getters is a middleman that lets you add methods (for example) or modify the data that you're getting from the store. You write the modifications in the getter.js file, so you dont have to repeat it in several components

export default {
    productList: (state, getters) => {
        // return state.productList.filter((product) => product.inventoryStatus); // A filtering method is added here, so you dont have to write it i every component using the filtered array
        return state.productList;
    }
}

