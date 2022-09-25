<template>

  <main class="container-fluid overflow-scroll">
    <h1>Registration form</h1>
    <form v-on:submit.prevent="signup">
      <div class="form-group">
        <label for="inputLogin">Login *</label>
        <input type="text" class="form-control" id="inputLogin" v-model="form.login" placeholder="alice.smith@mailbox.net">
      </div>
      <div class="form-group">
        <label for="inputNickname">Nickname *</label>
        <input type="text" class="form-control" id="inputNickname" v-model="form.nickname" placeholder="Alice">
      </div>
      <div class="form-group">
        <label for="inputPassword">Password *</label>
        <input type="password" class="form-control" id="inputPassword" v-model="form.password" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </main>

</template>



<script>
  import axios from 'axios';
  
  const apiUrl = "https://v9cbonidud.execute-api.eu-central-1.amazonaws.com/dev";

  export default {

    name: 'RegisterForm',
    
    props: {
      msg: String
    },

    data() {
      return {
        form: {
            login: "",
            nickname: "",
            password: ""
        }
      }
    },

    methods: {
      signup() {
        axios.post(apiUrl + '/users', this.form)
        .then(() => {
          this.$router.push('Login'); 
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
