<template>
  <div id="all-component">
      <div class="container">
        <div class="card">
            <h4 class="card-header">All streamers</h4>
            <div class="card-body" v-for="user in allUsers">
                <span class="card-text">{{ user.name }}: <span class="badge" :class="{'badge-success': user.status === 'online', 'badge-danger': user.status === 'offline'}">{{ user.status }}</span></span> <br>
                <a class="card-text" :href="user.link" v-if="user.link !== '#'">Click here to view the streamer</a>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "AllComponent",
  props: ["allUsers"]
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}
</style>
