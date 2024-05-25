<template>
  <div class="xamin-blue-bg py-5">
    <div class="container">
      <div class="row">
        <div v-for="(counterContent, index) of counterContents" :key="index" class="col-md-3">
          <div class="iq-timer style1 text-center">
            <div class="timer-details">
              <span class="timer">
                <count-to :start-val="0" :end-val="counterContent.number" :duration="15000"/>
              </span>
              <i class="fa fa-plus" aria-hidden="true"></i>
              <p> {{ counterContent.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { CountTo } from 'vue3-count-to';
export default {
  name: 'Counter',
  components: {
    CountTo
  },
  data () {
    return {
      counterContents: [
        {
          number: 820,
          title: 'Data Analytics'
        },
        {
          number: 150,
          title: 'Data Management'
        },
        {
          number: 30,
          title: 'Managed Analytics'
        },
        {
          number: 100,
          title: 'Big Data'
        }
      ]
    }
  }
}
</script>
