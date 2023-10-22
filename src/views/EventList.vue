<script setup>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js"

import { ref, onMounted } from "vue";

const events = ref(null);

onMounted(() => {
  // get events from database
  EventService.getEvents()
    .then((response) => {
      // dostop do axios ce je json iz drf
      events.value = response.data.results;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  <h1>Events For Good</h1>
  <div v-if="events" class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
