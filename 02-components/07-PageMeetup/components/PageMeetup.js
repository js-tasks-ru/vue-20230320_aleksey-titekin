import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import { fetchMeetupById } from '../meetupService.js';
import MeetupView from '../../06-MeetupView/components/MeetupView.js';

export default defineComponent({
  name: 'PageMeetup',

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

  computed: {
    meetup() {
      const value = fetchMeetupById(this.meetupId);
      return value;
    }
  },

  template: `
    <div class="page-meetup">
      <!-- meetup view -->
      <MeetupView :meetup="meetup.result" v-if="meetup.state === 'fulfilled'"/>

      <UiContainer v-if="meetup.state === 'pending'">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer v-if="meetup.state === 'rejected'">
        <UiAlert>error</UiAlert>
      </UiContainer>
    </div>`,
});
