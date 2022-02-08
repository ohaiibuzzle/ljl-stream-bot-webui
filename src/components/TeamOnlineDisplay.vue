<template>
  <div class="container-fluid">
    <h3 v-if="activeTeamName != 'All'" class="text-left">
      <a :href="'https://lol.fandom.com/wiki/' + activeTeamName">{{
        activeTeamName
      }}</a>
    </h3>
    <h3 v-else class="text-left">All Teams</h3>
    <table class="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th>Player</th>
          <th>Twitter</th>
          <th>Stream</th>
          <th>Platform</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="player in players" :key="player.Pos">
          <td>{{ player.Name }}</td>
          <td>
            <a :href="'https://twitter.com/' + player.Twitter">{{
              player.Twitter
            }}</a>
          </td>
          <td v-if="player.Platform == 'Twitch'">
            <a :href="'https://twitch.tv/' + player.StreamName">{{
              player.StreamName
            }}</a>
          </td>
          <td v-else-if="player.Platform == 'OPENREC.tv'">
            <a :href="'https://openrec.tv/user/' + player.StreamName">{{
              player.StreamName
            }}</a>
          </td>
          <td v-else>{{ player.StreamName }}</td>
          <td>{{ player.Platform }}</td>
          <td v-if="player.Status == 1">
            <b-icon-check-circle-fill /><b
              class="text-success"
              style="padding-left: 10px"
            >
              Online
            </b>
          </td>
          <td v-else-if="player.Status == 0">
            <b-icon-x-circle-fill /><b
              class="text-danger"
              style="padding-left: 10px"
            >
              Offline
            </b>
          </td>
          <td v-else>
            <b-icon-question-circle-fill /><b
              class="text-warning"
              style="padding-left: 10px"
            >
              UNKNOWN :(
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    activeTeamName() {
      return this.$store.getters.getActiveTeam;
    },
    players() {
      return this.$store.getters.getActiveTeamPlayers;
    },
  },
};
</script>

<style>
</style>