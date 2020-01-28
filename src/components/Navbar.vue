<template>
  <div>
    <v-toolbar color="#4267B2">
        <v-row>
          <v-col lg="1" style="text-align:right;margin-top:5px">
            <v-icon large color="#ffffff">fab fa-facebook-square</v-icon>
          </v-col>
          <v-col lg="5">
            <input type="text" id="search">
            <!-- <div style="background-color:#EBEDF0;width:10%;display:inline;height:30px"> -->
              <v-btn icon color="#ffffff"><v-icon>fas fa-search</v-icon></v-btn>
            <!-- </div> -->
          </v-col>
          <v-col lg="4">
            <v-btn text class="navbarButton">Profile</v-btn>
            <v-btn text class="navbarButton">Home</v-btn>
            <v-btn icon>
              <v-icon class="navbarButton">fas fa-bell</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon class="navbarButton">fas fa-user-friends</v-icon>
            </v-btn>
          </v-col>
        </v-row>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'navbar',

  data: () => ({
    
  }),
};
</script>
<style scoped>
#search{
  width:90%;
  height:30px;
  background-color: #ffffff
}
.navbarButton{
  color: #ffffff!important;
}
</style>