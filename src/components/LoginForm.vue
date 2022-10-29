<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="column is-4 is-offset-4">
          <form v-on:submit.prevent="signin" class="box">
            <h5 class="title is-5">Авторизация:</h5>
            <div class="field">
              <label class="label">Логин *</label>
              <div class="control">
                <input type="email" class="input" id="inputLogin" v-model="form.login"
                       placeholder="alice.smith@mailbox.net">
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
            <button type="submit" class="button is-primary">Войти</button>
          </form>
        </div>
      </div>

    </div>
  </section>

</template>


<script>
import axios from 'axios';

const apiUrl = process.env.VUE_APP_API_BASE_URL;

export default {

  name: 'LoginForm',


  data() {
    return {
      errMsg: "",
      form: {
        login: "",
        password: ""
      }
    }
  },

  methods: {
    signin() {
      this.errMsg="";
      axios.post(apiUrl + '/login', this.form)
          .then((res) => {
            localStorage.setItem('accessToken', res.data.accessToken);
            return axios.get(apiUrl+'/users/me');
          })
          .then((res) =>{
            localStorage.setItem('user', JSON.stringify(res.data));
            if(res.data.chatId) {
              this.$router.push({name: "Asset List"});
            }else {
              this.$router.push({name: "RegisterBot"});
            }
          })
          .catch((err) => {
            if (err.response.status === 501) {
              this.errMsg = "Логин или пароль не верные, попробуйте еще раз!";
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
