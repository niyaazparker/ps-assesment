<template>
    <Slide>
       

            <ul class="mainNav">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/">Specials</router-link></li>
            <li class="dropdown">
              <router-link to="/">Shop Brands</router-link>
              <ul class="dropdown-content">
                <li><router-link to="/shopbrands">All</router-link></li> 
                <li><router-link to="/">Health Renewal</router-link></li>  
                <li><router-link to="/">Heliocare</router-link></li>
                <li><router-link to="/">iSkin Collagen</router-link></li>
                <li class="dropdown">
                  <router-link to="/">Lamelle</router-link>
                      <ul class="dropdown-content">
                        <li><router-link to="/">All</router-link></li> 
                        <li><router-link to="/">Health Renewal</router-link></li>  
                        <li><router-link to="/">Heliocare</router-link></li>
                        <li><router-link to="/">iSkin Collagen</router-link></li>
                      </ul>
                  </li>
                <li><router-link to="/">Lumixyl</router-link></li>
                <li><router-link to="/">Lycogel</router-link></li>
                <li><router-link to="/">NeoRetin</router-link></li>
                <li><router-link to="/">NeoStrata</router-link></li>
                <li><router-link to="/">RID</router-link></li>
                <li><router-link to="/">Skin Store</router-link></li>
                <li><router-link to="/">SkinCeuticals</router-link></li>
              </ul>
            </li>
            <li><router-link to="/">Shop Product Type</router-link></li>
            <li><router-link to="/">Doctors</router-link></li>
            <li><router-link to="/">Contact us</router-link></li>
            <li>
              <counter />
            </li>
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
