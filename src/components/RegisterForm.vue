<template>



  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="column is-4 is-offset-4">

          <form v-on:submit.prevent="signup" class="box">
            <h5 class="title is-5">Please, provide basic information:</h5>
            <div class="field">
              <label class="label">Login *</label>
              <div class="control">
                <input type="text" class="input" id="inputLogin" v-model="form.login"
                       placeholder="alice.smith@mailbox.net">
              </div>
            </div>
            <div class="field">
              <label class="label">Nickname *</label>
              <div class="control">
                <input type="text" class="input" id="inputNickname" v-model="form.nickname" placeholder="Alice">
              </div>
            </div>
            <div class="field">
              <label class="label">Password *</label>
              <div class="control">
                <input type="password" class="input" id="inputPassword" v-model="form.password" placeholder="Password">
              </div>
            </div>
            <button type="submit" class="button is-primary">Register</button>
            <button type="button" class="button"><router-link :to="{ path: `/landing` }" > Later</router-link></button>
          </form>
        </div>
      </div>

    </div>
  </section>
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
          if (err.response.status === 400) {
            alert(err.response.data);
          } else {
            alert(err);
          }
        });
      }
    }
}

</script>

<style scoped>

</style>
