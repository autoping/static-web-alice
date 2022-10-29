<template>


  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="column is-4 is-offset-4">

          <form v-on:submit.prevent="signup" class="box">
            <h5 class="title is-5">Пожалуйста, заполните несколько полей:</h5>
            <div class="field">
              <label class="label">Логин *</label>
              <div class="control">
                <input type="text" class="input" id="inputLogin" v-model="form.login"
                       placeholder="alice.smith@mailbox.net">
              </div>
            </div>
            <div class="field">
              <label class="label">Имя *</label>
              <div class="control">
                <input type="text" class="input" id="inputNickname" v-model="form.nickname" placeholder="Alice">
              </div>
            </div>
            <div class="field">
              <label class="label">Пароль *</label>
              <div class="control">
                <input type="password" class="input" id="inputPassword" v-model="form.password" placeholder="Password">
              </div>
            </div>
            <div v-if="errMsg" class="notification is-danger is-light">
              {{ errMsg }}
            </div>
            <button type="submit" class="button is-primary">Создать</button>
            <button type="button" class="button">
              <router-link :to="{ path: `/landing` }"> Позже</router-link>
            </button>


          </form>

        </div>
      </div>

    </div>
  </section>
</template>


<script>
import axios from 'axios';

const apiUrl = process.env.VUE_APP_API_BASE_URL;
// const apiUrl = "https://v9cbonidud.execute-api.eu-central-1.amazonaws.com/dev";

export default {

  name: 'RegisterForm',


  data() {
    return {
      errMsg: "",
      form: {
        login: "",
        nickname: "",
        password: ""
      }
    }
  },

  methods: {
    signup() {
      this.errMsg="";
      axios.post(apiUrl + '/users', this.form)
          .then(() => {
            this.$router.push('Login');
          })
          .catch((err) => {
            if (err.response.status === 400) {
              this.errMsg  = err.response.data;
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
