<template>
    <div>
        <mainsection />
        <feature />
    </div>
</template>


<script>
import mainsection from '@/components/mainsection.vue'
import feature from '@/components/feature.vue'

export default {
  name:'Home',
  components: {
    mainsection,
    feature
  }
}
</script>
