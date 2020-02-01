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

    <v-file-input accept="image/*" prepend-icon="mdi-camera" label="Upload Profile Picture" v-model="user.profilePicture"></v-file-input>
    
    <v-btn
      :disabled="!valid"    
      @click="submit"
    > 
      Submit
    </v-btn>
  </v-form>
  </v-app>
</div>
</template>
<script>
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
   submit: function(){
       this.$store.dispatch('editProfile',{
           data: this.user,
       }); 
       this.$router.push('/profile'); 
   } 
}
}  
</script>
<style scoped> 
.container{   
    width:500px; 
    align-self:center;  
}
</style> 