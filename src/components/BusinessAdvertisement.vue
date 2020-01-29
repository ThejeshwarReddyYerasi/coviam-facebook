<template>
  <div>
      <div class="first">
      <div class="parent">
      <h1>Create your</h1><br>
      <h1>Advertisement Hear</h1><br><br>
      <h3>Let The World know what you offer</h3><br><br>
      <form action="">
        <input type="text" name="Advertiser Id" placeholder="Advertiser Id"><br><br>
        <input type="text" name="Category" placeholder="Category"><br><br>
        <input type="text" name="Tags" placeholder="Tags"><br><br>
        <input type="text" name="Location" placeholder="Location"><br><br>
        <input type="text" name="Your Website" placeholder="Your Website"><br><br>
        <input type="text" name="ImageUrl" placeholder="ImageURL"><br><br>
        <input type="text" name="Description" placeholder="Description" id="Exception"><br><br>
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
#Exception{
    height: 12vh;
    background-color: white;
}
button{
    background-color:#4267b2;
    color:white;
    width:100px;
    border-radius: 4px;
    font-weight: bold;
}
</style>