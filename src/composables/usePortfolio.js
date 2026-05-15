import { ref, computed, onMounted, onUnmounted } from 'vue'
import { translations } from '../i18n/translations'

// ─── Language singleton ────────────────────────────────────────────────────
const SUPPORTED_LOCALES = ['pt', 'en', 'es']
const _locale = ref(localStorage.getItem('locale') || 'pt')

export function useLanguage() {
  const currentLocale = _locale

  const setLocale = (lang) => {
    if (SUPPORTED_LOCALES.includes(lang)) {
      _locale.value = lang
      localStorage.setItem('locale', lang)
      document.documentElement.lang = lang
    }
  }

  const tData = computed(() => translations[_locale.value] || translations.pt)

  return { currentLocale, setLocale, tData, SUPPORTED_LOCALES }
}

/**
 * Composable to toggle between light and dark themes.
 * Persists the user's preference in localStorage.
 */
export function useTheme() {
  const isDark = ref(false)

  const applyTheme = (dark) => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    applyTheme(isDark.value)
  }

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    isDark.value = savedTheme ? savedTheme === 'dark' : prefersDark
    applyTheme(isDark.value)
  })

  return { isDark, toggleTheme }
}

/**
 * Composable for Intersection Observer-based scroll animations.
 * Triggers a CSS class when elements enter the viewport.
 */
export function useScrollAnimation() {
  const observedElements = ref(new Set())
  let observer = null

  const createObserver = () => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
  }

  const observeElement = (el) => {
    if (!observer) createObserver()
    if (el) {
      observer.observe(el)
      observedElements.value.add(el)
    }
  }

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { observeElement }
}

/**
 * Composable for smooth scroll-to-section navigation.
 */
export function useNavigation() {
  const isMenuOpen = ref(false)
  const activeSection = ref('hero')

  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    isMenuOpen.value = false
  }

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  onMounted(() => {
    const sections = ['hero', 'about', 'experience', 'skills', 'education', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    onUnmounted(() => observer.disconnect())
  })

  return { isMenuOpen, activeSection, handleNavigate, toggleMenu, closeMenu }
}
