<template>
  <div class="schedule-page">
    <div class="schedule-title">
      <h2 v-bind:style="windowWidth < 768 ? { top: 0 } : { top: slideTitle + 'px' }">UPCOMING</h2>
      <h3 class="t1" v-bind:style="windowWidth < 768 ? { top: 0 } : { top: slideSubtitle + 'px' }">EVENTS</h3>
    </div>
    <div class="schedule-list">
      <div 
        v-for="(event, index) of events"
        :key="index"
        class="event" 
        :style="{ top: slideList + 'px' }"
      >
        <div class="date">
          <span class="month" v-html="event.date.month"></span>
          <br />
          <span class="day" v-html="event.date.day"></span>
          <br />
          <span class="year" v-html="event.date.year"></span>
        </div>
        <div class="details">
          <h4 v-html="event.title"></h4>
          <h5 v-html="event.subtitle"></h5>
        </div>
      </div>
    </div>
    <div class="schedule-image">
      <img :src="require('@/assets/images/abby-schedule.jpg')">
    </div>
  </div>
  </template>
  
  <script>
  import events from '../data/schedule.json'

  export default {
    name: 'Schedule',
    data: function () {
      return {
        events: events,
        windowWidth: window.innerWidth,
        slideTitle: '70',
        slideSubtitle: '200',
        slideList: '350'
      }
    },
    methods: {
      handleScroll() {
        this.slideTitle = Math.max(70 - 0.4*window.scrollY, 0);
        this.slideSubtitle = Math.max(200 - 0.3*window.scrollY, 0);
        this.slideList = Math.max(350 - 0.2*window.scrollY, 0);
      },
      onResize() { this.windowWidth = window.innerWidth; }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.onResize);
    },
    unmounted () {
      window.removeEventListener('scroll', this.handleScroll);
      window.removeEventListener('resize', this.onResize);
    },
  }
  </script>
  
  <style lang="scss">
  $content-base: 13%;
  
  .schedule-page {
    width: 100%;
    height: 100vh;
    position: absolute;
    color: $shark-blue;
  }
  
  .schedule-image img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    position: absolute;
    display: none;
  }
  
  .schedule-title {
    padding: 100px 0px 60px 40px;
  
    h2 {
      margin: 0;
      z-index: 10;
  
      font-size: 10vw;
      line-height: 10vw;
      font-family: "Archivo Black";
    }
  
    h3 {
      margin: 0;
      z-index: 10;
  
      font-size: 8vw;
      line-height: 8vw;
    }
  }

  .event {
    max-width: 95%;
    margin-bottom: 100px;
    padding-left: 40px;

    h4 {
      margin: 0;
      font-weight: bold;
      font-size: 16pt;
    }

    h5 {
      margin: 0;
      font-size: 12pt;
    }

    .date {
      height: 100px;
      float: left;
      padding-right: 20px;
      font-family: "Archivo Black";
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
      line-height: 22pt;
    }

    .month {
      font-size: 19pt;
    }

    .day {
      font-size: 32pt;
    }

    .year {
      font-size: 16pt;
      position: relative;
      top: -10px;
    }

    .details {
      padding-left: 20px;
    }
  }
  
  @media only screen and (min-width: 768px) {
    .schedule-page {
      position: absolute;
    }

    .schedule-image {
      text-align: right;
    }
  
    .schedule-image img {
      width: 40%;
      height: 100%;
      position: relative;
      object-fit: fill;
      display: inline;
      margin-top: -140px;
    }
  
    .schedule-title {
      margin-bottom: 50px;

      h2 {
        position: absolute;
      }
  
      h3 {
        position: absolute;
      }
    }
  
    .schedule-list {
      width: 50%;
      padding-left: 10px;
      position: absolute;
      top: 400px;
    }
  }
  
  </style>