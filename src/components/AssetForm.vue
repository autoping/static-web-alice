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

const apiUrl = "https://v9cbonidud.execute-api.eu-central-1.amazonaws.com/dev";

export default {

  name: 'AssetForm',

  data() {
    return {
      form: {
        name: ""
      }
    }
  },

  methods: {
    create() {
      axios.post(apiUrl + '/assets', this.form)
          .then(() => {
            this.$router.push({name: "Asset List"});
          })
          .catch((err) => {
            alert(err);
          });
    }
  },
  components: {
    Menu
  },
}

</script>
