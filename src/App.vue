<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view @authen="setAuthenticated" />
    
    
  </div>
</template>

<script>

export default {
  name: 'App' ,
  data() {
    return {
      authen: false
    }
  },
  
  mounted() {
      // if(!this.authen) {
      //     this.$router.replace('/');
      //       }
  },
  methods: {
      setAuthenticated(status) {
          this.authen = status;
            }
        }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
