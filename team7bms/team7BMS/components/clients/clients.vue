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
                    api:"http://10.3.136.63:7070/clients",
                    cols:['pwd','_id'],
                    del:'clients'
                }
            }
        }
    }
</script>  