<template>
  <div>
      <div class="first">
      <div class="parent">
      <h1>Create your</h1><br>
      <h1>Advertisement Here</h1><br><br>
      <h3>Let The World know what you have to offer</h3><br><br>

          <select
          @change="loadCategory"
          v-model="selectedCategory"
          class="selected"
          >
              <option v-for="(category,index) in categoryList"
                :key="index"
                :value="category.categoryId"
              >
              {{category.categoryName}}
              </option>
              
          </select>

            <select
            @change="loadTags"
            v-model="selectedTag"
            class="selected"
            >
                <option v-for="(tag,index) in tagList"
                    :key="index"
                    :value="tag"
                >
                {{tag}}
                </option>
            </select>
            <!-- <v-radio-group v-model="tag">
                <v-radio v-for="(tag, index) in tagList" 
            </v-radio-group> -->
      <form action="">


<!-- 
        <input type="text" name="Category" placeholder="Category" v-model="category" ><br><br>
        <input type="text" name="Tags" placeholder="Tags" v-model="tags" ><br><br> -->
        <input type="text" name="Location" placeholder="Location" v-model="location" ><br><br>
        <input type="url" name="Your Website" placeholder="Your Website" v-model="website" ><br><br>
        <input type="file" accept="image/*" name="ImageUrl" placeholder="ImageURL" @change="onfileSelected"><br><br>
        <input type="text" name="Description" placeholder="Description" id="Exception" v-model="description" ><br><br>
        <button value="submit" @click="onUpload">Submit</button>
      </form>
      </div>
      </div>
  </div>
</template>

<script>
import { storage } from '../../firebaseConfig'
import axios from 'axios'

export default {
data: function() {
    return {
        selectedCategory: null,
        selectedCategoryTags: [],
        categoryList: [],
        tagList: [],
        selectedTag: null,
    }
},
methods: {
    loadCategory: function() {
        window.console.log("Tags of cat: "+this.categoryList[this.selectedCategory].tags)
        // window.console.log('in load',this.categoryList)

        this.tagList = this.categoryList[this.selectedCategory].tags
        window.console.log("My tag list: "+this.tagList)
        // this.loadTags
    },
    loadTags: function() {
        this.tagList = this.categoryList[this.selectedCategory].tags
                window.console.log("My tag: "+ this.selectedTag)
    },onUpload() {
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
      let data={
          categoryName : this.selectedCategory,
          tag : this.selectedTag,
          imageUrl : this.picture,
          targetUrl: this.website,
          description: this.description,
          location: this.location

      }
        let accessToken = localStorage.getItem('accessToken')
        axios.post(`http://172.16.20.83:8080/ads/postads/${accessToken}`,data)
            .then(function(response) {
                    alert(response.toString())
      })
    },
  onfileSelected(event) {
      this.uploadValue=0;
      this.picture=null;
     this.selectedFile = event.target.files[0]
},
},
created() {
    fetch("http://172.16.20.83:8080/ads/categories",{
        method: "GET"
    })
    .then(res => {
        return res.json()
    })
    .then(result => {
        this.categoryList = result;
        this.tagList = result[0].tags
        window.console.log("Cat: "+result)
    })
    .catch(err => {
        window.console.log("Error in category: " + err)
    })
}
}
</script>

<style scoped>
.parent{
    background-color: lightgray;
    
    align-content: center;
    display: inline;
}
.first{
    width: 100%;
    background-color:lightgray;
}
input{
    background-color: white;
    border-style: groove;
}
#Exception{
    /* height: 12vh; */
    background-color: white;
}
button{
    background-color:#4267b2;
    color:white;
    width:100px;
    border-radius: 4px;
    font-weight: bold;
}
.selected{
    border: 2px solid black;
    margin-bottom: 2px;
}
</style>