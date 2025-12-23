<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// UI Components
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '~/ui/dropdown-menu'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink ,NavigationMenuViewport} from '~/ui/navigation-menu'

import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '~/ui/sheet'
import { Button } from '~/ui/button'
import { Separator } from '~/ui/separator'
import Announcement from '~/components/Announcement.vue'

// Lucide Icons
import { LogOut, Menu, Moon, Sun } from 'lucide-vue-next'

// Images
import logoDark from '/assets/public/dark-logo.svg'
import logoLight from '/assets/public/light-logo.svg'
import Resources from '/assets/public/Resources.png'
import Technologies from '/assets/public/Technologies.png'

// Composables
import useTheme from '~/composables/useTheme'
import { useAppearance } from '~/composables/useAppearance'
import { getInitials } from '~/composables/useInitials'

const { theme, setTheme } = useTheme()
const { appearance, updateAppearance } = useAppearance()

// Scroll
const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Mobile Sheet
const isOpen = ref(false)

// Theme toggle
const currentIcon = computed(() => appearance.value === 'light' ? Sun : Moon)
function cycleAppearance() {
  const newTheme = appearance.value === 'light' ? 'dark' : 'light'
  // useAppearance() already persists and toggles the `dark` class
  updateAppearance(newTheme)
}

// Dummy auth

// Route & menu lists


interface RouteProps { href: string; label: string }
interface TechnologiesProps { title: string; description: string; href: string }
interface ResourcesProps { title: string; description: string; href: string }

const routeList: RouteProps[] = [
  { href: '/contact', label: 'Contact' },
  { href: '/About', label: 'About' },
]

const technologiesList: TechnologiesProps[] = [
  { title: 'Smart Homes', description: 'Create and manage smart home device apps and cloud.', href: '/Technologies/smart_homes' },
  { title: 'Smart Farming', description: 'IoT solutions to cultivate smarter, yield better and farm sustainably.', href: '/Technologies/smart_farming' },
  { title: 'Smart Cities', description: 'Prototype rapidly and launch integrated IoT ecosystems.', href: '/Technologies/smart_cities' },
]

const ResourcesList: ResourcesProps[] = [
  { title: 'Blogs', description: 'Company news, product updates, and new platform features.', href: '/Resources/Blogs' },
  { title: 'Content Hub', description: 'Get access to exclusive content derived from practical IoT application and success stories', href: '/Resources/content_hub' },
  { title: 'Case Studies', description: 'Learn success stories of businesses like yours that built IoT products and connected services with Blynk Platform.', href: '/Resources/casestudies' },
]

// Logout handler

</script>

<template>
  <Announcement class="sticky top-0 z-40 mx-auto flex items-center justify-between bg-card p-2 shadow-md" />

  <header :class="[
    'header-base bg-card top-14 z-[999] max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8',
    appearance === 'light' ? 'shadow-light' : 'shadow-dark',
    isScrolled ? 'header-scrolled' : 'header-normal'
  ]">
    <NuxtLink to="/" class="flex items-center text-lg font-bold">
      <img
        class="img-border-animation relative mr-auto flex h-auto items-center rounded-lg w-28 sm:w-32 md:w-40 "
        :src="appearance === 'light' ? logoDark : logoLight" alt="logo" />
    </NuxtLink>

    <!-- Mobile Menu moved to right end -->

    <!-- Desktop Navigation -->
    <NavigationMenu class="hidden lg:flex"  >
      <NavigationMenuList>
        <!-- Technologies Dropdown -->

        <NavigationMenuItem>

          <NavigationMenuTrigger class="bg-card text-base font-bold  ">
            <p class="p-2">Technologies</p>
          </NavigationMenuTrigger>
          <NavigationMenuContent
            class="border border-border origin-top-left scale-95 opacity-0 translate-y-2
                   transition-all duration-200 ease-out
                   data-[state=open]:opacity-100 data-[state=open]:scale-100 data-[state=open]:translate-y-0"
          >
            <div class="grid w-[600px] grid-cols-2 gap-5 p-4">
              <img :src="Technologies" class="h-full w-full rounded-md object-cover" />
              <ul class="flex flex-col gap-2">
                <li v-for="{ title, description, href } in technologiesList" :key="title"
                  class="rounded-md p-3 text-sm hover:bg-muted">
                  <NuxtLink :to="href" class="block">
                    <p class="font-semibold">{{ title }}</p>
                    <p class="text-muted-foreground line-clamp-2">{{ description }}</p>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <!-- Resources Dropdown -->
        <NavigationMenuItem>
          <NavigationMenuTrigger class="bg-card text-base font-bold">
            <p class="p-2">Resources</p>
          </NavigationMenuTrigger>
          <NavigationMenuContent
            class="border border-border origin-top-left scale-95 opacity-0 translate-y-2
                   transition-all duration-200 ease-out
                   data-[state=open]:opacity-100 data-[state=open]:scale-100 data-[state=open]:translate-y-0"
          >
            <div class="grid w-[600px] grid-cols-2 gap-5 p-4">
              <img :src="Resources" class="h-full w-full rounded-md object-cover" />
              <ul class="flex flex-col gap-2">
                <li v-for="{ title, description, href } in ResourcesList" :key="title"
                  class="rounded-md p-3 text-sm hover:bg-muted">
                  <NuxtLink :to="href" class="block">
                    <p class="font-semibold">{{ title }}</p>
                    <p class="text-muted-foreground line-clamp-2">{{ description }}</p>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <!-- Direct Links (no dropdown) -->
        <NavigationMenuItem v-for="route in routeList" :key="route.label">
          <NavigationMenuLink asChild>
            <NuxtLink :to="route.href" class="bg-card text-base font-bold p-2">
              {{ route.label }}
            </NuxtLink>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>

      <NavigationMenuViewport
        class="origin-top transition-[height,width] duration-300 ease-out"
      />
    </NavigationMenu>


    <!-- Right Icons (theme + mobile menu toggle) -->
    <div class="flex items-center gap-2">
      <button @click="cycleAppearance" class="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
        <component :is="currentIcon" class="h-5 w-5" />
      </button>

      <div class="lg:hidden">
          <Sheet v-model:open="isOpen">
            <!-- Custom fading overlay to replace missing SheetOverlay -->
            <div
              v-show="isOpen"
              class="fixed inset-0 z-[998] bg-background/60 backdrop-blur-sm opacity-0 transition-opacity duration-300 ease-out"
              :class="{ 'opacity-100': isOpen }"
            />
          <SheetTrigger as-child>
            <Menu
              @click="isOpen = true"
              :class="['cursor-pointer h-8 w-8 transition-transform duration-300', isOpen ? 'rotate-90' : 'rotate-0']"
              aria-label="Open menu"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            class="z-[1000] flex h-full w-[85%] max-w-[380px] flex-col justify-between bg-card p-4 rounded-tr-2xl rounded-br-2xl sm:w-[380px]
                   -translate-x-full opacity-0 transition-transform transition-opacity duration-400 ease-out
                   data-[state=open]:translate-x-0 data-[state=open]:opacity-100"
          >
            <div>
              <SheetHeader class="mb-4">
                <SheetTitle class="flex items-center">
                  <NuxtLink to="/" class="flex items-center" @click="isOpen = false">
                    <img
                      class="img-border-animation relative mr-auto flex w-[48%] items-center rounded-lg border-t-primary/30 leading-none md:w-[50%] lg:w-[50%]"
                      :src="appearance === 'light' ? logoDark : logoLight" alt="logo" />
                  </NuxtLink>
                </SheetTitle>
              </SheetHeader>

              <!-- Mobile navigation (mirrors navbar2 UI) -->
              <nav class="mobile-nav space-y-3 px-2">
                <!-- Quick links as ghost buttons -->
                <div class="flex flex-col gap-2">
                  <Button as-child variant="ghost" class="justify-start text-base px-4 py-2">
                    <NuxtLink :to="'/contact'" @click="isOpen = false">Contact</NuxtLink>
                  </Button>
                  <Button as-child variant="ghost" class="justify-start text-base px-4 py-2">
                    <NuxtLink :to="'/About'" @click="isOpen = false">About</NuxtLink>
                  </Button>
                </div>

                <Separator class="my-2" />

                <!-- Technologies accordion -->
                <details class="group mb-2 overflow-hidden">
                  <summary class="flex cursor-pointer items-center justify-between px-4 py-2 text-base font-semibold select-none">
                    <span>Technologies</span>
                    <span class="transition-transform duration-300 group-open:rotate-180">▾</span>
                  </summary>
                  <div class="accordion-content px-4">
                    <ul class="flex flex-col gap-2">
                      <li v-for="{ title, description, href } in technologiesList" :key="title" class="rounded-md p-3 hover:bg-muted">
                        <NuxtLink :to="href" @click="isOpen = false" class="block">
                          <p class="font-medium">{{ title }}</p>
                          <p class="text-muted-foreground text-xs line-clamp-2">{{ description }}</p>
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </details>

                <!-- Resources accordion -->
                <details class="group mb-2 overflow-hidden">
                  <summary class="flex cursor-pointer items-center justify-between px-4 py-2 text-base font-semibold select-none">
                    <span>Resources</span>
                    <span class="transition-transform duration-300 group-open:rotate-180">▾</span>
                  </summary>
                  <div class="accordion-content px-4">
                    <ul class="flex flex-col gap-2">
                      <li v-for="{ title, description, href } in ResourcesList" :key="title" class="rounded-md p-3 hover:bg-muted">
                        <NuxtLink :to="href" @click="isOpen = false" class="block">
                          <p class="font-medium">{{ title }}</p>
                          <p class="text-muted-foreground text-xs line-clamp-2">{{ description }}</p>
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </details>
              </nav>
            </div>

            <!-- Theme toggle -->
            <SheetFooter class="mt-4 flex-col items-start justify-start sm:flex-col">
              <Separator class="mb-2" />
              <button @click="cycleAppearance"
                class="flex w-full items-center justify-between rounded-md px-3 py-2 hover:bg-muted">
                <span class="text-sm font-medium">{{ appearance === 'light' ? 'Light Mode' : 'Dark Mode' }}</span>
                <component :is="currentIcon" class="h-5 w-5" />
              </button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header-base {
  position: sticky;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;

}

.header-normal {
  width: 90%;
  border-color: transparent;
}

@media (min-width: 768px) {
  .header-normal { width: 70%; }
}

@media (min-width: 1024px) {
  .header-normal { width: 75%; }
}

.header-scrolled {
  width: 90%;
  border-top: 1px solid #2d55a4;
  border-left: 1px solid #2d55a4;
  border-right: 1px solid #2d55a4;
}

@media (min-width: 768px) {
  .header-scrolled { width: 90%; }
}

@media (min-width: 1024px) {
  .header-scrolled { width: 50%; border-radius: 50px; }
}

.shadow-light {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.085);
}

.shadow-dark {
  box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.141);
}

/* details accordion */
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

details[open] .accordion-content {
  max-height: 1000px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
/* Hide default details marker; use custom chevron */
summary::-webkit-details-marker { display: none; }
summary::marker { content: ""; }
/* أضف ده تحت الـ styles الموجودة */
/* @media (max-width: 639px) {
  .group {
    max-height: 380px;
    overflow-y: auto;
  }
} */


</style>
