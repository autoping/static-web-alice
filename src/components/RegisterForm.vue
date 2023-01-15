<template>


  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="column is-4 is-offset-4">

          <form v-on:submit.prevent="signup" class="box">
            <h5 class="title is-5">Пожалуйста, заполните несколько полей:</h5>
            <div class="field">
              <label class="label">Имя *</label>
              <div class="control">
                <input type="text" class="input" id="inputNickname" v-model="form.nickname" placeholder="Alice">
              </div>
              <p class="help">Это имя будет видно при отправке сообщения</p>
            </div>

            <div class="field">
              <label class="label">Почта *</label>
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
            <div class="field">
              <label class="label">Пароль еще раз *</label>
              <div class="control">
                <input type="password" class="input" id="inputPassword" v-model="form.password_repeat"
                  placeholder="Password">
              </div>
            </div>
            <div v-if="errMsg" class="notification is-danger is-light">
              {{ errMsg }}
            </div>
            <button type="submit" class="button is-primary">Зарегистрироваться</button>
            <button type="button" class="button is-ghost">
              <router-link :to="{ path: `/login` }"> Уже есть аккаунт</router-link>
            </button>
            <!-- <button type="button" class="button">
              <router-link :to="{ path: `/landing` }"> Позже</router-link>
            </button> -->


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

  name: 'RegisterForm',


  data() {
    return {
      errMsg: "",
      form: {
        login: "",
        nickname: "",
        password: "",
        password_repeat: ""
      }
    }
  },

  methods: {
    signup() {
      this.errMsg = "";
      if (this.form.password != this.form.password_repeat) {
        this.errMsg = "Пароль должен совпадать!";
        return;
      }
      axios.post(apiUrl + '/users', this.form)
        .then(() => {
          axios.post(apiUrl + '/login', { login: this.form.login, password: this.form.password })
            .then((res) => {
              localStorage.setItem('accessToken', res.data.accessToken);
              return axios.get(apiUrl + '/users/me');
            })
            .then(() => {

              this.$router.push({ name: "RegisterBot" });

            })
            .catch((err) => {
              if (err.response.status === 501) {
                this.errMsg = "Логин или пароль не верные, попробуйте еще раз!";
              } else {
                alert(err);
              }
            });
        })
        .catch((err) => {
          if (err.response.status === 400) {
            this.errMsg = err.response.data;
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
