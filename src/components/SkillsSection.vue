<script setup>
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/usePortfolio'
import { hardSkills, softSkills } from '../data/portfolioData'

const { observeElement } = useScrollAnimation()
const handleRef = (el) => observeElement(el)
</script>

<template>
  <section id="skills" class="section-padding" aria-labelledby="skills-heading">
    <div class="section-container">
      <div class="text-center mb-16">
        <span class="chip mb-4">Competências</span>
        <h2 id="skills-heading" class="text-3xl sm:text-4xl font-bold mt-4">Hard & Soft <span class="gradient-text">Skills</span></h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Hard Skills -->
        <div :ref="handleRef" class="opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0">
          <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
            <span class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/40 text-sm" aria-hidden="true">⚡</span>
            Hard Skills
          </h3>
          <div class="grid sm:grid-cols-2 gap-4">
            <div v-for="skill in hardSkills" :key="skill.name" class="glass-card p-4 flex items-center gap-3 hover:scale-[1.02] transition-transform duration-300">
              <span class="text-2xl" aria-hidden="true">{{ skill.icon }}</span>
              <span class="font-semibold text-surface-800 dark:text-surface-200">{{ skill.name }}</span>
            </div>
          </div>
        </div>

        <!-- Soft Skills -->
        <div :ref="handleRef" class="opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0" style="transition-delay: 0.2s;">
          <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
            <span class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/40 text-sm" aria-hidden="true">🧠</span>
            Soft Skills
          </h3>
          <div class="grid sm:grid-cols-2 gap-4">
            <div v-for="skill in softSkills" :key="skill.name" class="glass-card p-5 hover:scale-[1.02] transition-transform duration-300 group">
              <div class="text-2xl mb-3" aria-hidden="true">{{ skill.icon }}</div>
              <h4 class="font-bold text-surface-800 dark:text-surface-200 mb-1">{{ skill.name }}</h4>
              <p class="text-sm text-surface-500 dark:text-surface-400 leading-relaxed">{{ skill.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
