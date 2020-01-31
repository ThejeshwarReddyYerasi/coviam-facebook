<template>
    <div class="container">
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
// Retrieve Firebase Messaging object.
//const messaging = firebase.messaging();
// Add the public key generated from the console here.
//messaging.usePublicVapidKey("BKagOny0KF_2pCJQ3m....moL0ewzQ8rZu");
export default {
  name: 'Notifications',
  data: () => ({
    
  }),
};
</script>
<style scoped>
.container{
  width:120npm 0px; 
}
.mx-auto{
  color:lightblue;
  cursor:pointer
}
.title{ 
  text-align: left;
  font-weight: bold;
}
</style>
