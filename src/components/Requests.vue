<template>
  <v-container>
    <div >
        
        <div class="parent"> 
           <div class="parent1"> 
              <FriendRequest></FriendRequest>
              
           </div>
           <div class="parent2">
               <h1>this is flex 2</h1>
           </div>
        </div>
      
    </div>
  </v-container>
  
</template>

<script>
import FriendRequest from './FriendRequest'
export default {
  name: 'Request',
  components: {FriendRequest},

  data: () => ({
    title:"sai kumar",
    todos:[
    {
      title:"java"
    },
    {
      title:"spring"
    }
    ]
  }),
};
</script>
<style scoped>
.parent{
  display:flex;
  flex-direction: row;
}
.parent1{
  
  flex-grow: 2;
  height: 100%;
  text-align: center;
  
}
.parent2{
  background-color: lightyellow;
  flex-grow: 1;
  text-align: center;
}
</style>