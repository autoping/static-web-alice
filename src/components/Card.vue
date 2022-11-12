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
            Другие люди смогут с его помощью написать вам сообщение.
          </div>
          <div class="block">
            URL: {{ url }}
          </div>
          <div ref="capture" class="block">
            <qrcode-vue :value="value" :size="size" level="H"/>
            <!--            v-if="url"-->
          </div>
          <button class="button is-primary" @click="saveToFile()">
            Скачать QR
          </button>
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
import domtoimage from "dom-to-image-more";
import fsaver from 'file-saver';

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
    },
    saveToFile() {
      // let node = document.getElementById("qrcode");
      const capture = this.$refs.capture;

      //here is a workarond for safari https://github.com/tsayen/dom-to-image/issues/343 or htmltocanvas should be used
      domtoimage
          .toBlob(capture)
          .then(() => {
            domtoimage.toBlob(capture)
                .then((blob) => {
                  fsaver.saveAs(blob, "qr-code.png");
                })
          });
    }
  }
}

</script>
