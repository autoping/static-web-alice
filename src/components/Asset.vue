<template>
  <Menu/>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="box">
          <div>
            <span>Asset: {{ asset?.id }}</span>
            <button @click="navigateToCardForm()">Создать новый Card</button>

            <ul>
              <li v-for="card in cards" v-bind:key="card.id">
                {{ card.description }}
                <button @click="navigateToCard(card.id)">View</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Menu from "@/components/Menu";

const apiUrl = "https://v9cbonidud.execute-api.eu-central-1.amazonaws.com/dev";

export default {
  components:{
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
      axios.get(apiUrl + "/cards")
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
