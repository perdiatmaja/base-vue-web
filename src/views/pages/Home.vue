<template>
  <div>
    <h1>EXAMPLE</h1>
    <button @click="testAxiosPost">Click to Test Axios Post</button>
  </div>
</template>

<script>
export default {
  methods: {
    testAxiosPost() {
      let param = {
        'email': 'test@test.test',
        'password': 'a'
      }
      
      this.$apiServices.example.post(param).catch(e => {
          console.log(e)
      })
    }
  }
};
</script>