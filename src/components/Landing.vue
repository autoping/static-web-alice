<template>

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <!--        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">-->
      </div>
      <a class="navbar-item">
        <router-link :to="{ path: `/register` }"> Новый пользователь</router-link>
      </a>

      <a class="navbar-item">
        <router-link :to="{ path: `/login` }"> Войти</router-link>
      </a>
    </div>

    <div class="navbar-menu">

      <div class="navbar-end">


      </div>
    </div>
  </nav>


  <section class="hero is-white is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns  is-vcentered reverse-columns">
          <div class="column
          is-10-mobile
          is-10-tablet
          is-5-desktop
          is-5-widescreen
          is-5-fullhd " data-aos="fade-down">
        

            <h5 class="title titled is-3 mb-6">Хотите быть на связи, <br>а телефонный номер оставлять нет желания?<br></h5>
            <h1 class="title titled is-1 mb-6">
              С помощью Aping вы сможете это сделать!
            </h1>
          </div>
          <div data-aos="fade-right" class="column
          is-10-mobile
          is-10-tablet
          is-4-desktop
          is-4-widescreen
          is-4-fullhd is-offset-1-fullhd">
            <figure class="image is-square">
              <img src="../assets/undraw_Camera_re_cnp4.svg">
            </figure>
          </div>

        </div>
      </div>
    </div>
  </section>

  <section class="hero is-white is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns  is-vcentered">
          <div data-aos="fade-left" class="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-4-desktop is-offset-1-desktop
          is-4-widescreen is-offset-1-widescreen
          is-4-fullhd is-offset-1-fullhd">
            <figure class="image is-square">
              <img src="../assets/undraw_Camera_re_cnp4.svg">
            </figure>
          </div>
          <div data-aos="fade-down" class="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-5-desktop is-offset-1-desktop
          is-5-widescreen is-offset-1-widescreen
          is-5-fullhd is-offset-1-fullhd">
            <h1 class="titled title is-1 mb-6">
              Всего несколько шагов:
            </h1>
            <ol>
              <li>Создайте пользователя</li>
              <li>Добавьте Предмет и назначьте Код</li>
              <li>Распечатайте Код и наклейте на ваш объект. Это может быть например автомобиль, мотоцикл или даже входная дверь.</li>
              <li>Теперь люди смогут связаться с вами, сообщение придет в телеграмм</li>
            </ol>

          </div>

        </div>
      </div>
    </div>
  </section>


</template>

<script>
export default {
  data() {
    return {}
  },

  mounted() {

  },

  methods: {}
}
</script>
