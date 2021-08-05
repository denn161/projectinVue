<template>

<div class="slider__container" >
    <div class="slider__wrapper"
    :style="{'marginLeft': '-' + (100*currentIndex) + '%' }" 
  >  
    
    <sliderItem
     v-for= "item in sliderItems"
     :key= "item.id"
    :corusel_data= "item"
   />  

 </div>
    <button @click= "prevSlide" class="btn btn__prev ">prev</button>
     <button @click= "nextSlide" class="btn btn__next ">next</button>

</div>
    


</template>



<script>
import sliderItem from './slider-item.vue'


export default {
    name:'slider',
    props: {
        interval:{
            type:Number,
            default:0

        }
    },
    components:{
        sliderItem,
    },
    data() {
        return{
            sliderItems:[
                {id:1,name:"img1",img:"1.jpg"},
                {id:2,name:"img2",img:"2.jpg"},
                {id:3,name:"img3",img:"3.jpg"},
                {id:4,name:"img5",img:"4.jpg"},
                {id:5,name:"img6",img:"5.jpg"},               
            ],
            currentIndex:0,
        }
        
    },
    methods:{
        prevSlide(){
            if(this.currentIndex>0){
               this.currentIndex--;
            }
          
           
        },
        nextSlide(){
              this.currentIndex++;
            if(this.currentIndex>this.sliderItems.length-1){
                this.currentIndex=0;
            }

          
           

        }
    },
    mounted(){
       let vm=this;
        if(this.interval>0){
            setInterval(function(){
                vm.nextSlide()

            },vm.interval);
        }

    }
}
</script>

<style scoped>
.slider__container{
   max-width:700px;   
   margin: 0 auto; 
   overflow:hidden; 
   position:relative;
   border-radius:20px;

}

.slider__wrapper{
    width: 100%;  
    display:flex; 
    transition:margin 0.3s ease-in-out; 
}

.btn{
    position:absolute;
    z-index:2;
    top: 50%;
    transform: translateY(-50%);
    padding: 5px 10px;
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;
    background-color: rgb(72, 216, 84,.9);
    border: 1px solid transparent;
    border-radius:10px;

}
.btn__prev{
    left: 0px;
    top: 25%;
}
.btn__next{
    right: 0;
    top: 52%;
   
}







</style>
