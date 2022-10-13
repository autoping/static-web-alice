<template>
  <Menu/>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="box">
          <h5 class="title is-5">New Card</h5>
          <form v-on:submit.prevent="create">
            <div class="field">
              <label class="label" for="inputDescription">Description</label>
              <div class="control">
                <input type="text" class="input" id="inputDescription" v-model="form.description"
                       placeholder="Новый QR">
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
  components: {
    Menu
  },

  name: 'CardForm',

  data() {
    return {
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
      axios.post(apiUrl + '/cards', this.form)
          .then((res) => {
            console.log("Card created = " + JSON.stringify(res));
            this.$router.push({name: "Card", query: {cardId: res.data.id}});
          })
          .catch((err) => {
            alert(err);
          });
    }
  }
}

</script>
