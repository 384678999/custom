<template>
  <div class="axios">
    <h1>axios</h1>
    <div class="style">
      <div @click="get">get</div>|
      <div @click="post">post</div>|
      <div @click="_post">_post</div>|
      <div @click="put">put</div>
      <!-- <div @click="deletes">delete</div> -->
    </div>
    <div class="style">
      <span>{{fromDate.id}}</span>
      <span>{{fromDate.name}}</span>
      <span>{{fromDate.url}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "axios",
  data() {
    return {
      fromDate: {}
    };
  },
  mounted() {
    // this.get();
    // this.post();
  },
  methods: {
    get() {
      this.$api.url.get({ id: 1 }).then(res => {
        console.log(res);
        this.fromDate = res;
      });
    },
    post() {
      this.$api.url.post({ id: 2, name: "模拟post" }).then(res => {
        console.log(res);
        this.fromDate = res;
      });
    },
    _post() {
      this.$api.url._post({ name: "_post" }).then(res => {
        console.log(res);
        this.fromDate = res;
      });
    },
    // put() {
    //   this.$api.url.put({ id: 2, url: "put" }).then(res => {
    //     console.log(res);
    //     this.fromDate = res;
    //   });
    // },
    put() {
      this.$axios
        .put("http://yapi.demo.qunar.com/mock/19046/put", { id: 2, url: "put" })
        .then(res => {
          console.log(res);
          this.fromDate = res;
        });
    }
  }
};
</script>

<style  scoped lang="scss">
.style {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #42b983;
  font-size: 10px;
  div {
    font-weight: bold;
    font-size: 16px;
    padding: 0 15px;
    cursor: pointer;
  }
  span {
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    padding: 0 10px;
  }
}
</style>