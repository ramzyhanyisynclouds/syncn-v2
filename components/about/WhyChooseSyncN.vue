<script setup lang="ts">
 import { Motion } from '@motionone/vue';

import { Network, Scale, Shield, Activity, Brain, Zap } from 'lucide-vue-next'

const features = [
  {
    icon: Network,
    title: 'Advanced Integration',
    description: 'Seamlessly connect devices from 500+ manufacturers with our universal integration platform.',
    stats: '500+',
    statsLabel: 'Integrations',
  },
  {
    icon: Scale,
    title: 'Scalable Architecture',
    description: 'From single homes to enterprise deployments—our infrastructure grows with your needs.',
    stats: '∞',
    statsLabel: 'Devices',
  },
  {
    icon: Shield,
    title: 'Data Security',
    description: 'Bank-level encryption, zero-knowledge architecture, and compliance with global privacy standards.',
    stats: '99.9%',
    statsLabel: 'Secure',
  },
  {
    icon: Activity,
    title: 'Real-time Monitoring',
    description: 'Instant insights and alerts with millisecond-level response times across your entire ecosystem.',
    stats: '<10ms',
    statsLabel: 'Latency',
  },
  {
    icon: Brain,
    title: 'AI-Driven Insights',
    description: 'Machine learning algorithms that adapt to your patterns and optimize performance automatically.',
    stats: '24/7',
    statsLabel: 'Learning',
  },
  {
    icon: Zap,
    title: 'Lightning Performance',
    description: 'Edge computing and distributed architecture ensure instant response and minimal downtime.',
    stats: '99.99%',
    statsLabel: 'Uptime',
  },
]
</script>

<template>
  <section class="py-24 relative overflow-hidden">
    <!-- Background -->
    <div class=" inset-0 bg-white dark:bg-gray-900"></div>

    <!-- Pattern -->
    <div
      class="absolute inset-0 opacity-5 animate-[movePattern_20s_linear_infinite]"
      style="background-image: radial-gradient(circle at 2px 2px, #004CC0 1px, transparent 0);
             background-size: 40px 40px;">
    </div>

    <div class="container mx-auto px-4 relative z-10 text-center">
      <div class="inline-block px-4 py-2 rounded-full bg-[#004CC0]/10 border border-[#004CC0]/20 mb-4">
        <span class="text-sm text-[#004CC0]">Our Advantage</span>
      </div>
      <p class="text-5xl lg:text-6xl mb-4 text-gray-900 dark:text-white animate-fadeInUp">
        What Makes SyncN Different
      </p>
      <p class="text-xl text-gray-600 dark:text-gray-400 mx-auto mb-16 animate-fadeIn py-3 pb-6">
        Innovation and reliability that sets us apart in the IoT landscape
      </p>

      <!-- Features -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        <Motion
          v-for="(feature, index) in features"
          :key="feature.title"
          tag="div"
          class="relative p-8 rounded-3xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
          :initial="{ y: 20, opacity: 0 }"
          :animate="{ y: 0, opacity: 1 }"
          :transition="{ delay: index * 0.15, duration: 0.5 }"
        >
          <div class="relative mb-6 flex items-start justify-between">
            <div class="relative">
              <div class="p-4 rounded-2xl bg-gradient-to-br from-[#004CC0]/10 to-[#0066FF]/10 border border-[#004CC0]/20">
                <component :is="feature.icon" class="w-10 h-10 text-[#004CC0] dark:text-[#fff] " stroke-width="1.5" />
              </div>
              <div class="absolute inset-0 rounded-2xl bg-[#004CC0] opacity-30 blur-md animate-pulse"></div>
            </div>
            <div class="text-right">
              <div class="text-2xl text-[#004CC0] mb-1">{{ feature.stats }}</div>
              <div class="text-xs text-gray-500 dark:text-gray-500">{{ feature.statsLabel }}</div>
            </div>
          </div>

          <p class="text-2xl lg:text-2xl mb-3 text-gray-900 dark:text-white text-start">
            {{ feature.title }}
          </p>
          <p class="text-gray-600 dark:text-gray-400 text-start text-sm">
            {{ feature.description }}
          </p>
        </Motion>
      </div>
        <!-- CTA -->
      <div class="mt-16 inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl 
                  bg-gradient-to-r from-[#004CC0]/10 via-[#0066FF]/10 to-[#004CC0]/10 
                  border border-[#004CC0]/20 animate-fadeInUp delay-[1s]">
        <div class="flex items-center gap-3">
          <div class="relative">
            <div class="absolute inset-0 bg-[#004CC0] blur-lg opacity-40"></div>
            <div
              class="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#004CC0] to-[#0066FF] 
                     flex items-center justify-center animate-spin-slow"
            >
              <span class="text-white text-sm">N</span>
            </div>
          </div>
          <div class="text-left">
            <div class="text-lg text-gray-900 dark:text-white">Experience the SyncN Advantage</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Join thousands of satisfied customers worldwide</div>
          </div>
        </div>
      </div>
    </div>
<!--  -->

      <!--  -->
    
    
  </section>
</template>

<style>
@keyframes movePattern {
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 100%; }
}
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease forwards;
}
.animate-fadeIn {
  animation: fadeIn 1s ease forwards;
}
.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}
</style>
