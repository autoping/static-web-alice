<template>
  <Menu />
  <div class="pageloader" :class="{ 'is-active': loading }"><span class="title">Один момент...</span></div>
  <section class="section is-fullheight">
      <div class="container">
          <div v-if="errMsg" class="notification is-danger is-light">
            {{ errMsg }}
          </div>
          <div class="block"> 
            <h5 class="title is-5">Предмет: {{ asset?.name }}</h5>
          </div>
          <div class="block">
            <div v-if="!cards || !cards.length">У вас пока не назначены QR Коды для предмета. </div>

            <div class="columns is-mobile" v-for="card in cards" v-bind:key="card.id">

              <div class="dropdown is-hoverable">
                <div class="dropdown-trigger">
                  <div class="button is-primary is-inverted is-medium" aria-haspopup="true" :aria-controls="'dropdown-menu' + card.id">
                    <span class="icon ">
                      <i class="fas fa-ellipsis-vertical" aria-hidden="true"></i>
                    </span>
                  </div>
                </div>
                <div class="dropdown-menu" :id="'dropdown-menu'+card.id" role="menu">
                  <div class="dropdown-content">
                    <a class="dropdown-item" @click="navigateToCard(card.id)">
                      Изменить
                    </a>
                    <a class="dropdown-item" @click="deleteCard(card.id)">
                      Удалить
                    </a>
                  </div>
                </div>
              </div>
              <div @click="navigateToCard(card.id)" class="column">{{ card.description }}</div>
            </div>
          </div>

          <div class="block">
            <button class="button is-primary is-right" @click="navigateToCardForm()" :disabled="cards.length >= 5">
              <span class="icon">
                <i class="fas fa-thin fa-plus"></i>
              </span>
              <span>Добавить QR</span>
            </button>
          </div>
      </div>
    <!-- </div> -->

  </section>
</template>

<script>
import axios from "axios";
import Menu from "@/components/Menu";

const apiUrl = process.env.VUE_APP_API_BASE_URL;

export default {
  components: {
    Menu
  },
  data() {
    return {
      asset: null,
      cards: [],
      errMsg: null,
      loading: true
    }
  },

  mounted() {
    this.init();
  },

  methods: {

    navigateToCardForm() {
      this.$router.push({ name: "New Card", query: { assetId: this.asset.id } });
    },

    navigateToCard(id) {
      this.$router.push({ name: "Card", query: { cardId: id } });
    },

    init() {
      this.asset = {
        id: this.$route.query.assetId
      };
      axios.get(apiUrl + "/assets/" + this.$route.query.assetId)
        .then((res) => {
          this.asset = res.data;
        });
      axios.get(apiUrl + "/assets/" + this.$route.query.assetId + "/cards?ts="+new Date().getTime()
      //?ts="+new Date().getTime()
      , {
        headers: {
         'Cache-Control': 'max-age=0'
        }
      }
      )
        .then((res) => {
          this.cards = res.data;
          this.loading=false;
        })
        .catch((err) => {
          this.errMsg = err.response.data;
          this.loading=false;
        });
    },
    deleteCard(cardId) {
      this.errMsg = "";
      axios.delete(apiUrl + '/cards/' + cardId)
        .then((res) => {
          console.log(res)
          this.cards = this.cards.filter(e => {
            return e.id != cardId;
          })
        })
        .catch((err) => {
          if (err.response.status === 400) {
            this.errMsg = err.response.data;
          } else {
            alert(err);
          }
        });
    }
  }
}
</script>
