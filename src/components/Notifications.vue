<template>
    <div class="container">
      <div class="title">
        Your Notifications 
      </div><br>
    <v-card hover
    class="mx-auto"
    max-width="1000"
    max-height="200"
  >
  <v-list-item three-line> 
      <v-list-item-content>
        <div class="overline mb-4">Notification</div> 
        <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
      </v-list-item-content> 
      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item> 
    <v-card-actions>
      <v-btn color="#BBDE">Open</v-btn>
    </v-card-actions>
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
}
.title{ 
  text-align: left;
}
</style>
