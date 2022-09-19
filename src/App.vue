<template>

  <router-view/>
</template>

<script>

  import axios from "axios";

  export default {

    created: function () {
      axios.interceptors.request.use(config => {
        let token = localStorage.getItem("accessToken");
        if (token) {
          config.headers["Authorization"] = "Bearer " + token;
        }
        return config;
      }, error => Promise.reject(error));
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

@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css';


</style>
