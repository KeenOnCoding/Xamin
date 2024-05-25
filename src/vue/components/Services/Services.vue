<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="(list,index) in items" :key="index">
          <CardStyle1>
            <template #cardMedia>
              <div>
              <img :src="list.src" alt="fancy-list">
            </div>
            </template>
            <template #cardTitle>
              <div>
                <h4 class="mb-2">{{ list.title }}</h4>
              </div>
            </template>
           <template #cardBody>
             <div >
               <p>{{ list.description }}</p>
             </div>
           </template> 
           <template #cardList>
             <div class="text-left">
               <ul class="iq-list">
                 <li> <i class="fas fa-check-square"></i><span>Advance Advisory Team</span> </li>
                 <li> <i class="fas fa-check-square"></i><span>Professional Consulting Services</span> </li>
                 <li> <i class="fas fa-check-square"></i><span>Advance Advisory Team</span> </li>
               </ul>
             </div>
           </template>
          </CardStyle1>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CardStyle1 from '../themes/Card/CardStyle1' 
export default {
  name: 'Services',
  components: { CardStyle1 },
  data() {
    return{
      items : [
        {
          title: 'Big Data Consulting',
          description: 'All your big data through robust solutions that empower data collection, storage, processing and analysis',
          src: '/assets/images/services/01.png'
        },
        {
          title: 'Machine Learning',
          description: 'All your big data through robust solutions that empower data collection, storage, processing and analysis',
          src: '/assets/images/services/02.png'
        },
        {
          title: 'Computer Vision',
          description: 'All your big data through robust solutions that empower data collection, storage, processing and analysis',
          src: '/assets/images/services/03.png'
        },
        {
          title: 'Data Analytics',
          description: 'All your big data through robust solutions that empower data collection, storage, processing and analysis',
          src: '/assets/images/services/01.png'
        },
        {
          title: 'Internet Of Things',
          description: 'All your big data through robust solutions that empower data collection, storage, processing and analysis',
          src: '/assets/images/services/02.png'
        },
        {
          title: 'Artificial Intelligence',
          description: 'All your big data through robust solutions that empower data collection, storage, processing and analysis',
          src: '/assets/images/services/03.png'
        }
      ]
    }
  }
}
</script>