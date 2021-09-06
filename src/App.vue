<template>
  <div>
    <AppHeader />
    <b-container>
      <b-row class="justify-content-center">
        <router-view />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style>
a {
  text-decoration: none !important;
  color: #fff !important;
}
</style>
