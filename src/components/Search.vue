<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;<button @click="searchUser">Search</button>
      </div>
    </section>

</template>

<script>
import axios from 'axios'
export default {
  name: "Search",
  props:["getUsers"],
  data(){
    return {
      keyWord:""
    }
  },
  methods:{
    searchUser(){
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response =>{
            this.getUsers(response.data.items)
          },
          error =>{
            console.log("请求失败了", error.message)
          }
      )
    }
  }
}
</script>

<style scoped>

</style>