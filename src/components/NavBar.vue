<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import ThemeSwitcher from './ThemeSwitcher.vue'
import { useNavigation } from '../composables/usePortfolio'
import { navigationLinks } from '../data/portfolioData'

const { isMenuOpen, activeSection, handleNavigate, toggleMenu, closeMenu } = useNavigation()
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    id="main-navigation"
    role="navigation"
    aria-label="Navegação principal"
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'glass shadow-lg shadow-surface-900/5 dark:shadow-black/20' : 'bg-transparent'
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <button
          @click="handleNavigate('hero')"
          class="text-lg font-bold gradient-text hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg px-1"
        >
          AR<span class="text-primary-500">.</span>
        </button>

        <!-- Desktop links -->
        <div class="hidden md:flex items-center gap-1" role="menubar">
          <a
            v-for="link in navigationLinks"
            :key="link.id"
            href="javascript:void(0)"
            role="menuitem"
            @click="handleNavigate(link.id)"
            :class="[
              'px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
              activeSection === link.id
                ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30'
                : 'text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-surface-100 dark:hover:bg-surface-800'
            ]"
          >
            {{ link.label }}
          </a>
          <div class="ml-3">
            <ThemeSwitcher />
          </div>
        </div>

        <!-- Mobile controls -->
        <div class="flex md:hidden items-center gap-2">
          <ThemeSwitcher />
          <button
            id="mobile-menu-toggle"
            @click="toggleMenu"
            :aria-expanded="isMenuOpen"
            aria-controls="mobile-menu"
            aria-label="Menu de navegação"
            class="p-2 rounded-lg text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path
                v-if="!isMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-up">
      <div
        v-if="isMenuOpen"
        id="mobile-menu"
        class="md:hidden glass border-t border-surface-200/50 dark:border-surface-700/30"
        role="menu"
      >
        <div class="px-4 py-3 space-y-1">
          <a
            v-for="link in navigationLinks"
            :key="link.id"
            href="javascript:void(0)"
            role="menuitem"
            @click="handleNavigate(link.id)"
            :class="[
              'block px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200',
              activeSection === link.id
                ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30'
                : 'text-surface-600 dark:text-surface-400 hover:text-primary-600 dark:hover:text-primary-400'
            ]"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>
