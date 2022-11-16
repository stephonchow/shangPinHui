<template>
  <div>
    <Header></Header>
    <router-link to="/home">Home</router-link>
    我是根组件
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    // HelloWorld,
    Header,
    Footer,
  },
};
</script>

<style>
</style>
