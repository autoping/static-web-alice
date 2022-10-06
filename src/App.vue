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



</style>
