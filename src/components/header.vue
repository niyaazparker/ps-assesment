<template>
<div id="head">
<header  class="header">


       <div class="theTop">
          <div class="container">
            <div class="showmobile hidedesktop m-menu"><mobilemenuLeft /></div>
           <div class="showmobile hidedesktop t-menu"><mobilemenuRight /></div>
            <ul id="TopNav" class="topNav hidemobile showdesktop" role=navigation>
              <li> <router-link to="/">Part of the Renewal Institute</router-link></li>
              <li><router-link to="/">Store</router-link></li>
              <li><router-link to="/">Skin Renewal</router-link></li>
              <li><router-link to="/">Body Renewal</router-link></li>
              <li><router-link to="/">Health Renewal</router-link></li>
              <li><router-link to="/">Brain Renewal</router-link></li>
              <li><router-link to="/">Sleep Renewal</router-link></li>
            </ul>
            
          </div>
       </div>
    <div class="theMain  hidemobile showdesktop">
        <div class="container">
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
        
        </div>
    </div>
    </header>
  
  </div>
  </template>

<script>
import counter from './counter.vue'
import mobilemenuLeft from './mobilemenuLeft.vue'
import mobilemenuRight from './mobilemenuRight.vue'

export default {
    name:'tophead',
    components: {
    counter,
    mobilemenuLeft,
    mobilemenuRight,
  }
}
</script>

