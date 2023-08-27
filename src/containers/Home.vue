<script>
const moduleMap={
  1:'/coptic'
}
export default {
  name: 'Home Page',
  data: () => ({

  }),
  computed: {
    someDataFromStore() {
      return this.$store.state.someDataFromStore
    }
  },
  methods: {
    setLastName() {
      this.$store.commit('setSomeData', 'Koko')
    },
    goToModule(moduleNumber){
      this.$router.push(moduleMap[moduleNumber]);
    }
  }
}
</script>

<template>
  <button type="button" class="btn btn-primary" @click="goToModule(1)">Module 1</button>
</template>

<style scoped>


</style>
