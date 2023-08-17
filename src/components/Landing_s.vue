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
            <span class="navbar-burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item ">
                Преимущества
              </a>
              <a class="navbar-item ">
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
            <p class="title is-large">
              PinQR - Будь на связи!
            </p>
            <br>
            <p class="subtitle">
              Удобный сервис доставки сообщений без <br>необходимости публикации личных данных
            </p>
            <br>
            <button class="button is-black is-large">Создать аккаунт</button>
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
        <div class="columns">
          <div class="column is-two-thirds">
            <img src="../assets/images/web/safe.png" alt="PinQR">
          </div>
          <div class="column">
            <p class="title is-large">
              Безопасно
            </p>
            <br>
            <p class="subtitle">
              Скройте свой номер <br>
              телефона и оградите <br>
              себя от назойливой<br>
              рекламы и мошенников.
            </p>
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
            <p class="title is-large">
              Быстро
            </p>
            <br>
            <p class="subtitle">
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
        <div class="columns">
          <div class="column is-two-thirds">
            <img src="../assets/images/web/simple.png" alt="PinQR">
          </div>
          <div class="column">
            <p class="title is-large">
              Просто
            </p>
            <br>
            <p class="subtitle">
              У вас есть домашний <br>
              питомец? Ваши контакты <br>
              на ошейнике помогут<br>
              найти ему путь домой.
            </p>
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
            <p class="title is-large">
              Доступно
            </p>
            <br>
            <p class="subtitle">
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
        <div class="columns">
          <div class="column is-two-thirds">
            <img src="../assets/images/web/announcement.png" alt="PinQR">
          </div>
          <div class="column">
            <p class="title is-large">
              Актуально
            </p>
            <br>
            <p class="subtitle">
              Вы хотите сделать <br>
              объявление в подъезде, <br>
              но без телефона для<br>
              обратной связи?
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section class="hero is-primary is-medium">
    <br>
    <div class="hero-head">
      <div class="container has-text-centered">
        <p class="title is-large">C PinQR это легко</p>
      </div>
    </div>
    <div class="hero-body">
      <div class="container">
      </div>
    </div>
  </section>

  <section class="hero is-dark is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-half">
            <p class="title is-size-5">2023 PinQR - сервис доставки сообщений <br> без необходимости публикации личных
              данных</p>
          </div>
          <div class="column ">
            <p class="title is-size-5">Компания</p>
            <p class="subtitle is-size-6">О нас<br>
              Приватность<br>
              Для СМИ<br>
              Контакты
            </p>
          </div>
          <div class="column">
            <p class="title is-size-5">Соцсети</p>
            <p class="subtitle is-size-6">Телеграмм<br>
              Вконтакте</p>
          </div>
          <div class="column">
            <p class="title is-size-5">Помощь</p>
            <p class="subtitle is-size-6">Служба поддержки<br>
              Сообщество</p>
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
