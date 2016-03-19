<style>

</style>

<template>
    <div class="component">
        <span>Map: {{ message }}</span><button @click="updateMessage">Update Message</button>
    </div>
</template>

<script>
    module.exports = {
        data: function (){
            return {
                message: 'This is loaded from `map.vue`???'
            }
        },
        methods: {
            updateMessage: function (){
                this.message = 'Updated message'
            }
        }
    }
</script>
