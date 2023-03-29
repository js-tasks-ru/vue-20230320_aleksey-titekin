import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',

  agendaItemIcons, 
  agendaItemDefaultTitles,

  props: {
    agendaItem: {
      type: Object,
      required: true,
    }
  },

  computed: {
    itemTitle() {
      return this.agendaItem.title !==null ? this.agendaItem.title : agendaItemDefaultTitles[this.agendaItem.type] ;
    },

    iconAlt() {
      return agendaItemIcons[this.agendaItem.type];
    },

    iconSrc() {      
      return '/assets/icons/icon-' + this.iconAlt + '.svg';
    }
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="iconSrc" class="icon" :alt="iconAlt" />
      </div>
      <div class="agenda-item__col">{{ agendaItem.startsAt }} - {{ agendaItem.endsAt }}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{ itemTitle }}</h3>
        <p class="agenda-item__talk" v-if="agendaItem.type === 'talk'">
          <span>{{ agendaItem.speaker }}</span>
          <span class="agenda-item__dot"></span>
          <span class="agenda-item__lang">{{ agendaItem.language }}</span>
        </p>
        <p v-if="agendaItem.description !== null">{{ agendaItem.description }}</p>
      </div>
    </div>`,
});
