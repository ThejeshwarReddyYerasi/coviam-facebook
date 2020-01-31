<template>
  <div id="app">
      <v-app>
          <v-card id="outer" class="mx-auto" style="margin-top:10%">
              <v-row>
                  <v-col>Sign Up</v-col>
              </v-row>
              <div id="inner">
                <input type="text" name="userName" placeholder="UserName" class="input"><br><br>
                <input type="email" name="email" placeholder="E-Mail" class="input"><br><br>
                <input type="password" name="password" placeholder="password" class="input"><br><br>
                <!-- <input type="number" name="phoneNumber" placeholder="Phone-Number" class="input"><br><br> -->
                 <v-select
                    :items="items"
                    label="Type Of Profile"
                    solo
                    flat
                    color="#E9EBEE"
                ></v-select>
                <v-btn color="#4267B2" style="color:white;width:60%">Submit</v-btn>
                <v-btn color="#4267B2" style="color:white;width:60%;margin-top:30px;margin-bottom:30px" @click="$router.push({path:'/login'})">Login</v-btn>
              </div>
            </v-card>
      </v-app>
  </div>
</template>

<script>
export default {
    data:function(){
        return{
            items: ['Public','Private','Business'],
        }
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