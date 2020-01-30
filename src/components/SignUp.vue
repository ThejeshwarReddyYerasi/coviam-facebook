<template>
  <div>
      <div class="first">
      <div class="parent">
      <h1>Sign Up</h1><br>
      
      <form action="">
        <input type="text" name="userName" placeholder="UserName"><br><br>
        <input type="password" name="password" placeholder="password"><br><br>
        <input type="email" name="email" placeholder="E-Mail"><br><br>
        <input type="number" name="phoneNumber" placeholder="Phone-Number"><br><br>
       
        <button value="submit">Submit</button>
      </form>
      </div>
      </div>
  </div>
</template>

<script>
export default {

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

button{
    background-color:#4267b2;
    color:white;
    width:100px;
    border-radius: 4px;
    font-weight: bold;
}
</style>