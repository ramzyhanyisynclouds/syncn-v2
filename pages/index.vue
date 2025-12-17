<script setup lang="ts">

import { useAppearance } from '@/composables/useAppearance';
const { appearance } = useAppearance();

import { Badge } from "~/ui/badge";
import { Button } from "~/ui/button";
import { ArrowRight } from "lucide-vue-next";
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

import heroImageLight from '../assets/public/hero-light.png';
import heroImageDark from '../assets/public/hero-dark.png';

const heroImg = ref<HTMLElement | null>(null);

/**
 * Cityscape Riyadh countdown (light, dependency-free)
 * Adjust CITYSCAPE_START to the exact start date/time in Riyadh time (UTC+03:00)
 */
const CITYSCAPE_START = new Date("2025-11-17T10:00:00+03:00"); // TODO: set your official kickoff date/time (Riyadh time)

type Left = { d: number; h: number; m: number; s: number; totalMs: number };
const left = ref<Left>({ d: 0, h: 0, m: 0, s: 0, totalMs: 0 });
let timer: number | null = null;

const tick = () => {
    const now = new Date().getTime();
    const diff = CITYSCAPE_START.getTime() - now;
    const totalMs = Math.max(0, diff);
    const totalSec = Math.floor(totalMs / 1000);
    const d = Math.floor(totalSec / (3600 * 24));
    const h = Math.floor((totalSec % (3600 * 24)) / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    left.value = { d, h, m, s, totalMs };
};

onMounted(() => {
    tick();
    timer = window.setInterval(tick, 1000);
});

onBeforeUnmount(() => {
    if (timer) clearInterval(timer);
});

// circular fill percentages for the progress rings
const pSec = computed(() => (left.value.s / 60) * 100);
const pMin = computed(() => (left.value.m / 60) * 100);
const pHour = computed(() => (left.value.h / 24) * 100);
// for days, we show the number and an aesthetic ring progress over 365 days
const pDay = computed(() => ((left.value.d % 365) / 365) * 100);

const headline = computed(() =>
    left.value.totalMs > 0
        ? "See you at Cityscape Riyadh"
        : "Thank you for visiting Cityscape Riyadh!"
);

// helper to force reflow-based animations on tick (changes element keys)
const k = computed(() => ({
    d: `d-${left.value.d}`,
    h: `h-${left.value.h}`,
    m: `m-${left.value.m}`,
    s: `s-${left.value.s}`,
}));
</script>

<template>
    <section class="hero-section relative overflow-hidden">
        <div class="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
            <div class="text-center space-y-8">
                <Badge variant="outline" class="text-sm py-2 ">
          <span class="mr-2 text-white ">
            <Badge class="bg-blue-800">New</Badge >
          </span>
                    <span>The Future of IoT Starts Here</span>
                </Badge>

                <div class="max-w-screen-md mx-auto text-center text-5xl md:text-6xl font-bold">
                    <h1>
                        Unlock Smart Living with
                        <span class="text-transparent bg-gradient-to-r from-[#bec4d1] to-blue-800 bg-clip-text">
              SyncN IoT Platform
            </span>
                    </h1>
                </div>

                <p class="pb-9 max-w-screen-md mx-auto text-xl text-muted-foreground">
                    Connect, automate, and elevate your lifestyle with our cutting-edge IoT ecosystem.
                    We’re starting with Smart Homes — and expanding to every connected experience.
                </p>

                <div class="space-y-4 md:space-y-0 md:space-x-4">
                    <Button as-child class="w-5/6 md:w-1/4 font-bold group/arrow !text-white">
                        <NuxtLink to="/login" class="!text-white">
                            Get Started
                            <ArrowRight class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                        </NuxtLink>
                    </Button>

                    <Button as-child variant="secondary" class="w-5/6 md:w-1/4 font-bold">
                        <NuxtLink to="/contact">
                            Contact SyncN
                        </NuxtLink>
                    </Button>
                </div>
             
            </div>
            

            <div class="relative group mt-14">
                <!-- gradient shadow under the hero image -->
                <div
                    class="absolute -top-6 w-full h-12 lg:h-[80%] bg-primary/50 rounded-full img-shadow-animation"
                ></div>

                <img
                    ref="heroImg"
                    class="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-t-primary/30 transition-transform duration-700 ease-out"
                    :src="appearance === 'light' ? heroImageLight : heroImageDark"
                    alt="Smart Home Dashboard"
                />

                <!-- gradient effect overlay on image bottom -->
                <div
                    class="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"
                ></div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* ===== Hero image soft shadow animation ===== */
.img-shadow-animation {
    animation-name: img-shadow-animation;
    animation-iteration-count: infinite;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-direction: alternate;
}
@keyframes img-shadow-animation {
    from {
        opacity: 0.5;
        transform: translateY(30px);
        filter: blur(8px);
    }
    to {
        opacity: 1;
        transform: translateY(0px);
        filter: blur(40px);
    }
}

/* optional image tilt helpers (if used by your template) */
#hero-img { transform: rotate(-6deg); }
#hero-img.straight { transform: rotate(0deg); }

/* hero section stacking context */
.hero-section { position: relative; background-color: var(--background); }
.hero-section > * { position: relative; z-index: 1; }

/* ================== COUNTDOWN (rings + animations) ================== */

/* centers each ring cell */
.counter-card {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

/* CSS-only circular progress using conic-gradient (no SVG) */
.ring {
    --size: 96px;
    --track: hsl(var(--muted));
    --fill: hsl(var(--primary));
    width: var(--size);
    height: var(--size);
    border-radius: 999px;
    background:
        conic-gradient(var(--fill) calc(var(--p) * 1%), transparent 0),
        conic-gradient(var(--track) 0turn, var(--track) 1turn);
    /* donut mask */
    mask:
        radial-gradient(circle 40% at 50% 50%, transparent 39%, black 40%),
        linear-gradient(#000, #000);
    -webkit-mask:
        radial-gradient(circle 40% at 50% 50%, transparent 39%, black 40%),
        linear-gradient(#000, #000);
    display: grid;
    place-items: center;
    transition: background 200ms linear, transform 300ms ease;
    position: relative;
}

/* rotating glossy sweep + glow overlay */
.ring.fancy::before {
    content: "";
    position: absolute; inset: 0;
    border-radius: inherit;
    background:
        conic-gradient(from 0deg, transparent 0 86%, hsl(var(--primary)/0.9) 93%, transparent 100%),
        radial-gradient(30% 30% at 70% 10%, hsl(var(--primary)/.35), transparent 60%);
    mix-blend-mode: screen;
    animation: sweep 12s linear infinite;
    pointer-events: none;
}

/* subtle highlight layer */
.ring::after {
    content: "";
    position: absolute; inset: 0;
    border-radius: inherit;
    background: radial-gradient(30% 30% at 70% 10%, hsl(var(--primary)/.25), transparent 60%);
    pointer-events: none;
    mix-blend-mode: screen;
    opacity: .6;
}

/* inner circle that displays numbers/labels */
.ring-inner {
    background: hsl(var(--background));
    border-radius: 999px;
    border: 1px solid hsl(var(--border));
    width: calc(var(--size) - 16px);
    height: calc(var(--size) - 16px);
    display: grid; place-items: center;
    text-align: center;
    line-height: 1;
    position: relative;
    overflow: hidden;
}

/* number style */
.value {
    font-size: 1.5rem; /* md:text-3xl on medium+ screens */
    font-weight: 700;
    font-variant-numeric: tabular-nums;
}
@media (min-width: 768px) {
    .value { font-size: 1.875rem; }
}

/* label under number */
.label {
    font-size: 11px; /* md:text-xs */
    color: hsl(var(--muted-foreground));
    margin-top: 0.25rem;
}

/* number flip animation (re-triggered via keyed vnodes) */
.flip {
    animation: flip-in 500ms cubic-bezier(.2,.8,.2,1);
    transform-origin: 50% 70%;
}
@keyframes flip-in {
    0%   { transform: rotateX(75deg) translateY(6px); filter: blur(1px); opacity: .2; }
    60%  { transform: rotateX(-6deg); filter: blur(0); opacity: 1; }
    100% { transform: rotateX(0deg); }
}

/* sparkle burst each second (keyed by current second) */
.sparkle {
    position: absolute; inset: 0; pointer-events: none;
    background:
        radial-gradient(2px 2px at 20% 30%, hsl(var(--primary)) 0 60%, transparent 65%),
        radial-gradient(2px 2px at 70% 60%, hsl(var(--primary)) 0 60%, transparent 65%),
        radial-gradient(2px 2px at 40% 80%, hsl(var(--primary)) 0 60%, transparent 65%);
    animation: spark 750ms ease-out forwards;
    opacity: .9;
}
@keyframes spark {
    0%   { transform: scale(.6); opacity: .9; }
    100% { transform: scale(1.4); opacity: 0; }
}

/* gentle float (respects reduced motion) */
@media (prefers-reduced-motion: no-preference) {
    .ring { animation: ring-float 6s ease-in-out infinite; }
}
@keyframes ring-float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-3px); }
}

/* rotating sweep */
@keyframes sweep { to { transform: rotate(360deg); } }

/* final-seconds pulse for the seconds ring
   Requires inline style on seconds ring: style="--p:...; --sec: {currentSecond};" */
.hot .ring-inner::after {
    content: "";
    position: absolute; inset: -2px;
    border-radius: inherit;
    box-shadow: 0 0 0 0 hsl(var(--primary)/.35);
    animation: pulse 1000ms ease-out infinite;
    /* lower opacity normally; stronger near 0 second */
    opacity: calc((60 - var(--sec, 0)) / 60);
}
@keyframes pulse {
    0%   { box-shadow: 0 0 0 0 hsl(var(--primary)/.35); }
    100% { box-shadow: 0 0 0 12px transparent; }
}
</style>
