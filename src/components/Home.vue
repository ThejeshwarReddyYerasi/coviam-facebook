<template>
  <v-container>
    <div class='main'>
      <v-table>
        <v-row>
          <v-column>
            <div class='newsfeed'>
            <div id='postcreate'>
              <div>What's on your mind Today!!</div>
              <div></div>
            </div>
            </div>
          </v-column>
          <v-column>
            <div class='ads'>
              This is the Ads Div
            </div>
          </v-column>
        </v-row>
      </v-table>
    </div>
  </v-container>
</template>


<script>
export default {
  name: 'Home',
  data: () => ({
    
  }),
};
</script>
<style scoped>
.newsfeed
{
  width: 750px;
  height: 100%;
  background: #c0c0c0;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: 50px;
  padding-right:50px;
  margin-left: 40px;
}
.ads{
  width: 300px;
  height: 100%;
  margin-top: 10px;
  background: #c0c0c0;
  border-radius: 10px;
}
.main{
  width:100%;
  height:900px;
  background: beige;
}
.postcreate{
  align-self: left;
}
</style>
