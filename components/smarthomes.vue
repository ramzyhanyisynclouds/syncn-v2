<script setup lang="ts">

import "@selemondev/vue3-marquee/dist/style.css";
import firstSmart from '@/assets/public/first-smart.webp';
import secondSmart from '@/assets/public/second-smart.png';
import smartHomes from '@/assets/public/smartHomes.png';
import mobileApp from '@/assets/public/mobile-app.webp';
import webDashboard from '@/assets/public/web-dashboard.webp';
import {
    Lightbulb,
    Lock,
    Thermometer,
    Gauge,
    Power,
    Eye,
    Building,
    DoorClosed,
    Flame,
    Fan,
    Cloud,
    Send,
    Cpu,
    Palette,
    Check
} from "lucide-vue-next";

const scrollDown = () => {
    window.scrollBy({
        top: window.innerHeight - 250,
        behavior: 'smooth'
    });
};
</script>

<template>
    <section class="banner_case flex align-items-center gap-8 -mt-5 ">
        <div class="md:w-full">
            <div class="spacing banner_title">
                <span class="text-white font-bold ">Make Your Home <span
                        class=" font-bold text-[#40eef3]">Smarter</span> , Fully Connected, Fully Controlled.</span>

            </div>
            <div class="spacing banner_des">
                <span class="mb-4">Transform your home into a smart living ecosystem you control from one intuitive
                    app.With SyncN</span>
                <span>, you can launch a fully functional smart home experience in just 2 weeks,
                    no coding, no complex setup, no hassle.</span>
                <div>
                    <a href="/contact"
                        class=" contact items-center  p-2 border rounded-3xl   readmore hover:opacity-80 transition  bg-[#40eef3]">
                        Contact Sales →
                    </a>
                </div>
            </div>

        </div>
        <div class="hidden lg:block px-4 lg:w-1/2">
            <img :src="smartHomes" alt="Aquascape" class="w-full h-50 rounded-md object-cover blog_img" />
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
        <span class="lg:text-[52px] text-[30px] text-start font-bold block mt-8 px-4">Your Smart Home <span
                class="text-[#40eef3]">One Platform.</span> Unlimited Possibilities.</span>
        <div class="lg:text-[23px] text-[12px] text-start  mb-12 px-4 env-desc">SyncN brings together devices, apps,
            security, and automation so your entire home works beautifully in syncN.
            Whether it's lighting, climate, safety, or entertainment, everything runs through one unified system.
        </div>
    </div>

    <div class="max-w-screen-xl mx-auto gap-8 mb-12">
        <div class="px-4 pb-8">
            <span class="text-[25px] font-bold pb-4">Usual IoT integration cycle</span>
            <img :src="firstSmart" alt="Aquascape" class="w-full bg-[#f6f6f6] rounded-md object-cover" />
        </div>
        <div class="px-4">
            <span class="text-[25px] font-bold pb-4">With SyncN</span>
            <img :src="secondSmart" alt="Aquascape" class=" rounded-md bg-[#f6f6f6] " style="width: 50%;" />
        </div>
    </div>

    <div class="max-w-screen-xl mx-auto gap-8 mb-12">
        <span class="lg:text-[52px] text-[30px] text-start font-bold block mt-8 px-4">Let’s see how SyncN’s <span
                class="text-[#40eef3]">no-code</span> magic works</span>
        <div class="lg:text-[23px] text-[12px] text-start mb-12 px-4 env-desc">
            <p class="text-xl lg:text-3xl font-bold pb-4">1. Connect Your Devices Instantly</p>
            <span>GBring your smart devices online using SyncN Cloud.
                Supports 400+ devices, including:</span>
            <div class="flex flex-wrap pt-8 gap-8">
                <div class="w-full lg:w-1/3 connect-internet space-y-3">
                    <p class="flex items-center gap-4">
                        <Lightbulb class="w-8 h-8" style="color:#5572d3" /> Smart lights & switches
                    </p>
                    <p class="flex items-center gap-4">
                        <Lock class="w-8 h-8" style="color:#5572d3" /> Smart locks
                    </p>
                    <p class="flex items-center gap-4">
                        <Thermometer class="w-8 h-8" style="color:#5572d3" />
                        Temperature & humidity sensors
                    </p>
                    <p class="flex items-center gap-4">
                        <Gauge class="w-8 h-8" style="color:#5572d3" /> Power meters
                    </p>
                    <p class="flex items-center gap-4">
                        <Power class="w-8 h-8" style="color:#5572d3" /> Wireless sockets
                    </p>
                </div>
                <div class="w-full lg:w-1/3 connect-internet space-y-3">
                    <p class="flex items-center gap-4">
                        <Eye class="w-8 h-8" style="color:#5572d3" /> IR motion detectors
                    </p>
                    <p class="flex items-center gap-4">
                        <DoorClosed class="w-8 h-8" style="color:#5572d3" /> Door/window sensors
                    </p>
                    <p class="flex items-center gap-4">
                        <Flame class="w-8 h-8" style="color:#5572d3" /> Smoke detectors
                    </p>
                    <p class="flex items-center gap-4">
                        <Fan class="w-8 h-8" style="color:#5572d3" /> Smart HVAC & thermostats
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-screen-xl mx-auto gap-8 my-12 mb-12">
        <div class="flex flex-wrap">
            <div class="lg:text-[23px] text-[12px] text-start mb-12 px-4 w-full lg:w-1/2 grid gap-2">
                <p class="text-xl lg:text-3xl font-bold pb-4">2. Build Your Consumer App (No Code Required)</p>
                <div>Create a beautiful, fully branded smart home app using our no-code drag-and-drop builder.</div>
                <div>Design real-time dashboards, add lighting and climate controls, customize device widgets, set up
                    scenes and automations, manage user permissions, and choose between dark or light themes, all in one
                    place.</div>
                <div>Once your app is ready, publish it directly to the App Store and Google Play, and update the
                    interface anytime without republishing.</div>
            </div>
            <div class="px-4 w-full lg:w-1/2">
                <img :src="mobileApp" alt="Aquascape" class="w-full bg-[#f6f6f6] rounded-md object-cover" />
            </div>
        </div>
    </div>

    <div class="max-w-screen-xl mx-auto gap-8 mt-4 mb-12">
        <div class="flex flex-wrap">
            <div class="px-4 w-full lg:w-1/2">
                <img :src="webDashboard" alt="Aquascape" class="w-full bg-[#f6f6f6] rounded-md object-cover" />
            </div>
            <div class="lg:text-[23px] text-[12px] text-start mb-12 px-4 w-full lg:w-1/2">
                <p class="text-xl lg:text-3xl font-bold pb-4">
                    3. Manage Everything From One Smart Console
                </p>
                <div class="mb-2">
                    With SyncN, you can manage your entire smart home ecosystem from a single, easy-to-use console.
                </div>
                <div class="mb-4">
                    Access real-time data analytics, enjoy fully encrypted communication between devices and the cloud,
                    and rely on 24/7 incident monitoring for complete peace of mind.
                </div>
                <div class="mb-4">
                    You can also push remote firmware updates (OTA) to keep every device up to date without manual
                    intervention.
                </div>
                <a href="/contact"
                    class="contact-sales items-center p-2 border rounded-3xl gap-1 readmore hover:opacity-80 transition mt-2 bg-[#40eef3]">
                    Contact US →
                </a>
            </div>
        </div>
    </div>

    <div class="max-w-screen-xl mx-auto gap-8 mb-12">
        <span class="lg:text-[52px] text-[30px] text-start font-bold block mt-8 px-4"> Deliver Better Apps, And Leave
            Your Competitors Behind</span>
        <div class="lg:text-[23px] text-[12px] text-start mb-12 px-4 env-desc">
            <span>Over 2 million users rely on apps built with SyncN’s IoT platform. With faster performance, higher
                stability,
                and seamless user experiences, your brand earns better reviews, stronger loyalty, and faster growth,
                right out of the gate.</span>
        </div>
        <section class="max-w-screen-xl mx-auto p-8 grid gap-6 md:grid-cols-2">
            <!-- Card 1 -->
            <div
                class="first-boxes rounded-xl p-6 text-white bg-gradient-to-br from-green-400 via-teal-400 to-blue-400 relative overflow-hidden min-h-[350px]">
                <span class="text-3xl font-bold mb-2">Effortless device connection</span>
                <p class="text-lg pt-4 block w-70">
                    Make it easy for users to connect their smart home devices in minutes.
                    SyncN’s provisioning flow works smoothly with WiFi, Ethernet, or cellular,
                    no technical setup, no pairing struggles. Just tap, connect, and get started.
                </p>
            </div>

            <!-- Card 2 -->
            <div
                class="second-boxes rounded-xl p-6 text-white bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 relative overflow-hidden min-h-[350px]">
                <span class="text-3xl font-bold mb-2">Remote Control & Monitoring</span>
                <p class="text-lg pt-4 block w-70">
                    Let your customers monitor connected devices in real-time using their smartphones or a web
                    dashboard.
                    Allow them to control devices with voice commands using Alexa or Google Home.
                </p>
            </div>

            <!-- Card 3 -->
            <div
                class="third-boxes rounded-xl p-6 text-white bg-gradient-to-br from-yellow-400 via-orange-400 to-green-400 relative overflow-hidden min-h-[350px]">
                <span class="text-3xl font-bold mb-2">Smart automation</span>
                <p class="text-lg pt-4 block w-70">
                    Allow users to create scenarios that trigger automation like setting up a coffee machine to start
                    brewing by the time they wake up.
                </p>
            </div>

            <!-- Card 4 -->
            <div
                class="fourth-boxes rounded-xl p-6 text-white bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 relative overflow-hidden min-h-[350px]">
                <span class="text-3xl font-bold mb-2">Push notifications and alerts</span>
                <p class="text-lg pt-4 block w-70">
                    Communicate with users about important device-related events. Notify them when something is wrong.
                </p>
            </div>
        </section>
    </div>

    <div class="max-w-screen-xl mx-auto gap-8 mb-12">
        <span class="lg:text-[52px] text-[30px] text-start font-bold block mt-8 px-4">The <span
                class="text-[#40eef3]">All-in-One Platform</span> for Smarter IoT Development</span>
        <div class="lg:text-[23px] text-[12px] text-start mb-12 px-4 env-desc">
            <span>SyncN is a unified platform to build, launch, and enhance your smart home products, bringing every
                tool you need into one connected ecosystem.</span>
        </div>
        <div class="flex flex-col lg:flex-row gap-8 px-4">
            <div class="lg:w-1/4">
                <Cloud width="30" height="30" class="mb-4 text-[#5572d3]" />
                <span class="font-semibold text-2xl mb-8 block">Scalable & secure cloud hosting</span>
                <p class="mt-2">
                    Choose your server region for faster response and better privacy.
                </p>
            </div>
            <div class="lg:w-1/4">
                <Send width="30" height="30" class="mb-4 text-[#5572d3]" />
                <span class="font-semibold text-2xl mb-8 block">OTA Firmware Updates</span>
                <p class="mt-2">
                    Update thousands of devices seamlessly without user interruption.
                </p>
            </div>
            <div class="lg:w-1/4">
                <Cpu width="30" height="30" class="mb-4 text-[#5572d3]" />
                <span class="font-semibold text-2xl mb-8 block"> Supports 400+ MCUs</span>
                <p class="mt-2">
                    ESP32, Arduino, STM32, RTL chips, and more.
                </p>
            </div>
            <div class="lg:w-1/4">
                <Palette width="30" height="30" class="mb-4 text-[#5572d3]" />
                <span class="font-semibold text-2xl mb-8 block">White label IoT solution</span>
                <p class="mt-2">
                    Launch your own branded apps and web console.
                </p>
            </div>
        </div>
    </div>

    <div class="max-w-screen-xl mx-auto gap-8 mb-12">
        <span class="lg:text-[52px] text-[30px] text-start font-bold block mt-8 px-4">Choose the <span
                class="text-[#40eef3]">plan</span> That Fits Your Smart Home Vision</span>
        <div class="lg:text-[23px] text-[12px] text-start mb-12 px-4 env-desc">
            <span>Try SyncN PRO for initial development, or go straight to Business
                Plan and launch your product much faster with the help of our dedicated support engineer.</span>
            <div class="flex flex-wrap pt-8 gap-8 pb-8">
                <div class="w-full lg:w-1/3 connect-internet space-y-3">
                    <p class="flex items-center gap-4">
                        <Check class="w-8 h-8" style="color:#5572d3" /> iOS and Android apps
                    </p>
                    <p class="flex items-center gap-4">
                        <Check class="w-8 h-8" style="color:#5572d3" /> Web based admin portal
                    </p>
                    <p class="flex items-center gap-4">
                        <Check class="w-8 h-8" style="color:#5572d3" />
                        Device management
                    </p>
                    <p class="flex items-center gap-4">
                        <Check class="w-8 h-8" style="color:#5572d3" /> User management
                    </p>
                </div>
                <div class="w-full lg:w-1/3 connect-internet space-y-3">
                    <p class="flex items-center gap-4">
                        <Check class="w-8 h-8" style="color:#5572d3" /> Connectivity management
                    </p>
                    <p class="flex items-center gap-4">
                        <Check class="w-8 h-8" style="color:#5572d3" /> Support and service
                    </p>
                    <p class="flex items-center gap-4">
                        <Check class="w-8 h-8" style="color:#5572d3" /> Security
                    </p>
                    <p class="flex items-center gap-4">
                        <Check class="w-8 h-8" style="color:#5572d3" /> IoT Cloud
                    </p>
                </div>
            </div>
            <a href="/pricing"
                class="contact items-center p-3 border rounded-3xl gap-1 readmore hover:opacity-80 transition mt-2 bg-[#40eef3]">
                View pricing →
            </a>
        </div>
    </div>

    <div class="gap-8 mb-12">
        <div class="case-contact">
            <div class="max-w-screen-xl mx-auto gap-8 mb-12 px-4">
                <span class="text-[52px] text-white font-bold block py-8">Need an IoT solution for your business?</span>
                <span class="text-[23px] text-white block mb-8">Contact us for a free consultation with our engineers
                    and IoT business experts</span>
                <a href="/contact"
                    class="contact items-center p-3 border rounded-3xl gap-1 readmore hover:opacity-80 transition mt-2 bg-[#40eef3]">
                    Contact US →
                </a>
            </div>
        </div>
    </div>

</template>

<style>
.banner_case {
    background: url("../assets/public/caseStudies.webp");
    width: 100%;
    margin-top: -4.5rem;
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
    /* height: 640px; */
    margin-top: 72px;
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
