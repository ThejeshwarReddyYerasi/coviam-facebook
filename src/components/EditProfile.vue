<template>
<div class="container">
    <div class="title" style="font-weight:bold">
        Edit Profile</div>
        <br> 
    <v-form
    align-content="center"
    ref="form"
    max-width="100"
    v-model="valid"
    lazy-validation
    > 
    <v-text-field
      v-model="user.userId"
      :counter="10"
      :rules="nameRules"
      label="User ID"
      required
    ></v-text-field>

    <v-text-field
      v-model="user.userName"
      :counter="10"
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
    >   <option>male</option>
        </v-select>
   
      <v-select
        v-model="user.typeOfProfile"
        :items="type"
        :rules="[v => !!v || 'Item is required']"
        label="Type Of Profile"
        required
      >
      </v-select>

       <v-select
        v-model="user.domainOfProfile"
        :items="domain"
        :rules="[v => !!v || 'Item is required']"
        label="Domain Of Profile"
        required
      ></v-select>

    <v-text-field
      v-model="user.personalDescription"
      :counter="10"
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
</div>
</template>
<script>
export default {
        data: function () {
        return {
            gender:['male','female','others' ],
            type:['public','private'],
            domain:['business','personal'],
            user: {
                userId: '',
                userName: '',
                userEmailId: '',
                userCity: '',
                userDateOfBirth: "",
                typeOfProfile: '',
                domainOfProfile: '',
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
           data: this.data,
       }); 
       this.$router.push('/profile'); 
   } 
}
}  
</script>
<style> 
.container{   
    width:500px; 
    align-self:center;  
}
</style> 