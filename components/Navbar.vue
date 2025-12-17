<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useColorMode } from '@vueuse/core'

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

// Color Mode
const colorMode = useColorMode()
onMounted(() => {
  const mode = localStorage.getItem('appearance') ?? 'light'
  colorMode.value = mode
})

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
  updateAppearance(newTheme)
  localStorage.setItem('appearance', newTheme)
  document.documentElement.classList.toggle('dark', newTheme === 'dark')
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
  { title: 'Smart Homes', description: 'Create and manage smart home device apps and cloud.', href: '/smart_homes' },
  { title: 'Smart Farming', description: 'IoT solutions to cultivate smarter, yield better and farm sustainably.', href: '/smart_farming' },
  { title: 'Smart Cities', description: 'Prototype rapidly and launch integrated IoT ecosystems.', href: '/smart_cities' },
]

const ResourcesList: ResourcesProps[] = [
  { title: 'Blogs', description: 'Company news, product updates, and new platform features.', href: '/blogs' },
  { title: 'Content Hub', description: 'Get access to exclusive content derived from practical IoT application and success stories', href: '/content_hub' },
  { title: 'Case Studies', description: 'Learn success stories of businesses like yours that built IoT products and connected services with Blynk Platform.', href: '/Resources/casestudies' },
]

// Logout handler

</script>

<template>
  <Announcement class="sticky top-0 z-40 mx-auto flex items-center justify-between bg-card p-2 shadow-md" />

  <header :class="[
    'header-base bg-card top-15 overflow-visible z-[999]',
    appearance === 'light' ? 'shadow-light' : 'shadow-dark',
    isScrolled ? 'header-scrolled' : 'header-normal'
  ]">
    <NuxtLink to="/" class="flex items-center text-lg font-bold">
      <img class="img-border-animation relative mr-auto flex w-[40%] items-center rounded-lg "
        :src="appearance === 'light' ? logoDark : logoLight" alt="logo" />
    </NuxtLink>

    <!-- Mobile Menu -->
    <div class="items-center lg:hidden">
      <Sheet v-model:open="isOpen">
        <SheetTrigger as-child>
          <Menu @click="isOpen = true" class="cursor-pointer" />
        </SheetTrigger>

        <SheetContent side="left" class="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card">
          <div>
            <SheetHeader class="mb-4">
              <SheetTitle class="flex items-center">
                <NuxtLink to="/" class="flex items-center">
                  <img
                    class="img-border-animation relative mr-auto flex w-[40%] items-center rounded-lg border-t-primary/30 leading-none md:w-[50%] lg:w-[50%]"
                    :src="appearance === 'light' ? logoDark : logoLight" alt="logo" />
                </NuxtLink>
              </SheetTitle>
            </SheetHeader>

            <!-- DropdownMenu for auth -->

          </div>

          <!-- Theme toggle -->
          <SheetFooter class="mt-4 flex-col items-start justify-start sm:flex-col">
            <Separator class="mb-2" />
            <div @click="cycleAppearance"
              class="flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-2 hover:bg-muted">
              <span class="text-sm font-medium">{{ appearance === 'light' ? 'Light Mode' : 'Dark Mode' }}</span>
              <component :is="currentIcon" class="h-5 w-5" />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>

    <!-- Desktop Navigation -->
    <NavigationMenu class="sm:hidden  "  >
      <NavigationMenuList>
        <!-- Technologies Dropdown -->

        <NavigationMenuItem>

          <NavigationMenuTrigger class="bg-card text-base font-bold  ">
            <p class="p-2">Technologies</p>
          </NavigationMenuTrigger>
          <NavigationMenuContent class="border border-border">
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
          <NavigationMenuContent class="border border-border">
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

      <NavigationMenuViewport  />
    </NavigationMenu>


    <!-- Right Icons -->
    <div class="">
      <button @click="cycleAppearance" class="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
        <component :is="currentIcon" class="h-5 w-5" />
      </button>
    </div>
  </header>
</template>

<style scoped>
.header-base {
  position: sticky;
  z-index: 40;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  padding: 0.5rem;
  transition: all 0.3s ease-in-out;

}

.header-normal {
  width: 80%;
}

.header-scrolled {
  width: 60%;
  border-top: 1px solid #2d55a4;
  border-left: 1px solid #2d55a4;
  border-right: 1px solid #2d55a4;
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
/* أضف ده تحت الـ styles الموجودة */


</style>
