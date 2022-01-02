<template>
  <form class="form-signin">

    <div class="form-label-group">
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
      <label for="inputEmail">Email address</label>
    </div>

    <div class="form-label-group">
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
      <label for="inputPassword">Password</label>
    </div>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted text-center">© 2021</p>
  </form>

</template>

<script>
export default {
  name: 'RegisterForm',
  props: {
    msg: String
  },
  data() {
    return {

    }
  },
  methods: {

  }

}
// let m = [{text:"hi there is someone touch"}, {text:"ok, thanks"}];

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



body {
  height: 100%;
}

.h-100 {
  height: 100% !important;
}

.form-signin{

  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: 0 auto;
}
</style>
