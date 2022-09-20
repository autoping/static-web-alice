<template>

  <qrcode-vue :value="value" :size="size" level="H" />

</template>

<script>
    import axios from 'axios';
    
    const apiUrl = "https://v9cbonidud.execute-api.eu-central-1.amazonaws.com/dev";

    import QrcodeVue from 'qrcode.vue'

    export default {

        data() {
            return {
                card: null,
                value: "",
                size: 300,
            }
        },

        mounted() {
            this.init();
        },

        components: {
            QrcodeVue,
        },

        methods: {
            init() {
                const cardId = this.$route.query.cardId;
                axios.get(apiUrl + "/cards/" + cardId)
                    .then((res) => {
                        this.card = res.data;
                        this.value = "http://autoping-static-web-john.s3-website.eu-central-1.amazonaws.com?cardId=" + this.card.id;
                    })
                    .catch((err) => {
                        alert(err);
                    });
            }    
        }
    }

</script>
