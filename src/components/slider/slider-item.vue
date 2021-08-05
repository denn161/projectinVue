<template>

<div class="slider__item">
    <img class="slider__img" :src= "require('./img/' + corusel_data.img)" alt="photo">



</div>
    


</template>



<script>


export default {
    name:'corusel__item',
    props:{
        corusel_data:{
            type:Object,
            default:()=>{},
        }
    }
  
}
</script>

<style scoped>




.slider__img{
    display:block;
    width:700px;
    object-fit: contain;
  
}




</style>
