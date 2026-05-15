<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/usePortfolio'

const { currentLocale, setLocale } = useLanguage()
const isOpen = ref(false)
const dropdownRef = ref(null)

const locales = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
]

const current = () => locales.find(l => l.code === currentLocale.value) || locales[0]

const select = (code) => {
  setLocale(code)
  isOpen.value = false
}

const handleClickOutside = (e) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('mousedown', handleClickOutside))
onUnmounted(() => document.removeEventListener('mousedown', handleClickOutside))
</script>

<template>
  <div ref="dropdownRef" class="relative">
    <button
      @click="isOpen = !isOpen"
      :aria-expanded="isOpen"
      aria-haspopup="listbox"
      class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
    >
      <span>{{ current().flag }}</span>
      <span class="hidden sm:inline">{{ current().code.toUpperCase() }}</span>
      <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="{ 'rotate-180': isOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 scale-95 -translate-y-1"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 -translate-y-1"
    >
      <ul
        v-if="isOpen"
        role="listbox"
        class="absolute right-0 mt-1 w-36 glass rounded-xl shadow-lg shadow-surface-900/10 dark:shadow-black/30 border border-surface-200/50 dark:border-surface-700/30 overflow-hidden z-50"
      >
        <li
          v-for="locale in locales"
          :key="locale.code"
          role="option"
          :aria-selected="currentLocale === locale.code"
          @click="select(locale.code)"
          :class="[
            'flex items-center gap-2.5 px-3 py-2 text-sm cursor-pointer transition-colors',
            currentLocale === locale.code
              ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 font-semibold'
              : 'text-surface-700 dark:text-surface-300 hover:bg-surface-100 dark:hover:bg-surface-800'
          ]"
        >
          <span>{{ locale.flag }}</span>
          <span>{{ locale.label }}</span>
        </li>
      </ul>
    </Transition>
  </div>
</template>
