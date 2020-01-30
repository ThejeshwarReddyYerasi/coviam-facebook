<template>
  <v-container>
    <v-row class="boxColor">
      <v-col lg="4">
        <v-avatar size="250">
          <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
        </v-avatar>
      </v-col>
      <v-col>
       <v-row>
         <v-col>
            <v-row><v-icon style="padding-right:5px">fas fa-globe-americas</v-icon><b>Intro</b></v-row>
            <v-row>Description</v-row>
            <v-row>Thejeshwar reddy yerasi</v-row>
            <v-row>email id</v-row>
            <v-row>city</v-row>
            <v-row>gender</v-row>
            <v-row>age</v-row>
         </v-col>
         <v-col>
            <v-row>personal</v-row>
            <v-row>public</v-row>
            <v-row style="margin-top:10px">
              <v-dialog v-model="friendsDialog" max-width="290">
                <template v-slot:activator>
                  <v-btn text @click.stop="invert()" style="background-color:#4267B2;color:white"><span>Friends</span></v-btn>
                </template>
              </v-dialog>
            </v-row>
         </v-col>
       </v-row>
      </v-col>
    </v-row>
    <v-container>
      <v-row>
        <v-col lg="8" class="boxColor boxMarginCenter">
          <v-row>
            <v-col lg="2">
              <v-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
              </v-avatar>
            </v-col>
            <v-col lg="10">
              <v-row>Name</v-row>
              <v-row>Time</v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-container class="boxTextLeft">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</v-container>
          </v-row>
          <v-row>
            <v-img class="boxMarginCenter" max-height="300" max-width="700" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" :contain="true">
            </v-img>
          </v-row>
          <v-row style="margin-top:5px">
            <!-- <video class="boxMarginCenter" width="320" height="240" controls> -->
              <!-- <source src="" type="video/mp4"> -->
            <!-- </video> -->
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col><v-btn text><v-icon>fas fa-thumbs-up</v-icon><span style="margin-right:5px;margin-top:5px">Like</span></v-btn></v-col>
            <v-col><v-btn text><v-icon style="margin-right:5px;margin-top:5px">fas fa-thumbs-down</v-icon><span>Dislike</span></v-btn></v-col>
            <v-col><div style="margin-right:5px;margin-top:7px;cursor:pointer"><a @click.stop="reactions">13 other reactions</a></div></v-col>
            <v-col><div style="margin-right:5px;margin-top:7px;cursor:pointer"><a>14 comments</a></div></v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row style="margin-bottom:10px">
            <input type="text" id="comment" placeholder="Comment">
          </v-row>
          <v-divider></v-divider>
          <div>
            <v-row style="margin-top:10px">
            <v-col style="text-align:left" lg="12">
              <v-avatar style="margin-left:10px" size="40">
                <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
              </v-avatar>
               comment comment comment
            </v-col>
            <v-col style="text-align:right">
              comment comment comment
              <v-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
              </v-avatar>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          </div>
        </v-col>
      </v-row>
      <v-dialog v-model="dialog">
        dialog
      </v-dialog>
    </v-container>
  </v-container>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'Profile',
  data: () => ({
    showComments:true,
    friendsDialog:false,
    dialog:false,
    posts:[
      {

      }
    ]
  }),
  methods:{
    reactions(){
      this.dialog = true
    },
    invert(){
      window.console.log("invert")
      this.friendsDialog = true
    }
  },
  created(){
    // axios.get('')
  }
};
</script>
<style scoped>
.boxColor{
  background-color: white!important
}
.boxMarginCenter{
  margin:auto!important
}
.boxTextLeft{
  text-align: left!important
}
#comment{
  width:80%;
  height: 40px;
  background-color: #F2F3F5;
  margin:auto;
  padding:10px;
  margin-top: 10px;
  border-radius: 50px;
  outline: none
}
</style>