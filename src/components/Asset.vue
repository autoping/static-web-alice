<template>
  <Menu/>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="box">
          <div class="block">
            <h5 class="title is-5">Asset: {{ asset?.id }}</h5>
            <button class="button is-primary" @click="navigateToCardForm()">Создать новый Card</button>
          </div>
          <div class="block">
            <div class="columns  is-mobile" v-for="card in cards" v-bind:key="card.id">
              <div class="column">{{ card.description }}</div>
              <div class="column">
                <button class="button" @click="navigateToCard(card.id)">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
      cards: []
    }
  },

  mounted() {
    this.init();
  },

  methods: {

    navigateToCardForm() {
      this.$router.push({name: "New Card", query: {assetId: this.asset.id}});
    },

    navigateToCard(id) {
      this.$router.push({name: "Card", query: {cardId: id}});
    },

    init() {
      this.asset = {
        id: this.$route.query.assetId
      };
      axios.get(apiUrl + "/assets/"+this.$route.query.assetId+"/cards")
          .then((res) => {
            this.cards = res.data;
          })
          .catch((err) => {
            alert(err);
          });
    }
  }
}
</script>
