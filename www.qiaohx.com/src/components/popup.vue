<template>
    <div class="popup">
        <span>{{ msg }}</span>
    </div>
</template>
<script>
export default {
    name: "Popup",
    props: ["msg"]
}
</script>
<style scoped>
    .popup {width: 50%; text-align: center; border-radius: 10px; color: #fcfffd; position: absolute;  bottom: 50px;left: 0; right: 0; margin: auto; padding: 20px; background: rgba(0, 0, 0, .7); transition: all 2s;}
    .popup span {text-align: center; color: #FFFFFF;padding: 5px;font-size: 18px;}
</style>

