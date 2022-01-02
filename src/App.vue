<template>
  <RegisterForm msg=" "/>
</template>

<script>
import RegisterForm from "@/components/RegisterForm";

export default {
  name: 'App',
  components: {
    RegisterForm
  }
}
</script>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
