<script setup lang="ts">
import Separator from "@/ui/separator/Separator.vue";
import logoLight from "@/assets/public/light-logo.svg";
import logoDark from "@/assets/public/dark-logo.svg";
import { useColorMode } from "@vueuse/core";
import vision from "@/assets/public/vision2030.png";

const mode = useColorMode();
mode.value = "light";
</script>

<template>
  <footer
    id="footer"
    class="max-w-[75%] max-xl:max-w-[90%] max-lg:max-w-[95%] max-sm:max-w-full
           mx-auto py-24 sm:pb-32 px-4"
  >
    <div class="p-10 max-md:p-6 max-sm:p-4 bg-muted/50 dark:bg-card rounded-4xl">

      <!-- GRID - Desktop: keep original, Mobile: show in one column -->
      <div
        class="grid  md:grid-cols-4 xl:grid-cols-6
               gap-x-12 max-lg:gap-x-8 max-sm:gap-x-4 gap-y-8
               max-sm:grid-cols-1 max-sm:gap-y-6"
      >

        <!-- LOGO - Desktop: col-span-2, Mobile: full width -->
        <div class="col-span-2 xl:col-span-2 max-sm:col-span-1 max-sm:text-center max-sm:mb-4">
          <a href="#" class="flex font-bold items-center max-sm:justify-center">
            <img
              class="w-[50%] max-lg:w-[60%] max-md:w-[70%] max-sm:w-[60%] rounded-lg"
              :src="mode === 'light' ? logoDark : logoLight"
              alt="logo"
            />
          </a>
        </div>

        <!-- Technologies - Mobile: show below logo -->
        <div class="flex flex-col gap-2 max-sm:hidden">
          <h3 class="font-bold text-lg max-sm:text-base">Technologies</h3>
          <a href="/Technologies/smart_homes" class="opacity-60 hover:opacity-100">
            Smart Homes
          </a>
          <a href="/Technologies/smart_farming" class="opacity-60 hover:opacity-100">
            Smart Farming
          </a>
          <a href="/Technologies/smart_cities" class="opacity-60 hover:opacity-100">
            Smart Cities
          </a>
        </div>

        <!-- Resources - Mobile: show below logo -->
        <div class="flex flex-col gap-2 max-sm:hidden">
          <h3 class="font-bold text-lg max-sm:text-base">Resources</h3>
          <a href="/Resources/Blogs" class="opacity-60 hover:opacity-100">Blogs</a>
          <a href="/Resources/content_hub" class="opacity-60 hover:opacity-100">
            Content Hub
          </a>
          <a href="/Resources/casestudies" class="opacity-60 hover:opacity-100">
            Case Studies
          </a>
        </div>

        <!-- Help - Mobile: show below logo -->
        <div class="flex flex-col gap-2 max-sm:hidden">
          <h3 class="font-bold text-lg max-sm:text-base">Help</h3>
          <a href="/contact" class="opacity-60 hover:opacity-100">
            Contact Us
          </a>
          <a href="#faQq" class="opacity-60 hover:opacity-100">FAQ</a>
          <a href="#DownloadApplication" class="opacity-60 hover:opacity-100">
            Download App
          </a>
          <a href="/privacy" class="opacity-60 hover:opacity-100">
            Privacy Policy
          </a>
        </div>

        <!-- Socials - Mobile: show below logo -->
        <div class="flex flex-col gap-2 max-sm:hidden">
          <h3 class="font-bold text-lg max-sm:text-base">Socials</h3>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            class="opacity-60 hover:opacity-100"
          >
            Linkedin
          </a>
        </div>

        <!-- MOBILE ONLY: All links in one column -->
        <div class="hidden max-sm:block max-sm:space-y-8 max-sm:col-span-1">
          
          <!-- Technologies -->
          <div>
            <h3 class="font-bold text-base mb-3">Technologies</h3>
            <div class="flex flex-col gap-2">
              <a href="/smart_homes" class="opacity-60 hover:opacity-100 text-base">
                Smart Homes
              </a>
              <a href="/smart_farming" class="opacity-60 hover:opacity-100 text-base">
                Smart Farming
              </a>
              <a href="/smart_cities" class="opacity-60 hover:opacity-100 text-base">
                Smart Cities
              </a>
            </div>
          </div>

          <!-- Resources -->
          <div>
            <h3 class="font-bold text-base mb-3">Resources</h3>
            <div class="flex flex-col gap-2">
              <a href="/blogs" class="opacity-60 hover:opacity-100 text-base">Blogs</a>
              <a href="/content_hub" class="opacity-60 hover:opacity-100 text-base">
                Content Hub
              </a>
              <a href="/case_studies" class="opacity-60 hover:opacity-100 text-base">
                Case Studies
              </a>
            </div>
          </div>

          <!-- Help -->
          <div>
            <h3 class="font-bold text-base mb-3">Help</h3>
            <div class="flex flex-col gap-2">
              <a href="#contact" class="opacity-60 hover:opacity-100 text-base">
                Contact Us
              </a>
              <a href="#faQq" class="opacity-60 hover:opacity-100 text-base">FAQ</a>
              <a href="#DownloadApplication" class="opacity-60 hover:opacity-100 text-base">
                Download App
              </a>
              <a href="/privacy" class="opacity-60 hover:opacity-100 text-base">
                Privacy Policy
              </a>
            </div>
          </div>

          <!-- Socials -->
          <div>
            <h3 class="font-bold text-base mb-3">Socials</h3>
            <div class="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                class="opacity-60 hover:opacity-100 text-base"
              >
                Linkedin
              </a>
            </div>
          </div>

        </div>

      </div>

      <Separator class="my-6 max-sm:my-6" />

      <!-- BOTTOM - Keep desktop, adjust mobile only -->
      <section
        class="flex items-center justify-between gap-4
               max-sm:flex-col max-sm:text-center max-sm:gap-6"
      >
        <h3 class="text-sm md:text-base lg:text-lg max-sm:text-sm">
          &copy; 2025 Designed and developed by
          <a
            target="_blank"
            href="https://isynclouds.com/"
            class="text-primary transition-all border-primary hover:border-b-2"
          >
            iSynclouds
          </a>
        </h3>

        <img
          class="w-32 max-md:w-24 max-sm:w-28 rounded-lg"
          :src="vision"
          alt="Vision 2030"
        />
      </section>

    </div>
  </footer>
</template>