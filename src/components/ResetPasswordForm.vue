<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="column is-4 is-offset-4">
          <form v-on:submit.prevent="reset" class="box">
            <h5 class="title is-5">Сбрасывание пароля:</h5>
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
            <button type="submit" class="button is-primary">Сбросить</button>
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
        password: "",
        password_repeat: "",
        token: ""
      }
    }
  },

  created() {


  },

  methods: {
    reset() {

      let uri = window.location.href.split('?');

      if (uri.length == 2) {
        let vars = uri[1].split('&');
        let getVars = {};
        let tmp = '';
        vars.forEach(function (v) {
          tmp = v.split('=');
          if (tmp.length == 2)
            getVars[tmp[0]] = tmp[1];
        });
        this.form.token = getVars['token'];
      }

      this.errMsg = "";
      axios.post(apiUrl + '/recover-password', this.form)
        .then((res) => {
          if(res){
            console.log(res)
          }
          // localStorage.setItem('accessToken', res.data.accessToken);
          return axios.get(apiUrl + '/login');
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
