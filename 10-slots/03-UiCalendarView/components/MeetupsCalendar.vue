<template> 
  <UiCalendarView v-slot="{ date }" :currentMonth="currentMonth" @newMonth="newCurrentMonth($event)">
    <UiCalendarEvent v-for="meetup in getMeetups(date)" :key="meetup.id"  tag="a" :href="`/meetups/${meetup.id}`">
      {{ meetup.title }}
    </UiCalendarEvent>
  </UiCalendarView>
</template>

<script>
import UiCalendarView from './UiCalendarView.vue';
import UiCalendarEvent from './UiCalendarEvent.vue';

export default {
  name: 'MeetupsCalendar',

  components: {
    UiCalendarEvent,
    UiCalendarView,
  },

  data() {
    return {
      currentMonth: null,
    }
  },

  created() {
    const date = new Date();
    this.currentMonth = (new Date(date.getFullYear(), date.getMonth(), 1));
  },

  props: {
    meetups: {
      type: Array,
      required: true,
    },
  },

  computed: {
    monthMeetups() {
       return this.meetups.filter(item => {
        const meetDate = new Date(item.date);
        return meetDate.getMonth() === this.currentMonth.getMonth()
            && meetDate.getFullYear() === this.currentMonth.getFullYear()
      })
    }
  },

  methods: {
    getMeetups(date) {
      const curDate = new Date(date);
      return this.monthMeetups.filter(item => {
        const meetDate = new Date(item.date);
        return meetDate.getDate() === curDate.getDate()
      })
    },

    newCurrentMonth(event) {
      this.currentMonth = new Date(event);
    }
  },


};
</script>

<style scoped></style>
