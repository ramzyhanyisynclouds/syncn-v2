<script setup lang="ts">
import "@selemondev/vue3-marquee/dist/style.css";
import { useAppearance } from '@/composables/useAppearance';
const { appearance } = useAppearance();
</script>

<template>
    <section class="relative overflow-hidden py-2 flex items-center justify-center text-center " style="    justify-content: center
">
        <div
            class="absolute inset-0 overflow-hidden moving-gradient  "
            :class="{
            'mix-blend-darken': appearance === 'light',
            'mix-blend-color-dodge': appearance === 'dark'
        }"
        >
            <div
                class="absolute inset-0 bg-gradient-to-r backdrop-blur-[1px]"
                :class="appearance === 'light'
                ? 'from-pink-500/60 via-purple-500/60 to-blue-500/60'
                : 'from-pink-500/20 via-purple-500/20 to-blue-500/20'"
            ></div>

            <div class="absolute inset-0 fade-mask pointer-events-none"></div>
        </div>

        <div
            class="relative z-10 text-sm text-center  ali md:text-lg lg:text-lg sm:text-sm"
            :class="appearance === 'light' ? 'text-black' : 'text-white backdrop-blur-md'"
        >
            Smart Elements by SyncN — your IoT experts — See you at Cityscape Riyadh.
        </div>
    </section>

</template>

<style scoped>
.moving-gradient {
    --start: rgba(255, 120, 120, 0.5);
    --mid: rgba(36, 188, 255, 0.4);
    --end: rgba(64, 0, 255, 0.51);
    --via: rgba(255, 89, 0, 0.56);

    background-image: repeating-linear-gradient(
        45deg,
        var(--end),
        var(--start) 4%,
        var(--start) 8%,
        transparent 9%,
        transparent 14%,
        var(--mid) 16%,
        var(--mid) 20%,
        transparent,
        var(--via) 36%,
        var(--via) 40%,
        transparent 42%,
        var(--end) 46%,
        var(--end) calc(50% - 16.8px)
    );
    background-size: 200% 100%;
    animation: movingBanner 20s linear infinite;
}

@keyframes movingBanner {
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
}
</style>
