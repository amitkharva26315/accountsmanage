<template>
  <!-- <div id="app">
    <Header />
    <router-view />
  </div> -->
  <!-- Page Wrapper -->
  <div id="wrapper">
    <SideHeader></SideHeader>
    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">
      <TopHeader></TopHeader>
      <router-view />
      <Footer></Footer>
    </div>
    <!-- End of Content Wrapper -->
  </div>
  <!-- End of Page Wrapper -->
</template>

<script>
// import Header from "./components/layouts/Header";
import SideHeader from "./components/header/SideHeader";
import TopHeader from "./components/header/TopHeader";
import Footer from "./components/footer/Footer";

export default {
    name:'app',
    components:{
      // Header,
      TopHeader,
      SideHeader,
      Footer
    }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
