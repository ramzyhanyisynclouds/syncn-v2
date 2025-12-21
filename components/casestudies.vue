<script setup lang="ts">
// import Navbar from "../components/Navbar.vue";

// import Footer from "../components/Footer.vue";
import "@selemondev/vue3-marquee/dist/style.css";
// import Sponsors from '@/components/Sponsors.vue';
import { Card, CardDescription, CardHeader, CardTitle } from '@/ui/card';

// import FeatureOne from '@/public/Featured Clients 1.png';
// import FeatureTwo from '@/public/Featured Clients 2.png';
// import FeatureThree from '@/public/Featured Clients 3.png';
// import FeatureFour from '@/public/Featured Clients 4.png';

import environmentOne from './assets/public/Environmental Monitoring 1.png';
import environmentTwo from './assets/public/Environmental Monitoring 2.png';
import environmentThree from './assets/public/Environmental Monitoring 3.png';
import environmentFour from './assets/public/Environmental Monitoring 4.png';

import agricultureOne from './assets/public/Agriculture 1.png';
import agricultureTwo from './assets/public/Agriculture 2.png';
import agricultureThree from './assets/public/Agriculture 3.png';
import agricultureFour from './assets/public/Agriculture 4.png';

import smartHomeOne from './assets/public/Smart Home 1.png';
import smartHomeTwo from './assets/public/Smart Home 2.png';
import smartHomeThree from './assets/public/Smart Home 3.png';
import smartHomeFour from './assets/public/Smart Home 4.png';


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

const environmental: ReviewProps[] = [
    {
        image: "https://github.com/shadcn.png",
        name: "Dr. Emily Zhang",
        userName: "Environmental Scientist",
        comment: "Revolutionary environmental monitoring with precise, real-time data collection.",
        rating: 4.8,
        link: "/single_case_studies",
        thumbnail: environmentOne,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Robert Kim",
        userName: "Sustainability Officer",
        comment: "Helping us meet our sustainability goals with accurate environmental metrics.",
        rating: 4.7,
        link: "/single_case_studies",
        thumbnail: environmentTwo,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Dr. Emily Zhang",
        userName: "Environmental Scientist",
        comment: "Revolutionary environmental monitoring with precise, real-time data collection.",
        rating: 4.8,
        link: "/single_case_studies",
        thumbnail: environmentThree,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Robert Kim",
        userName: "Sustainability Officer",
        comment: "Helping us meet our sustainability goals with accurate environmental metrics.",
        rating: 4.7,
        link: "/single_case_studies",
        thumbnail: environmentFour,
    },
];

const agriculture: ReviewProps[] = [
    {
        image: "https://github.com/shadcn.png",
        name: "Carlos Mendez",
        userName: "Farm Operations Manager",
        comment: "Increased our crop yield by 30% through smart farming solutions.",
        rating: 4.9,
        link: "/single_case_studies",
        thumbnail: agricultureOne,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Aisha Johnson",
        userName: "Agricultural Tech Specialist",
        comment: "Precision agriculture tools that deliver measurable results for modern farming.",
        rating: 4.8,
        link: "/single_case_studies",
        thumbnail: agricultureTwo,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Carlos Mendez",
        userName: "Farm Operations Manager",
        comment: "Increased our crop yield by 30% through smart farming solutions.",
        rating: 4.9,
        link: "/single_case_studies",
        thumbnail: agricultureThree,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Aisha Johnson",
        userName: "Agricultural Tech Specialist",
        comment: "Precision agriculture tools that deliver measurable results for modern farming.",
        rating: 4.8,
        link: "/single_case_studies",
        thumbnail: agricultureFour,
    },
];

const smartHome: ReviewProps[] = [
    {
        image: "https://github.com/shadcn.png",
        name: "David Wilson",
        userName: "Smart Home Integrator",
        comment: "Seamless integration with all major smart home ecosystems and devices.",
        rating: 5.0,
        link: "/single_case_studies",
        thumbnail: smartHomeOne,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Jennifer Park",
        userName: "Home Automation Expert",
        comment: "The most reliable and user-friendly smart home solution we've implemented.",
        rating: 4.9,
        link: "/single_case_studies",
        thumbnail: smartHomeTwo,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "David Wilson",
        userName: "Smart Home Integrator",
        comment: "Seamless integration with all major smart home ecosystems and devices.",
        rating: 5.0,
        link: "/single_case_studies",
        thumbnail: smartHomeThree,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Jennifer Park",
        userName: "Home Automation Expert",
        comment: "The most reliable and user-friendly smart home solution we've implemented.",
        rating: 4.9,
        link: "/single_case_studies",
        thumbnail: smartHomeFour,
    },
];
</script>

<template>
    <section class="banner_case -mt-5">
        <div class="spacing">
            <div class="banner_title">
                <span class="text-white font-bold ">Our</span>
                <span class=" font-bold text-[#40eef3]">Clients</span>
            </div>
            <div class="banner_des">
                <span>With a track record of 5,000+ companies, we help businesses like yours build successful IoT products and connected services.</span>
            </div>
        </div>
    </section>
    <div class="scroll_arrow_wrapper">
        <button
            @click="scrollDown"
            class="animate-bounce text-white"
            aria-label="Scroll down"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-14 w-14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#40eef3"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                />
            </svg>
        </button>
    </div>
    <Sponsors />

    <div class="max-w-screen-xl mx-auto gap-8 mb-12">
        <span class="lg:text-[52px] text-[30px] font-bold block px-4">Environmental Monitoring</span>
        <div class="lg:text-[22px] text-[12px] text-[#0f3045] mb-12 px-4 env-desc">Environmental Monitoring Build apps to monitor air and water quality, humidity, temperature, and other data from indoor
            or outdoor sensors using your smartphone, tablet, or computer.
        </div>
        <section id="blog-section" class="w-full lg:w-full py-4 px-4">
            <div class="grid gap-6 sm:grid-cols-3 lg:grid-cols-4">
                <Card
                    v-for="review in environmental"
                    :key="review.name"
                    class="h-[700px] w-full dark:bg-card shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col border-0"
                >
                    <a :href="review.link" >
                        <img
                            :src="review.thumbnail"
                            :alt="review.name"
                            class="w-full object-cover rounded-xl "
                        />
                    </a>
                    <div class="flex flex-col justify-between gap-2 pt-3 pb-4">
                        <div>
                            <CardTitle class="text-lg font-bold mb-1">
                                <a :href="review.link" class="font-semibold">{{ review.name }}</a>
                            </CardTitle>
                            <CardDescription class="text-md text-muted-foreground mb-2">
                                {{ review.comment }}
                            </CardDescription>
                        </div>
                        <div>
                            <CardHeader class="flex items-center gap-3 p-0 mb-8">
                                <div>
                                    <div class="text-base">{{ review.name }}</div>
                                    <div class="text-sm text-muted-foreground">{{ review.userName }}</div>
                                </div>
                            </CardHeader>
                           
                        </div>
                        <div>
                             <a
                                :href="review.link"
                                class="items-center p-3 border rounded-3xl gap-1 text-primary readmore hover:opacity-80 transition mt-2"
                            >
                                Read Case Study
                            </a>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    </div>
    <div class="max-w-screen-xl mx-auto gap-8 mb-12">
        <span class="lg:text-[52px] text-[30px] font-bold px-4">Agriculture</span>
        <div class="text-[22px] text-[#0f3045] mb-12 env-desc px-4">
            Syncn offers all the building blocks for smart farming. Various connectivity options and device management tools.
        </div>
        <section id="blog-section" class="w-full lg:w-full py-4 px-4">
            <div class="grid gap-6 sm:grid-cols-3 lg:grid-cols-4">
                <Card
                    v-for="review in agriculture"
                    :key="review.name"
                    class="h-[700px] w-full dark:bg-card shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col border-0"
                >
                    <a :href="review.link" >
                        <img
                            :src="review.thumbnail"
                            :alt="review.name"
                            class="w-full object-cover rounded-xl "
                        />
                    </a>
                    <div class="flex flex-col justify-between gap-2 pt-3 pb-4">
                        <div>
                            <CardTitle class="text-lg font-bold mb-1">
                                <a :href="review.link" class="font-semibold">{{ review.name }}</a>
                            </CardTitle>
                            <CardDescription class="text-md text-muted-foreground mb-2">
                                {{ review.comment }}
                            </CardDescription>
                        </div>
                        <div>
                            <CardHeader class="flex items-center gap-3 p-0 mb-8">
                                <div>
                                    <div class="text-base">{{ review.name }}</div>
                                    <div class="text-sm text-muted-foreground">{{ review.userName }}</div>
                                </div>
                            </CardHeader>
                           
                        </div>
                       
                    </div>
                     <div  > 
                             <a
                                :href="review.link"
                                class="items-center p-3 border rounded-3xl gap-1 text-primary readmore hover:opacity-80 transition mt-2"
                            >
                                Read Case Study
                            </a>
                        </div>
                </Card>
            </div>
        </section>
    </div>
    <div class="max-w-screen-xl mx-auto gap-8 mb-12">
        <span class="lg:text-[52px] text-[30px] font-bold px-4">Smart Home</span>
        <div class="text-[22px] text-[#0f3045] mb-12 env-desc px-4">
            People want to have their smart home one tap away. A great-looking mobile app can be an “a-ha” moment. With an app, your entire selling process becomes so much easier.
        </div>
        <section id="blog-section" class="w-full lg:w-full py-4 px-4">
            <div class="grid gap-6 sm:grid-cols-3 lg:grid-cols-4">
                <Card
                    v-for="review in smartHome"
                    :key="review.name"
                    class="h-[700px] w-full dark:bg-card shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col border-0"
                >
                    <a :href="review.link" >
                        <img
                            :src="review.thumbnail"
                            :alt="review.name"
                            class="w-full object-cover rounded-xl "
                        />
                    </a>
                    <div class="flex flex-col justify-between gap-2 pt-3 pb-4">
                        <div>
                            <CardTitle class="text-lg font-bold mb-1">
                                <a :href="review.link" class="font-semibold">{{ review.name }}</a>
                            </CardTitle>
                            <CardDescription class="text-md text-muted-foreground mb-2">
                                {{ review.comment }}
                            </CardDescription>
                        </div>
                        <div>
                            <CardHeader class="flex items-center gap-3 p-0 mb-8">
                                <div>
                                    <div class="text-base">{{ review.name }}</div>
                                    <div class="text-sm text-muted-foreground">{{ review.userName }}</div>
                                </div>
                            </CardHeader>
                            
                        </div>
                        <div>
                            <a
                                :href="review.link"
                                class="items-center p-3 border rounded-3xl gap-1 text-primary readmore hover:opacity-80 transition mt-2"
                            >
                                Read Case Study
                            </a>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    </div>

    <div class="gap-8 mb-12">
        <div class="case-contact">
            <div class="max-w-screen-xl mx-auto gap-8 mb-12 px-4">
               <span class="text-[52px] text-white font-bold block py-8">Need an IoT solution for your business?</span>
                <span class="text-[23px] text-white block mb-8">Contact us for a free consultation with our engineers and IoT business experts</span>
                <a
                    href="/contact"
                    class="contact items-center p-3 border rounded-3xl gap-1 readmore hover:opacity-80 transition mt-2 bg-[#40eef3]"
                >
                    Contact US
                </a>
            </div>
        </div>
    </div>

</template>

<style>
.banner_case {
    background: url("../assets/public/caseStudies.webp");
    height: 40rem;
    width: 100%;
    margin-top: -3.5rem;
}
.scroll_arrow_wrapper {
    display: flex;
    justify-content: center;
    margin-top: -5rem;
    margin-bottom: 5rem;
}
.banner_title{
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
.banner_title span{
    font-size: 57px;
}
.banner_des{
    width: 33%;
    margin-top: 24px;
    padding-left: 114px;
    padding-right: 25px;
    font-size: 23px;
    color: white;
}

.spaces{
    padding: 115px 20% 44px 44px;
}
.custom-img-class {
    height: 500px;
}
.readmore:hover{
   background: #2d55a4;
    color: white;
}
.env-desc{
    width: 60%;
}
.case-contact{
    background: url("../assets/public/caseStudies.webp");
    background-size: cover;
    height: 530px;
    padding: 8em 0;
}
.contact{
    color: white;
}
@media (max-width: 639px) {
    .banner_title{
       padding-left: 40px;
    }
    .banner_des{
       width: auto;
       padding-left: 40px;
    }
    .banner_case{
        height: 55vh;
    }
    .env-desc{
        width: 100%;
    }
    .case-contact{
        padding: 0;
    }
}
@media (min-width: 640px) {
    .custom-img-class {
        height: 200px;
    }
    .banner_title{
        padding-left: 40px;
    }
    .banner_des{
        padding-left: 40px;
        width: 40%;
    }
    .env-desc{
        width: 100%;
    }
    .case-contact{
        padding: 0;
    }
}

@media (min-width: 768px) {
    .custom-img-class {
        height: 300px;
    }

}

@media (min-width: 1024px) {
    .custom-img-class {
        height: 400px;
    }
    .last-blog{
        height: 400px;
    }
    .spacing{
        margin-left: 10rem;
    }
}
</style>
