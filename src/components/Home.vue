<template>
  <v-container>
        <v-row>
          <v-col lg="8">
            
            <CreatePosts></CreatePosts>
          </v-col>
          <v-col lg="4">
             <v-card v-for="(item,n) in adPosts" :key="n" @click="adClicked(item.adId,item.tag,item.advertiserId,item.categoryName,item.description,item.targetUrl)">
               <v-img
                :src="item.imageUrl"
               ></v-img>
                <p>{{item.description}}</p>
             </v-card>
          </v-col>
        </v-row>
  </v-container>
</template>


<script>
import CreatePosts from './CreatePosts'
import axios from 'axios';
export default {
  name: 'Home',
  components: {CreatePosts},
  data: () => ({
    adPosts:[]
  }),
  created(){
    let that = this
    axios.get(`http://172.16.20.83:8080/ads/getAds/${localStorage.getItem('accessToken')}`)
    .then(function(response){
      that.adPosts = response.data
      window.console.log(response.data)
    })
  }, 
  methods:{ 
    adClicked(adId,tag,advertiserId,categoryName,description,targetUrl){
      let payload = {
        adId:adId,
        tag:tag,
        advertiserId: advertiserId,
        categoryName:categoryName,
        userId:localStorage.getItem('accessToken'),
        description:description,
        source:'facebook',
        targetUrl:targetUrl
      }
      axios({
        url:'http://172.16.20.83:8080/ads/onclick',
        method:'post',
        data: payload
      }).then(function(response){
        // window.console.log(response.data)
        window.open(response.data, '_blank');
      })
      .catch(function(response){
        window.console.log(response)
      })
    }
  }
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
