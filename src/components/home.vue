<template>
    <div>
        <mainsection />
        <feature />
    </div>
</template>


<script>
import mainsection from './mainsection.vue'
import feature from './feature.vue'

export default {
  name:'Home',
  components: {
    mainsection,
    feature
  }
}
</script>
