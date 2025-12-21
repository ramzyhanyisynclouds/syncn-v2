<script setup lang="ts">

import '@selemondev/vue3-marquee/dist/style.css';
import Agriculture from '@/assets/public/Agriculture.png';
import Platform from '@/assets/public/smart_farming.png';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/ui/accordion'
interface FAQProps {
    question: string;
    answer: string;
    value: string;
}

const FAQList: FAQProps[] = [
    {
        question: 'Resource Optimization',
        answer: 'Use real-time data to reduce water usage, fertilizers, and overall resource waste.',
        value: 'item-1',
    },
    {
        question: 'Operational Efficiency',
        answer: 'Shift to automation—irrigation, greenhouse ventilation, livestock feeding, and more.',
        value: 'item-2',
    },
    {
        question: 'Risk Management',
        answer: 'Get early alerts for heat stress, pests, humidity drops, or water shortages.',
        value: 'item-3',
    },
    {
        question: 'Boosting Yields',
        answer: 'Use precision farming insights to improve crop performance.',
        value: 'item-4',
    },
    {
        question: 'Labor Shortage Relief',
        answer:
            'Automation & robotics reduce dependency on manual labor.',
        value: 'item-5',
    },
    {
        question: 'Data-Driven Decisions',
        answer:
            'Live insights guide planting cycles, climate control, and crop care.',
        value: 'item-6',
    },
];
import { Cloud, Send, Cpu, Palette, SlidersVertical, ChartSpline, Bell, Calendar, Smartphone } from 'lucide-vue-next';

const scrollDown = () => {
    window.scrollBy({
        top: window.innerHeight - 350,
        behavior: 'smooth',
    });
};
</script>

<template>
    <section class="banner_case align-items-center -mt-5 flex gap-8">
        <div class="spacing lg:w-1/2">
            <div class="banner_title">
                <span class="font-bold text-white"><span class="font-bold text-[#40eef3]">Smart farming: </span> IoT Software for Agriculture</span>
            </div>
            <div class="banner_des">
                <span class="mb-4">Cultivate smarter, increase yields, and manage your farm sustainably with SyncN’s unified IoT platform.</span>
            </div>
            <div>
                <a href="/contact" class="contact readmore mt-2 items-center gap-1 rounded-3xl border bg-[#40eef3] p-3 transition hover:opacity-80">
                    Contact Sales →
                </a>
            </div>
        </div>
        <div class="hidden px-4 lg:block lg:w-1/2">
            <img :src="Agriculture" alt="Aquascape" class="blog_img h-50 w-full rounded-md object-cover" />
        </div>
    </section>
    <div class="scroll_arrow_wrapper">
        <button @click="scrollDown" class="animate-bounce text-white" aria-label="Scroll down">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="#40eef3">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
    </div>

    <div class="mx-auto mb-12 max-w-screen-xl gap-8">
        <span class="mt-8 block px-4 text-start text-[30px] font-bold lg:text-[52px]">What Powers a Smart Farm?</span>
        <div class="env-desc mb-12 px-4 text-start text-[12px] lg:text-[23px]">
            <span
                >Modern smart farming combines various technologies to improve crop cultivation, livestock management, indoor farming operations and
                other aspects:</span
            >
        </div>
        <div class="monitor flex flex-wrap px-4 pt-2 pb-12">
            <div class="power-farming pb-12 lg:w-1/4">
                <Cloud width="30" height="30" class="mb-4 text-[#5572d3]" />
                <span class="mb-8 block text-2xl font-semibold">Location Services</span>
                <p class="mt-2">GPS, satellite tracking, and geofencing to monitor machinery, vehicles, and livestock across large farmlands.</p>
            </div>
            <div class="power-farming pb-12 lg:w-1/4">
                <Send width="30" height="30" class="mb-4 text-[#5572d3]" />
                <span class="mb-8 block text-2xl font-semibold">Robotics & Automation</span>
                <p class="mt-2">Autonomous tractors, greenhouse robots, and automated sorting/harvesting systems.</p>
            </div>
            <div class="power-farming pb-12 lg:w-1/4">
                <Cpu width="30" height="30" class="mb-4 text-[#5572d3]" />
                <span class="mb-8 block text-2xl font-semibold">Data  & Forecasting</span>
                <p class="mt-2">AI-driven insights to forecast yields, optimize planting cycles, and predict irrigation needs.</p>
            </div>
            <div class="power-farming pb-12 lg:w-1/4">
                <Palette width="30" height="30" class="mb-4 text-[#5572d3]" />
                <span class="mb-8 block text-2xl font-semibold">Smart Irrigation Control</span>
                <p class="mt-2">Automated drip, pivot, and greenhouse irrigation tailored to soil moisture, humidity, and temperature.</p>
            </div>
            <div class="power-farming pb-12 lg:w-1/4">
                <Palette width="30" height="30" class="mb-4 text-[#5572d3]" />
                <span class="mb-8 block text-2xl font-semibold">Environmental Sensors</span>
                <p class="mt-2">Monitor soil nutrients, salinity, water quality, weather, and micro-climate conditions—live.</p>
            </div>
            <div class="power-farming pb-12 lg:w-1/4">
                <Palette width="30" height="30" class="mb-4 text-[#5572d3]" />
                <span class="mb-8 block text-2xl font-semibold">Actuators & Farm Equipment Control</span>
                <p class="mt-2">Automate pumps, valves, fans, misting systems, fertigation machines, and livestock feeders.</p>
            </div>
            <div class="power-farming pb-12 lg:w-1/4">
                <Palette width="30" height="30" class="mb-4 text-[#5572d3]" />
                <span class="mb-8 block text-2xl font-semibold">Farm Management Software</span>
                <p class="mt-2">Unified dashboards for farm alerts, analytics, devices, and operational workflows.</p>
            </div>
            <div class="power-farming pb-12 lg:w-1/4">
                <Palette width="30" height="30" class="mb-4 text-[#5572d3]" />
                <span class="mb-8 block text-2xl font-semibold">Rugged Connectivity Solutions</span>
                <p class="mt-2">LoRaWAN, NB-IoT, LTE, WiFi, optimized for desert environments and remote farm locations.</p>
            </div>
        </div>
    </div>

    <section id="faq" class="mx-auto max-w-screen-xl px-4 py-24 sm:pb-0">
        <div class="mx-auto mb-12">
            <span class="text-3xl font-bold md:text-4xl"> How IoT Tackles Farming Challenges </span>
            <p class="mt-4 text-xl text-muted-foreground">IoT can help solve some of the key issues that farmers face in their operations.</p>
        </div>

        <Accordion type="single" collapsible class="w-full max-w-3xl divide-y divide-border rounded-lg bg-background">
            <AccordionItem v-for="{ question, answer, value } in FAQList" :key="value" :value="value" class="px-4 ">
                <AccordionTrigger class="text-left text-lg font-medium">
                    {{ question }}
                </AccordionTrigger>

                <AccordionContent class="mt-2 text-muted-foreground">
                    {{ answer }}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </section>

    <div class="mx-auto my-12 max-w-screen-xl gap-8">
        <div class="env-desc mb-12 px-4 text-center text-[12px] lg:text-[23px]">
            <span class="mt-8 block px-4 text-center text-[30px] font-bold lg:text-[52px]">Elevate Your Agri-Tech With SyncN</span>
            <div class="env-desc mb-12 px-4 text-center text-[12px] lg:text-[23px]">
                <span
                    >SyncN provides every software component you need to build modern smart farming solutions:</span
                >
            </div>
            <div class="flex flex-wrap pt-8">
                <div class="connect-internet w-full space-y-3 lg:w-1/4">
                    <div class="power-farming pb-12 text-center">
                        <div class="icons flex justify-center">
                            <Cloud width="30" height="30" class="mb-4 text-[#5572d3]" />
                        </div>
                        <span class="mb-8 block text-2xl font-semibold">Connect</span>
                        <span class="mt-2 text-xl"> Integrate any sensors, pumps, or agricultural equipment with ease. </span>
                    </div>
                    <div class="power-farming pb-12 text-center">
                        <div class="icons flex justify-center">
                            <SlidersVertical width="30" height="30" class="mb-4 text-[#5572d3]" />
                        </div>
                        <span class="mb-8 block text-2xl font-semibold">Control</span>
                        <span class="mt-2 text-xl"> Manage irrigation systems, barn equipment, and greenhouse devices remotely.</span>
                    </div>
                    <div class="power-farming pb-12 text-center">
                        <div class="icons flex justify-center">
                            <ChartSpline width="30" height="30" class="mb-4 text-[#5572d3]" />
                        </div>
                        <span class="mb-8 block text-2xl font-semibold">Monitor</span>
                        <span class="mt-2 text-xl"> Track soil data, weather, livestock health, and equipment performance in real time.</span>
                    </div>
                </div>
                <div class="connect-internet w-full lg:w-2/4">
                    <div class="flex h-full items-center justify-center">
                        <img :src="Platform" alt="Aquascape" class="h-full w-[90%] rounded-md bg-[#f6f6f6] object-cover" />
                    </div>
                </div>
                <div class="connect-internet w-full space-y-3 lg:w-1/4">
                    <div class="power-farming pb-12 text-center">
                        <div class="icons flex justify-center">
                            <Bell width="30" height="30" class="mb-4 text-[#5572d3]" />
                        </div>
                        <span class="mb-8 block text-2xl font-semibold">Notify</span>
                        <span class="mt-2 text-xl"> Receive instant alerts for critical conditions, temperature spikes, low moisture, pump failures. </span>
                    </div>
                    <div class="power-farming pb-12 text-center">
                        <div class="icons flex justify-center">
                            <Calendar width="30" height="30" class="mb-4 text-[#5572d3]" />
                        </div>
                        <span class="mb-8 block text-2xl font-semibold">Automate</span>
                        <span class="mt-2 text-xl"> Set irrigation schedules, greenhouse climate rules, fertigation, feeding, and more.</span>
                    </div>
                    <div class="power-farming pb-12 text-center">
                        <div class="icons flex justify-center">
                            <Smartphone width="30" height="30" class="mb-4 text-[#5572d3]" />
                        </div>
                        <span class="mb-8 block text-2xl font-semibold">Customize</span>
                        <span class="mt-2 text-xl">A fully branded mobile app and management console built just for your operation. </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.banner_case {
    background: url('../assets/public/caseStudies.webp');

    width: 100%;
    margin-top: -3.5rem;
}
.scroll_arrow_wrapper {
    display: flex;
    justify-content: center;
    margin-top: -5rem;
    margin-bottom: 5rem;
}
.banner_title {
    display: flex;
    object-fit: fill;
    padding-top: 150px;
    padding-right: 25px;

    gap: 1rem;
}
.banner_title span {
    font-size: 57px;
}
.banner_des {
    width: 80%;
    margin-top: 24px;
    padding-left: 114px;
    padding-right: 25px;
    font-size: 23px;
    color: white;
    line-height: 2;
    margin-bottom: 1rem;
}

.blog_img {
    height: 640px;
    margin-top: 72px;
    object-fit: contain;
}
.readmore:hover {
    background: #2d55a4;
    color: white;
}
.case-contact {
    background: url('../assets/public/caseStudies.webp');
    background-size: cover;
    height: 530px;
    padding: 8em 0;
}
.contact {
    color: white;
    margin-left: 40px;
}
.power-farming {
    display: grid;
    align-items: center;
}

.list-disc li::marker {
    color: #5572d3;
}
#faq {
    background: url('../assets/public/farming-faq.webp');
    background-size: 600px;
    background-position: right bottom;
    background-repeat: no-repeat;
    object-fit: cover;
}
@media (max-width: 639px) {
    .banner_title {
        padding-left: 40px;
        padding-top: 100px;
    }
    .banner_title span {
        font-size: 30px;
    }
    .banner_des {
        width: auto;
        padding-left: 40px;
        font-size: 15px;
    }
    .banner_case {
        height: 55vh;
    }
    .case-contact {
        padding: 0;
    }
    .monitor {
        flex-wrap: wrap;
    }
}
@media (min-width: 640px) {
    .banner_title {
        padding-left: 40px;
    }
    .banner_des {
        padding-left: 40px;
    }
    .case-contact {
        padding: 50px;
    }
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
    .spacing {
        margin-left: 10rem;
    }
}
</style>
