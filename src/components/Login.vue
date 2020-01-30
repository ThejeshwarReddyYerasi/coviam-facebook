<template>
  <main>
    <body>
      <div class="Login">
        <h3>LOGIN</h3>
        <div>
          <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark" style="margin-top:10%"></div>
          <input
            v-model="username"
            class="username input"
            type="text"
            placeholder="username"
          />
          <input
            v-model="password"
            class="password input"
            type="Password"
            placeholder="Password"
          /> 
          <div class="Loginbuttoncontainer">
            <button @click="submitClicked" class="submitbutton">Login</button>
          </div>
        </div>
      </div>
      <router-view />
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
  background-color: #e9e9e9;
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

.submitbutton {
  padding: 10px 30px 10px 30px;
  background-color:#4267B2;
  color: white;
  border-radius: 10px;
  cursor: pointer;
transition: all 0.4s ease 0s;
}
.submitbutton:hover{
    background: #0C8699;
}
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
