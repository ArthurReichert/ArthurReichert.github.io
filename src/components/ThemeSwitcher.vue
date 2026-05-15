<script setup>
import { useTheme } from '../composables/usePortfolio'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    id="theme-switcher"
    @click="toggleTheme"
    :aria-label="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'"
    class="relative p-2.5 rounded-xl glass transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-surface-900 group"
  >
    <div class="relative w-5 h-5 overflow-hidden">
      <!-- Sun icon -->
      <svg
        :class="[
          'absolute inset-0 w-5 h-5 text-amber-500 transition-all duration-500',
          isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
        ]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <!-- Moon icon -->
      <svg
        :class="[
          'absolute inset-0 w-5 h-5 text-primary-300 transition-all duration-500',
          isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
        ]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </div>
  </button>
</template>
