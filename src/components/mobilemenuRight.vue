<template>

    <Slide right>
     <ul class="mainNav" role=navigation>
              <li> <router-link to="/">Part of the Renewal Institute</router-link></li>
              <li><router-link to="/">Store</router-link></li>
              <li><router-link to="/">Skin Renewal</router-link></li>
              <li><router-link to="/">Body Renewal</router-link></li>
              <li><router-link to="/">Health Renewal</router-link></li>
              <li><router-link to="/">Brain Renewal</router-link></li>
              <li><router-link to="/">Sleep Renewal</router-link></li>
            </ul>
    </Slide>
</template>

<script>
import { Slide } from 'vue-burger-menu'  
export default {
    components: {
        Slide
    }
}
</script>


