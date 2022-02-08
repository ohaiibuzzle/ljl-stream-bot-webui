<template>
  <div class="container-fluid d-flex justify-content-center">
    <ul class="nav navigation-bar">
      <li class="nav-item" v-for="team in teams" :key="team">
        <a class="nav-link" href="#" v-on:click="setActiveTeam">{{ team }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    setActiveTeam(event) {
      event.preventDefault();
      this.$store.commit("setActiveTeam", event.target.text);

      fetch("api/team/" + this.$store.getters.getActiveTeam)
        .then((response) => response.json())
        .then((resp) => {
          this.$store.commit("setActiveTeamPlayers", resp.players);
        });
    },
  },
  created() {
    fetch("api/teams")
      .then((response) => response.json())
      .then((resp) => {
        this.$store.commit("setTeams", resp.teams);
        this.$store.commit("setActiveTeam", resp.teams[0]);
        fetch("api/team/" + this.$store.getters.getActiveTeam)
          .then((response) => response.json())
          .then((resp) => {
            this.$store.commit("setActiveTeamPlayers", resp.players);
          });
      });
  },
  computed: {
    teams() {
      return this.$store.getters.getTeams;
    },
  },
};
</script>

<style>
</style>