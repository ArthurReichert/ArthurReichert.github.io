<script setup>
import { useScrollAnimation, useLanguage } from '../composables/usePortfolio'
import { projectAssets, personalInfo } from '../data/portfolioData'

const { observeElement } = useScrollAnimation()
const { tData } = useLanguage()
const handleRef = (el) => observeElement(el)
const asset = (id) => projectAssets[id] || {}
</script>

<template>
  <section id="projects" class="section-padding" aria-labelledby="projects-heading">
    <div class="section-container">
      <div class="text-center mb-16">
        <span class="chip mb-4">{{ tData.projects.chip }}</span>
        <h2 id="projects-heading" class="text-3xl sm:text-4xl font-bold mt-4">
          {{ tData.projects.heading }} <span class="gradient-text">{{ tData.projects.headingGradient }}</span>
        </h2>
      </div>

      <div v-for="group in tData.projects.groups" :key="group.title" class="mb-14 last:mb-0">
        <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
          <span class="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/40 text-sm" aria-hidden="true">{{ group.icon }}</span>
          {{ group.title }}
        </h3>

        <div class="grid md:grid-cols-2 gap-6">
          <article
            v-for="(p, i) in group.items"
            :key="p.id"
            :ref="handleRef"
            class="glass-card p-6 flex gap-5 opacity-0 translate-y-8 transition-all duration-700 ease-out [&.is-visible]:opacity-100 [&.is-visible]:translate-y-0 hover:shadow-xl hover:shadow-primary-500/10"
            :style="{ transitionDelay: `${i * 0.1}s` }"
          >
            <img
              v-if="asset(p.id).screenshot"
              :src="asset(p.id).screenshot"
              :alt="p.name"
              width="392"
              height="696"
              loading="lazy"
              class="w-20 sm:w-24 h-auto shrink-0 self-start rounded-xl border border-surface-200 dark:border-surface-700 shadow-md"
            />

            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-3 mb-1">
                <img v-if="asset(p.id).icon" :src="asset(p.id).icon" alt="" width="36" height="36" loading="lazy" class="w-9 h-9 rounded-lg shrink-0" />
                <span v-else class="w-9 h-9 flex items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900/40 text-lg shrink-0" aria-hidden="true">{{ asset(p.id).emoji }}</span>
                <h4 class="text-lg font-bold text-surface-900 dark:text-surface-100 leading-tight">{{ p.name }}</h4>
              </div>

              <p v-if="p.role" class="text-xs font-semibold text-primary-600 dark:text-primary-400 mb-2">{{ p.role }}</p>
              <p class="text-sm text-surface-600 dark:text-surface-400 leading-relaxed mb-3">{{ p.description }}</p>

              <div class="flex flex-wrap gap-1.5 mb-3">
                <span v-for="t in asset(p.id).tags" :key="t" class="chip text-[11px] px-2 py-0.5">{{ t }}</span>
              </div>

              <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                <a
                  v-for="l in asset(p.id).links"
                  :key="l.url"
                  :href="l.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 font-semibold text-primary-600 dark:text-primary-400 hover:underline"
                >
                  {{ tData.projects.linkLabels[l.type] || l.type }}
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>
                </a>
                <span v-if="p.meta" class="text-xs text-surface-500 dark:text-surface-400">{{ p.meta }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div class="text-center mt-12">
        <a :href="personalInfo.github" target="_blank" rel="noopener noreferrer" class="btn-outline">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          {{ tData.projects.githubCta }}
        </a>
      </div>
    </div>
  </section>
</template>
