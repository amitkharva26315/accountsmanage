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
      <router-view />
      <!-- Footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2020</span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->
    
  </div>
  <!-- End of Page Wrapper -->
</template>

<script>
// import Header from "./components/layouts/Header";
import SideHeader from "./components/header/SideHeader";

export default {
    name:'app',
    components:{
      // Header,
      SideHeader
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
