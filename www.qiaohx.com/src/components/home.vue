<template lang="html">
    <div class="home">
        <!-- <PolygonBox></PolygonBox> -->
        <p>{{ msg }}</p>
    </div>
</template>

<script>
import PolygonBox from './PolygonBox'

export default {
    name: 'Home',
    components: {
        PolygonBox
    },
    data: function(){
        return {
            msg: "I am home pages"
        }
    }
}
</script>

<style lang="css" scoped>
</style>
