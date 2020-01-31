<template>
  <main>
    <body>
      <div class="Login">
        <h3 style="margin-top:20px">Sign In</h3>
        <div>
          <div style="margin-top:10%"></div>
          <input
            v-model="username"
            class="username input"
            type="text"
            placeholder="Email"
          />
          <input
            v-model="password"
            class="password input"
            type="Password"
            placeholder="Password"
          /> 
          <div class="Loginbuttoncontainer">
            <v-btn @click="submitClicked" class="button">Login</v-btn>
          </div>
          <div>
            <v-btn @click="$router.push({path:'/signup'})" class="button">Sign Up</v-btn>
          </div>
        </div>
      </div>
    </body>
  </main>
</template>

<script>
export default {
 
  name: "login",
  data: function() {
    return {
      username: "",
      password: "",
      loginType: "customer"
    };
  },  
  methods: {
    submitClicked() {
      //let self = this
      let data = {
        email: this.username,
        password: this.password,
      };
      this.$store.dispatch("loginUser", {
        data: data,
        success: function() {  
          this.$router.push('/home')
        }, 
        fail: function() {
          window.console.log("login failed ...");
        }
      });
    }
  }
};
</script>
<style scoped>
.Login {
  background-color: white;
  margin-left: 30%;
  margin-right: 30%;
  padding-bottom: 30px;
  padding-top: 2px;
  padding-left: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-top: 100px;
}
.input {
  border: 0.5px solid rgba(201, 196, 196, 0.952);
  display: block;
  margin-top: 10px;
  align-self: center;
  width: 90%;
  margin-bottom: 20px;
  padding: 5px;
  outline: none
}
.fa {
  padding: 20px;
  font-size: 30px;
  width: 50px;
  text-align: center;
  text-decoration: none;
}
.typecontainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.type {
  margin: 5px;
}

.button{
  background-color: #4267B2!important;
  width: 60%;
  color: white;
  margin: 30px
}
/* .submitbutton:hover{
    background: #0C8699;
} */
.Loginbuttoncontainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.socialloginContainer {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
