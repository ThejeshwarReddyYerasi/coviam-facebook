<template>
  <v-container>
        <v-row>
          <v-col lg="8">     
            <CreatePosts></CreatePosts>
            <v-container>
              <v-row v-for="(item,index) in posts" :key="index">
                <v-col lg="12" class="boxColor boxMarginCenter">
                  <v-row>
                    <v-col lg="2">
                      <v-avatar>
                        <v-img :src="item.profilePicture"></v-img>
                      </v-avatar>
                    </v-col>
                    <v-col lg="10">
                      <v-row>{{item.userName}}</v-row>
                      <v-row>{{item.postDate}}</v-row>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-container class="boxTextLeft">{{item.postDescription}}</v-container>
                  </v-row>
                  <v-row>
                    <v-img class="boxMarginCenter" max-height="300" max-width="700" :src="item.postImageUrl" :contain="true">
                    </v-img>
                  </v-row>
                  <v-row style="margin-top:5px">
                    <!-- <video class="boxMarginCenter" width="320" height="240" controls> -->
                      <!-- <source src="" type="video/mp4"> -->
                    <!-- </video> -->
                  </v-row>
                  <v-divider></v-divider>
                  <v-row>
                    <v-col>
                      <v-btn text style="color:blue" v-if="item.reaction">
                        <v-icon >fas fa-thumbs-up</v-icon>
                      </v-btn>
                      <v-btn v-else text @click="likePost(item.postId)" >
                        <v-icon>fas fa-thumbs-up</v-icon>
                      </v-btn>
                      <span style="margin-right:5px;margin-top:5px">Like {{item.counterOfLikes}}</span></v-col>
                    <v-col><v-btn text @click="dislike(item.postId,item.postDescription,item.postImageUrl,item.counterOfDislilkes)"><v-icon style="margin-right:5px;margin-top:5px">fas fa-thumbs-down</v-icon><span>Dislike{{item.counterOfDislilkes}}</span></v-btn></v-col>
                    <v-col>
                      <div style="margin-right:5px;margin-top:7px;cursor:pointer">
                        <v-dialog 
                          v-model="reactionsDialog"
                          width="500"
                        >
                          <template v-slot:activator="{ on }">                    
                          <a @click.stop="getReactionsOnPost()" v-on="on">{{item.counterOfEmojis}} other reactions</a>
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
                    <v-col><div style="margin-right:5px;margin-top:7px;cursor:pointer"><a>{{item.counterOfComments}} comments</a></div></v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row style="margin-bottom:10px">
                    <input type="text" class="comment" placeholder="Comment" v-model="comment" @keydown.enter="addNewComment(item.postId,item.userId)">
                  </v-row>
                  <v-divider></v-divider>
                  <div v-for="(comment,i) in item.parentComments" :key="i">
                    <v-row style="margin-top:10px" class="boxTextLeft">
                      <v-col lg="1">
                        <v-avatar style="margin-left:10px" size="40">
                          <v-img :src="comment.profilePicture"></v-img>
                        </v-avatar>
                      </v-col>
                      <v-col lg="11" style="padding-left:15px">
                        <v-row>{{comment.commentingUserName}}</v-row>
                        <v-row>{{comment.commentDescription}}</v-row>
                        <v-row>
                          <a @click="showCommentInput($event)">Reply</a>
                          <input type="text" class="hideInput comment" v-model="subComment" @keydown.enter="addComment(comment.commentId,comment.postId,item.userId,$event)" placeholder="Reply">
                        </v-row>
                      </v-col>
                    </v-row>
                    <v-row v-for="(subComments,j) in comment.subComments" :key="j" style="text-align:right">
                      <v-col lg="11">
                        <p style="margin:0">{{subComments.commentingUserName}}</p>
                        <p style="margin:0">{{subComments.commentDescription}}</p>
                      </v-col>
                      <v-col lg="1">
                        <v-avatar>
                          <v-img :src="subComments.profilePicture"></v-img>
                        </v-avatar>
                      </v-col>
                    </v-row>
                  <v-divider></v-divider>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
          <v-col lg="4">
             <v-card v-for="(item,n) in adPosts" :key="n" @click="adClicked(item.adId,item.tag,item.advertiserId,item.categoryName,item.description,item.targetUrl)">
               <v-img max-height="400" :contain="true"
                :src="item.imageUrl"
               ></v-img>
                <p>{{item.description}}</p>
             </v-card>
          </v-col>
        </v-row>
  </v-container>
</template>


<script>
import CreatePosts from './CreatePosts'
import axios from 'axios';
export default {
  name: 'Home',
  components: {CreatePosts},
  data: () => ({
    adPosts:[],
    reactionsDialog:false,
    friendsDialog:false,
    commentInput:false,
    bottom: false,
    pageNo:0,
    pageSize:1,
    comment:'',
    subComment:'',
    profileDetails:{},
    friendsList:[],
    posts:[],
    tempPosts:[],
    // length:1
  }),
  methods:{
    adClicked(adId,tag,advertiserId,categoryName,description,targetUrl){
      let payload = {
        adId:adId,
        tag:tag,
        advertiserId: advertiserId,
        categoryName:categoryName,
        userId:localStorage.getItem('accessToken'),
        description:description,
        source:'facebook',
        targetUrl:targetUrl
      }
      window.console.log(payload)
      axios({
        url:'http://172.16.20.83:8080/ads/onclick',
        method:'post',
        data: payload
      }).then(function(response){
        window.console.log(response.data)
        window.open(response.data, '_blank');
      })
      .catch(function(response){
        window.console.log(response)
      })
    },
    getFriendsList(){
      let that = this
      axios.get('/backend/friends/getList/',{
        headers:{
          token:localStorage.getItem('accessToken')
        }
      })
      .then(function(response){
        that.friendsList = response.data.data
        // window.console.log(that.friendsList)
      })
      window.console.log("getfriendslist")
    },
    getReactionsOnPost(){
      window.console.log("getReactionsOnPost")
    },
    addNewComment(postId,userId){
      // let that = this
      let payload = {
        postId: postId,
        userId: userId,
        commentDescription:this.comment,
        commentingUserId:'',
        parentCommentId:null
      }
      window.console.log(payload)
      axios({
        url:'/backend/comment/',
        method:'post',
        headers:{
          token:localStorage.getItem('accessToken')
        },
        data:payload
      })
    },
    showCommentInput(event){
      event.target.nextElementSibling.classList.remove("hideInput")
    },
    likePost(postId){
      axios({
        url:'/backend/reaction/',
        method:'post',
        headers:{token:localStorage.getItem('accessToken')},
        data:{
          reactionType:'like',
          postId: postId
        }
      })
    },
    dislike(postId,postDescription,postImageUrl,counterOfDislilkes){
      let payload = {
        postId:postId,
        postDescription:postDescription,
        postImageUrl:postImageUrl,
        postVideoUrl:null,
        counterOfDislilkes:counterOfDislilkes+1,
        userId:1234,
        source:'facebook',
      }
      window.console.log(payload)
      axios({
        url:'http://172.16.20.161:8090/supportAgent/createTicket',
        method:'POST',
        headers:{
          token:localStorage.getItem('accessToken')
        },
        data:payload
      })
    },
    goToProfile(profileId){
      window.console.log(profileId)
    },
    addComment(commentId,postId,userId,event){
      window.console.log(event)
      let payload = {
        postId: postId,
        userId: userId,
        commentDescription:event.target.value,
        commentingUserId:'',
        parentCommentId: commentId
      }
      window.console.log(payload)
      axios({
        url:'/backend/comment/',
        method:'post',
        headers:{
          token:localStorage.getItem('accessToken')
        },
        data:payload
      })
      .then(function(response){
        window.console.log(response.data)
      })
      event.target.classList.add("hideInput")

    },
     bottomVisible() {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= pageHeight
      return bottomOfPage || pageHeight < visible
    },
     getPosts() {
      let that = this
      axios.get(`/backend/post/newsfeed/${that.pageNo}/${that.pageSize}`,{
        headers:{token:localStorage.getItem('accessToken')}
      })
      .then(function(response){
        window.console.log(response.data)
          if(response.data.data.length>0){
            that.pageNo++;
          }
        response.data.data.forEach(element => {
          that.posts.push(element)
        });
        // window.console.log(that.posts)
      })
    }
  },
  created(){
    let that = this
    axios.get(`http://172.16.20.83:8080/ads/getAds/${localStorage.getItem('accessToken')}`)
    .then(function(response){
      that.tempPosts = response.data
      window.console.log(that.adPosts)
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
    },
    pageNo(pageNo) {
      this.adPosts = []
      for(let i=0;i<=pageNo;i++){
        // this.adPosts.push(this.tempPosts[i])
        let value = Math.floor(Math.random() * this.tempPosts.length)
        this.adPosts.push(this.tempPosts[value])
        this.tempPosts.splice(value,1)
      }
    }
  }
  
};
</script>
<style scoped>
.newsfeed
{
  width: 750px;
  height: 100%;
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
  /* height:900px; */
  background: #e9ebee;
}
.postcreate{
  align-self: left;
}
.boxColor{
  background-color: white!important
}
.boxMarginCenter{
  margin:auto!important
}
.boxTextLeft{
  text-align: left!important
}
.comment{
  width:80%;
  height: 40px;
  background-color: #F2F3F5;
  margin:auto;
  padding:10px;
  margin-top: 10px;
  border-radius: 50px;
  outline: none
}
.hideInput{
  display: none
}
.showInput{
  display:block
}
.like{
  color:blue
}
</style>
