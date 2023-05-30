<template>
  <Menu />
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="box">
          <div v-if="errMsg" class="notification is-danger is-light">
            {{ errMsg }}
          </div>
          <div class="block">
            <div class="field">
              <label class="label" for="cardText">Добавьте текст который должен быть на QR. (Максимум 25 символов)</label>
              <div class="control">
                <input type="text" class="input" maxlength="25" id="cardText" v-model="cardText">
              </div>
            </div>
            <div class="field">
              <label class="label" for="cardComment">Добавьте комментарий который должен быть на QR. (Максимум 35
                символов)</label>
              <div class="control">
                <input type="text" class="input" maxlength="35" id="cardComment" v-model="cardComment">
              </div>
            </div>
            <!-- <label class="label" for="stickerType">Вид стикера</label>
            <div class="control" id="stickerType">
              <label class="radio">
                <input type="radio" v-model = "horizontalMode" v-bind:value="false">
                Квадратный
              </label>
              <label class="radio">
                <input type="radio" v-model = "horizontalMode" v-bind:value="true">
                Вытянутый
              </label>
            </div> -->
          </div>

          <div class="card ">
            <div class="card-content">
              <div v-if="!horizontalMode" class="content">
                <div ref="capture" class="block">
                  <div class="width300 is-size-4 has-text-weight-bold has-text-centered">{{ cardText }}</div>
                  <div class="width300 is-size-6 has-text-weight-semibold has-text-centered">{{ cardComment }}</div>
                  <div ref="capture">
                    <qrcode-vue v-if="url" :value="value" :size="size" level="L" render-as="svg" />
                  </div>
                  <div class="width300 is-size-4 has-text-weight-bold has-text-centered backward">{{ cardText }}</div>
                  <div class="width300 is-size-6 has-text-weight-semibold has-text-centered backward">{{ cardComment }}</div>
                </div>
              </div>
              <div v-if="horizontalMode" class="content">
                <div ref="capture" class="columns is-mobile">
                  <div ref="capture" class="column is-1 width300" >
                    <qrcode-vue v-if="url" :value="value" :size="150" level="L" render-as="svg" />
                  </div>
                  <div class="column">
                    <div class="width300">{{ cardText }}</div>
                    <div class="width300">{{ cardComment }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="block">
            <button class="button is-primary" @click="saveToFile()">
              Скачать
            </button>
            <button type="button" @click="navigateBackToAsset()" class="button">
              Назад
            </button>
          </div>
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
      cardText: "Cканируйте этот QR!",
      cardComment: "Что бы оставить сообщение владельцу",
      value: "",
      size: 300,
      url: null,
      errMsg: null,
      horizontalMode: false
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
      this.$router.push({ name: "Asset", query: { assetId: this.card.assetId } });
    },

    saveToFile() {
      // let node = document.getElementById("qrcode");
      const capture = this.$refs.capture;

      //here is a workarond for safari https://github.com/tsayen/dom-to-image/issues/343 or htmltocanvas should be used
      domtoimage
        .toBlob(capture, { height: 1000, width: 1000 })
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

<style scoped>
.width300 {
  width: 300px;
}
.width350 {
  width: 350px;
}

.backward {
  transform: scale(-1, 1);
  -moz-transform: scale(-1, 1);
  -webkit-transform: scale(-1, 1);
  -o-transform: scale(-1, 1);
  -ms-transform: scale(-1, 1);
  transform: scale(-1, 1);
}
</style>
