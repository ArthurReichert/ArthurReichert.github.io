<script setup>
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/usePortfolio'

const { observeElement } = useScrollAnimation()
const sectionRef = ref(null)

const handleRef = (el) => {
  sectionRef.value = el
  observeElement(el)
}

const statsData = [
  { value: '3+', label: 'Anos de Experiência' },
  { value: '10+', label: 'Projetos Entregues' },
  { value: '2', label: 'Stores Publicadas' },
]
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
          <span class="chip mb-4">Sobre mim</span>
          <h2 id="about-heading" class="text-3xl sm:text-4xl font-bold mt-4">
            Quem é <span class="gradient-text">Arthur</span>?
          </h2>
        </div>

        <div class="grid lg:grid-cols-5 gap-12 items-start">
          <!-- Text content -->
          <div class="lg:col-span-3 space-y-6">
            <p class="text-lg leading-relaxed text-surface-600 dark:text-surface-400">
              Sou um <strong class="text-surface-900 dark:text-surface-100">desenvolvedor mobile</strong> com
              <strong class="text-surface-900 dark:text-surface-100">3 anos de experiência</strong> focado em
              <strong class="gradient-text">Flutter e Dart</strong>. Minha jornada na tecnologia começou
              com o desenvolvimento web e evoluiu naturalmente para o universo mobile, onde encontrei minha verdadeira paixão.
            </p>

            <p class="text-lg leading-relaxed text-surface-600 dark:text-surface-400">
              Atualmente, atuo como <strong class="text-surface-900 dark:text-surface-100">Engenheiro de Software Júnior</strong>
              na CRM PipeRun, onde sigo princípios <strong class="text-surface-900 dark:text-surface-100">SOLID e DRY</strong>
              para manter uma base de código escalável e de fácil manutenção. Lidero migrações de módulos legados
              para Flutter nativo e trabalho com <strong class="text-surface-900 dark:text-surface-100">observabilidade</strong>
              e <strong class="text-surface-900 dark:text-surface-100">product analytics</strong> para garantir qualidade em produção.
            </p>

            <p class="text-lg leading-relaxed text-surface-600 dark:text-surface-400">
              Além do Flutter, tenho experiência sólida com <strong class="text-surface-900 dark:text-surface-100">TypeScript</strong>,
              <strong class="text-surface-900 dark:text-surface-100">Angular</strong> e integrações com
              <strong class="text-surface-900 dark:text-surface-100">APIs REST</strong>. Também possuo vivência com
              publicação nas <strong class="text-surface-900 dark:text-surface-100">App Store e Google Play</strong>,
              acompanhando todo o ciclo de vida dos apps.
            </p>
          </div>

          <!-- Stats cards -->
          <div class="lg:col-span-2 space-y-4">
            <div
              v-for="(stat, index) in statsData"
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
