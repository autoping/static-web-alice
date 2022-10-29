<template>
  <Menu/>
  <section class="hero is-fullheight">

    <div class="hero-body">
      <div class="container">
        <div class="box">
          <h3 class="title is-3">Мы почти закончили...</h3>
          <!--          <h6 class="title is-7">To complete registration, please link your created user with Telegramm Bot. <br>-->
          <!--            For this just click on-->
          <!--            <a v-if="user" v-bind:href="registrationUrl" target="_blank">this link</a>-->
          <!--            <br> and choose the command Start in telegramm application-->
          <!--          </h6>-->
          <!--          <h6 class="title is-6">-->
          <!--            Or you can skip this step and go to the <a>-->
          <!--            <router-link :to="{ path: `/asset-list` }"> Asset list</router-link>-->
          <!--          </a> page-->
          <!--          </h6>-->


          <h6 v-if="!user.chatId" class="title is-6">Что бы закончить регистрацию, пожалуйста, свяжите пользователя с
            телеграмм ботом.<br>
            Для этого перейдите
            <a v-if="user" v-bind:href="registrationUrl" target="_blank">по этой ссылке </a>
            <br> и выполните команду Start в приложении телеграмм
            <br>Или можно выполнить этот шаг позже и
          </h6>
          <h6 class="title is-6">
            перейти к разделу <a>
            <router-link :to="{ path: `/asset-list` }"> Предметы</router-link>
          </a>
          </h6>


        </div>

      </div>
    </div>

  </section>

</template>

<script>

import axios from 'axios';
import Menu from "@/components/Menu";


const apiUrl = process.env.VUE_APP_API_BASE_URL;

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
