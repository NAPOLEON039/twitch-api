<template>
  <div id="online-component">
    <div class="container">
      <div class="card">
        <h4 class="card-header">Online streamers</h4>
        <div class="card-body" v-for="streamer in onlineUsers">
          <span class="card-text">{{ streamer.name }}: <span class="badge badge-success">{{ streamer.status }}</span></span> <br> 
          <a class="card-text" :href="streamer.link">Click here to visit the streamer</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OnlineComponent",
  props: ["onlineUsers"]
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
</style>

