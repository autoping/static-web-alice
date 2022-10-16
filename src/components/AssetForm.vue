<template>
  <Menu/>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="box">
          <h5 class="title is-5">New Asset</h5>
          <form v-on:submit.prevent="create">
            <div class="field">
              <label class="label" for="inputName">Name *</label>
              <div class="control">
                <input type="text" class="input" id="inputName" v-model="form.name" placeholder="Мой автомобиль">
              </div>
            </div>

            <div v-if="errMsg" class="notification is-danger is-light">
              {{ errMsg }}
            </div>
            <button type="submit" class="button is-primary">Create</button>

          </form>
        </div>
      </div>
    </div>
  </section>

</template>


<script>
import Menu from './Menu.vue'
import axios from 'axios';

const apiUrl = process.env.VUE_APP_API_BASE_URL;

export default {

  name: 'AssetForm',

  data() {
    return {
      errMsg: "",
      form: {
        name: ""
      }
    }
  },

  methods: {
    create() {
      this.errMsg="";
      axios.post(apiUrl + '/assets', this.form)
          .then(() => {
            this.$router.push({name: "Asset List"});
          })
          .catch((err) => {
            if (err.response.status === 400) {
              this.errMsg  = err.response.data;
            } else {
              alert(err);
            }
          });
    }
  },
  components: {
    Menu
  },
}

</script>
