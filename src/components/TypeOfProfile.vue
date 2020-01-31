<template>
    <div class="id">
      <v-app>
        <v-card class="mx-auto" style="padding:30px;margin-top:30px">
                <v-radio-group v-model="accountType">
                    <span>TYPE OF PROFILE:</span>
                    <v-radio label="Public" value="Public"></v-radio>
                    <v-radio label="Private" value="Private"></v-radio>
                    <v-radio label="Bussiness" value="Business"></v-radio>
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
        // let that = this
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
        axios({
          url:'/backendCommonInfraLogin/roleController/userRole',
          method:'POST',
          data: payload,
          headers:{
            "Authorization": authStr 
          }
        })
        .then(function(response){
          window.console.log(response.data)
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