<template>
  <div id="offline-component">
    <div class="container">
      <div class="card">
      <h4 class="card-header">Offline streamers</h4>
        <div class="card-body" v-for="streamer in offlineUsers">
          <span class="card-text">{{ streamer.name }}: <span class="badge badge-danger">{{ streamer.status }}</span></span> <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfflineComponent",
  props: ["offlineUsers"]
};
</script>

<style>

</style>
