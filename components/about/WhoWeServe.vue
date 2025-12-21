<script setup lang="ts">
import { Motion } from '@motionone/vue';
import { Home, Building, HeartPulse, Sprout, Building2 } from 'lucide-vue-next';
import type { Component } from 'vue';

interface Sector {
  icon: Component
  title: string
  description: string
  gradient: string
}

const sectors: Sector[] = [
  { icon: Home, title: 'Residential', description: 'Homeowners and property managers seeking smart living solutions', gradient: 'from-blue-500 to-cyan-500' },
  { icon: Building, title: 'Commercial', description: 'Offices, retail spaces, and business facilities', gradient: 'from-purple-500 to-indigo-500' },
  { icon: HeartPulse, title: 'Healthcare', description: 'Hospitals, clinics, and medical facilities', gradient: 'from-pink-500 to-rose-500' },
  { icon: Sprout, title: 'Agriculture', description: 'Smart farming and precision agriculture solutions', gradient: 'from-green-500 to-emerald-500' },
  { icon: Building2, title: 'Smart Cities', description: 'Urban infrastructure and municipal services', gradient: 'from-orange-500 to-amber-500' },
];
</script>

<template>
  <section class="py-24 
">
    <div class="container mx-auto px-4 relative z-10 ">
      <div class="text-center mb-16">
        <div class="inline-block px-4 py-2 rounded-full bg-[#004CC0]/10 border border-[#004CC0]/20 mb-4">
          <span class="text-sm text-[#004CC0]">Our Reach
          </span>
        </div>
        <p class="text-5xl lg:text-6xl mb-4 text-gray-900 dark:text-white animate-fadeInUp">
          Who We Serve
        </p>
        <p class="text-xl text-gray-600 dark:text-gray-400 mx-auto mb-16 animate-fadeIn py-3 pb-6">
          Our technology connects industries through smart, secure, and scalable solutions.
        </p>
      </div>

      <!-- Grid with Motion -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Motion v-for="(sector, index) in sectors" :key="sector.title" tag="div"
          class="group relative p-6 rounded-3xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-500 hover:border-[#004CC0]/50 hover:shadow-2xl hover:shadow-[#004CC0]/30"
          :initial="{ y: 30, opacity: 0 }" :animate="{ y: 0, opacity: 1 }"
          :transition="{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }" while-hover="{ scale: 1.03, y: -10 }">
          <!-- Gradient hover overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-br transition-opacity duration-500 opacity-0 group-hover:opacity-10"
            :class="sector.gradient"></div>

          <!-- Icon -->
          <div class="relative mb-6 flex justify-center">
            <div class="relative p-6 rounded-2xl bg-gradient-to-br shadow-lg" :class="sector.gradient">
              <component :is="sector.icon" class="w-12 h-12 text-white" :stroke-width="1.5" />
              <div class="absolute inset-0 rounded-2xl opacity-40 animate-pulse-slow" :class="sector.gradient"></div>
            </div>
          </div>

          <!-- Text -->
          <div class="text-center">
            <h3 class="text-xl mb-2 text-gray-900 dark:text-white">{{ sector.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">{{ sector.description }}</p>
          </div>

          <!-- Lines -->
          <svg
            class="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-500">
            <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="#004CC0" stroke-width="1" stroke-dasharray="4,4"
              class="animate-dash-move" />
            <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="#004CC0" stroke-width="1" stroke-dasharray="4,4"
              class="animate-dash-move" />
          </svg>

          <!-- Connector -->
          <div v-if="index < sectors.length - 1"
            class="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#004CC0]/30 to-transparent group-hover:from-[#004CC0]/60 transition-all duration-300 z-20" />
        </Motion>
      </div>

      <!-- Bottom line (Interconnection dots) -->
      <div class="mt-16 text-center animate-fadeInUp delay-[1s]">
        <div
          class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#004CC0]/5 dark:bg-[#004CC0]/10 border border-[#004CC0]/20">
          <div class="flex -space-x-2">
            <div v-for="(sector, i) in sectors" :key="i"
              class="w-3 h-3 rounded-full border-2 border-white dark:border-gray-900 animate-pulse-slow"
              :class="`bg-gradient-to-br ${sector.gradient}`" :style="{ animationDelay: `${i * 0.2}s` }"></div>
          </div>
          <span class="text-sm text-[#004CC0] ml-2">All sectors interconnected through SyncN</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes dashMove {
  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: -8;
  }
}

@keyframes pulseSlow {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.3);
    opacity: 0;
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease forwards;
}

.animate-fadeIn {
  animation: fadeIn 1s ease forwards;
}

.animate-dash-move {
  animation: dashMove 2s linear infinite;
}

.animate-pulse-slow {
  animation: pulseSlow 3s ease-in-out infinite;
}
</style>
