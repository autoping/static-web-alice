<template>
  <section class="hero is-primary">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="../assets/images/logo.png" alt="PinQR">
            </a>
            <span class="navbar-burger" data-target="navbarMenuHeroA" @click="showMobileMenu = !showMobileMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu" v-bind:class="{ 'is-active': showMobileMenu }">
            <div class="navbar-end">
              <a class="navbar-item has-text-black" v-show="$route.name !== 'Asset List'">
                <router-link :to="{ path: `/asset-list` }" class="navbar-item"> Предметы</router-link>

              </a>
              <a class="navbar-item has-text-black" v-show="$route.name !== 'About'">
                <router-link :to="{ path: `/user-info` }" class="navbar-item"> Пользователь</router-link>
              </a>
              <span class="navbar-item">
                <a class="button is-primary is-outlined is-inverted is-rounded">
                  <router-link :to="{ path: `/landing` }"> Выйти</router-link>

                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <!-- <div class="hero-body">
      <div class="container">
      </div>
    </div> -->
  </section>
  <!-- <nav class="navbar" role="navigation" aria-label="main navigation">

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


        <div class="navbar-item" v-show="$route.name!=='Asset List'">
          <router-link :to="{ path: `/asset-list` }" class="navbar-item"> Предметы</router-link>

        </div>
        <div class="navbar-item" v-show="$route.name!=='About'">
          <router-link :to="{ path: `/user-info` }" class="navbar-item"> Пользователь</router-link>
        </div>

      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button ">
              <router-link :to="{ path: `/landing` }" > Выйти</router-link>

            </a>
          </div>
        </div>
      </div>
    </div>
  </nav> -->
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
<style scoped></style>
