<template>

    <ul>
        <li v-for="asset in assets" v-bind:key="asset.id">
            {{ asset.name }} <button @click="navigateToAsset(asset.id)">View</button>
        </li>
    </ul>

</template>

<script>

    import axios from 'axios';

    const apiUrl = "https://v9cbonidud.execute-api.eu-central-1.amazonaws.com/dev";

    export default {
        data() {
            return {
                assets: []
            }
        },

        mounted() {
            this.init();
        },

        methods: {

            init() {
                axios.get(apiUrl + "/assets")
                    .then((res) => {
                        this.assets = res.data;
                    })
                    .catch((err) => {
                        alert(err);
                    });
            },

            navigateToAsset(assetId) {
                console.log(assetId);
                this.$router.push({name: "Asset", query: {assetId: assetId}});
            }
        }
    }
</script>
