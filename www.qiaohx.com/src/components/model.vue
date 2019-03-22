<template lang="html">
    <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
        <div class="modal-dialog">
    		<div class="modal-content">
    			<div class="modal-header">
    				<button type="button" class="close" data-dismiss="modal"
    						aria-hidden="true">×
    				</button>
    				<h4 class="modal-title" id="myModalLabel">
    					提示
    				</h4>
    			</div>
    			<div class="modal-body">
    				{{ tips }}
    			</div>
    			<div class="modal-footer">
    				<button type="button" class="btn btn-default"
    						data-dismiss="modal">关闭
    				</button>
    			</div>
    		</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Model',
    props: ['modelTitle','tips']
}
</script>

<style lang="css" scoped>
</style>
