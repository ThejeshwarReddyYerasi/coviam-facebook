<template>
  <v-container>
        <v-row>
          <v-col lg="8">
            
            <CreatePosts></CreatePosts>
          </v-col>
          <v-col lg="4">
             adds
          </v-col>
        </v-row>
  </v-container>
</template>


<script>
import CreatePosts from './CreatePosts'
export default {
  name: 'Home',
  components: {CreatePosts},
  data: () => ({
    
  }),
};
</script>
<style scoped>
.newsfeed
{
  width: 750px;
  height: 100%;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: 50px;
  padding-right:50px;
  margin-left: 40px;
}
.ads{
  width: 300px;
  height: 100%;
  margin-top: 10px;
  background: #c0c0c0;
  border-radius: 10px;
}
.main{
  width:100%;
  /* height:900px; */
  background: #e9ebee;
}
.postcreate{
  align-self: left;
}
</style>
