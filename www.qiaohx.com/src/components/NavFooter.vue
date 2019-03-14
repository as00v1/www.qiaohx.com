<template lang="html">
    <footer>
    	<p>Copyright &copy; {{ year() }}. www.qiaohx.com All rights reserved.</p>
    </footer>
</template>

<script>
export default {
    name: 'NavFooter',
    data(){
        return {
            year: function() {
                var date = new Date();
                return date.getFullYear();
            }
        }
    }
}
</script>
