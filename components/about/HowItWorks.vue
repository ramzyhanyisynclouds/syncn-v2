<script setup lang="ts">
 import { Motion } from '@motionone/vue';
import { Button } from "@/ui/button"
import { Network } from "lucide-vue-next";
import AboutHeroVisualB from "./AboutHeroVisualB.vue";
import WhatWeDo from "./WhatWeDo.vue";
import WhoWeServe from "./WhoWeServe.vue"
import WhyChooseSyncN from "./WhyChooseSyncN.vue"
// import AboutPartners from './AboutPartners.vue';
// import AboutTestimonialsA from './AboutTestimonialsA.vue';


// import './index.css'
const networkNodes = [
  { cx: "15%", cy: "25%", delay: 0 },
  { cx: "85%", cy: "30%", delay: 1 },
  { cx: "25%", cy: "75%", delay: 2 },
  { cx: "75%", cy: "70%", delay: 1.5 },
  { cx: "50%", cy: "50%", delay: 0.5 },
];
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden pt-10 pb-16 font-sans">
    <!-- Animated Background -->
     <!-- bg-gradient-to-br -->
    <div class="absolute inset-0  from-blue-50 via-indigo-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900"></div>
    <!-- Holographic Grid Pattern -->
 <Motion
  :initial="{ y: 0 }"
  :animate="{ y: [0, 120, 0] }"
  :transition="{ duration: 15, repeat: Infinity, ease: 'linear' }"
  class="absolute inset-0 opacity-20 dark:opacity-10"
>
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="about-grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <circle cx="30" cy="30" r="2" fill="#004CC0" opacity="0.3"/>
        <path d="M0 30 L60 30 M30 0 L30 60" stroke="#004CC0" stroke-width="0.5" opacity="0.2"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#about-grid)"/>
  </svg>
</Motion>



    <!-- Floating Orbs -->
    <Motion
      :animate="{ y: [0, -30, 0], x: [0, 20, 0], opacity: [0.08, 0.15, 0.08] }"
      :transition="{ duration: 8, repeat: Infinity, easing: 'easeInOut' }"
      class="absolute top-20 right-10 w-96 h-96 bg-[#004CC0] rounded-full blur-3xl opacity-10"
    />
    <Motion
      :animate="{ y: [0, 30, 0], x: [0, -20, 0], opacity: [0.08, 0.18, 0.08] }"
      :transition="{ duration: 10, repeat: Infinity, easing: 'easeInOut' }"
      class="absolute bottom-20 left-10 w-[500px] h-[500px] bg-indigo-500 rounded-full blur-3xl opacity-8"
    />

    <!-- Animated Connection Network -->
    <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-15">
      <Motion
        v-for="(node, i) in networkNodes"
        :key="i"
        tag="circle"
        :cx="node.cx"
        :cy="node.cy"
        r="4"
        fill="#004CC0"
        :initial="{ scale: 0 }"
        :animate="{ scale: [0, 1.2, 0.8, 1.2, 0] }"
        :transition="{ duration: 4, repeat: Infinity, delay: node.delay }"
      />
      <!-- Example Connection Line -->
      <Motion
        tag="path"
        d="M 15% 25% L 85% 30%"
        stroke="url(#line-gradient-about)"
        stroke-width="1.5"
        stroke-dasharray="5,5"
        :initial="{ pathLength: 0 }"
        :animate="{ pathLength: [0, 1, 0], strokeDashoffset: [0, -20] }"
        :transition="{ pathLength: { duration: 4, repeat: Infinity }, strokeDashoffset: { duration: 2, repeat: Infinity, easing: 'linear' } }"
      />
      <defs>
        <linearGradient id="line-gradient-about" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#004CC0" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#0066FF" stop-opacity="0.3"/>
        </linearGradient>
      </defs>
    </svg>

    <!-- Content -->
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="text-center lg:text-left">
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6 }"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#004CC0]/10 dark:bg-[#004CC0]/20 border border-[#004CC0]/20 mb-6"
          >
            <Network class="w-4 h-4 text-[#004CC0]"/>
            
            <span class="text-sm text-[#004CC0]">About SyncN</span>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.1 }"
          >
            <p class=" lg:text-6xl mb-6 text-gray-900 dark:text-white">
              Connecting the Future —
              <span class="lg:text-7xl  bg-gradient-to-r from-[#004CC0] to-[#0066FF] bg-clip-text text-transparent">
                One Smart Device at a Time
              </span>
            </p>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.2 }"
          >
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 py-6">
              SyncN empowers people and industries to build smarter, more connected environments through intelligent IoT integration.
            </p>
          </Motion>

          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.3 }"
          >
<Button style="margin: 6px  ; padding: 3%; "
  variant="default"
  class="!bg-[#004CC0] !hover:bg-[#003a8f] !text-white text-lg rounded-full shadow-2xl shadow-[#004CC0]/40 hover:shadow-[#004CC0]/60 transition-all px-8 py-4"
>
  Learn More About Our Vision
</Button>
          </Motion>
        </div>

        <!-- Right Visual -->
        <Motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.8, delay: 0.2 }"
        >
          <AboutHeroVisualB />
        </Motion>
      </div>
      
    </div>
    
  </section>
<WhatWeDo />
<WhoWeServe/>
<WhyChooseSyncN/>
<!-- <AboutPartners/> -->
<AboutTestimonialsA/>
</template>

