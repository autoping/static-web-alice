<template>

    <ul>
        <li v-for="asset in assets" v-bind:key="asset.id">
            {{ asset.name }} <button @click="navigateToAsset(asset.id)">View</button>
        </li>
    </ul>

</template>

<script>
    export default {
        data() {
            return {
                assets: []
            }
        },

        mounted() {
            this.assets = [
                {
                    id: "some-asset-id-001",
                    userId: "user-001",
                    name: "Asset #1"
                },
                {
                    id: "some-asset-id-002",
                    userId: "user-001",
                    name: "Asset #2"
                },
                {
                    id: "some-asset-id-003",
                    userId: "user-001",
                    name: "Asset #3"
                },
                {
                    id: "some-asset-id-004",
                    userId: "user-001",
                    name: "Asset #4"
                }
            ]
        },

        methods: {

            navigateToAsset(assetId) {
                console.log(assetId);
                this.$router.push({name: "Asset", query: {assetId: assetId}});
            }
        }
    }
</script>
