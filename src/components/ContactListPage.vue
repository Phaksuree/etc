<template>
  <div class="ContactListPage" >
    
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
        <div class="ui raised segments">
        <div class="ui raised segment">
        <div class="ui raised teal fluid action input segment">
            <a class="ui teal left ribbon label">
        Contacts
            </a>
        <input type="text" placeholder="Search..." v-model="search">
        <button class="ui button" @click="searchValue">Search</button>
        <a href="/#/Add">
        <button class="ui orange left labeled icon button">
        <i class="add icon"></i>
        Add
         </button>
        </a>
        </div>

        <div class="ui divider"></div>
        <div class="ui raised fluid action input segment">
        
        <div class= "ui three column grid">
        <div v-for="User in userfilterd" v-bind:key="User._id">
        <div class="ui card">
          <img v-bind:src="User.image_url" class="ui image">
          <div class="content">
            <div class="header">{{User.first_name}}  {{User.last_name}}</div>
            <div class="meta">Mobile : {{User.mobile_no}}</div>
            <div class="meta">Email : {{User.email}}</div>
            <div class="meta">Facebook : {{User.facebook}}</div>
            
          </div>
          <div class="extra content">
            <router-link :to="{ path: '/updateuser/' + User._id}">
            <button role="button" class="ui blue vertical animated button">
            <div class="hidden content" >Edit</div> 
            <div class="visible content">
            <i class="edit icon"></i>
            </div>
            </button>
            </router-link>
            <button role="button" class="ui red vertical animated button" v-on:click="delUserByfirstname(User.first_name)">
            <div class="hidden content">Delete</div> 
            <div class="visible content">
            <i class="eraser icon"></i>
            </div>
            </button> 
          </div>
        </div>
        </div>
      </div>
        </div>

        <!-- <div id="myModal" class="ui modal">
        <i class="close icon"></i>
        <div class="header">
          Profile Picture
        </div>
        <div class="image content">
          <div class="ui medium image">
            <img src="/images/avatar/large/chris.jpg">
          </div>
          <div class="description">
            <div class="ui header">Are you sure?</div>
            <p>Are you sure you want to delete this item?</p>
          </div>
        </div>
        <div class="actions">
          <router-link :to="{ path: '/contact'}"> 
          <button role="button" type="submit" class="ui blue vertical animated button">
              <div class="hidden content" >Close</div> 
                  <div class="visible content">
                  <i class="remove icon"></i>
                  </div></button>
          </router-link>
          <router-link :to="{ path: '/contact'}"> 
          <button role="button" class="ui red vertical animated button">
              <div class="hidden content" >Delete</div> 
                  <div class="visible content">
                  <i class="eraser icon"></i>
                  </div></button>
          </router-link>
        </div>
      </div>  -->
        </div>
        </div>
    </div>
    

  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'ContactListPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Users: [],
      uid: '',
      search: '' ,
      userfilterd: [],
    }
  },
  methods:{
    searchValue: function(){
       this.userfilterd = this.Users.filter(el =>{
         return el.first_name.match(this.search) || 
                 el.last_name.match(this.search) 
       })
    },
    // delUser(userId){
    //   var url = 'http://localhost:3000/contacts/delete/'+userId
    //   axios.delete(url)
    //     .then((response)=>{
    //       console.log('Delete UserId: '+userId)
    //       alert('Deleted !!!!')
    //     })
    //     .catch((error)=>{
    //       console.log(error)
    //     })
    //     window.location.reload()
    // },
    delUserByfirstname(first_name){
      axios.delete('http://localhost:3000/contacts/delete' ,{data:{first_name:first_name}})
        .then((response)=>{
          console.log('Delete first_name: '+first_name)
          alert('Deleted !!!!')
        })
        .catch((error)=>{
          console.log(error)
        })
        window.location.reload()
    }
    // DELETE(id){
    //   $('#myModal').modal('show')
    //   this.uid = id
    // }

  },
    
  mounted(){
    axios.get('http://localhost:3000/contacts/getMany')
      .then((response)=>{
        console.log(response.data)
        this.Users = response.data
        this.userfilterd = response.data
      })
      .catch((error)=>{
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
    text-align: center;
}


</style>
