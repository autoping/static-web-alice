<template>
  <Menu/>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="box">
          <div class="block">
            <h1 class="title is-1">{{ user.nickname }}</h1>
          </div>
          <div class="block">
            <h7 class="title is-7">Имя: {{ user.nickname }}</h7>
          </div>
          <div class="block">
            <h7 class="title is-7">Месенджер: Телеграм</h7>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Menu from './Menu.vue'

export default {
  name: 'UserInfo',
  components: {
    Menu
  },
  props: {
    msg: String
  },
  data() {
    return {
      user: {}
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.user = JSON.parse(localStorage.getItem("user"));
    }
  }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
