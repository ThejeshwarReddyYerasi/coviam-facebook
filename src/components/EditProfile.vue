<template>
<div class="container id">
  <v-app>
    <v-row>
      <v-col lg="8">
          <div>
            <div class="title" style="font-weight:bold">
                Edit Profile
            </div>
            <br> 
          <v-form
          align-content="center"
          ref="form"
          max-width="100"
          lazy-validation
          > 
          <v-text-field
            v-model="user.userFirstName"
            label="user name"
            required
          ></v-text-field> 

          <v-text-field
          type="email"
            v-model="user.userEmailId"
            label="E-mail"
            required
            :disabled="true"
          ></v-text-field>

          <v-text-field
            v-model="user.userCity"
            label="city"
            required
          ></v-text-field>
            
            <v-text-field
            type="date"
            v-model="user.userDateOfBirth"
            label="Date Of Birth"
            required
          ></v-text-field>

            <v-select
            v-model="user.userGender"
            :items="gender"
            label="Gender"
            required
          >
              </v-select>

          <v-text-field
            v-model="user.personalDescription"
            label="Personal Description"
            required
          ></v-text-field>
          <input type="file" accept="video/*,image/png" @change="onfileSelected" />
          <!-- <v-file-input accept="image/*" prepend-icon="mdi-camera" label="Upload Profile Picture" @change="onfileSelected()"></v-file-input> -->
        </v-form>
      </div>
      <v-dialog fullscreen hide-overlay transition="dialog-bottom-transition" v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on" style="margin-top:20px;width:100%">Select Categories</v-btn>
        </template>
        <v-card>
          <v-row style="text-align:right;background-color:#4267B2;height:60px"><v-btn @click="dialog=false" color="yellow" style="margin:10px;margin-left:20px" right>Close</v-btn></v-row>
          <div style="width:90%;margin:auto">
            <v-row>
            <v-col lg="4" v-for="(item,index) in categoryList" :key="index">
                <div style="padding:20px">
                    <v-row>{{item.categoryName}}</v-row>
                    <v-row v-for="(category,n) in item.tags" :key="n">
                        <v-checkbox v-model="tagList" :label="category" :value="category"></v-checkbox>
                    </v-row>
                </div>
            </v-col>
          </v-row>
          </div>
        </v-card>
      </v-dialog>
      <v-row>
          <v-btn style="margin-top:30px;width:100%" @click="onUpload"> Submit </v-btn>
      </v-row>
      <v-row></v-row>
    </v-col>
      <v-col lg="4">
        {{tagList}}
      </v-col>
    </v-row>
    
  </v-app>
</div>
</template>
<script>
import { storage } from '../../firebaseConfig'
import Axios from 'axios';
export default {
        data: function () {
        return {
            gender:['male','female','other' ],
            user:{},
            successMessage:"",
            selectedFile:null,
            dialog:false,
            categoryList:[],
            tagList:[]
        }
    },          
methods: {
   submit: function(){
       this.$store.dispatch('editProfile',{
           data: this.user,
       }); 
       this.$router.push('/profile'); 
   },
   onUpload() {
     if(this.tagList.length>0){
        this.sendCategories()
      }
     let that = this
    this.picture=null;
      const storageRef=storage.ref(`${this.selectedFile.name}`).put(this.selectedFile);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{window.console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
          that.user.profilePicure = url
          window.console.log(that.user);
          Axios({
            url:'/backend/user',
            method:'post',
            headers:{token:localStorage.getItem('accessToken')},
            data:that.user
          })
          .then(function(response){
            window.console.log(response.data)
            that.$router.push({path:'/profile'})
          })
        })
      }
      );
  },
  sendCategories(){
    let that = this
    let payload = {
      channel:'Facebook',
      tag:this.tagList,
      action:'login'
    }
    Axios({
      url:'http://172.16.20.160:8100/repo/addLogin',
      method:'post',
      headers:{
        accessToken:localStorage.getItem('accessToken')
      },
      data:payload
    })
    .then(function(response){
      window.console.log(response)
      that.dialog = false
      that.$router.push({path:'/home'})
    })
  },
  onfileSelected(event) {
      this.uploadValue=0;
      this.picture=null;
     this.selectedFile = event.target.files[0]
},
},
created() {
  let that = this
  Axios.get('/backend/user/getUserInfo',{
    headers:{token:localStorage.getItem('accessToken')}
  })
  .then(function(response){
    that.user = response.data.data
    // window.console.log(response.data.data)
  })
  Axios.get('http://172.16.20.83:8080/ads/categories')
    .then(function(response){
        that.categoryList = response.data
        window.console.log(that.categoryList)
    })

} 
} 
</script>
<style scoped> 
</style> 