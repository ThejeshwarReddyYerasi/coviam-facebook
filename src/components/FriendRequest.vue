<template>
  <div class="friend">
    <div v-for="(iterator,index) in list" :key="index" class="profile">
       <div class="image">
          <img :src="iterator.imageLink" width="100" height="100">
          <h3><b>{{iterator.name}}</b></h3>
       </div>
        
        <div class="buttons">
            <br><br>
            <button @click.prevent="fun">Add Friend</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button style="background-color:lightgrey;color:black;width:70px"  @click="$delete(list,index)">Remove</button>&nbsp;&nbsp;
        </div>

    </div>
  </div>
</template>

<script>
export default {
    name:'FriendRequest',
    data: () => ({
        
       list:[
           {
             name:'sai kumar',
             imageLink:'data:image/jpeg;base64,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',
           },
           {
            name:'venkat raj',
            imageLink:'data:image/jpeg;base64,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',
           }
       ]
    }),
    methods:{
        fun:function(){
            alert('disabled')
        }
    }
};
</script>

<style scoped>
.friend{
    display: flex;
    flex-direction: column;
}
.profile{
    flex-grow: 1;
    border-style: outset;
    flex-direction: row;
}
.image{
    flex-grow: 1;
    float: left;
}
.info{
    flex-grow: 1;
    float: left;
    text-align: center;
    
}
.buttons{
    flex-grow: 2;
    display: inline;
    align-content: center;
}
button{
    background-color:#4267b2;
    color:white;
    width:100px;
    border-radius: 4px;
    font-weight: bold;
}
</style>

