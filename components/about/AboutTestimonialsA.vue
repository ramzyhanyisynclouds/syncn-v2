<template>
  <section class="py-24 relative overflow-hidden">
    <!-- Background -->
    <div
      class=" inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900"
    ></div>

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



    <!-- Light mode pattern animation -->
    <Motion
      :animate="{ backgroundPosition: ['100% 0%', '0% 0%'] }"
      :transition="{ duration: 30, repeat: Infinity, ease: 'linear' }"
      class="absolute inset-0 opacity-[0.15] dark:opacity-0"
      :style="{
        backgroundImage: lightPattern,
        backgroundSize: '60px 60px',
        backgroundRepeat: 'repeat'
      }"
    />

    <!-- Dark mode pattern animation -->
    <Motion
      :animate="{ backgroundPosition: ['100% 0%', '0% 0%'] }"
      :transition="{ duration: 30, repeat: Infinity, ease: 'linear' }"
      class="absolute inset-0 opacity-0 dark:opacity-[0.15]"
      :style="{
        backgroundImage: darkPattern,
        backgroundSize: '60px 60px',
        backgroundRepeat: 'repeat',
        filter: 'drop-shadow(0 0 3px rgba(0, 162, 255, 0.4))'
      }"
    />

    <div class="container mx-auto px-4 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <div
          class="inline-block px-4 py-2 rounded-full bg-[#004CC0]/10 dark:bg-[#004CC0]/20 border border-[#004CC0]/20 mb-4"
        >
          <span class="text-sm text-[#004CC0]">Success Stories</span>
        </div>
        <p class="text-4xl lg:text-6xl mb-4 text-gray-900 dark:text-white">
          Transforming Industries Worldwide
        </p>
        <p class="text-xl text-gray-600 dark:text-gray-400 mx-auto mb-16 animate-fadeIn py-3 pb-3">
          Real results from real organizations using SyncN to revolutionize
          their operations
        </p>
      </div>

      <!-- Featured story -->
      <div class="max-w-7xl mx-auto mb-16 relative">
        <div v-if="activeStory" :key="activeIndex" class="relative grid lg:grid-cols-[38%_62%] gap-10 items-center">
          <!-- Left side -->
          <div class="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
            <div v-if="typeof activeStory.logo === 'string'" class="absolute inset-0 w-full h-full">
              <img :src="activeStory.logo" :alt="activeStory.company + ' logo'" class="absolute w-full h-full object-cover" />
            </div>
            <div v-else class="absolute inset-0 flex items-center justify-center">
              <component :is="activeStory.logo" class="w-16 h-16 text-blue-600 dark:text-blue-400" />
            </div>

            <!-- Results -->
            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent backdrop-blur-sm">
              <div class="grid grid-cols-3 gap-4">
                <div v-for="(result, i) in activeStory.results" :key="i" class="text-center">
                  <div :class="`text-3xl bg-gradient-to-br ${activeStory.gradient} bg-clip-text text-transparent mb-1`">
                    {{ result.metric }}
                  </div>
                  <div class="text-xs text-white/80">{{ result.label }}</div>
                </div>
              </div>
            </div>

            <div class="absolute top-6 left-6">
              <div :class="`px-4 py-2 rounded-full bg-gradient-to-br ${activeStory.gradient} text-white text-sm shadow-lg`">
                {{ activeStory.industry }}
              </div>
            </div>
          </div>

          <!-- Right side -->
          <div class="relative">
            <div class="flex items-center gap-3 mb-2">
              <div :class="`w-11 h-11 rounded-xl bg-gradient-to-br ${activeStory.gradient} flex items-center justify-center shadow-lg`">
                <span class="text-white text-lg">{{ activeStory.company.charAt(0) }}</span>
              </div>
              <div>
                <h3 class="text-xl text-gray-900 dark:text-white">{{ activeStory.company }}</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  {{ activeStory.location }} • {{ activeStory.employees }} employees
                </p>
              </div>
            </div>

            <div class="flex items-center gap-1 mb-4">
              <Star v-for="i in activeStory.rating" :key="i" class="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>

            <p class="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              "{{ activeStory.quote }}"
            </p>

            <div class="flex items-center gap-4 mb-6">
              <div :class="`w-12 h-12 rounded-full bg-gradient-to-br ${activeStory.gradient} flex items-center justify-center shadow-lg`">
                <span class="text-white text-lg">{{ activeStory.author.charAt(0) }}</span>
              </div>
              <div>
                <div class="text-base text-gray-900 dark:text-white">{{ activeStory.author }}</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">{{ activeStory.role }}</div>
              </div>
            </div>

            <!-- Controls -->
            <div class="flex items-center gap-4">
              <button @click="prevStory"
                class="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-[#004CC0] hover:text-white hover:border-[#004CC0] transition-all duration-300 shadow-lg">
                <ChevronLeft class="w-5 h-5" />
              </button>
              <button @click="nextStory"
                class="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-[#004CC0] hover:text-white hover:border-[#004CC0] transition-all duration-300 shadow-lg">
                <ChevronRight class="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Motion } from "@motionone/vue";
import { Monitor, Server, Leaf } from "lucide-vue-next";

import { ref, computed } from "vue";
import { ChevronLeft, ChevronRight, Star } from "lucide-vue-next";
const aboutOne = 'https://syncn.sa/about%201.png';
const aboutTwo = 'https://syncn.sa/about%202.png';
const aboutThree = 'https://syncn.sa/about%203.png';

// Dummy logo component
// const dummyLogo = "div";

const activeIndex = ref(0);

const featuredStories = [
  {
    type: 'image',

    logo: aboutOne,
    industry: "Smart Office",
    company: "TechCorp Industries",
    location: "San Francisco, CA",
    gradient: "from-blue-500 to-cyan-500",
    employees: "2,500+",
    quote:
      "SyncN has revolutionized our workplace infrastructure. The seamless integration across 15 floors has improved energy efficiency by 40% and employee satisfaction by 60%. It's not just technology—it's transformation.",
    author: "Sarah Chen",
    role: "Chief Technology Officer",
    rating: 5,
    results: [
      { metric: "40%", label: "Energy Savings" },
      { metric: "60%", label: "Employee Satisfaction" },
      { metric: "15", label: "Connected Floors" }
    ]
  },
  {
    type: 'image',
    logo: aboutTwo,
    industry: "Manufacturing & Retail",
    company: "Global Retail Co.",
    location: "Chicago, IL",
    gradient: "from-purple-500 to-indigo-500",
    employees: "10,000+",
    quote:
      "Deploying SyncN across 50 retail locations was seamless. Real-time monitoring and predictive maintenance have reduced downtime by 75% and operational costs by millions annually.",
    author: "Michael Rodriguez",
    role: "VP of Operations",
    rating: 5,
    results: [
      { metric: "50", label: "Locations" },
      { metric: "75%", label: "Less Downtime" },
      { metric: "$2M+", label: "Annual Savings" }
    ]
  },
  {
    type: 'image',
    logo: aboutThree,
    industry: "Sustainability",
    company: "GreenTech Solutions",
    location: "Austin, TX",
    gradient: "from-green-500 to-emerald-500",
    employees: "500+",
    quote:
      "SyncN's AI-driven insights transformed our sustainability strategy. We've achieved carbon neutrality 2 years ahead of schedule and set new industry standards for smart building operations.",
    author: "Emma Thompson",
    role: "Sustainability Director",
    rating: 5,
    results: [
      { metric: "100%", label: "Carbon Neutral" },
      { metric: "99.9%", label: "System Uptime" },
      { metric: "2 Yrs", label: "Ahead of Target" }
    ]
  }
];

const lightPattern =
  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' ... %3E\")";
const darkPattern =
  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' ... %3E\")";

const activeStory = computed(() => featuredStories[activeIndex.value]);

const nextStory = () => {
  activeIndex.value = (activeIndex.value + 1) % featuredStories.length;
};

const prevStory = () => {
  activeIndex.value =
    (activeIndex.value - 1 + featuredStories.length) % featuredStories.length;
};
</script>

<style scoped>
@keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes dashMove { from { stroke-dashoffset: 0; } to { stroke-dashoffset: -8; } }
@keyframes pulseSlow { 0%,100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.3); opacity: 0; } }

.animate-fadeInUp { animation: fadeInUp 0.8s ease forwards; }
.animate-fadeIn { animation: fadeIn 1s ease forwards; }
.animate-dash-move { animation: dashMove 2s linear infinite; }
.animate-pulse-slow { animation: pulseSlow 3s ease-in-out infinite; }
</style>
