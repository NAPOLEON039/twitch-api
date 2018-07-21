<template>
  <div id="main-component">
      <div class="navbar navbar-light bg-light container">
       <span><input type="radio" name="users" id="all" @change="visible='all'">&nbsp;<label for="all" class="badge-pill badge-primary">All Users</label></span>
       <span><input type="radio" name="users" id="online" @change="visible='online'">&nbsp;<label for="online" class="badge-pill badge-success">Online Users</label></span>
       <span><input type="radio" name="users" id="offline" @change="visible='offline'">&nbsp;<label for="offline" class="badge-pill badge-secondary">Offline Users</label></span>
      </div>
      <AllComponent :all-users="usersToShow" v-if="visible==='all'"/>
      <OnlineComponent :online-users="usersToShow" v-if="visible==='online'"/>
      <OfflineComponent :offline-users="usersToShow" v-if="visible==='offline'"/>
  </div>
</template>

<script>
import AllComponent from "@/components/AllComponent";
import OnlineComponent from "@/components/OnlineComponent";
import OfflineComponent from "@/components/OfflineComponent";

export default {
  name: "MainComponent",
  components: {
    AllComponent,
    OnlineComponent,
    OfflineComponent
  },
  data() {
    return {
      visible: null,
      usersToShow: [],
      users: [
        {
          stream: {
            display_name: "FreeCodeCamp",
            name: "freecodecamp",
            logo:
              "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
            url: "https://www.twitch.tv/freecodecamp"
          }
        },
        {
          stream: "",
          display_name: "OgamingSC2"
        },
        {
          stream: {
            display_name: "ESL_SC2",
            game: "StarCraft II",
            logo:
              "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
            url: "https://www.twitch.tv/esl_sc2"
          }
        },
        {
          stream: "",
          display_name: "noobs2ninjas"
        }
      ]
    };
  },
  methods: {
    showAllUsers() {
      this.usersToShow = [];
        let streamerStatus = "";
        let streamerName = "";
        let streamerLink = "#";
        this.users.forEach(user => {
          streamerStatus = "";
          streamerName = "";
          streamerLink = "#";
          if (typeof user.stream === "string") {
            streamerStatus = "offline";
            streamerName = user.display_name;
          } else {
            streamerStatus = "online";
            streamerName = user.stream.display_name;
            streamerLink = user.stream.url;
          }
          this.usersToShow.push({
            status: streamerStatus,
            name: streamerName,
            link: streamerLink
          });
        });
    },
    showOnlineUsers() {
      this.usersToShow = [];
      let streamerStatus = "";
      let streamerName = "";
      let streamerLink = "#";
      this.users.forEach(user => {
        streamerStatus = "";
        streamerName = "";
        streamerLink = "#";
        if (typeof user.stream === "object") {
          streamerStatus = "online";
          streamerName = user.stream.display_name;
          streamerLink = user.stream.url;

          this.usersToShow.push({
            status: streamerStatus,
            name: streamerName,
            link: streamerLink
          });
        }
      });
    },
    showOffineUsers() {
      this.usersToShow = [];
      let streamerStatus = "";
      let streamerName = "";
      let streamerLink = "#";
      this.users.forEach(user => {
        streamerStatus = "";
        streamerName = "";
        streamerLink = "#";
        if (typeof user.stream === "string") {
          streamerStatus = "offline";
          streamerName = user.display_name;

          this.usersToShow.push({
            status: streamerStatus,
            name: streamerName,
            link: streamerLink
          });
        }
      });
    }
  },
  watch: {
    visible() {
      if (this.visible === "all") {
        this.showAllUsers();
      } else if (this.visible === "online") {
        this.showOnlineUsers();
      } else if (this.visible === "offline") {
        this.showOffineUsers();
      }
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
}
</style>
