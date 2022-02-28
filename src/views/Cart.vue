<template>
  <div class="post">
      <div v-if="loading" class="loading">Loading....</div>

      <div v-if="error" class="error"> {{ error }}</div>

      <div v-if="post" class="content">
          <h2>{{ post.title }}</h2>
          <p>{{ post.img }}</p>
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
        loading: false,
        post: null,
        error: null,
    }
  }
}
</script>

<style>

</style>