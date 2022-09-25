<template>

  <main class="container-fluid overflow-scroll">
    <h1>Login form</h1>
    <form v-on:submit.prevent="signin">
      <div class="form-group">
        <label for="inputLogin">Login *</label>
        <input type="text" class="form-control" id="inputLogin" v-model="form.login" placeholder="alice.smith@mailbox.net">
      </div>
      <div class="form-group">
        <label for="inputPassword">Password *</label>
        <input type="password" class="form-control" id="inputPassword" v-model="form.password" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Sign In</button>
    </form>
  </main>

</template>



<script>
  import axios from 'axios';
  
  const apiUrl = "https://v9cbonidud.execute-api.eu-central-1.amazonaws.com/dev";

  export default {

    name: 'LoginForm',
    
    props: {
      msg: String
    },

    data() {
      return {
        form: {
            login: "",
            password: ""
        }
      }
    },

    methods: {
      signin() {
        axios.post(apiUrl + '/login', this.form)
        .then((res) => {
          localStorage.setItem('accessToken', res.data.accessToken);
          this.$router.push({name: "Asset List"});
        })
        .catch((err) => {
          alert(err);
        });
      }
    }
}

</script>

<style scoped>
  body {
    height: 100%;
  }

  .h-100 {
    height: 100% !important;
  }

  main {
    min-height: 30%;
  }
</style>
