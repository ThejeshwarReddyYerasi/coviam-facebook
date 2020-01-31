<template>
  <div id="app">
      <v-app>
          <v-card id="outer" class="mx-auto" style="margin-top:10%" v-if="!showCategoryList">
              <v-row>
                  <v-col>Sign Up</v-col>
              </v-row>
              <div id="inner">
                <input type="text" name="userName" placeholder="UserName" class="input"><br><br>
                <input type="email" name="email" placeholder="E-Mail" class="input"><br><br>
                <input type="password" name="password" placeholder="password" class="input"><br><br>
                <!-- <input type="number" name="phoneNumber" placeholder="Phone-Number" class="input"><br><br> -->
                <v-btn color="#4267B2" style="color:white;width:60%" @click="showCategoryList=true">Next</v-btn>
                <v-btn color="#4267B2" style="color:white;width:60%;margin-top:30px;margin-bottom:30px" @click="$router.push({path:'/login'})">Login</v-btn>
              </div>
            </v-card>
            <div v-if="showCategoryList">
                <v-row>
                    <v-col lg="4" v-for="(item,index) in categoryList" :key="index">
                        <div style="padding:20px">
                            <v-row>{{item.categoryName}}</v-row>
                            <v-row v-for="(category,n) in item.tags" :key="n">
                                <!-- {{category}} -->
                                <v-checkbox v-model="tagList" :label="category" :value="category"></v-checkbox>
                            </v-row>
                        </div>
                    </v-col>
                </v-row>
            </div>
      </v-app>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data:function(){
        return{
            items: ['Public','Private','Business'],
            showCategoryList:false,
            categoryList:[],
            tagList:[]
        }
    },
    created(){
        let that = this
        axios.get('http://172.16.20.98:8080/ads/categories')
        
        .then(function(response){
            that.categoryList = response.data
            window.console.log(that.categoryList)

        })
    }
}
</script>

<style scoped>
 #outer{
     width: 500px
       
 }
 #inner{
     margin: auto;
     width: 80%;

 }
.input{
    outline: none;
    border: none;
    background-color: #E9EBEE;
    height:40px;
    width: 100%;
    padding: 10px
}
</style>