<template>
    <div class="dataShow">
        <div id="search">
            <label for="title">请输入title的关键字：</label><input type="text" v-model="key" @input="check" id="title" class="form-control" />
            
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="(val,key) in dataset[0]" v-if="config.cols.indexOf(key)==-1">{{key}}</th>
                        <th>action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(obj,idx) in dataset" v-if="obj">
                    <td v-for="(val,key ) in obj"  v-if="config.cols.indexOf(key)==-1" >{{val}}</td>
                    <td><input type="button" value="删除" :data-id="obj._id"  @click="del" /> 
                    <input type="button" value="编辑" /></td>
                    
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="7"><input type="button" v-for="page in lgt" :value="page" @click="goto(page)" style="width:25px;margin-left:2px;"/></td>
                </tr>
            </tfoot>
        </table>
        <h1 style="display:none;" >{{[page]}}</h1>
        <spinner v-if="show"></spinner> 
    </div>
</template>
<script type="text/javascript">
    import http from '../../utils/httpask.js'
    import './datagrid.scss'
    import spinner from '../spinner/spinner.vue'


    export default{

        data(){
            return {
                dataset:[],
                show:false,
                pageNo:1,
                lgt:0,
                key:''
            }
        },
         props:['config','data-id'],
         components:{
            spinner
         },
        computed:{
            page:{
                get:function(){
                    this.show=true;
                    http.post(this.config.api,{page:this.pageNo}).then((res)=>{
                         // console.log(res.data);
                    this.dataset= res.data.arr;
                    var lgt=res.data.lgt;
                    // console.log(lgt)
                    this.lgt=Math.ceil(lgt/8);
                    this.show=false;

                })

                },
                set:function(_pageNo){
                    this.pageNo=_pageNo;
                    // console.log(this.dataset)
                }
            }
        },
        methods:{
            goto(_newpage){
                this.pageNo=_newpage;
            },
            del(e){
                var id=e.target.getAttribute('data-id');
                var parent=e.target.parentNode.parentNode;
                console.log(parent.parentNode)
                var rot=this.config.del
                console.log(rot)
                http.post('http://10.3.136.63:7070/del',{id,rot}).then((res)=>{
                    parent.parentNode.removeChild(parent);
                    
                })
            },
            check(){
                var key=this.key;
                console.log(key)
                http.post('http://10.3.136.63:7070/check',{key}).then((res)=>{
                    console.log(res)
                    this.dataset=res.data.arr;
                    var lgt=res.data.lgt;
                    this.lgt=Math.ceil(lgt/8);




                })

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