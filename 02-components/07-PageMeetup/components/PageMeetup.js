import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from '../meetupService.js';
import MeetupView from '../../06-MeetupView/components/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

  data() {
    return {
      meetup: null,
      message: null,
    }
  },

  props: {
    meetupId: {
      type: Number,
      required: true
    }
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  watch: {
    meetupId: {
      immediate: true,
      handler() {
        this.message = "Загрузка...";
        this.meetup = null;
        fetchMeetupById(this.meetupId)
        .then(result => this.meetup = result)
        .catch(error => this.message = error.message)
      }
    }
  },


  template: `
    <div class="page-meetup">
      <!-- meetup view -->
      <MeetupView :meetup="meetup" v-if="meetup !== null"/>

      <UiContainer v-else>
        <UiAlert :text="message"></UiAlert>
      </UiContainer>
    </div>`,
});