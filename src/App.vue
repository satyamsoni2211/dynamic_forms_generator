<template>
  <v-app>
    <v-main>
      <p class="header">Dynamic Form Schema Generation</p>
      <main-form></main-form>
    </v-main>
    <v-footer>
      <p class="center">
        For more info on <code>Dynamic Schema</code> refer
        <a href="https://vueformulate.com/guide/forms/generating-forms/#schemas"
          >vueformulate</a
        >. Follow
        <a href="https://github.com/satyamsoni2211"
          ><v-icon color="green">mdi-github</v-icon></a
        >
        <a href=""><v-icon color="blue">mdi-twitter</v-icon></a>
        <a href="https://www.linkedin.com/in/-satyamsoni/"
          ><v-icon color="blue">mdi-linkedin</v-icon></a
        >
      </p>
    </v-footer>
  </v-app>
</template>

<script>
import MainForm from "./components/MainForm";

export default {
  name: "App",

  components: {
    MainForm,
  },

  data: () => ({
    //
  }),
  mounted() {
    document.title = "Dynamic Forms generation";
  },
};
</script>
<style lang="scss" scoped>
.center {
  text-align: center !important;
  margin: auto;
  width: 100% !important;
}
.header {
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
  font-weight: 400;
  font-size: 1.5em;
}
</style>
