<template>
<div class="schedule-page">
  <div class="schedule-image"></div>
  <div class="schedule-content">
    <h2 class="schedule-title">Upcoming events</h2>
    <div  
      v-for="(event, index) in events" 
      :key="`${event.name}${index}`"
      class="schedule-container"
    > 
      <div class="event-container">
        <div class="event-date">
          <h3>{{ event.date.month }}</h3>
          <h4>{{ event.date.day }}</h4>
        </div>
        <div class="event-details">
          <h3>{{ event.title }}</h3>
          <h4>{{ event.venue }}</h4>
          <h4>{{ event.city }}, {{ event.state }}</h4>
        </div>
        <div v-if="event.link" class="event-link">
          <button>
            <a :href="event.link" target="_blank">Tickets</a>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import events from '../data/schedule.json';

export default {
  name: 'Schedule',
  data: function () {
    return {
      events: events
    }
  },
}
</script>

<style lang="scss" scoped>
.schedule-page {
  width: 100%;
  height: 100vh;
  position: relative;
  text-align: center;

  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: absolute;
}

.schedule-image {
  height: 100vh;
  width: 40%;
  margin-bottom: 60px;

  background-image: url('~@/assets/images/abby-schedule.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 50%;
  background-position: left;
}

.schedule-content {
  flex: 1;
  overflow-y: scroll;
}

.schedule-title {
  color: $timberwolf;
  margin: 60px 0px 50px;
}

.schedule-container {
  max-width: 640px;
  margin: 0 auto;
}

.event-container {
  width: 100%;
  border-bottom: 1px solid $timberwolf;
  margin: 30px 0px;
  padding: 30px 0px 60px;
  color: $timberwolf;
  text-align: left;

  display: flex;
  flex-direction: row;
  align-items: stretch;

  h1, h2, h3, h4, p {
    margin: 0;
  }
}

.event-date {
  padding: 10px;
  text-align: center;
  border: 1px solid $timberwolf;
  background-color: $timberwolf;
  color: $shark-blue;

  h3 {
    font-size: 16pt;
  }

  h4 {
    font-size: 16pt;
  }
}

.event-details {
  flex: 1;
  padding-left: 20px;
  margin-top: 5px;

  h3 {
    font-size: 16pt;
    max-width: 400px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  h4 {
    font-size: 11pt;
  }
}

.event-link {

  button {
    margin-top: 20px;
    background-color: $timberwolf;

    a {
      color: $shark-blue;
      text-decoration: none;
    }
  }
}
</style>