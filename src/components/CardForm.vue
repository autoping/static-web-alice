<template>
  <Menu/>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="box">
          <h5 class="title is-5">Новый Код</h5>
          <form v-on:submit.prevent="create">
            <div class="field">
              <label class="label" for="inputDescription">Описание</label>
              <div class="control">
                <input type="text" class="input" id="inputDescription" v-model="form.description"
                       placeholder="Новый QR">
              </div>
            </div>

            <div v-if="errMsg" class="notification is-danger is-light">
              {{ errMsg }}
            </div>
            <button type="submit" class="button is-primary">Создать</button>
            <button type="button" @click="navigateBackToAsset()" class="button">
              Назад
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

</template>


<script>
import Menu from './Menu.vue'
import axios from 'axios';

// const apiUrl = "https://v9cbonidud.execute-api.eu-central-1.amazonaws.com/dev";

const apiUrl = process.env.VUE_APP_API_BASE_URL;

export default {
  components: {
    Menu
  },

  name: 'CardForm',

  data() {
    return {
      errMsg: "",
      form: {
        assetId: "",
        description: ""
      }
    }
  },

  mounted() {
    this.init();
  },

  methods: {

    init() {
      this.form.assetId = this.$route.query.assetId;
    },

    create() {
      this.errMsg = "";
      axios.post(apiUrl + '/cards', this.form)
          .then((res) => {
            this.$router.push({name: "Card", query: {cardId: res.data.id}});
          })
          .catch((err) => {
            if (err.response.status === 400) {
              this.errMsg  = err.response.data;
            } else {
              alert(err);
            }
          });
    },

    navigateBackToAsset() {
      this.$router.push({name: "Asset", query: {assetId: this.form.assetId }});
    }
  }
}

</script>
