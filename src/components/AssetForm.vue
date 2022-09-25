<template>

  <main class="container-fluid overflow-scroll">
    <h1>New Asset</h1>
    <form v-on:submit.prevent="create">
      <div class="form-group">
        <label for="inputName">Name *</label>
        <input type="text" class="form-control" id="inputName" v-model="form.name" placeholder="Мой автомобиль">
      </div>
      <button type="submit" class="btn btn-primary">Create</button>
    </form>
  </main>

</template>



<script>
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
    }
}

</script>
