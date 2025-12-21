<script setup lang="ts">
import { Marquee } from "@selemondev/vue3-marquee";
import "@selemondev/vue3-marquee/dist/style.css";
import Schneider from '../assets/public/schneider-logo.png'
import Siemens from '../assets/public/Siemens-logo.png'
import microsoft from '../assets/public/microsoft-logo.png'
import amazon from '../assets/public/amazon-logo.png'
import Espressif from '../assets/public/Espressif-logo.png'
import ARM from '../assets/public/ARM-logo.png'
import arduino from '../assets/public/arduino-logo.png'



interface sponsorsProps {
  image: string;

}

const sponsors: sponsorsProps[] = [
    { image: Schneider },
  {
    image:Siemens,

  },
  {
    image: microsoft,

  },
  {
    image: amazon,

  },
  {
    image: Espressif,

  },
  {
    image: ARM,

  },
  {
    image: arduino,

  },
];
</script>

<template>
  <section
    id="sponsors"
    class="max-w-[75%] mx-auto  sm:pb-32"
  >
    <h2 class="text-lg md:text-xl text-center mb-6 pb-6">Our Platinum Partner</h2>

      <div class="mx-auto">
          <Marquee
              class="gap-[3rem]"
              :pauseOnHover="true"
              :fade="true"
              innerClassName="flex items-center gap-[5rem]"
          >
              <div
                  v-for="(sponsor, index) in sponsors"
                  :key="index"
                  class="flex items-center justify-center"
              >
                  <img
                      :src="sponsor.image"
                      alt="Sponsor Logo"
                      class="block"
                      :style="{ width: 'auto', height: '40px', maxWidth: 'none', maxHeight: 'none',  filter: 'grayscale(100%)' }"
                  />
              </div>
          </Marquee>
      </div>
  </section>
</template>
