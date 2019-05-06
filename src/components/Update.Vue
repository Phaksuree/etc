<template>
  <div class="Menu">
    <div class="ui top fixed black inverted menu">
        <router-link :to="{ path: '/'}">
        <div class="item">
        <img src="./images/logo.png">
        </div>
        </router-link>
        <router-link :to="{ path: '/contact'}">
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
        <div class="ui segments">
        <!-- <div class="ui raised teal fluid action input segment">
            <a class="ui teal left ribbon label">
        Contacts
            </a>
        <input type="text" placeholder="Search...">
        <button class="ui button">Search</button>
        <button class="ui orange left labeled icon button">
        <i class="add icon"></i>
        Add
         </button>
        </div> -->
    <div class="ui divider"></div>
    <div class="container">  
    <div class="ui raised fluid action input segment">
        <form  class="ui form">
    <div class="field">
        <label>Contact ID</label> <input type="number" placeholder="Contact ID" v-model="User.contact_id">
    </div>
    <div class="field">
        <label>FirstName</label> <input type="text" placeholder="FirstName" v-model="User.first_name">
    </div>
    <div class="field">
        <label>LastName</label> <input type="text" placeholder="LastName" v-model="User.last_name">
    </div>
    <div class="field">
        <label>Mobile No</label> <input type="number" placeholder="Mobile No" v-model="User.mobile_no">
    </div>
    <div class="field">
        <label>Email</label> <input type="text" placeholder="Email" v-model="User.email">
    </div>
    <div class="field">
        <label>Facebook</label> <input type="text" placeholder="Facebook" v-model="User.facebook">
    </div>
    <div class="field">
        <label>Image URL</label> <input type="url" placeholder="Image URL" v-model="User.image_url">
    </div>
    <div class="ui center aligned basic segment">
    <button role="button" type="submit" class="ui blue vertical animated button" @click="updateToAPI">
        <div class="hidden content" >Save</div> 
            <div class="visible content">
            <i class="save icon"></i>
            </div></button>
    <router-link :to="{ path: '/contact'}">  
    <button role="button" class="ui teal vertical animated button">
        <div class="hidden content" >Close</div> 
            <div class="visible content">
            <i class="remove icon"></i>
            </div></button>
    </router-link>
    </div>
        </form>
        </div>
    </div> 
        </div>
    </div>
<!--  -->

  </div>
</template>



<script>

import axios from 'axios';

export default {
  name: 'Menu',
  data () {
    return {
      msg: 'Welcome tcono Your Vue.js App',
      User: {
            contact_id:'',
            first_name:'',
            last_name:'',
            mobile_no:'',
            email:'',
            facebook:'',
            image_url:''
        }
    }
  },
  methods: {
      updateToAPI () {
      console.log(this.$route.params.userId)
      let newUser = {
        contact_id: this.User.contact_id,
        first_name: this.User.first_name,
        last_name: this.User.last_name,
        mobile_no: this.User.mobile_no,
        email: this.User.email,
        facebook: this.User.facebook,
        image_url: this.User.image_url
        
      }
      console.log(newUser)
      axios.put('http://localhost:3000/contacts/update/' + this.$route.params.userId, newUser)
        .then((response) => {
          console.log(response)
          alert('Success !!')
        })
        .catch((error) => {
          console.log(error)
        })
      window.location.reload()
    }

  },
  mounted () {
    axios.get('http://localhost:3000/getOne/' + this.$route.params.userId)
      .then((response) => {
        console.log(response.data)
        this.User = response.data
      })
      .catch((error) => {
        console.log(error)
      })
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
    margin-top: 1rem;
    padding: 3rem;
    text-align: left;
}
.field{
    width: 500px
}


</style>
