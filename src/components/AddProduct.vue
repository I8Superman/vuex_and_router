<template>
  <b-col md="6" class="m-3">
    <div>
      <b-card header="Add Product">
        <b-card-body>
          <ValidationObserver v-slot="{ handleSubmit }">
            <b-form autocomplete="off" @submit.prevent="handleSubmit(addProduct)">
              <ValidationProvider name="Name" rules="required: true|min: 3" v-slot="{ errors }">
                <b-form-group label="Name">
                  <b-form-input v-model="form.name" id="name" name="name" trim></b-form-input>
                  <span class="error">{{ errors[0] }}</span>
                </b-form-group>
              </ValidationProvider>

              <ValidationProvider name="Name" rules="required: true|numeric: true" v-slot="{ errors }">
                <b-form-group label="Price">
                  <b-form-input v-model="form.price" id="price" name="price" trim></b-form-input>
                  <span class="error">{{ errors[0] }}</span>
                </b-form-group>
              </ValidationProvider>

              <ValidationProvider name="Name" rules="required: true" v-slot="{ errors }">
                <b-form-group label="Brand">
                  <b-form-input v-model="form.brand " id="brand" name="brand" trim></b-form-input>
                  <span class="error">{{ errors[0] }}</span>
                </b-form-group>
              </ValidationProvider>

              <ValidationProvider name="Name" rules="required: true" v-slot="{ errors }">
                <b-form-group label="Inventory?">
                  <b-form-radio v-model="form.inventoryStatus" name="inventorystatus" value="true">In stock</b-form-radio>
                  <b-form-radio v-model="form.inventoryStatus" name="inventorystatus" value="false">Out of stock</b-form-radio>
                  <span class="error">{{ errors[0] }}</span>
                </b-form-group>
              </ValidationProvider>
            </b-form>
          </ValidationObserver>
        </b-card-body>
        <b-button block variant="primary" @click="add">Add Product</b-button>
      </b-card>
    </div>
  </b-col>
</template>

<script>
import { mapActions } from "vuex"; // We can use this to 'map' certain actions (from actions.js) and use them more readily in the methods

export default {
  data() {
    return {
      form: {
        name: "",
        price: "",
        brand: "",
        inventoryStatus: "",
      },
      submitted: false,
    };
  },
  methods: {
    ...mapActions(["addProduct"]), // We use the spread operator as an object is returned (?)
    add() {
      this.submitted = true;
      this.form.inventoryStatus = this.form.inventoryStatus === "true"; // The value from the radio buttons is a string. We need it as a boolean. By comparing our string with another string, it will be either true or false, that is, return a boolean.
      // "addProduct" is the name of the emit to listen for
      // this.$emit("addProduct", this.form);
      //this.$store.dispatch("addProduct", this.form); // We dispatch to/call the addProduct action, sending the new product (this.form) as payload
      this.addProduct(this.form); // Here we simply call the map action instead of using the dispatch syntax - probably more to map actions than this ...?
      // Lets clear the form after submitting
      this.form = {
        name: "",
        price: "",
        brand: "",
        inventoryStatus: "",
      };
      this.submitted = false;
    },
  },
};
</script>

<style>
.error {
  font-size: 0.8rem;
  line-height: 0.8rem;
  color: red;
}
</style> 