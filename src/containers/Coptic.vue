<template>
  <div class="container">
    <h1 class="text-center">Coptic Module</h1>
    <div class="card p-3 mt-3">
      <nav class="d-flex w-100">
        <button class="btn me-3" :class="index===currentLessonIndex?'btn-primary':'btn-secondary'" v-for="(lesson,index) in lessons">
          {{ lesson.name }}
        </button>
      </nav>
      <div class="row align-items-center">
        <div class="text col">
          <h2>{{ currentLesson.text.header }}</h2>
          <div v-for="pragraph in currentLesson.text.paragraphs">
          <h3>{{ pragraph.subTitle }}</h3>
          <p>
            {{ pragraph.text }}
          </p>
          </div>
          <div >

          </div>

        </div>
        <div class="media col h-500">
          <img :src="currentLesson.media.link" alt="" srcset="">
        </div>
        <footer class="d-flex justify-content-around w-100">
          <button class="btn btn-primary" @click="goBack" :disabled="currentLessonIndex===0">
            &lt; Back
          </button>
          <button class="btn btn-primary" @click="goNext" :disabled="currentLessonIndex===lessons.length-1">
           Next  &gt; 
          </button>
        </footer>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  name: 'coptic-module',
  data: () => ({
      currentLessonIndex:0,
      lessons:[
        {name: 'Lesson-1',
         text:{
          header:'What is  Coptic?',
          paragraphs:[
            {subTitle:'sub-title-1',
            text:'some lorem ipsum text1 What is  Coptic'
          },
          {subTitle:'sub-title-2',
            text:'some lorem ipsum text2 What is  Coptic'
          },
          {subTitle:'sub-title-3',
            text:'some lorem ipsum text3 What is  Coptic'
          }
          ]
         },
         media:{
            type:'image',
            link:'https://www.biblicalarchaeology.org/wp-content/uploads/codex_glazier.jpg'
         }
        },
        {name: 'Lesson-2',
         text:{
          header:'Why is  Coptic?',
          paragraphs:[
            {subTitle:'sub-title-1',
            text:'some lorem ipsum text1 Why is  Coptic'
          },
          {subTitle:'sub-title-2',
            text:'some lorem ipsum text2 Why is  Coptic'
          },
          {subTitle:'sub-title-3',
            text:'some lorem ipsum text3 Why is  Coptic'
          }
          ]
         },
         media:{
            type:'image',
            link:'https://www.shutterstock.com/shutterstock/photos/791728165/display_1500/stock-vector-vector-illustration-of-the-hand-drawn-coptic-alphabet-written-on-papyrus-with-the-names-of-letters-791728165.jpg'
         }
        }
      ]
  }),
  computed: {
   currentLesson(){
    return this.lessons[this.currentLessonIndex];
   }
  },
  methods: {
    goNext(){
      if(this.currentLessonIndex<this.lessons.length-1) this.currentLessonIndex ++;
    },
    goBack(){
      if(this.currentLessonIndex>=1) this.currentLessonIndex --;
    }
 
  }
}
</script>



<style scoped>
.h-500{
  height: 500px;
}
img{
  width:inherit;
  height: inherit;
  object-fit: contain;
}

</style>
