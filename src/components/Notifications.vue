<template>
    <div class="container1">
      <v-divider
        class="mx-4"
        :inset="inset"
        vertical
      ></v-divider>
      <div class="title">
        Your Notifications 
      </div><br>
      <hr> <br> 
    <v-card 
    class="mx-auto"
    max-width="1200"
    max-height="80"
  >
  <v-list-item three-line> 
      <v-list-item-content> 
        notifications
        <div class="overline mb-4"></div> 
        <v-list-item-title class="headline mb-1"></v-list-item-title>
      </v-list-item-content> 
      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>
  </v-card>
    </div>
</template>

<script>
//import Vuetify from 'vuetify/lib'
//import VueFlex from "vue-flex";
export default {
  name: 'Notifications',
  data: () => ({
    
  }),
};
</script>
<style scoped>

.mx-auto{
  color:lightblue;
  cursor:pointer
}
.title{ 
  text-align: left;
  font-weight: bold;
}
</style>
