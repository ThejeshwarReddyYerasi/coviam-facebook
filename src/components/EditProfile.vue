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
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="User ID"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Username"
      required
    ></v-text-field> 

     <v-text-field
     type="email"
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="city"
      required
    ></v-text-field>
      
      <v-text-field
      type="date"
      v-model="email"
      :rules="emailRules"
      label="Date Of Birth"
      required
    ></v-text-field>

       <v-select
      v-model="gender"
      :items="gender"
      :rules="[v => !!v || 'Item is required']"
      label="Gender"
      required
    ></v-select>

      <v-select
        v-model="type"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Type Of Profile"
        required
      ></v-select>

       <v-select
        v-model="domain"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Domain Of Profile"
        required
      ></v-select>

    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Personal Description"
      required
    ></v-text-field>

    <v-file-input accept="image/*" prepend-icon="mdi-camera" label="Uplaod Profile Picture"></v-file-input>
    
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
        data: () => ({ 

      gender: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
    }),

methods: {
   submit: function(){
       this.$store.dispatch('editProfile'); 
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