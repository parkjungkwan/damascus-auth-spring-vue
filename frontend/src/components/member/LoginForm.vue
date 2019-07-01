<template>
<div>
  <Nav></Nav>
  <form>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="text" class="form-control" id="email" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="text" class="form-control" id="pwd" placeholder="Enter password">
    </div>
    <div class="checkbox">
      <label><input type="checkbox"> Remember me</label>
    </div>
    <button class="btn btn-default" @click="count">count</button>
    <button class="btn btn-default" @click="deleteById">deleteById</button>
    <button class="btn btn-default" @click="existsById">existsById</button>
    <button class="btn btn-default" @click="findAll">findAll</button>
    <button class="btn btn-default" @click="findById">findById</button>
    <button class="btn btn-default" @click="save">save</button>
    
    
  </form>
  <Footer></Footer>
</div>
</template>

<script>
import Nav from '@/components/common/Nav.vue'
import Footer from'@/components/common/Footer.vue'
import axios from 'axios'

export default {
  data(){
    return {
      context: 'http://localhost:9000/customers'
    }
    
  },
  components: {
    Nav,
    Footer
  },
  methods:{
      count(){
         axios.get(`${this.context}/count`)
         .then(res=>{
           
             alert(`count() SUCCESS : ${res.data}`)
         })
         .catch(e=>{
             alert('ERROR')
         })
      },
      deleteById(){
         axios.delete(`${this.context}/1`)
         .then(res=>{
           
             alert(`SUCCESS2 : ${res.data}`)
         })
         .catch(e=>{
             alert('ERROR')
         })
      },
       existsById(){
         axios.get(`${this.context}/exists/1`)
         .then(res=>{
             alert(`existsById() SUCCESS : ${res.data}`)
         })
         .catch(e=>{
             alert('ERROR')
         })
      }
      ,
       findAll(){
         axios.get(`${this.context}`)
         .then(res=>{
           
             alert(`findAll() : ${res.data[0].customerName}`)
         })
         .catch(e=>{
             alert('ERROR')
         })
      },
       findById(){
         axios.get(`${this.context}/1`)
         .then(res=>{
           
             alert(`findById()SUCCESS : ${res.data.customerName}`)
         })
         .catch(e=>{
             alert('ERROR')
         })
      },
       save(){
         axios.post(`${this.context}`)
         .then(res=>{
           
             alert(`SUCCESS2 : ${res.data}`)
         })
         .catch(e=>{
             alert('ERROR')
         })
      }


  }
}
</script>

<style scoped>
</style>