<template>
    <div class="id">
      <v-app>
        <v-card class="mx-auto" style="padding:30px;margin-top:30px">
                <v-radio-group v-model="accountType">
                    <span>TYPE OF PROFILE:</span>
                    <v-radio label="Public" value="Public"></v-radio>
                    <v-radio label="Private" value="Private"></v-radio>
                    <!-- <v-radio label="Bussiness" value="Business"></v-radio> -->
                </v-radio-group>
                <v-btn @click="submit()">submit</v-btn>
                </v-card>
             </v-app>
              </div>
</template>
<script>
import axios from 'axios'
// import func from '../../vue-temp/vue-editor-bridge'
  export default{
    data:function(){
      return {
        accountType:''
      }
    },
    methods:{
      submit(){
        let that = this
      let payload = {
          profile:this.accountType,
          role:'',
          channel:'Facebook'
      }
      if(this.accountType == 'Public'){
        payload.role = 'Non Moderator'
      }
      else{
        payload.role = 'Moderator'
      }
      window.console.log(payload)
      window.console.log(localStorage.getItem('accessToken'))
        let authStr = 'Bearer '+ localStorage.getItem('accessToken')
        window.console.log(authStr)
        axios({
          url:'/backendCommonInfraLogin/roleController/userRole',
          method:'post',
          data: payload,
          headers:{
            "Authorization": authStr
          }
        })
        .then(function(response){
          let dat = {
            typeOfProfile: response.data.data.profile
          }
          window.console.log(dat)
          window.console.log(response.data)
          axios({
            url:'/backend/user/isExisting',
            method:'post',
            headers:{token:localStorage.getItem('accessToken')},
            data:dat
          })
          .then(function(response){
            that.$router.push({path:'/editprofile'})
            window.console.log(response.data)
          })
        })
        .catch(function(response){
          window.console.log(response)
        })
      }
    }
  }
</script>
<style scoped>
.type{
  margin:auto!important
}
</style>