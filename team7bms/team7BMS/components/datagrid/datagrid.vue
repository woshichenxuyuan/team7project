<template>
    <div class="dataShow">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="(val,key) in dataset[0]" v-if="config.cols.indexOf(key)==-1">{{key}}</th>
                        <th>action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(obj,idx) in dataset">
                    <td v-for="(val,key ) in obj"  v-if="config.cols.indexOf(key)==-1">{{val}}</td>
                    <td><input type="button" value="删除"  /> <input type="button" value="编辑" /></td>
                    
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="7"><input type="button" v-for="page in lgt" :value="page" @click="goto(page)" style="width:25px;margin-left:2px;"/></td>
                </tr>
            </tfoot>
        </table>
        <h1 style="display:none;" >{{[page]}}</h1>
    </div>
</template>
<script type="text/javascript">
    import http from '../../utils/httpask.js'
    import './datagrid.scss'


    export default{

        data(){
            return {
                dataset:[],
                show:false,
                pageNo:1,
                lgt:0
            }
        },
         props:['config'],
        computed:{
            page:{
                get:function(){
                    http.post(this.config.api,{page:this.pageNo}).then((res)=>{
                         console.log(res.data);
                    this.dataset= res.data.arr;
                    var lgt=res.data.lgt;
                    console.log(lgt)
                    this.lgt=Math.ceil(lgt/8);

                })

                },
                set:function(_pageNo){
                    this.pageNo=_pageNo;
                }
            }
        },
        methods:{
            goto(_newpage){
                this.pageNo=_newpage;
            }
        },
        
       
        // mounted(){
        //     this.show =true,
        //     http.post(this.config.api,{page:this.page}).then((res)=>{
        //         console.log(res.data);
        //         this.dataset= res.data;
        //     })
        // }
    }

</script>