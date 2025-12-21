<script setup lang="ts">

import "@selemondev/vue3-marquee/dist/style.css";
import firstSmart from '@/assets/public/firstSmart.png';
import secondSmart from '@/assets/public/smart_cities 2.png';
import mobileApp from '@/assets/public/smart_cities 3.png';
import smartCities from '@/assets/public/smartCities.webp';

import {
    Eye,
    Flame,
    Cloud,
    Cpu,
    Palette,
    Check,
    Wind, Building2, Volume2, Droplet, Activity, Grip, Bath, Mountain, TreePine, Leaf, TreeDeciduous, Home, Recycle, Map, Drill, Smartphone, Truck, Video, Trash, Code, User, Wifi
} from "lucide-vue-next";
import { Card } from '@/components/ui/card';
// import blog from '@/public/blog.jpeg';

const scrollDown = () => {
    window.scrollBy({
        top: window.innerHeight - 250,
        behavior: 'smooth'
    });
};
interface ReviewProps {
    image: string;
    name: string;
    userName: string;
    comment: string;
    rating: number;
    link: string;
    thumbnail: string;
}

const reviewList: ReviewProps[] = [
    {
        image: "https://github.com/shadcn.png",
        name: "John Doe",
        userName: "Product Manager",
        comment: "Vue + Shadcn-Vue is awesome! Match my brand identity.",
        rating: 5.0,
        link: "/single_case_studies",
        thumbnail: firstSmart,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Sophia Collins",
        userName: "Cybersecurity Analyst",
        comment: "Tempor incididunt ut labore et dolore magna aliqua.",
        rating: 4.8,
        link: "/single_case_studies",
        thumbnail: secondSmart,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Adam Johnson",
        userName: "CTO",
        comment: "Reprehenderit in voluptate velit esse cillum dolore.",
        rating: 4.9,
        link: "/single_case_studies",
        thumbnail: mobileApp,
    },
];
</script>

<template>
    <section class="banner_case flex align-items-center gap-8 -mt-5">
        <div class=" lg:w-1/2">
            <div class="banner_title">
                <span class="text-white font-bold ">Low-Code IoT Platform for Modern <span
                        class=" font-bold text-[#40eef3]">Smart Cities </span></span>

            </div>
            <div class="banner_des">
                <span class="mb-4">Launch integrated, scalable smart city solutions, faster and with less complexity.
                    SyncN helps you build, connect, and manage IoT systems for cleaner, safer, and more intelligent
                    urban environments.</span>
            </div>
            <div>
                <a href="/contact"
                    class="contact items-center p-3 border rounded-3xl gap-1 readmore hover:opacity-80 transition mt-2 bg-[#40eef3]">
                    Contact Sales →
                </a>
            </div>
        </div>
        <div class="hidden lg:block px-4 lg:w-1/2">
            <img :src="smartCities" alt="Aquascape" class="w-full h-50 rounded-md object-cover blog_img" />
        </div>
    </section>
    <div class="scroll_arrow_wrapper">
        <button @click="scrollDown" class="animate-bounce text-white" aria-label="Scroll down">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="#40eef3">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
    </div>

    <div class="max-w-screen-xl mx-auto gap-8 mb-12">
        <span class="lg:text-[52px] text-[30px] text-start font-bold block mt-8 px-4">Environmental monitoring</span>
        <div class="lg:text-[23px] text-[16px] text-start text-[#0f3045] mb-12 px-4 env-desc">Monitor air quality, water
            safety, noise levels, emissions,
            and climate conditions across the city with real-time dashboards and automated alerts.
        </div>
    </div>
    <div class="max-w-screen-xl mx-auto  gap-8 mb-12">
        <div class="grid monitor pt-8 pb-12 gap-8 px-4">
            <div class="w-full lg:w-1/3 connect-internet space-y-3">
                <p class="flex items-center gap-4">
                    <Check class="w-8 h-8" style="color:#5572d3" /> Sensor data visualization
                </p>
            </div>
            <div class="w-full lg:w-1/3 connect-internet space-y-3">
                <p class="flex items-center gap-4">
                    <Check class="w-8 h-8" style="color:#5572d3" /> Remote monitoring & device control
                </p>
            </div>
            <div class="w-full lg:w-1/3 connect-internet space-y-3">
                <p class="flex items-center gap-4">
                    <Check class="w-8 h-8" style="color:#5572d3" /> Alerts, rules, and automation
                </p>
            </div>
            <div class="w-full lg:w-1/3 connect-internet space-y-3">
                <p class="flex items-center gap-4">
                    <Check class="w-8 h-8" style="color:#5572d3" /> Multi-protocol connectivity (LoRaWAN, cellular,
                    WiFi)
                </p>
            </div>
        </div>

        <section id="blog-section" class="w-full lg:w-full py-4 px-4">
            <span class="lg:text-[30px] text-[25px] font-bold">SyncN powered IoT solutions for air and water quality
                monitoring</span>
            <div class="grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
                <div v-for="review in reviewList" :key="review.name"
                    class="group relative h-[390px] w-full dark:bg-card  transition-shadow duration-300 flex flex-col border-0 ">
                    <a :href="review.link">
                        <img :src="review.thumbnail" :alt="review.name" class="w-full object-cover rounded-xl " />
                    </a>
                    <a :href="review.link"
                        class="absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white border rounded-2xl px-4 py-2 shadow-md">
                        READ CASE STUDY →
                    </a>
                </div>
            </div>
            <div class="lg:text-[23px] text-[12px] text-start mb-12 px-4">
                <p class="text-xl lg:text-3xl font-bold pb-4">Environmental monitoring applications</p>
                <div class="flex flex-wrap pt-8 gap-8">
                    <div class="w-full lg:w-1/3  connect-internet space-y-3">
                        <p class="flex items-center gap-4">
                            <Wind class="w-8 h-8" style="color:#5572d3" /> Air quality measurement
                        </p>
                        <p class="flex items-center gap-4">
                            <Volume2 class="w-8 h-8" style="color:#5572d3" /> Noise pollution monitoring
                        </p>
                        <p class="flex items-center gap-4">
                            <Flame class="w-8 h-8" style="color:#5572d3" /> Gas leak detection
                        </p>
                    </div>
                    <div class="w-full lg:w-1/3 connect-internet space-y-3">
                        <p class="flex items-center gap-4">
                            <Droplet class="w-8 h-8" style="color:#5572d3" /> Water quality tracking
                        </p>
                        <p class="flex items-center gap-4">
                            <Building2 class="w-8 h-8" style="color:#5572d3" /> Emissions monitoring
                        </p>
                        <p class="flex items-center gap-4">
                            <Activity class="w-8 h-8" style="color:#5572d3" /> Seismology & early warning systems
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>

    <div class="max-w-screen-xl mx-auto gap-8 mb-12">
        <span class="lg:text-[52px] text-[30px] text-start font-bold block mt-8 px-4">Urban Greenery & Indoor
            Gardening</span>
        <div class="lg:text-[23px] text-[16px] text-start text-[#0f3045] mb-12 px-4 env-desc">Build sustainable green
            installations powered by IoT.
            SyncN connects sensors, pumps, controllers, and lighting into one system for automated plant care and
            environmental control.
        </div>
    </div>
    <div class="max-w-screen-xl mx-auto  gap-8 mb-12">
        <div class="flex monitor pt-8 pb-12 gap-8 px-4">
            <div class="w-full lg:w-1/3 connect-internet space-y-3">
                <p class="flex items-center gap-4">
                    <Check class="w-8 h-8" style="color:#5572d3" /> Real-time data dashboards
                </p>
            </div>
            <div class="w-full lg:w-1/3 connect-internet space-y-3">
                <p class="flex items-center gap-4">
                    <Check class="w-8 h-8" style="color:#5572d3" /> Remote control of pumps & lighting
                </p>
            </div>
            <div class="w-full lg:w-1/3 connect-internet space-y-3">
                <p class="flex items-center gap-4">
                    <Check class="w-8 h-8" style="color:#5572d3" /> Scheduled irrigation & nutrient cycles
                </p>
            </div>
        </div>

        <section id="blog-section" class="w-full lg:w-full py-4 px-4">
            <span class="lg:text-[30px] text-[30px] font-bold">SyncN powered green IoT solutions for sustainable
                cities</span>
            <div class="grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
                <div v-for="review in reviewList" :key="review.name"
                    class="group relative h-[390px] w-full dark:bg-card  transition-shadow duration-300 flex flex-col border-0 ">
                    <a :href="review.link">
                        <img :src="review.thumbnail" :alt="review.name" class="w-full object-cover rounded-xl " />
                    </a>
                    <a :href="review.link"
                        class="absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white border rounded-2xl px-4 py-2 shadow-md">
                        READ CASE STUDY →
                    </a>
                </div>
            </div>
            <div class="lg:text-[23px] text-[12px] text-start mb-12 px-4">
                <p class="text-xl lg:text-3xl font-bold pb-4">Green City applications</p>
                <div class="flex flex-wrap pt-8 gap-8">
                    <div class="w-full lg:w-1/3 connect-internet space-y-3">
                        <p class="flex items-center gap-4">
                            <Grip class="w-8 h-8" style="color:#5572d3" /> Living walls & green pillars
                        </p>
                        <p class="flex items-center gap-4">
                            <Leaf class="w-8 h-8" style="color:#5572d3" /> Indoor vertical farms
                        </p>
                        <p class="flex items-center gap-4">
                            <Bath class="w-8 h-8" style="color:#5572d3" /> Urban greenery installations
                        </p>
                        <p class="flex items-center gap-4">
                            <Building2 class="w-8 h-8" style="color:#5572d3" /> Interior landscaping
                        </p>
                    </div>
                    <div class="w-full lg:w-1/3 connect-internet space-y-3">
                        <p class="flex items-center gap-4">
                            <Mountain class="w-8 h-8" style="color:#5572d3" /> Micro forests
                        </p>
                        <p class="flex items-center gap-4">
                            <TreeDeciduous class="w-8 h-8" style="color:#5572d3" /> Green roofs
                        </p>
                        <p class="flex items-center gap-4">
                            <TreePine class="w-8 h-8" style="color:#5572d3" /> Mobile vertical gardens
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>

    <div class="max-w-screen-xl mx-auto gap-8 mb-12">
        <span class="lg:text-[52px] text-[30px] text-start font-bold block mt-8 px-4">Street Cleaning & Waste
            Management</span>
        <div class="lg:text-[23px] text-[16px] text-start text-[#0f3045] mb-12 px-4 env-desc">Deploy and manage
            connected city equipment for cleaning,
            waste collection, and street maintenance through one centralized console.
        </div>
    </div>
    <div class="max-w-screen-xl mx-auto  gap-8 mb-12">
        <div class="flex monitor pt-8 pb-12 gap-8 px-4">
            <div class="w-full lg:w-1/3 connect-internet space-y-3">
                <p class="flex items-center gap-4">
                    <Check class="w-8 h-8" style="color:#5572d3" /> Real-time asset tracking & visibility
                </p>
                <p class="flex items-center gap-4">
                    <Check class="w-8 h-8" style="color:#5572d3" /> Route optimization
                </p>
            </div>
            <div class="w-full lg:w-1/3 connect-internet space-y-3">
                <p class="flex items-center gap-4">
                    <Check class="w-8 h-8" style="color:#5572d3" /> Remote device monitoring
                </p>
                <p class="flex items-center gap-4">
                    <Check class="w-8 h-8" style="color:#5572d3" /> Driver apps & workflow modules
                </p>
            </div>
        </div>

        <section id="blog-section" class="w-full lg:w-full py-4 px-4">
            <span class="lg:text-[30px] text-[25px] font-bold">IoT-enabled municipal cleaning solutions running on
                SyncN</span>
            <div class="grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
                <div v-for="review in reviewList" :key="review.name"
                    class="group relative h-[390px] w-full dark:bg-card  transition-shadow duration-300 flex flex-col border-0 ">
                    <a :href="review.link">
                        <img :src="review.thumbnail" :alt="review.name" class="w-full object-cover rounded-xl " />
                    </a>
                    <a :href="review.link"
                        class="absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white border rounded-2xl px-4 py-2 shadow-md">
                        READ CASE STUDY →
                    </a>
                </div>
            </div>
            <div class="lg:text-[23px] text-[12px] text-start mb-12 px-4">
                <p class="text-xl lg:text-3xl font-bold pb-4">IoT applications for clean and safe cities</p>
                <div class=" flex flex-wrap pt-8 gap-8">


                    <div class=" w-full lg:w-1/3 connect-internet ">
                        <p class="flex items-center gap-4">
                            <Recycle class="w-8 h-8" style="color:#5572d3" /> Waste bin level monitoring
                        </p>
                        <p class="flex items-center gap-4">
                            <Map class="w-8 h-8" style="color:#5572d3" /> Smart route planning
                        </p>
                        <p class="flex items-center gap-4">
                            <Drill class="w-8 h-8" style="color:#5572d3" /> Fleet & equipment monitoring
                        </p>
                       
                    </div>
                    <div class="w-full lg:w-1/3 connect-internet space-y-3">
                       <p class="flex items-center gap-4">
                            <Eye class="w-8 h-8" style="color:#5572d3" /> Camera-enabled safety systems

                        </p>
                        <p class="flex items-center gap-4">
                            <Smartphone class="w-8 h-8" style="color:#5572d3" /> Street cleaning automation
                        </p>
                        <p class="flex items-center gap-4">
                            <Truck class="w-8 h-8" style="color:#5572d3" /> Waste asset management
                        </p>
                    </div>
                </div>
            </div>

        </section>
        

    </div>

    <div class="max-w-screen-xl mx-auto gap-8 mb-12">
        <span class="lg:text-[52px] text-[30px] text-start font-bold block mt-8 px-4">What else you can build with
            SyncN</span>
        <div class="lg:text-[23px] text-[12px] text-start mb-12 px-4">
            <span>Universal IoT platform for a variety of Smart City applications.</span>
            <div class="flex monitor pt-8 gap-8">
                <div class="w-full lg:w-1/3 connect-internet space-y-3">
                    <ul class="list-disc list-inside pl-5" style=" list-style: disc;">
                        <li>Live city cameras</li>
                        <li>Online access to public services</li>
                        <li>Online city event maps</li>
                        <li>Real-time traffic and crowd maps</li>
                        <li>Interactive street signs</li>
                        <li>Smart advertisement boards</li>
                        <li>Bike/car sharing system</li>
                        <li>Personal/asset tracking systems</li>
                    </ul>
                </div>
                <div class="w-full lg:w-1/3 connect-internet space-y-3">
                    <ul class="list-disc list-inside pl-5" style=" list-style: disc;">
                        <li>Real-time traffic monitoring</li>
                        <li>Road conditions monitoring</li>
                        <li>Incident management</li>
                        <li>Public transportation tracking</li>
                        <li>Passenger load management</li>
                        <li>Smart traffic lights</li>
                        <li>Smart parking</li>
                    </ul>
                </div>
                <div class="w-full lg:w-1/3 connect-internet space-y-3">
                    <ul class="list-disc list-inside pl-5" style=" list-style: disc;">
                        <li>Internal climate management</li>
                        <li>IoT-equipped doors</li>
                        <li>Smart conference halls</li>
                        <li>Smart lights</li>
                        <li>Smart workplace</li>
                        <li>Automated food delivery</li>
                        <li>Security monitoring</li>
                        <li>Office asset management</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="gap-8 mb-12">
        <div class="case-contact">
            <div class="max-w-screen-xl mx-auto gap-8 mb-12 px-4">
                <span class="text-[52px] text-white font-bold block py-8">Need <span class="text-[#40eef3]">IoT
                        software</span>for your Smart City product?</span>
                <a href="/contact"
                    class="contact items-center p-3 border rounded-3xl gap-1 readmore hover:opacity-80 transition mt-2 bg-[#40eef3]">
                    Contact US →
                </a>
            </div>
        </div>
    </div>


    <div class="max-w-screen-xl mx-auto gap-8 mb-12">
        <span class="lg:text-[52px] text-[30px] text-start font-bold block mt-8 px-4">Make <span
                class="text-[#40eef3]">IoT development</span> easier with SyncN</span>
        <div class="lg:text-[23px] text-[12px] text-start mb-12 px-4 env-desc">
            <span>Build, manage, and scale your IoT products from one unified platform.
                SyncN gives you every tool you need to accelerate development and simplify operations.</span>
        </div>
        <div class="grid gap-8 px-4 lg:grid-cols-4">
            <div>
                <Cloud width="30" height="30" class="mb-4 text-[#5572d3]" />
                <span class="font-semibold text-2xl mb-8 block">Secure cloud hosting</span>
                <p class="mt-2">
                    Scalable private cloud for storing and managing city-wide device data.
                </p>
            </div>
            <div>
                <Code width="30" height="30" class="mb-4 text-[#5572d3]" />
                <span class="font-semibold text-2xl mb-8 block">Firmware library</span>
                <p class="mt-2">
                    Ready-to-use hardware integrations with robust IoT APIs.
                </p>
            </div>
            <div>
                <Palette width="30" height="30" class="mb-4 text-[#5572d3]" />
                <span class="font-semibold text-2xl mb-8 block">Web & Mobile Applications</span>
                <p class="mt-2">
                    Build city dashboards and citizen-facing apps without writing code.
                </p>
            </div>
            <div>
                <Cpu width="30" height="30" class="mb-4 text-[#5572d3]" />
                <span class="font-semibold text-2xl mb-8 block">Device management</span>
                <p class="mt-2">
                    Monitor, control, diagnose, and update thousands of devices remotely.
                </p>
            </div>

            <div>
                <User width="30" height="30" class="mb-4 text-[#5572d3]" />
                <span class="font-semibold text-2xl mb-8 block">User management</span>
                <p class="mt-2">
                    Multi-level hierarchical access for municipalities, contractors, and operators.
                </p>
            </div>
            <div>
                <Wifi width="30" height="30" class="mb-4 text-[#5572d3]" />
                <span class="font-semibold text-2xl mb-8 block">Connectivity management</span>
                <p class="mt-2">
                    LoRaWAN, Cellular, WiFi, NB-IoT support for seamless device onboarding.
                </p>
            </div>
        </div>

    </div>





</template>

<style>
.banner_case {
    background: url("../assets/public/caseStudies.webp");

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
    width: 100%;
    padding-top: 168px;
    padding-left: 114px;
    padding-right: 25px;
    position: relative;
    overflow: visible;
    gap: 1rem;
}

.banner_title span {
    font-size: 51px;
}

.banner_des {
    width: 80%;
    margin-top: 24px;
    padding-left: 114px;
    padding-right: 25px;
    font-size: 19px;
    color: white;
    line-height: 2;
    margin-bottom: 1rem;
}

.blog_img {
    height: 500px;
    margin-top: 159px;
    width: 500px;
}

.readmore:hover {
    background: #2d55a4;
    color: white;
}

.case-contact {
    background: url("../assets/public/caseStudies.webp");
    background-size: cover;
    height: 530px;
    padding: 8em 0;
}

.contact {
    color: white;
    margin-left: 40px;
}

.connect-internet {
    gap: 3rem;
    display: grid;
}

.list-disc {
    list-style: disc;
    padding-left: 2rem;
    padding-bottom: 2rem;
}

.list-disc li::marker {
    color: #5572d3;
}

.contact-sales {
    color: white;
    margin-left: 15px;
}

.first-boxes {
    background-image:
        url("../assets/public/four-boxes.webp"),
        linear-gradient(to bottom right, rgba(34, 197, 94, 0.8), rgba(45, 212, 191, 0.8), rgba(59, 130, 246, 0.8));
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.second-boxes {
    background-image:
        url("../assets/public/secondBox.webp"),
        linear-gradient(to bottom right, #a855f7, #ec4899, #3b82f6);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.third-boxes {
    background-image:
        url("../assets/public/thirdBox.webp"),
        linear-gradient(to bottom right, #facc15, #fb923c, #4ade80);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.fourth-boxes {
    background-image:
        url("../assets/public/fourthBox.webp"),
        linear-gradient(to bottom right, #60a5fa, #818cf8, #c084fc);

    background-position:
        right bottom,
        center;

    background-size:
        350px auto,
        cover;

    background-repeat:
        no-repeat,
        no-repeat;
}

.env-desc {
    width: 60%;
}

.text-white {
    color: white;
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

    .env-desc {
        width: 90%;
    }

    .group {
        height: 500px;
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

@media (min-width: 768px) {}

@media (min-width: 1024px) {
    .spacing {
        margin-left: 10rem;
    }
}
</style>
