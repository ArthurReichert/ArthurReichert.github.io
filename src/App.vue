<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import EducationSection from './components/EducationSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen">
    <a href="#about" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] btn-primary">
      Pular para o conteúdo
    </a>
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
    </main>
    <FooterSection />
  </div>
</template>
