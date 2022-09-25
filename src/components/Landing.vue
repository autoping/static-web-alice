<template>

<div>
  <h1>Landing page</h1>
  <router-link :to="{ path: `/register` }"> Sign up</router-link>
  <router-link :to="{ path: `/login` }"> Sign in</router-link>

</div>

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
