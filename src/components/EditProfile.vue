<template>
<div class="container id">
  <v-app>
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
    
    <v-btn
      @click="onUpload"
    > 
      Submit
    </v-btn>
  </v-form>
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
            selectedFile:null
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
        })
      }
      );
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
    window.console.log(response.data.data)
  })

} 
} 
</script>
<style scoped> 
.container{   
    width:500px; 
    align-self:center;  
}
</style> 