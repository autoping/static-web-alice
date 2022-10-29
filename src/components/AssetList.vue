<template>
  <Menu/>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="box">
          <div class="block">
            <button class="button is-primary" :disabled="assets.length>=5" @click="navigateToAssetForm()">Создать Предмет</button>
          </div>
          <div class="block">
            <div class="columns is-mobile" v-for="asset in assets" v-bind:key="asset.id">
              <div class="column">{{ asset.name }}</div>
              <div class="column">
                <button class="button" @click="navigateToAsset(asset.id)">Посмотреть</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>

import axios from 'axios';
import Menu from './Menu.vue'

const apiUrl = process.env.VUE_APP_API_BASE_URL;

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
