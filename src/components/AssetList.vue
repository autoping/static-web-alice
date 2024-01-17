<template>
  <Menu />
  <div class="pageloader" :class="{ 'is-active': loading }"><span class="title">Один момент...</span></div>
  <section class="section is-fullheight">
    <div class="container">
      <div class="block">
        <div v-if="!assets || !assets.length">У вас пока нет ни одного предмета. </div>
        <div class="columns is-mobile" v-for="asset in assets" v-bind:key="asset.id">

          <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
              <div class="button is-primary is-inverted is-medium" aria-haspopup="true" :aria-controls="'dropdown-menu' + asset.id">
                <span class="icon ">
                  <i class="fas fa-ellipsis-vertical" aria-hidden="true"></i>
                </span>
              </div>
            </div>
            <div class="dropdown-menu" :id="'dropdown-menu'+asset.id" role="menu">
              <div class="dropdown-content">
                <a class="dropdown-item" @click="navigateToAsset(asset.id)">
                  Изменить
                </a>
                <a class="dropdown-item" @click="deleteAsset(asset.id)">
                  Удалить
                </a>
              </div>
            </div>
          </div>
          <div @click="navigateToAsset(asset.id)" class="column">{{ asset.name }}</div>
        </div>
      </div>

      <div class="block">
        <button class="button is-primary is-right" :disabled="assets.length >= 5" @click="navigateToAssetForm()">
          <span class="icon">
            <i class="fas fa-thin fa-plus"></i>
          </span>
          <span>Добавить</span>
        </button>
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
      assets: [],
      loading: true
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
          this.loading = false;
        })
        .catch((err) => {
          alert(err);
          this.loading = false;
        });
    },

    navigateToAssetForm() {
      this.$router.push({ name: "New Asset" });
    },

    navigateToAsset(assetId) {
      this.$router.push({ name: "Asset", query: { assetId: assetId } });
    },

    deleteAsset(assetId) {
      this.errMsg = "";
      axios.delete(apiUrl + '/assets/' + assetId)
        .then((res) => {
          console.log(res)
          this.assets = this.assets.filter(e => {
            return e.id != assetId;
          })
        })
        .catch((err) => {
          if (err.response.status === 400) {
            this.errMsg = err.response.data;
          } else {
            alert(err);
          }
        });
    }
  }
}
</script>
