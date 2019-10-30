<template>
  <div id="app">
    <div id="nav">
      <div @click="home">Home</div>|
      <div @click="about">about</div>|
      <div @click="axios">axios</div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import home from "@/views/Home";
// import about from "@/views/About";
export default {
  name: "Leader",
  // components: {
  //   home,
  //   about
  // }
  methods: {
    home() {
      this.$router.push({ path: "/" });
    },
    about() {
      this.$router.push({ path: "about" });
    },
    axios() {
      this.$router.push({ path: "axios" });
    }
  }
};
</script>

<style scoped lang="scss">
#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #42b983;
  font-size: 10px;
  cursor: pointer;
  div {
    font-weight: bold;
    font-size: 20px;
    padding: 0 30px;
  }
}
</style>
