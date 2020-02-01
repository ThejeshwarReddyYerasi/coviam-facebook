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
    v-model="valid"
    lazy-validation
    > 
    <v-text-field
      v-model="user.userName"
      :rules="nameRules"
      label="Username"
      required
    ></v-text-field> 

     <v-text-field
     type="email"
      v-model="user.userEmailId"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="user.userCity"
      :rules="emailRules"
      label="city"
      required
    ></v-text-field>
      
      <v-text-field
      type="date"
      v-model="user.userDateOfBirth"
      :rules="emailRules"
      label="Date Of Birth"
      required
    ></v-text-field>

       <v-select
      v-model="user.userGender"
      :items="gender"
      :rules="[v => !!v || 'Item is required']"
      label="Gender"
      required
    >
        </v-select>

    <v-text-field
      v-model="user.personalDescription"
      :rules="nameRules"
      label="Personal Description"
      required
    ></v-text-field>

    <v-file-input accept="image/*" prepend-icon="mdi-camera" label="Upload Profile Picture" v-model="user.profilePicture" @change="onfileSelected"></v-file-input>
    
    <v-btn
      :disabled="!valid"
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
            user: {
                userName: '',
                userEmailId: '',
                userCity: '',
                userDateOfBirth: "",
                userGender: '',
                personalDescription: '',
                profilePicture: '',
            },
            successMessage:""
        }
    },          
methods: {
   onUpload() {
    this.picture=null;
      const storageRef=storage.ref(`${this.selectedFile.name}`).put(this.selectedFile);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      }, error=>{window.console.log(error.message)},
      ()=>{this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture =url;
          window.console.log(this.picture);
        }).then(
          Axios.post('')
        )
      }
      );
  },
  onfileSelected(event) {
      this.uploadValue=0;
      this.picture=null;
     this.selectedFile = event.target.files[0]
},
}, 
} 
</script>
<style scoped> 
.container{   
    width:500px; 
    align-self:center;  
}
</style> 