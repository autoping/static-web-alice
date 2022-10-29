<template>
  <Menu/>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="box">
          <div v-if="errMsg" class="notification is-danger is-light">
            {{ errMsg }}
          </div>
          <div class="block">
            <h5 class="title is-5"> Код {{ card.description }}</h5>
          </div>
          <div class="block">
            Распечатайте данный qr и разместите на вашем Предмете. <br>
            Другие люди смогут с его помощью написать вам сообщение. <br>
            URL: {{ url }}
          </div>
          <div v-if="url" class="block">
            <qrcode-vue :value="value" :size="size" level="H"/>
          </div>
          <button type="button" @click="navigateBackToAsset()" class="button">
            Назад
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Menu from './Menu.vue'
import axios from 'axios';

const apiUrl = process.env.VUE_APP_API_BASE_URL;
const johnWebUrl = process.env.VUE_APP_WEB_JOHN_BASE_URL;

import QrcodeVue from 'qrcode.vue'

export default {

  data() {
    return {
      card: {},
      value: "",
      size: 300,
      url: null,
      errMsg: null
    }
  },

  mounted() {
    this.init();
  },

  components: {
    QrcodeVue,
    Menu
  },

  methods: {
    init() {
      const cardId = this.$route.query.cardId;
      axios.get(apiUrl + "/cards/" + cardId)
          .then((res) => {
            this.card = res.data;
            this.url = johnWebUrl + "?cardId=" + this.card.id;
            this.value = this.url;
          })
          .catch((err) => {
            this.errMsg = err
          });
    },
    navigateBackToAsset() {
      this.$router.push({name: "Asset", query: {assetId: this.card.assetId}});
    }
  }
}

</script>
