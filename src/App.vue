<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/NavBar";
export default {
  components: { Navbar },
};
</script>
