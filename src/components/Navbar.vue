<template>
  <div>
    <v-toolbar color="#4267B2">
        <v-row>
          <v-col lg="1" style="text-align:right;margin-top:5px">
            <v-icon large color="#ffffff">fab fa-facebook-square</v-icon>
          </v-col>
          <v-col lg="5">
            <v-autocomplete
            solo
            :loading="loading"
            style="width:100%;height:20px" 
            append-icon="fas fa-search"
            flat
            :search-input.sync = "search"
            :items="items"
            v-model="select"
            hide-no-data
            hide-details
            >
              <v-row v-for="(items,n) in items" :key="n">
                {{items}}
              </v-row>
            </v-autocomplete>
            {{select}}
          </v-col>
          <v-col lg="4">
            <v-btn text class="navbarButton" @click="$router.push({path:'/profile'})">profile</v-btn>
            <v-btn text class="navbarButton" @click="$router.push({path:'/home'})">Home</v-btn>
            <v-btn icon @click="$router.push({path:'/notifications'})">
              <v-icon class="navbarButton">fas fa-bell</v-icon>
            </v-btn>
            <v-btn icon @click="$router.push({path:'/requests'})">
              <v-icon class="navbarButton" >fas fa-user-friends</v-icon>
            </v-btn>
          </v-col>
        </v-row>
    </v-toolbar>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'navbar',
  data: () => ({
    items:[],
    select:null,
    search:null,
    loading:false,
    states: [
          'Alabama',
          'Alaska',
          'American Samoa',
          'Arizona',
          'Arkansas',
          'California',
          'Colorado',
          'Connecticut',
          'Delaware',
          'District of Columbia',
        ],
  }),
  methods:{
    querySelections (v) {
      this.loading = true
      window.console.log(v)
      setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
    },
  },
  watch:{
    search (val){
      if(val==''){this.items=[]}
      val && val !== this.select && this.querySelections(val)
    }
  }
}
</script>
<style scoped>
#search{
  width:90%!important;
  height:30px!important;
  background-color: #ffffff
}
.navbarButton{
  color: #ffffff!important;
}
</style>