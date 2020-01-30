<template>
  <v-container>
    <v-row>
      <v-col lg="12" style="background:#f5f6f7;text-align:left"> What's On Your Mind Today !! </v-col>
    </v-row>
    <v-row style="background: #ffffff;">
      <v-col lg="1" >
        <v-avatar><v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img> </v-avatar>
      </v-col>
      <v-col lg="11">
          <v-text-field
            placeholder="Write Something Here"
            outlined style="color:#97949b;"
          ></v-text-field>
        </v-col>
    </v-row>
    <v-row style="background: #ffffff;">
      <v-col><v-btn id="video-btn" icon color="#000000"><input type="file" accept="video/*,image/png" @change="onfileSelected" /></v-btn></v-col>
      <!-- <v-col lg="5"><v-btn id="video-btn" icon color="#000000"><input type="file" accept="image/*" @change="onfileSelected" /></v-btn></v-col> -->
      <v-col style="text-align:right;"><v-btn id="submit-btn" @click="onUpload"> Upload</v-btn></v-col>
    </v-row>
  </v-container>
</template>


<script>
import { storage } from '../../firebaseConfig'
export default {
name: 'CreatePosts',
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
        });
      }
      );


  },
  onfileSelected(event) {
      this.uploadValue=0;
      this.picture=null;
     this.selectedFile = event.target.files[0]
},
},
data: function() {
  return{
    selectedFile: null
  }
}
}
</script>