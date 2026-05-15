<script setup>
import { ref } from 'vue'
import { useScrollAnimation, useLanguage } from '../composables/usePortfolio'

const { observeElement } = useScrollAnimation()
const { tData } = useLanguage()
const sectionRef = ref(null)

const handleRef = (el) => {
  sectionRef.value = el
  observeElement(el)
}
</script>

<template>
  <section
    id="about"
    class="section-padding relative"
    aria-labelledby="about-heading"
  >
    <div class="section-container">
      <div :ref="handleRef" class="opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
        <!-- Section header -->
        <div class="text-center mb-16">
          <span class="chip mb-4">{{ tData.about.chip }}</span>
          <h2 id="about-heading" class="text-3xl sm:text-4xl font-bold mt-4">
            {{ tData.about.heading }} <span class="gradient-text">{{ tData.about.headingName }}</span>{{ tData.about.headingEnd }}
          </h2>
        </div>

        <div class="grid lg:grid-cols-5 gap-12 items-start">
          <!-- Text content -->
          <div class="lg:col-span-3 space-y-6">
            <p class="text-lg leading-relaxed text-surface-600 dark:text-surface-400" v-html="tData.about.p1"></p>
            <p class="text-lg leading-relaxed text-surface-600 dark:text-surface-400" v-html="tData.about.p2"></p>
            <p class="text-lg leading-relaxed text-surface-600 dark:text-surface-400" v-html="tData.about.p3"></p>
          </div>

          <!-- Stats cards -->
          <div class="lg:col-span-2 space-y-4">
            <div
              v-for="(stat, index) in tData.about.stats"
              :key="stat.label"
              class="glass-card p-6 text-center hover:scale-[1.02] transition-transform duration-300"
              :style="{ animationDelay: `${index * 0.15}s` }"
            >
              <p class="text-4xl font-black gradient-text mb-1">{{ stat.value }}</p>
              <p class="text-sm font-medium text-surface-500 dark:text-surface-400">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
