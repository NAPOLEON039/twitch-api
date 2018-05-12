<template>
  <div id="all-component">
      <h4>All streamers</h4>
      <ul>
          <li v-for="user in allUsers">
              {{ user.name }}: {{ user.status }}
              <a :href="user.link">View more info</a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "AllComponent",
  props: ["allUsers"]
};
</script>

<style>

</style>
