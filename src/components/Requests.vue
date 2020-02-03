<template>
  <v-container id="app"> 
      <v-app>
        <v-row>
          <v-col lg="8">
            <v-row>
              <v-col lg="4" v-for="(item,n) in requests" :key="n">
                <v-card>
                  <!-- <div style="width:350"> -->
                    <v-row>
                      <!-- <div></div> -->
                    <v-img :src="item.userImage" max-height="150" max-width="250" :contain="true" aspect-ratio="1" style="margin:auto">
                    </v-img>
                  </v-row>
                  <v-row style="text-align:center">
                    <p style="margin:auto">{{item.userFirstName}}</p>
                  </v-row>
                  <v-row style="margin-top:10px;padding-bottom:20px">
                    <v-btn @click="acceptRequest(item.userId)" style="margin:auto">Accept request</v-btn>
                  </v-row>
                  <!-- </div> -->
                </v-card>
                <!-- <v-row>
                  <v-btn>r</v-btn>
                </v-row> -->
              </v-col>
            </v-row>
          </v-col>
          <v-col></v-col>
        </v-row>
      </v-app>
  </v-container>
</template>

<script>
import Axios from 'axios';
export default {
  name: 'Request',
  data: () => ({
    requests:[]
  }),
  created(){
    let that = this
    Axios({
      url:'/backend/friends/getFriendRequest',
      method:'get',
      headers:{
        token:localStorage.getItem('accessToken')
      }
    }).then(function(response){
      that.requests = response.data.data
      window.console.log(response.data)
    })
  },
  methods:{
    acceptRequest(id){
      Axios({
        url:`/backend/friends/accept/${id}`,
        method:'post',
        headers:{
          token:localStorage.getItem('accessToken')
        }
      }).then(function(response){
        window.console.log(response.data)
      })
    }
  }
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