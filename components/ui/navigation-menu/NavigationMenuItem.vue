<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { reactiveOmit } from '@vueuse/core'
import { NavigationMenuItem, type NavigationMenuItemProps } from 'reka-ui'

const props = defineProps<NavigationMenuItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <NavigationMenuItem
    data-slot="navigation-menu-item"
    v-bind="delegatedProps"
    :class="cn('relative', props.class)"
    class="group flex flex-1 list-none items-center justify-center gap-x-1"
  >
    <slot />
  </NavigationMenuItem>
</template>
