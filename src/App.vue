<template>
  <div class="container-fluid">
    <div class="row">
      <div class="container-fluid">
        <h1 class="text-center h1">{{ title }}</h1>
        <h2 class="text-center h4">{{ subtitle }}</h2>
        <NavigationBar />
      </div>
    </div>
    <div class="row">
      <div class="container-fluid">
        <TeamOnlineDisplay />
      </div>
    </div>
    <div class="row">
      <span class="text-primary text-center"
        >*A Discord version of this bot is available on
        <a href="https://discord.gg/6bGNeRYUsc"
          >LJLOfficiallyUnofficial</a
        ></span
      >
    </div>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import TeamOnlineDisplay from "./components/TeamOnlineDisplay.vue";

export default {
  name: "App",
  data() {
    return {
      title: "LJL Stream Tracker",
      subtitle: "Updated every 5 minutes (or so)",
      footer: "I am the bottom (text)",
    };
  },
  components: {
    NavigationBar,
    TeamOnlineDisplay,
  },
  created() {
    fetch("/api/last_update")
      .then((response) => response.json())
      .then((resp) => {
        this.subtitle =
          "Updated every 5 minutes (or so). Last updated: " + resp.time;
      });
  },
};
</script>
