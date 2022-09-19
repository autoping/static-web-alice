<template>

    <span>Asset: {{asset?.id}}</span>

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

            init() {
                this.asset = {
                    id: this.$route.query.assetId
                };
            }
        }
    }
</script>
