<template>
    <div>
        
        <datagrid :config="config" ></datagrid>
    </div>
</template>
<script type="text/javascript">
    import datagrid from '../datagrid/datagrid.vue'
    export default {
        components:{
            datagrid
        },
        data(){
            return {
                config:{
                    api:"http:10.3.136.21:7070/products",
                    clos:['_id','url','brand','units','type','discount','hot','standards']
                }
            }
        }
    }
</script>  