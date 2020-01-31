<template>
  <v-container id="app">
<v-app>
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
            <v-row>{{profileDetails.personalDescription}}</v-row>
            <v-row>{{profileDetails.userFirstName}} {{profileDetails.userLastName}}</v-row>
            <v-row>{{profileDetails.userEmailId}}</v-row>
            <v-row>{{profileDetails.userGender}}</v-row>
            <v-row>{{profileDetails.userDateOfBirth}}</v-row>
            <v-row>{{profileDetails.userCity}}</v-row>
         </v-col>
         <v-col>
            <v-row>{{profileDetails.domainOfProfile}}</v-row>
            <v-row>{{profileDetails.typeOfProfile}}</v-row>
            <v-row style="margin-top:10px">
              <template>
              <div class="text-center">
                <v-dialog 
                  v-model="friendsDialog"
                  width="500"
                >
                  <template v-slot:activator="{ on }">                    
                      <v-btn text @click.stop="getFriendsList()" v-on="on" style="background-color:#4267B2;color:white"><span>Friends</span></v-btn>
                  </template>
                  <v-card max-height="700px">
                    <v-card-title
                      class="headline grey lighten-2"
                      primary-title
                    >
                      Friends List
                    </v-card-title>

                    <v-card-text v-for="(item,index) in friendsList" :key="index" style="margin:0;padding:0">
                      <v-row class="boxTextLeft"
                        style="cursor:pointer"
                        @click="goToProfile(item.userId)"
                      >
                        <v-col lg="1">
                          <v-avatar color="grey">
                              T
                            <!-- <v-img
                              :src="item.userImage"
                            ></v-img> -->
                          </v-avatar>
                        </v-col>
                        <v-col lg="11">
                          <p>{{item.userFirstName}}</p>
                        </v-col>
                      </v-row>
                        <v-divider></v-divider>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        text
                        @click="friendsDialog = false"
                      >
                        close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </template>

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
            <v-col>
              <div style="margin-right:5px;margin-top:7px;cursor:pointer">
                <v-dialog 
                  v-model="reactionsDialog"
                  width="500"
                >
                  <template v-slot:activator="{ on }">                    
                  <a @click.stop="getReactionsOnPost()" v-on="on">13 other reactions</a>
                  </template>
                  <v-card height="700">
                    <v-card-title
                      class="headline grey lighten-2"
                      primary-title
                    >
                      Reactions
                    </v-card-title>
                    <v-card-text>
                      <v-row>
                        friends likes
                      </v-row>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="primary"
                        text
                        @click="reactionsDialog = false"
                      >
                        close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-col>
            <v-col><div style="margin-right:5px;margin-top:7px;cursor:pointer"><a>14 comments</a></div></v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row style="margin-bottom:10px">
            <input type="text" id="comment" placeholder="Comment" @keydown.enter="addNewComment()">
          </v-row>
          <v-divider></v-divider>
          <div>
            <v-row style="margin-top:10px" class="boxTextLeft">
              <v-col lg="1">
                <v-avatar style="margin-left:10px" size="40">
                  <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                </v-avatar>
              </v-col>
              <v-col lg="11" style="padding-left:15px">
                <v-row>comment comment</v-row>
                <v-row><a @click="showCommentInput()">Reply</a></v-row>
                <input type="text" id="comment" v-if="commentInput" @keydown.enter="addComment()" placeholder="Reply">
              </v-col>
            </v-row>
            <v-row>
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
    </v-container>
</v-app>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Profile',
  data: () => ({
    reactionsDialog:false,
    friendsDialog:false,
    commentInput:false,
    bottom: false,
    profileDetails:{},
    friendsList:[],
    posts:[]
  }),
  methods:{
    getFriendsList(){
      let that = this
      axios.get('http://10.177.68.8:8082/friends/getList/50d57520-0171-4756-a104-8fec92660959')
      .then(function(response){
        that.friendsList = response.data.data
        window.console.log(that.friendsList)
      })
      window.console.log("getfriendslist")
    },
    getReactionsOnPost(){
      window.console.log("getReactionsOnPost")
    },
    addNewComment(){
      window.console.log("addNewComment")//no empty comments
    },
    showCommentInput(){
      this.commentInput = true;
    },
    goToProfile(profileId){
      window.console.log(profileId)
    },
    addComment(){
      window.console.log("addComment");
      this.commentInput = false;
    },
     bottomVisible() {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    },
     getPosts() {
      // axios.get('https://api.punkapi.com/v2/beers/random')
      //   .then(response => {
      //     let api = response.data[0];
      //     let apiInfo = {
      //       name: api.name,
      //       desc: api.description,
      //       img: api.image_url,
      //       tips: api.brewers_tips,
      //       tagline: api.tagline,
      //       food: api.food_pairing
      //     };
      //     this.posts.push(apiInfo)
      //     window.console.log(this.posts)
      //   })
    }
  },
  created(){
    let that = this
    axios.get(`http://10.177.68.8:8082/user/${this.$route.params.id}`)
    .then(function(response){
      that.profileDetails = response.data.data;
      // window.console.log(that.profileDetails)
    })
    .catch(function(response){
      window.console.log(response)
    })
    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
    })
    this.getPosts()
  },
  watch: {
    bottom(bottom) {
      if (bottom) {
        this.getPosts()
      }
    }
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