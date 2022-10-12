<template>
  <Menu/>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="box">

          <div>
            <button @click="navigateToAssetForm()">Создать Новый Asset</button>
            <ul>
              <li v-for="asset in assets" v-bind:key="asset.id">
                {{ asset.name }}
                <button @click="navigateToAsset(asset.id)">View</button>
              </li>
            </ul>


          </div>

        </div>
      </div>
    </div>
  </section>

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
      user: {},
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
