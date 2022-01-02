<template>


  <h1>User Alice</h1>
  <div class="container">
    <div class="row" >
      Name: Alice
    </div>
    <div class="row">
      E-Mail: alice@mail.df
    </div>
    <div class="row">
      Phone: +932423434324
    </div>
    <div class="row">
      Messengers: Telegram
    </div>

  </div>

</template>

<script>
export default {
  name: 'UserInfo',
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


body {
  height: 100%;
}

.h-100 {
  height: 100% !important;
}

main {
  min-height: 30%;
}
</style>
