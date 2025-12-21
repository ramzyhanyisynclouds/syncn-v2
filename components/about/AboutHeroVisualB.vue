<script setup lang="ts">
// import { Motion } from '@vueuse/motion'
// import { Motion } from '@motionone/vue';


import { Cpu, Database, Cloud, Server, Activity, Zap } from 'lucide-vue-next'

const nodes = [
  { icon: Cpu, label: 'Processing', color: '#004CC0' },
  { icon: Database, label: 'Storage', color: '#0066FF' },
  { icon: Cloud, label: 'Cloud', color: '#00A8FF' },
  { icon: Server, label: 'Edge', color: '#0080FF' },
  { icon: Activity, label: 'Analytics', color: '#0056D6' },
  { icon: Zap, label: 'Power', color: '#003DA0' },
]

const rings = [
  { radius: 80, duration: 20, opacity: 0.3, width: 2 },
  { radius: 130, duration: 30, opacity: 0.2, width: 1.5 },
  { radius: 180, duration: 40, opacity: 0.15, width: 1 },
]
</script>

<template>
  <div class="relative h-[500px] w-full flex items-center justify-center">
    <!-- Central Core -->
    <Motion
      :initial="{ scale: 0, opacity: 0 }"
      :animate="{ scale: 1, opacity: 1 }"
      :transition="{ duration: 0.8, type: 'spring', stiffness: 100 }"
      class="absolute z-30"
    >
      <div class="relative">
        <div class="w-24 h-24 rounded-full bg-gradient-to-br from-[#004CC0] to-[#0066FF] shadow-2xl shadow-[#004CC0]/60 flex items-center justify-center relative overflow-hidden">
          <div class="relative z-10">
            <div class="w-16 h-16 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
              <span class="text-white text-2xl">S</span>
            </div>
          </div>

          <Motion
            :animate="{ rotate: 360 }"
            :transition="{ duration: 8, repeat: Infinity, ease: 'linear' }"
            class="absolute inset-0"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
          </Motion>
        </div>

        <Motion
          :animate="{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }"
          :transition="{ duration: 3, repeat: Infinity, ease: 'easeOut' }"
          class="absolute inset-0 rounded-full bg-[#004CC0] blur-xl"
        />
      </div>
    </Motion>

    <!-- Rotating Rings -->
    <template v-for="(ring, ringIndex) in rings" :key="ringIndex">
      <Motion
        :animate="{ rotate: ringIndex % 2 === 0 ? 360 : -360 }"
        :transition="{ duration: ring.duration, repeat: Infinity, ease: 'linear' }"
        class="absolute"
        :style="{ width: ring.radius*2 + 'px', height: ring.radius*2 + 'px' }"
      >
        <svg class="w-full h-full" style="filter: drop-shadow(0 0 8px rgba(0, 76, 192, 0.3))">
          <circle
            cx="50%"
            cy="50%"
            :r="ring.radius - 2"
            fill="none"
            stroke="url(#ring-gradient)"
            :stroke-width="ring.width"
            :opacity="ring.opacity"
            stroke-dasharray="10,5"
          />
          <defs>
            <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#004CC0"/>
              <stop offset="50%" stop-color="#0066FF"/>
              <stop offset="100%" stop-color="#004CC0"/>
            </linearGradient>
          </defs>
        </svg>

        <Motion
          :animate="{ rotate: ringIndex % 2 === 0 ? -360 : 360 }"
          :transition="{ duration: ring.duration/2, repeat: Infinity, ease: 'linear' }"
          class="absolute inset-0"
        >
          <div class="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#004CC0] shadow-lg shadow-[#004CC0]/60" style="filter: blur(1px)"></div>
        </Motion>
      </Motion>
    </template>

    <!-- Device Nodes -->
    <template v-for="(node, index) in nodes" :key="node.label">
      <Motion
        :initial="{ scale: 0, opacity: 0 }"
        :animate="{ scale: 1, opacity: 1 }"
        :transition="{ duration: 0.5, delay: 0.2 + index*0.1, type: 'spring' }"
        class="absolute z-20"
        :style="{
          transform: `translate(${Math.cos((360/nodes.length*index)*Math.PI/180)*180}px, ${Math.sin((360/nodes.length*index)*Math.PI/180)*180}px)`
        }"
      >
        <Motion
          :while-hover="{ scale: 1.2, zIndex: 40 }"
          :animate="{ y: [0,-8,0] }"
          :transition="{ y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: index*0.3 } }"
          class="relative group cursor-pointer"
        >
          <div class="relative w-16 h-16 rounded-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-lg border border-[#004CC0]/30 group-hover:border-[#004CC0] shadow-lg shadow-[#004CC0]/10 group-hover:shadow-xl group-hover:shadow-[#004CC0]/30 flex items-center justify-center transition-all duration-300">
            <component :is="node.icon" class="w-7 h-7 text-[#004CC0]" stroke-width="1.5" />
            <div class="absolute -top-1 -right-1">
              <Motion
                :animate="{ scale: [1,1.4,1] }"
                :transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut' }"
                class="w-3 h-3 rounded-full bg-green-400 border-2 border-white dark:border-gray-800"
              />
            </div>
          </div>

          <!-- Connection Line to Center -->
          <svg class="absolute top-1/2 left-1/2 pointer-events-none -z-10" width="200" height="200" style="transform: translate(-50%, -50%)">
            <Motion
              tag="line"
              x1="100" y1="100"
              :x2="100-Math.cos((360/nodes.length*index)*Math.PI/180)*180"
              :y2="100-Math.sin((360/nodes.length*index)*Math.PI/180)*180"
              stroke="#004CC0"
              stroke-width="1.5"
              stroke-dasharray="4,3"
              opacity="0.3"
              :initial="{ pathLength: 0 }"
              :animate="{ pathLength: 1 }"
              :transition="{ duration: 1, delay: index*0.1 }"
            />
          </svg>
        </Motion>
      </Motion>
    </template>

    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-radial from-[#004CC0]/5 via-transparent to-transparent pointer-events-none"></div>
  </div>
</template>
