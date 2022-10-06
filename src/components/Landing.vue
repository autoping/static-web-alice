<template>
  <section class="hero">
    <div class="hero-body">
      <p class="title">
        Landing page
      </p>
      <p class="subtitle">
        <router-link :to="{ path: `/register` }"> Sign up</router-link>
        <router-link :to="{ path: `/login` }"> Sign in</router-link>
      </p>
    </div>
  </section>


</template>

<script>
    export default {
        data() {
            return {

            }
        },

        mounted() {

        },

        methods: {

        }
    }
</script>
