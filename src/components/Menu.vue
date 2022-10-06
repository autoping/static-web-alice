<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">

    <div class="navbar-brand">


      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
         @click="showMobileMenu = !showMobileMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" v-bind:class="{ 'is-active': showMobileMenu }">
      <div class="navbar-start">


        <div class="navbar-item">
          <router-link :to="{ path: `/asset-list` }" class="navbar-item"> Assets list</router-link>

        </div>
        <div class="navbar-item">
          <router-link :to="{ path: `/user-info` }" class="navbar-item"> User info</router-link>
        </div>

      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <router-link :to="{ path: `/landing` }" > Logout</router-link>

            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>


</template>

<script>
export default {
  name: 'menu',
  props: {
    msg: String
  },
  data() {
    return {
      showMobileMenu: false
    }
  },
  methods: {}

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
