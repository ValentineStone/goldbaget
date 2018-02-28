<template>
  <div :class="$vuetify.breakpoint.xs ?'__faq __xs' : '__faq'">
    <div class="__faq-headline">
      Часто Задаваемые Вопросы
    </div>
    <v-expansion-panel class="__faq-ul" expand>
      <v-expansion-panel-content
        v-for="(question, i) of questions" :key="i"
        :value="shouldBeOpen(question.hash)"
        :id="question.hash.slice(1) || undefined"
      >
        <div slot="header" class="__faq-question" v-text="question.question"/>
        <div class="__faq-answer" v-html="question.answer"/>
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
              let questions = text.split('[Question').slice(1)
              questions = questions.map(v => {
                let pair = v.split('[Answer]')
                let answer = pair[1].trim()
                let hashPos = pair[0].indexOf(']')
                let hash = pair[0].substr(0, hashPos)
                let question = pair[0].substr(hashPos + 1)
                return {
                  question,
                  answer,
                  hash
                }
              })
              return questions
            })
        },
        default: []
      }
    },
    methods: {
      shouldBeOpen(hash) {
        if (hash && location.hash === hash) {
          location.hash = ''
          location.hash = hash
          return true
        }
        return false
          
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
    padding: 0 2rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: 16px;
  }
  .__xs .__faq-ul .__faq-answer {
    padding-left: 1rem;
  }

  .expansion-panel__container {
    background: transparent !important;
  }
</style>
