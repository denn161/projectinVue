<template>

 
<div class="main-page">
  <h1>Online Shop</h1>
  <router-link class="main-page__link" :to= "{name:'Catalog'}"><p>Catalog</p></router-link>

  
  <slider
 />
  

</div>
    
</template>

<script>
import slider from '../slider/slider.vue'

export default{
  components:{
    slider
  }
   
}
</script>


<style scoped>

.main-page{
   width: 100%;
   height: 100vh;  
   margin-top: 100px;
    text-align: center;
}
.main-page__link{
    display:block;
    text-decoration: none;
    color:green;
    text-transform: uppercase;
    font-weight:700;
 }
.main-page__img{
  width:100%;
  height:100vh;
  margin:0 auto;
  display:flex;
  justify-content:center;
  background: url('guitarShop1.jpg') no-repeat;
  background-position: center top;
  background-size:40%;
}



</style>
