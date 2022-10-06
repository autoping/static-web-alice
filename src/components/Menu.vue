<template>


  <router-link :to="{ path: `/asset-list` }"> Assets list</router-link>
  <router-link :to="{ path: `/user-info` }"> User info</router-link>

</template>

<script>
export default {
  name: 'menu',
  props: {
    msg: String
  },
  data() {
    return {}
  },
  methods: {}

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
