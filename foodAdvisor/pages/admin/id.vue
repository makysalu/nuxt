<template>
  <div>
    {{ $route.params.id }}
    {{ restaurant }}
  </div>
</template>

<script>
import { db } from '~/plugins/firebase'
export default {
  data() {
    return {
      restaurant: null
    }
  },
  created() {
    const response = db.collection('restaurants').doc(this.$route.params.id).get()
    response.then(doc => {
      if(doc.exists) {
        this.restaurant = doc.data()
      }
    })
  }
}
</script>

<style scoped>

</style>