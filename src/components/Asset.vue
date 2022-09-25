<template>

<div>
    <span>Asset: {{asset?.id}}</span>
    <button @click="navigateToCardForm()">Создать новый Card</button>
</div>

</template>

<script>
    export default {
        data() {
            return {
                asset: null
            }
        },

        mounted() {
            this.init();
        },

        methods: {

            navigateToCardForm() {
                this.$router.push({name: "New Card", query: {assetId: this.asset.id}});
            },

            init() {
                this.asset = {
                    id: this.$route.query.assetId
                };
            }
        }
    }
</script>
