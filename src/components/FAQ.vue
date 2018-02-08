<template>
  <div :class="$vuetify.breakpoint.xs ?'__faq __xs' : '__faq'">
    <div class="__faq-headline">
      Часто Задаваемые Вопросы
    </div>
    <v-expansion-panel class="__faq-ul" expand>
      <v-expansion-panel-content v-for="(question, i) of questions" :key="i">
        <div slot="header" class="__faq-question" v-text="question.q"/>
        <div class="__faq-answer" v-html="question.a"/>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
  export default {
    asyncComputed: {
      questions: {
        get() {
          return fetch('/static/faq.html')
            .then(v => v.text())
            .then(text => {
              let questions = text.split('[Question]').slice(1)
              questions = questions.map(v => {
                let pair = v.split('[Answer]')
                return { q: pair[0].trim(), a: pair[1].trim() }
              })
              return questions
            })
        },
        default: []
      }
    }
  }
</script>

<style>
  .__faq-headline {
    font-size: 3rem;
    text-align: center;
    line-height: 1em;
    margin-bottom: 2rem;
  }

  .__xs .__faq-headline {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .__faq-ul {
    list-style: none;
  }

  .__faq-ul > li:nth-child(2n) {
    background-color: rgba(255, 255, 255, 0.04) !important;
  }

  .__faq-ul ul {
    padding: 1rem 2rem;
  }

  .__xs .__faq-ul ul {
    padding: 1rem 1.5rem;
  }

  .__faq-ul .__faq-question {
    font-size: 2rem;
    line-height: 1em;
  }

  .__xs .__faq-ul .__faq-question {
    font-size: 1.5rem;
  }

  .__faq-ul .__faq-answer {
    padding-left: 2rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  .__xs .__faq-ul .__faq-answer {
    padding-left: 1rem;
  }

  .expansion-panel__container {
    background: transparent !important;
  }
</style>
