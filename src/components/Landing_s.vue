<template>
  <section class="hero is-primary is-medium">
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
              <a class="navbar-item has-text-black" @click="scrollMeTo('advantages')">
                Преимущества
              </a>
              <a class="navbar-item has-text-black" @click="scrollMeTo('howToDocs')">
                Инструкции
              </a>
              <span class="navbar-item">
                <a class="button is-primary is-outlined is-inverted is-rounded">
                  <router-link :to="{ path: `/login` }"> Войти</router-link>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-two-thirds">
            <p class="title is-size-1">
              PinQR - Будь на связи!
            </p>
            <br>
            <p class="subtitle has-text-black">
              Удобный сервис доставки сообщений без <br>необходимости публикации личных данных
            </p>
            <br>
            <a class="button is-black is-large">
              <router-link :to="{ path: `/register` }"> Создать аккаунт</router-link>
            </a>
          </div>
          <div class="column">
            <img src="../assets/images/web/main.png" alt="PinQR">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns  reverse-row-order">
          <div class="column">
            <p class="title is-large has-text-primary">
              Безопасно
            </p>
            <p class="subtitle has-text-black">
              Скройте свой номер <br>
              телефона и оградите <br>
              себя от назойливой<br>
              рекламы и мошенников.
            </p>
          </div>
          <div class="column is-two-thirds">
            <img src="../assets/images/web/safe.png" alt="PinQR">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="hero is-medium is-light">
    <div class="hero-body" ref="advantages">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p class="title is-large has-text-primary">
              Быстро
            </p>
            <p class="subtitle has-text-black">
              Беспокоитесь, что <br>
              машина может помешать <br>
              на парковке? Добавьте<br>
              QR на лобовое стекло.
            </p>
          </div>
          <div class="column is-two-thirds">
            <img src="../assets/images/web/fast.png" alt="PinQR">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns reverse-row-order">
          <div class="column">
            <p class="title is-large has-text-primary">
              Просто
            </p>
            <p class="subtitle has-text-black">
              У вас есть домашний <br>
              питомец? Ваши контакты <br>
              на ошейнике помогут<br>
              найти ему путь домой.
            </p>
          </div>
          <div class="column is-two-thirds">
            <img src="../assets/images/web/simple.png" alt="PinQR">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="hero is-medium is-light">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <p class="title is-large has-text-primary">
              Доступно
            </p>
            <p class="subtitle has-text-black">
              Хотите, чтобы с вами <br>
              связался нашедший <br>
              ваши вещи человек.
            </p>
          </div>
          <div class="column is-two-thirds">
            <img src="../assets/images/web/things.png" alt="PinQR">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns reverse-row-order">
          <div class="column">
            <p class="title is-large has-text-primary">
              Актуально
            </p>
            <p class="subtitle has-text-black">
              Вы хотите сделать <br>
              объявление в подъезде, <br>
              но без телефона для<br>
              обратной связи?
            </p>
          </div>
          <div class="column is-two-thirds">
            <img src="../assets/images/web/announcement.png" alt="PinQR">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="hero is-primary is-medium">
    <br>
    <div class="hero-head">
      <div class="container has-text-centered" ref="howToDocs">
        <p class="title is-large">C PinQR это легко</p>
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered is-mobile">
          <div class="column is-vcentered is-one-fifth">
            <img src="../assets/images/web/icons/add_acc.png" alt="add acc">
          </div>
          <div class="column is-vcentered">
            <p class="subtitle subtitle has-text-black">
              Регистрируйтесь. Это очень просто!
            </p>
          </div>
        </div>
        <div class="columns is-vcentered is-mobile">
          <div class="column is-vcentered is-one-fifth">
            <img src="../assets/images/web/icons/messendger.png" alt="add qr">
          </div>
          <div class="column">
            <p class="subtitle subtitle has-text-black">
              Подключайте удобный вам мессенджер.
            </p>
          </div>
        </div>
        <div class="columns is-vcentered is-mobile">
          <div class="column is-vcentered is-one-fifth">
            <img src="../assets/images/web/icons/add_qr.png" alt="add qr">
          </div>
          <div class="column">
            <p class="subtitle subtitle has-text-black">
              Добавляйте до 10 предметов и создавайте QR-коды для них.
            </p>
          </div>
        </div>
        <div class="columns is-vcentered is-mobile">
          <div class="column is-one-fifth">
            <img src="../assets/images/web/icons/print.png" alt="print">
          </div>
          <div class="column">
            <p class="subtitle has-text-black">
              Распечатайте QR самостоятельно или отправьте заказ в ближайшую типографию.
            </p>
          </div>
        </div>
        <div class="columns is-vcentered is-mobile">
          <div class="column is-one-fifth">
            <img src="../assets/images/web/icons/online.png" alt="print">
          </div>
          <div class="column">
            <p class="subtitle has-text-black">
              Теперь вы на связи!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="hero is-dark is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns reverse-row-order">
          <div class="column">
            <div class="columns is-mobile">
              <div class="column is-size-6">
                <p class="title is-size-6">Компания</p>
                <p class="subtitle is-size-7">О нас<br>
                  Приватность<br>
                  Для СМИ<br>
                  Контакты
                </p>
              </div>
              <div class="column">
                <p class="title is-size-6">Соцсети</p>
                <p class="subtitle is-size-7">Телеграмм<br>
                  Вконтакте</p>
              </div>
              <div class="column">
                <p class="title is-size-6">Помощь</p>
                <p class="subtitle is-size-7">Служба поддержки<br>
                  Сообщество</p>
              </div>
            </div>
          </div>
          <div class="column is-half">
            <p class="title is-size-6">2023 PinQR - сервис доставки сообщений <br> без необходимости публикации личных
              данных</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false
    }
  },

  mounted() {
    console.log('some')
  },

  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      element.scrollIntoView();

      // var top = element.offsetTop;
      // window.scrollTo(0, top);
    }
  }
}
</script>
