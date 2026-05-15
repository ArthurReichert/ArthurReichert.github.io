<script setup>
import { useScrollAnimation, useLanguage } from '../composables/usePortfolio'

const { observeElement } = useScrollAnimation()
const { tData } = useLanguage()
const handleRef = (el) => observeElement(el)
</script>

<template>
  <section id="education" class="section-padding bg-surface-100/50 dark:bg-surface-900/50" aria-labelledby="education-heading">
    <div class="section-container">
      <div class="text-center mb-16">
        <span class="chip mb-4">{{ tData.education.chip }}</span>
        <h2 id="education-heading" class="text-3xl sm:text-4xl font-bold mt-4">{{ tData.education.heading }} <span class="gradient-text">{{ tData.education.headingGradient }}</span></h2>
      </div>

      <div class="max-w-3xl mx-auto">
        <div v-for="edu in tData.education.items" :key="edu.degree" :ref="handleRef" class="glass-card p-8 opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
          <div class="flex items-start gap-5">
            <div class="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary-100 dark:bg-primary-900/40 shrink-0" aria-hidden="true">
              <svg class="w-7 h-7 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
              </svg>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-surface-900 dark:text-surface-100 mb-1">{{ edu.degree }}</h3>
              <p class="text-primary-600 dark:text-primary-400 font-semibold mb-1">{{ edu.institution }}</p>
              <time class="text-sm font-mono text-surface-500 dark:text-surface-400">{{ edu.period }}</time>
              <p class="mt-4 text-surface-600 dark:text-surface-400 leading-relaxed">{{ edu.description }}</p>
              <ul class="mt-4 grid sm:grid-cols-2 gap-2">
                <li v-for="h in edu.highlights" :key="h" class="flex items-center gap-2 text-sm text-surface-600 dark:text-surface-400">
                  <svg class="w-4 h-4 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  {{ h }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
