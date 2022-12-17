<template>
  <div class="container">
    <search :getUsers="getUsers"></search>
    <List :searchItems="searchItems"></List>
  </div>
</template>

<script>
import List from "@/components/List";
import Search from "@/components/Search";
	export default {
		name:'App',
    components:{Search,List},
    data(){
      return{
        searchItems:[]
      }
    },
    methods :{
      getUsers(searchItems){
        console.log("APP收到数据")
        this.searchItems = searchItems
      }
    }
  }
</script>

<style scoped>

</style>
