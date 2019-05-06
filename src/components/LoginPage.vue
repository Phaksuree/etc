<template>
  <div class="LoginPage">
    <div class="ui top fixed black inverted menu">
        <router-link :to="{ path: '/'}">
        <div class="item">
        <img src="./images/logo.png">
        </div>
        </router-link>
        <router-link :to="{ path: '/'}"  >
        <div class="item">
        <a class="ui item">Contacts</a>
        </div>
        </router-link>
        
        <div class="ui icon inverted right menu">
        <router-link :to="{ path: '/'}">
        <div class="item">
          <a>
        <i class="large user icon"></i>
          </a>
        </div>
        </router-link>
        </div>
    </div>

    <div class="container">
        <div class="ui raised segment">
        <div class="ui raised teal fluid action input segment">
            <a class="ui huge teal true ribbon label">
        Login
            </a>
        </div>
        <form  class="ui form" action="#" @submit.prevent="login">
        <div class="field">
        <label>User Account</label> <input type="text" placeholder="User Account" v-model="Account.username">
        </div>
        <div class="field">
        <label>Password</label> <input type="password" placeholder="Password" v-model="Account.password">
        </div>
        <p> User : phaksuree </p>
        <p> Password : 12345678 </p>
        <button role="button" class="ui button" type="button" @keyup.enter="logIn()" @click="logIn()">Login</button>
        </form>
        </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App' ,
      Account: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
     logIn() {
       axios.get('http://localhost:3000/userAuth/'+ this.username)
      .then((response)=>{
        if(this.Account.username != "" && this.Account.password != "") {
        if(this.Account.username == response.data.username && 
        this.Account.password == response.data.password) {
            //this.$emit("authenticated", true);
            this.$router.replace('/contact');
            alert("Welcome")
        } else {
          
            alert("The username and / or password is incorrect");
        }
        } else {
          
            alert("A username and password must be present");
        }
      })
      .catch((error)=>{
        console.log(error)
      })
     }

  },
  mounted(){
    //this.$emit("authenticated", false);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container {
    /* margin-top: 10rem;
    margin-left: 30rem;
    margin-right: 30rem; */
    margin-top: 1rem;
    padding: 3rem;
    text-align: left;
}

</style>
