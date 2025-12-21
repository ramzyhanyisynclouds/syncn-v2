<template>
  <section class="py-24 relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-blue-50/50 dark:from-blue-950/20 dark:via-gray-900 dark:to-blue-950/20"></div>

    <!-- Network Pattern -->
    <div class="absolute inset-0 opacity-5">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="network-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="40" cy="40" r="2" fill="#004CC0" />
            <line x1="40" y1="40" x2="80" y2="40" stroke="#004CC0" stroke-width="0.5" />
            <line x1="40" y1="40" x2="40" y2="80" stroke="#004CC0" stroke-width="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#network-pattern)" />
      </svg>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
        class="text-center mb-16"
      >
        <div class="inline-block px-4 py-2 rounded-full bg-[#004CC0]/10 dark:bg-[#004CC0]/20 border border-[#004CC0]/20 mb-4">
          <span class="text-sm text-[#004CC0]">Ecosystem</span>
        </div>
        <h2 class="text-4xl lg:text-6xl mb-4 text-gray-900 dark:text-white">
          Integration Partners
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A connected network of industry leaders powering the SyncN IoT ecosystem
        </p>
      </Motion>

      <!-- Network Map -->
      <div class="relative max-w-5xl mx-auto h-[600px]">
        <!-- Central Hub -->
        <Motion
          :initial="{ scale: 0, opacity: 0 }"
          :animate="{ scale: 1, opacity: 1 }"
          :transition="{ duration: 0.8, type: 'spring' }"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div class="relative">
            <div class="w-32 h-32 rounded-full bg-gradient-to-br from-[#004CC0] to-[#0066FF] shadow-2xl shadow-[#004CC0]/50 flex items-center justify-center">
              <span class="text-3xl text-white">SyncN</span>
            </div>
            <!-- Pulsing Rings -->
            <Motion
              :animate="{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }"
              :transition="{ duration: 3, repeat: Infinity, ease: 'easeOut' }"
              class="absolute inset-0 rounded-full border-2 border-[#004CC0]"
            />
            <Motion
              :animate="{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }"
              :transition="{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 0.5 }"
              class="absolute inset-0 rounded-full border-2 border-[#0066FF]"
            />
          </div>
        </Motion>

        <!-- Connection Lines -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="connection-gradient" x1="50%" y1="50%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#004CC0" stop-opacity="1"/>
              <stop offset="100%" stop-color="#004CC0" stop-opacity="0.45"/>
            </linearGradient>
          </defs>
          <line
            v-for="(pos, i) in networkPositions"
            :key="'line-'+i"
            x1="50%" y1="50%"
            :x2="pos.x+'%'"
            :y2="pos.y+'%'"
            stroke="url(#connection-gradient)"
            stroke-width="2"
            stroke-dasharray="6,4"
          />
        </svg>

        <!-- Moving Particles -->
        <Motion
          v-for="(pos, i) in networkPositions"
          :key="'particle-'+i"
          r="3"
          fill="#004CC0"
          :initial="{ cx: '50%', cy: '50%', opacity: 0 }"
          :animate="{ cx: ['50%', `${pos.x}%`, '50%'], cy: ['50%', `${pos.y}%`, '50%'], opacity: [0,1,0] }"
          :transition="{ duration: 4, repeat: Infinity, delay: i*0.5, ease: 'easeInOut' }"
          class="absolute"
        />

        <!-- Partner Nodes -->
        <div v-for="(partner, index) in partners" :key="partner.name">
          <Motion
            :initial="{ scale: 0, opacity: 0 }"
            :animate="{ scale: 1, opacity: 1 }"
            :transition="{ duration: 0.5, delay: index*0.1 + 0.3, type:'spring' }"
            :while-hover="{ scale: 1.15, zIndex:30 }"
            class="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-10"
            :style="{ left: partnerPositions[index].x+'%', top: partnerPositions[index].y+'%' }"
          >
            <div class="relative">
              <div class="w-20 h-20 rounded-2xl bg-white dark:bg-gray-800 border-2 border-[#004CC0]/30 group-hover:border-[#004CC0] shadow-lg shadow-[#004CC0]/5 group-hover:shadow-2xl group-hover:shadow-[#004CC0]/15 flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
                <component :is="partner.LogoComponent" class="text-[#004CC0] group-hover:scale-110 transition-transform"/>
              </div>
              <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                <div class="px-3 py-1 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs">{{ partner.name }}</div>
              </div>
              <Motion
                :animate="{ scale: [1,1.4,1], opacity: [0.12,0.3,0.12] }"
                :transition="{ duration:2.5, repeat: Infinity, ease:'easeOut' }"
                class="absolute -inset-2 rounded-2xl bg-[#004CC0] blur-md -z-10"
                style="opacity:0.2"
              />
            </div>
          </Motion>
        </div>
      </div>

      <!-- Bottom Stats -->
      <Motion
        :initial="{ opacity:0, y:20 }"
        :animate="{ opacity:1, y:0 }"
        :transition="{ duration:0.6, delay:1 }"
        class="mt-16 text-center"
      >
        <div class="inline-flex items-center gap-8 px-8 py-4 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-[#004CC0]/20">
          <div>
            <div class="text-3xl text-[#004CC0] mb-1">500+</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Device Types</div>
          </div>
          <div class="w-px h-12 bg-[#004CC0]/20"></div>
          <div>
            <div class="text-3xl text-[#004CC0] mb-1">50+</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Brand Partners</div>
          </div>
          <div class="w-px h-12 bg-[#004CC0]/20"></div>
          <div>
            <div class="text-3xl text-[#004CC0] mb-1">100%</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Compatibility</div>
          </div>
        </div>
      </Motion>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Motion } from '@motionone/vue'

const TechLogo1 = { template: `<svg width="40" height="40" viewBox="0 0 40 40"><path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" stroke="currentColor" stroke-width="2.5"/><circle cx="20" cy="20" r="5" fill="currentColor"/></svg>` }
const TechLogo2 = { template: `<svg width="40" height="40" viewBox="0 0 40 40"><rect x="5" y="12" width="14" height="14" rx="2" fill="currentColor"/><rect x="21" y="12" width="14" height="14" rx="2" fill="currentColor"/><rect x="13" y="28" width="14" height="7" rx="2" fill="currentColor"/></svg>` }
const TechLogo3 = { template: `<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M20 8 L20 32 M12 20 L28 20" stroke="currentColor" stroke-width="2.5"/></svg>` }
const TechLogo4 = { template: `<svg width="40" height="40" viewBox="0 0 40 40"><path d="M10 10L30 10L30 20L20 30L10 20Z" fill="currentColor"/><circle cx="20" cy="17" r="4" fill="white"/></svg>` }
const TechLogo5 = { template: `<svg width="40" height="40" viewBox="0 0 40 40"><path d="M5 20L15 8L25 20L15 32L5 20Z" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M15 20L25 8L35 20L25 32L15 20Z" stroke="currentColor" stroke-width="2.5" fill="none"/></svg>` }
const TechLogo6 = { template: `<svg width="40" height="40" viewBox="0 0 40 40"><rect x="8" y="8" width="24" height="24" rx="6" stroke="currentColor" stroke-width="2.5" fill="none"/><rect x="14" y="14" width="12" height="12" rx="2" fill="currentColor"/></svg>` }
const TechLogo7 = { template: `<svg width="40" height="40" viewBox="0 0 40 40"><path d="M20 5L32 12L32 28L20 35L8 28L8 12L20 5Z" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M20 15L26 18.5L26 25.5L20 29L14 25.5L14 18.5L20 15Z" fill="currentColor"/></svg>` }
const TechLogo8 = { template: `<svg width="40" height="40" viewBox="0 0 40 40"><path d="M8 15L20 8L32 15L32 25L20 32L8 25L8 15Z" fill="currentColor"/><circle cx="20" cy="20" r="6" fill="white"/><circle cx="20" cy="20" r="3" fill="currentColor"/></svg>` }

const partners = [
  { name: 'NexusCloud', LogoComponent: TechLogo1 },
  { name: 'DataSync', LogoComponent: TechLogo2 },
  { name: 'ConnectCore', LogoComponent: TechLogo3 },
  { name: 'SmartGrid', LogoComponent: TechLogo4 },
  { name: 'IoTLink', LogoComponent: TechLogo5 },
  { name: 'TechFlow', LogoComponent: TechLogo6 },
  { name: 'DeviceHub', LogoComponent: TechLogo7 },
  { name: 'CloudMesh', LogoComponent: TechLogo8 },
]

const networkPositions = [
  { x: 50, y: 12 }, { x: 15, y: 35 }, { x: 85, y: 35 }, { x: 30, y: 65 },
  { x: 70, y: 65 }, { x: 50, y: 88 }, { x: 10, y: 75 }, { x: 90, y: 75 },
]

const partnerPositions = networkPositions
</script>
