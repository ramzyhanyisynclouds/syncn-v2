<script setup lang="ts">
import { Motion } from '@motionone/vue';
import { Home, Building2, Factory, Warehouse, Smartphone, Cloud } from "lucide-vue-next";

const offerings = [
  {
    icon: Home,
    title: "Smart Home Solutions",
    description:
      "Transform residential spaces into intelligent environments with seamless device integration, automated routines, and energy optimization.",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0,
  },
  {
    icon: Building2,
    title: "Smart Office Systems",
    description:
      "Elevate workplace productivity with connected meeting rooms, climate control, security systems, and occupancy analytics.",
    gradient: "from-purple-500 to-indigo-500",
    delay: 0.1,
  },
  {
    icon: Factory,
    title: "Industrial IoT Integration",
    description:
      "Optimize manufacturing and production with real-time monitoring, predictive maintenance, and automated quality control.",
    gradient: "from-orange-500 to-red-500",
    delay: 0.2,
  },
  {
    icon: Warehouse,
    title: "Facility Management",
    description:
      "Streamline operations across large facilities with unified control over lighting, HVAC, security, and asset tracking.",
    gradient: "from-green-500 to-emerald-500",
    delay: 0.3,
  },
  {
    icon: Smartphone,
    title: "Mobile-First Control",
    description:
      "Access and control your entire IoT ecosystem from anywhere with our intuitive mobile applications for iOS and Android.",
    gradient: "from-pink-500 to-rose-500",
    delay: 0.4,
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Enterprise-grade cloud platform ensuring 24/7 availability, instant synchronization, and scalable data storage.",
    gradient: "from-cyan-500 to-blue-500",
    delay: 0.5,
  },
];
</script>

<template>
  <section class="py-24 relative overflow-hidden">
    <!-- Background -->
    <div class=" inset-0 bg-white dark:bg-gray-900"></div>
    <!-- Circuit Pattern Background -->
<Motion
  :initial="{ y: 0 }"
  :animate="{ y: [0, 120, 0] }"
  :transition="{ duration: 15, repeat: Infinity, ease: 'linear' }"
  class="absolute inset-0 opacity-5 dark:opacity-5"
>
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="what-we-do-circuit" width="120" height="120" patternUnits="userSpaceOnUse">
        <circle cx="30" cy="30" r="4" fill="#004CC0" />
        <circle cx="90" cy="90" r="4" fill="#004CC0" />
        <path d="M30 30 L90 30 L90 90" fill="none" stroke="#004CC0" stroke-width="2" />
        <circle cx="90" cy="30" r="3" fill="#004CC0" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#what-we-do-circuit)" />
  </svg>
</Motion>



    <div class="container mx-auto px-4 relative z-10">
      <!-- Section Header -->
      <Motion
        initial="{ opacity: 0, y: 20 }"
        animate="{ opacity: 1, y: 0 }"
        transition="{ duration: 0.6 }"
        class="text-center mb-16"
      >
        <div class="inline-block px-4 py-2 rounded-full bg-[#004CC0]/10 dark:bg-[#004CC0]/20 border border-[#004CC0]/20 mb-4">
          <span class="text-sm text-[#004CC0]">Our Expertise</span>
        </div>
        <p class="text-4xl lg:text-6xl mb-4 text-gray-900 dark:text-white">What We Do</p>
        <p class="text-xl text-gray-600 dark:text-gray-400 mx-auto mb-16 animate-fadeIn py-3 pb-6">
          Comprehensive IoT solutions designed to transform how you live, work, and operate
        </p>
      </Motion>

      <!-- Offerings Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Motion
          v-for="(offering, index) in offerings"
          :key="offering.title"
          :initial="{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.6, delay: offering.delay }"
          class="group relative"
          while-hover="{ y: -5 }"
        >
          <div
            class="relative h-full p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transition-all duration-300 group-hover:border-[#004CC0]/50 group-hover:shadow-2xl group-hover:shadow-[#004CC0]/20"
          >
            <!-- Gradient Orb -->
            <div
              :class="`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${offering.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`"
            ></div>
            <div class="flex items-start gap-6">
              <!-- Icon -->
              <div class="relative flex-shrink-0">
                <div :class="`relative p-4 rounded-2xl bg-gradient-to-br ${offering.gradient} bg-opacity-10`">
                  <div :class="`absolute inset-0 rounded-2xl bg-gradient-to-br ${offering.gradient} p-[2px]`">
                    <div class="w-full h-full rounded-2xl bg-white dark:bg-gray-800"></div>
                  </div>
                  <div class="relative">
                    <component :is="offering.icon" class="w-10 h-10 text-black dark:text-white" stroke-width="1.5" />
                  </div>
                </div>

                <!-- Data Pulse -->
                <motion
                  :animate="{ scale: [0, 1.5], opacity: [0.6, 0] }"
                  :transition="{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: offering.delay }"
                  :class="`absolute inset-0 rounded-2xl bg-gradient-to-br ${offering.gradient} -z-10`"
                ></motion>
              </div>

              <!-- Content -->
              <div class="flex-1">
                <h3 class="text-2xl mb-3 text-gray-900 dark:text-white">{{ offering.title }}</h3>
                <p class="text-gray-600 dark:text-gray-400">{{ offering.description }}</p>
              </div>
            </div>

            <!-- Animated Bottom Line -->
            <div class="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#004CC0] to-[#0066FF] group-hover:w-full transition-all duration-500"></div>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>
