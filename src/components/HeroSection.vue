<script setup>
import { personalInfo } from '../data/portfolioData'
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
    aria-label="Apresentação"
  >
    <!-- Animated background -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute top-1/4 -left-20 w-72 h-72 bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-3xl animate-float"></div>
      <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-500/15 dark:bg-primary-500/10 rounded-full blur-3xl animate-float" style="animation-delay: -3s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-300/10 dark:bg-primary-700/5 rounded-full blur-3xl"></div>
    </div>

    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
      style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 40px 40px;">
    </div>

    <div class="section-container text-center px-4">
      <!-- Status badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-down">
        <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" aria-hidden="true"></span>
        <span class="text-sm font-medium text-surface-600 dark:text-surface-300">
          Disponível para oportunidades
        </span>
      </div>

      <!-- Name -->
      <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 animate-fade-in-up" style="animation-delay: 0.1s;">
        {{ personalInfo.fullName }}
      </h1>

      <!-- Title -->
      <p class="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-4 animate-fade-in-up" style="animation-delay: 0.2s;">
        {{ personalInfo.title }}
      </p>

      <!-- Subtitle -->
      <p class="text-lg sm:text-xl text-surface-500 dark:text-surface-400 font-medium mb-6 animate-fade-in-up" style="animation-delay: 0.3s;">
        {{ personalInfo.subtitle }}
      </p>

      <!-- Bio -->
      <p class="max-w-2xl mx-auto text-base sm:text-lg text-surface-600 dark:text-surface-400 leading-relaxed mb-10 animate-fade-in-up" style="animation-delay: 0.4s;">
        {{ personalInfo.bio }}
      </p>

      <!-- CTA buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style="animation-delay: 0.5s;">
        <a
          id="cta-linkedin"
          :href="personalInfo.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary"
          aria-label="Visitar perfil no LinkedIn"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
        <a
          id="cta-github"
          :href="personalInfo.github"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-outline"
          aria-label="Visitar perfil no GitHub"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
          GitHub
        </a>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg class="w-6 h-6 text-surface-400 dark:text-surface-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>
