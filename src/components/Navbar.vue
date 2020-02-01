<template>
  <div id="app">
    <!-- <v-app> -->
    <v-toolbar color="#4267B2" v-if="show"> 
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
          <v-col><v-btn icon class="navbarButton" @click="$router.push({path:'/editProfile'})"><v-icon>fas fa-user</v-icon></v-btn></v-col>
        </v-row>
    </v-toolbar>
    <!-- </v-app> -->
  </div>
</template>

<script>
 import axios from 'axios'
export default {
  name: 'navbar',
  data: () => ({
    items:[],
    default:[],
    show:true,
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
      let that = this
      this.loading = true
      window.console.log(v);
      axios.get(`/backend/facebooksearch/search/${v}`,{
        headers:{token:localStorage.getItem('accessToken')}
      })
      .then(function(response){
        that.items = [],
        that.default = []
        response.data.forEach(element => {
          that.items.push(element.userFirstName),
          that.default.push(element)
        });
        window.console.log(that.items)
        window.console.log(that.default)
        that.loading = false
      }); 

      // setTimeout(() => {
      //     this.items = this.states.filter(e => {
      //       return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
      //     })
      //     this.loading = false
      //   }, 500)
    },
  },
  created(){
    // if(localStorage.getItem('user-token')==null){
    //   this.show=false
    // }
  },
  watch:{
    search (val){
      if(val==''){this.items=[]}else{
        val && val !== this.select && this.querySelections(val)
      }
    },
    select(value) {
      window.console.log(value)
      let selected = null
      this.default.forEach(element =>{
        if(element.userFirstName == value){
          selected = element.userId;
        }
      })
      window.console.log(selected)
      this.$router.push({path:'/viewprofile',query:{id:selected}})
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