<template>
  <div >
      <div class="parent">
     <h1 style="text-align:center;">Categories</h1>
     
     <div v-for="(item,index) in list1" :key="index" class="headClass">
         <div class="gflex-1">
        <h2>{{item.name}}</h2><br>
        <button v-show="item.isShow" :disabled='item.isDisabled1' @click="adding(item.name,index)">Add</button>
        </div>
        
     </div>
        
      </div>
       
  </div>
</template>

<script>
export default {
   name:'Category',
   data: () => ({
       list1:[
           {
               id:1,
               name:'Literature',
               isDisabled1 : false,
               isShow:true
               
           },
           {
               id:2,
               name:'LifeStyle',
               isDisabled1 : false,
               isShow:true
              
           },
           {
               id:3,
               name:'Coding',
               isDisabled1 : false,
               isShow:true
               
           },
           {
               id:4,
               name:'Movies',
               isDisabled1 : false,
               isShow:true
               
           },
           {
               id:5,
               name:'Booze',
               isDisabled1 : false,
               isShow:true
               
           },
           {
               id:6,
               name:'Cartoon',
               isDisabled1 : false,
               isShow:true
               
           },
           {
               id:7,
               name:'Cricket',
               isDisabled1 : false,
               isShow:true
               
           },
           {
               id:8,
               name:'Web/TV Series',
               isDisabled1 : false,
               isShow:true
               
           },
           {
               id:9,
               name:'Politics',
               isDisabled1 : false,
               isShow:true
               
           },
           {
               id:10,
               name:'Food',
               isDisabled1 : false,
               isShow:true
               
           }
       ],
       list2:[]
   }),
   methods:{
       adding:function(name,index){
           this.list2.push(name)
           //alert(this.list2)
           this.list1[index].isDisabled1=true
           this.list1[index].isShow=false

       },
      
   }
};
</script>

<style scoped>
h1{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color:steelblue;
    
}
.gflex-1 {
    width : 32vw;
}
h2{
    font-family: fantasy;
}
button{
    background-color:#4267b2;
    color:white;
    width:100px;
    border-radius: 4px;
    font-weight: bold;
}
.headClass{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-style: outset;
    /* height: 13vh; */
    float: left;
    overflow: auto;
    
    align-content: center;
}
.parent{
    
}
</style>