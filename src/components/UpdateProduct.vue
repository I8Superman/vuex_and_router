<template>
  <div>
    <b-button>
      <i class="fas fa-edit" @click="modalShow = !modalShow"></i>
    </b-button>
    <b-modal v-model="modalShow" title="Update product" @show="showModal" @hidden="resetModal" @ok="handleSubmit">
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
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "UpdateProduct",
  props: ["product"], // Name of the props corresponds to the (purple) v-bind directive of the elem in the parent component
  data() {
    return {
      modalShow: false,
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
    showModal() {
      console.log("Modal openened");
      this.form = this.$props.product;
      console.log(this.form);
    },
    resetModal() {
      console.log("Modal closed");
      this.form = {};
    },
    handleSubmit(byModalEvt) {
      console.log("Product changes submitted");
      byModalEvt.preventDefault();
      this.form.inventoryStatus = this.form.inventoryStatus === "true";
      this.$store.dispatch("updateProduct", this.form);
      this.modalShow = false;
      this.submitted = false;
    },
  },
};
</script>

<style>
</style> 