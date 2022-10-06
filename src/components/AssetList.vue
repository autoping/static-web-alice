<template>

  <Menu/>
  <div>
    <button @click="navigateToAssetForm()">Создать Новый Asset</button>
    <ul>
      <li v-for="asset in assets" v-bind:key="asset.id">
        {{ asset.name }}
        <button @click="navigateToAsset(asset.id)">View</button>
      </li>
    </ul>


    <a v-if="user" v-bind:href="registrationUrl">Register Bot</a>

  </div>

</template>

<script>

import axios from 'axios';
import Menu from './Menu.vue'

const apiUrl = "https://v9cbonidud.execute-api.eu-central-1.amazonaws.com/dev";

export default {

  components: {
    Menu
  },

  data() {
    return {
      registrationUrl: null,
      user: null,
      assets: []
    }
  },

  mounted() {
    this.init();
  },

  methods: {

    init() {
      axios.get(apiUrl + "/assets")
          .then((res) => {
            this.assets = res.data;
          })
          .catch((err) => {
            alert(err);
          });
      axios.get(apiUrl + "/users/me")
          .then((res) => {
            this.user = res.data;
            this.registrationUrl = "https://t.me/aping_tg_bot?start=" + res.data.id;
          });
    },

    navigateToAssetForm() {
      this.$router.push({name: "New Asset"});
    },

    navigateToAsset(assetId) {
      console.log(assetId);
      this.$router.push({name: "Asset", query: {assetId: assetId}});
    }
  }
}
</script>
