<template>
  <Menu/>
  <section class="hero is-fullheight">

    <div class="hero-body">
      <div class="container">
        <div class="box">
          <h3 class="title is-3">We're almost done...</h3>
          <h6 class="title is-7">To complete registration, please link your created user with Telegramm Bot. <br>
            For this just click on
            <a v-if="user" v-bind:href="registrationUrl">this link</a>
            <br> and choose the command Start in telegramm application
          </h6>

          <h6 class="title is-7">
            Or you can skip this step and go to the <a>
            <router-link :to="{ path: `/asset-list` }"> Asset list</router-link>
          </a> page
          </h6>


        </div>

      </div>
    </div>

  </section>

</template>

<script>

import axios from 'axios';
import Menu from "@/components/Menu";


const apiUrl = "https://v9cbonidud.execute-api.eu-central-1.amazonaws.com/dev";

export default {
  components: {
    Menu
  },

  data() {
    return {
      registrationUrl: null,
      user: {
        chatId: "some"
      }
    }
  },

  mounted() {
    this.init();
  },

  methods: {

    init() {
      axios.get(apiUrl + "/users/me")
          .then((res) => {
            this.user = res.data;
            this.registrationUrl = "https://t.me/aping_tg_bot?start=" + res.data.id;
          });
    }

  }
}
</script>
