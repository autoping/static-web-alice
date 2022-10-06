<template>


    <form v-on:submit.prevent="signin" class="box">
      <div class="field">
        <label class="label">Login *</label>
        <div class="control">
          <input type="email" class="input" id="inputLogin" v-model="form.login" placeholder="alice.smith@mailbox.net">

        </div>
      </div>

      <div class="field">
        <label class="label">Password *</label>
        <div class="control">
          <input type="password" class="input" id="inputPassword" v-model="form.password" placeholder="Password">
        </div>
      </div>

      <button type="submit"  class="button is-primary">Sign in</button>

    </form>


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

</style>
