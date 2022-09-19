<template>

  <main class="container-fluid overflow-scroll">
    <h1>New Card</h1>
    <form v-on:submit.prevent="create">
      <div class="form-group">
        <label for="inputDescription">Description</label>
        <input type="text" class="form-control" id="inputDescription" v-model="form.description" placeholder="Новый QR">
      </div>
      <button type="submit" class="btn btn-primary">Create</button>
    </form>
  </main>

</template>



<script>
  import axios from 'axios';
  
  const apiUrl = "https://v9cbonidud.execute-api.eu-central-1.amazonaws.com/dev";

  export default {

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
        .then(() => {
          alert("Created !");
        })
        .catch((err) => {
          alert(err);
        });
      }
    }
}

</script>
