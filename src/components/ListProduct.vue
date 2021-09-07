<template>
  <b-col class="m-3">
    <div>
      <b-card header="List of products">
        <b-card-group deck>
          <!-- v-for works as .forEach and iterates through the elems in the array, creating a li elem for each, assigning a unique key identifier. 'success' and 'danger' are predefined colors from Bootstrap-->
          <!-- Instead of passing a prop (products), we are now calling the computed method productList, that will get the data from the vuex store -->
          <b-card v-for="product in productList" :border-variant="product.inventoryStatus? 'success' : 'danger'" align="center" :key="product.id" class="card">
            <b-card-text>
              <strong>{{product.name}}</strong>
            </b-card-text>
            <b-card-text>Price {{product.price}}</b-card-text>
            <b-card-text>From: {{product.brand}}</b-card-text>
            <b-card-text>{{product.inventoryStatus? 'In stock':'Not in stock'}}</b-card-text>
            <hr />
            <b-row>
              <b-col>
                <b-button variant="danger" @click="deleteProduct(product.id)">
                  <i class="fas fa-trash-alt"></i>
                </b-button>
              </b-col>
              <b-col>
                <UpdateProduct :product="product" />
              </b-col>
            </b-row>
          </b-card>
        </b-card-group>
        <!-- To not show the 'No products found at the same time as the page loader we add a condition (!showPageLoader) to the element below -->
        <h2 v-if="productList.length < 1 && !showPageLoader">No products found!</h2>
      </b-card>
    </div>
    <b-spinner variant="secondary" class="page-loader" v-if="showPageLoader"></b-spinner>
  </b-col>
</template>

<script>
import UpdateProduct from "./UpdateProduct.vue";
// import { mapState } from "vuex"; // Helper tool to easier get state from Vuex
// import { mapGetters } from "vuex"; // Helper tool for the getters

export default {
  data() {
    return {
      showPageLoader: false,
    };
  },
  components: {
    UpdateProduct,
  },
  methods: {
    deleteProduct(productId) {
      this.$store.dispatch("deleteProduct", productId); // We dispatch to the productDelete action
    },
  },
  // 'Computed' are methods that re-evaluate its properties every time the properties change
  computed: {
    // ...mapState({
    //   testList: 'productList' // This obj notation will map the state/data to a new property (here: testList), that we can then call in the html
    // })

    // ...mapState(['productList']) // Does what's written below in 1 line - it is spread out, so an array of individual objects will be returned.

    // ...mapGetters(["productList"]), // Does the getter thing in 1 line - it is spread out, so an array of individual objects will be returned.

    productList() {
      console.log("****", this.$store.getters.productList);
      return this.$store.getters.productList; // This will fetch the data directly from the state (everytime the state of the store changed, this computeded property gets reavaluated and updated )
      // return this.$store.state.productList.filter(
      //   (product) => product.inventoryStatus
      //);
    },
  },
  async mounted() {
    // We make the function async to make use of the await keyword as a timer for the page loader
    // When the instance is mounted, the data is fetched (by calling the action setProducts, which again calls the mutation SET_PRODUCTS, which in turn changes the actual state!)
    try {
      this.showPageLoader = true;
      await this.$store.dispatch("setProducts");
      this.showPageLoader = false;
    } catch (error) {
      console.log(error);
      this.showPageLoader = false;
    }
  },
};
</script>

<style>
</style>