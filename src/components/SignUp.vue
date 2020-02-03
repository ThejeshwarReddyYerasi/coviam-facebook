<template>
  <div id="app">
      <v-app>
          <v-card id="outer" class="mx-auto" style="margin-top:10%">
              <v-row>
                  <v-col>Sign Up</v-col>
              </v-row>
              <div id="inner">
                <input v-model="userName" type="text" name="userName" placeholder="UserName" class="input"><br><br>
                <input v-model="userEmail" type="email" name="email" placeholder="E-Mail" class="input"><br><br>
                <input v-model="password" type="password" name="password" placeholder="password" class="input"><br><br>
                <!-- <div class="type">
                <v-radio-group v-model="accountType">
                    <span style="margin-left:-40px">TYPE OF PROFILE:</span>
                    <v-radio label="Public" value="public"></v-radio>
                        <v-radio label="Private" value="private"></v-radio>
                </v-radio-group>
              </div> -->
                <!-- <input type="number" name="phoneNumber" placeholder="Phone-Number" class="input"><br><br> -->
                <v-btn color="#4267B2" style="color:white;width:60%;margin-bottom:20px" @click="signup()">Signup</v-btn>
                <v-btn color="#4267B2" style="color:white;width:60%;margin-bottom:20px" @click="login()">SignIn</v-btn>

                <!-- <v-btn color="#4267B2" style="color:white;width:60%;margin-top:30px;margin-bottom:30px">Login</v-btn> -->
              </div>
            </v-card>
            <!-- <div v-if="showCategoryList">
                
            </div> -->
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
            password:'',
            userName:'',
            userEmail:'',
            accountType:'',
            userid:''
        }
    },
    methods: {
        signup(){
            let that = this
            let payload = {
                name:this.userName,
                emailAddress:this.userEmail,
                password:this.password
           }
            window.console.log(payload)

            axios.post('/backendCommonInfraLogin/controller/register',payload)
            .then(function(response){
                window.console.log(response)
                that.$router.push({path:'/login'})
            })
        },
        login(){
            this.$router.push({path:'/login'})
        }
    },
    created(){
        // let that = this
        
    },
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
.type{
    text-align: center;
    margin-left: 40%;
}
</style>