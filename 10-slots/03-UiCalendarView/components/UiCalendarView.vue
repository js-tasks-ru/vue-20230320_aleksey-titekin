<template> 
  <div class="calendar-view">
    <div class="calendar-view__controls">
      <div class="calendar-view__controls-inner">
        <button class="calendar-view__control-left" type="button" aria-label="Previous month" @click="onClickPrevMonth"></button>
        <div class="calendar-view__date">{{ currentMonthFormatted }}</div>
        <button class="calendar-view__control-right" type="button" aria-label="Next month" @click="onClickNextMonth"></button>
      </div>
    </div>
    <div class="calendar-view__grid">
      <div  v-for="day in arrayDays" :key="day.id" class="calendar-view__cell" :class="{'calendar-view__cell_inactive': !day.isCurrentMonth}" tabindex="0">
        <div class="calendar-view__cell-day">{{ day.day }}</div>
        <div class="calendar-view__cell-content">
          <slot :date="day.date"/> 
        </div>
      </div>
    </div>    

    <!--
    <div class="calendar-view__grid">
      <div class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">26</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">27</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">28</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">29</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">30</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">1</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      



      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">2</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">3</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">4</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">5</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">6</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">7</div>
        <div class="calendar-view__cell-content">
          <slot />
        </div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">8</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      



      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">9</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">10</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">11</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">12</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">13</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">14</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">15</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      


      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">16</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">17</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">18</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">19</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">20</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">21</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">22</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      



      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">23</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">24</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">25</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">26</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">27</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">28</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">29</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      



      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">30</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell" tabindex="0">
        <div class="calendar-view__cell-day">31</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">1</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">2</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">3</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">4</div>
        <div class="calendar-view__cell-content"></div>
      </div>
      <div class="calendar-view__cell calendar-view__cell_inactive" tabindex="0">
        <div class="calendar-view__cell-day">5</div>
        <div class="calendar-view__cell-content"></div>
      </div>
    </div>
    -->
  </div>
</template>

<script>
export default {
  name: 'MeetupsCalendar',

  emits: ['newMonth'],

  props: {
    currentMonth: {
      type: Date,
      default: new Date(),
    },
  },

  computed: {
    currentMonthFormatted() {
      return this.currentMonth.toLocaleDateString(navigator.language, {
        month: 'long',
        year: 'numeric',
      })
    },
    arrayDays() {
      const arrDays = [];
      let id = 0;
      
      const firstDay = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth(), 1);
      const lastDay = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0);

      let date = new Date(firstDay);
      
      while (date <= lastDay) {
        id++;
        arrDays.push({
          'id':id, 
          'day': date.getDate(), 
          'date': Date.parse(date), 
          'isCurrentMonth': true, 
        });
        date.setDate(date.getDate() + 1);
      }

      while (date.getDay() != 1 ) {
        id++;
        arrDays.push({
          'id':id, 
          'day': date.getDate(), 
          'date': Date.parse(date), 
          'isCurrentMonth': false,
        });
        date.setDate(date.getDate() + 1);
      }
 
      date = new Date(firstDay);
      while (date.getDay() != 1 ) {
        id++;
        date.setDate(date.getDate() - 1); 
        arrDays.unshift({
          'id':id, 
          'day': date.getDate(), 
          'date': Date.parse(date), 
          'isCurrentMonth': false,
        });
      }
  
      return arrDays;
    },
  },

  methods: {
    onClickPrevMonth() {
      const  newMonth =new Date(this.currentMonth.setMonth(this.currentMonth.getMonth() - 1));
      this.$emit('newMonth', Date.parse(newMonth))
    },

    onClickNextMonth() {
      const  newMonth =new Date(this.currentMonth.setMonth(this.currentMonth.getMonth() + 1));
      this.$emit('newMonth', Date.parse(newMonth))
    },
  }
};
</script>

<style scoped>
.calendar-view {}

.calendar-view__controls {
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 1;
  color: var(--blue);
  background-color: var(--blue-extra);
  padding: 24px;
  display: flex;
  justify-content: center;
}

.calendar-view__controls-inner {
  max-width: 325px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
}

.calendar-view__controls-inner button {
  border: none;
  padding: 0;
}

.calendar-view__control-left,
.calendar-view__control-right {
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s all;
  background: url('@/assets/icons/icon-pill-active.svg') left center no-repeat;
  background-size: cover;
}

.calendar-view__control-left:hover,
.calendar-view__control-right:hover {
  opacity: 0.8;
}

.calendar-view__control-right {
  transform: rotate(180deg);
}

.calendar-view__grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}

.calendar-view__grid {
  border: 1px solid var(--grey);
  border-bottom: none;
}

.calendar-view__cell {
  position: relative;
  height: auto;
  padding: 6px 8px;
  background-color: var(--white);
  color: var(--grey-8);
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border-bottom: 1px solid var(--grey);
  border-left: 1px solid var(--grey);
  text-align: right;
}

.calendar-view__cell.calendar-view__cell_inactive {
  background-color: var(--grey-light);
}

@media all and (max-width: 767px) {
  .calendar-view__cell:nth-child(5n + 1) {
    border-left: none;
  }
}

@media all and (min-width: 767px) {
  .calendar-view__grid {
    grid-template-columns: repeat(7, 1fr);
  }

  .calendar-view__cell {
    height: 144px;
  }

  .calendar-view__cell:nth-child(7n + 1) {
    border-left: none;
  }
}
</style>
