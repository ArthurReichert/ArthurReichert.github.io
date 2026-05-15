<script setup>
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/usePortfolio'
import { experiences } from '../data/portfolioData'

const { observeElement } = useScrollAnimation()
const handleRef = (el) => observeElement(el)
</script>

<template>
  <section id="experience" class="section-padding relative bg-surface-100/50 dark:bg-surface-900/50" aria-labelledby="experience-heading">
    <div class="section-container">
      <div class="text-center mb-16">
        <span class="chip mb-4">Trajetória</span>
        <h2 id="experience-heading" class="text-3xl sm:text-4xl font-bold mt-4">Experiência <span class="gradient-text">Profissional</span></h2>
      </div>

      <div class="relative">
        <div class="absolute left-4 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-300 dark:from-primary-600 dark:via-primary-500 dark:to-primary-400" aria-hidden="true"></div>

        <div class="space-y-12">
          <article v-for="(exp, index) in experiences" :key="exp.id" :ref="handleRef"
            :class="['relative opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0', index % 2 === 0 ? 'lg:pr-[52%]' : 'lg:pl-[52%]']"
            :style="{ transitionDelay: `${index * 0.15}s` }">
            <div :class="['absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 z-10', exp.isCurrent ? 'bg-primary-500 border-primary-200 dark:border-primary-800 animate-pulse-glow' : 'bg-surface-300 dark:bg-surface-600 border-surface-100 dark:border-surface-800']" aria-hidden="true"></div>

            <div class="ml-12 lg:ml-0 glass-card p-6 sm:p-8 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300">
              <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <div class="flex items-center gap-2 mb-1">
                    <h3 class="text-xl font-bold text-surface-900 dark:text-surface-100">{{ exp.role }}</h3>
                    <span v-if="exp.isCurrent" class="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">Atual</span>
                  </div>
                  <p class="text-primary-600 dark:text-primary-400 font-semibold">{{ exp.company }}</p>
                </div>
                <time class="text-sm font-mono font-medium text-surface-500 dark:text-surface-400 bg-surface-100 dark:bg-surface-800 px-3 py-1 rounded-lg">{{ exp.period }}</time>
              </div>
              <p class="text-surface-600 dark:text-surface-400 leading-relaxed mb-5">{{ exp.description }}</p>
              <ul class="space-y-2 mb-5">
                <li v-for="h in exp.highlights" :key="h" class="flex items-start gap-2 text-sm text-surface-600 dark:text-surface-400">
                  <svg class="w-4 h-4 mt-0.5 text-primary-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  {{ h }}
                </li>
              </ul>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in exp.technologies" :key="tech" class="chip text-xs">{{ tech }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
