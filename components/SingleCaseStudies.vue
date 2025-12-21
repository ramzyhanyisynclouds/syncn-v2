<script setup lang="ts">
import Navbar from "../components/Navbar.vue";

import Footer from "../components/Footer.vue";
import "@selemondev/vue3-marquee/dist/style.css";
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import blog from '@/public/blog.jpeg';
import { Separator } from '@/components/ui/separator';
import FeatureOne from '@/public/Featured Clients 1.png';
import FeatureTwo from '@/public/Featured Clients 2.png';
import FeatureThree from '@/public/Featured Clients 3.png';
import FeatureFour from '@/public/Featured Clients 4.png';
import smartHomeOne from '@/public/Smart Home 1.png';
import smartHomeTwo from '@/public/Smart Home 2.png';
import smartHomeThree from '@/public/Smart Home 3.png';
import smartHomeFour from '@/public/Smart Home 4.png';

interface ReviewProps {
    image: string;
    name: string;
    userName: string;
    comment: string;
    rating: number;
    link: string;
    thumbnail: string;
}

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
    <Navbar />
    <section class="banner_case -mt-5 flex items-center justify-center text-center">
        <div class="banner_content">
            <div class="banner_title mb-4">
                <span class="text-[#40eef3]">CASE STUDY | SYNCN IOT PLATFORM</span>
            </div>
            <div class="banner_des text-center">
              <span class="block">
                Windmill: Smart AC and connected energy management
              </span>
            </div>
        </div>
    </section>

    <div class="max-w-screen-xl mx-auto mt-8 mb-12 px-4">
        <div class="lg:text-[20px] text-[16px] mb-12 env-desc">
            A powerful, sleek and eco-friendly air care products
            Windmill is a New York-based connected air care company that currently manufactures air conditioning and purifying units to achieve the highest standard of design, comfort, and energy efficiency, while also lessening their environmental impact. The business has its roots in 50+ years of institutional knowledge in the HVAC industry, working with some of the largest buildings in New York City.


            Three years later: A growing partnership
            By partnering with Syncn in 2021, Windmill was able to stay focused on its core mission while quickly bringing innovative products to market.

            While other HVAC players are still figuring out the IoT software part, Windmill launched three standout products that have made waves: the charming and eco-friendly window AC, the award-winning Windmill Fan, and the sleek Windmill Air Purifier with bamboo finish, designed to complement interiors rather than look like a typical air purifier.

            Each product connects seamlessly in a single Windmill app with its own intuitive user interface.


            The Windmill Air Purifier
            How SyncN’s low-code IoT software added value
            Windmill has not only saved millions and avoided years of complex development by choosing SyncN over building an IoT system from scratch but has also gained these advantages:

            High User Adoption: Windmill apps are highly rated, with a 4.7-star average on the App Store, reflecting strong customer satisfaction.
            Scalability: Quick and smooth scale-up to tens of thousands of active devices.
            New Revenue Streams: Integration with the Demand Response program opened up new revenue opportunities.
            Effective Upselling: SyncN’s in-app marketing suite achieved higher engagement and conversion rates than traditional marketing tools the team used before.

            The Windmill Air Purifier and The Branded App
            The story & the challenge
            Windmill’s journey with IoT began in 2020 when they launched their first connected window AC product using another leading IoT platform. However, challenges with customer experience, platform flexibility, and responsiveness soon prompted a search for a new partner.

            By mid-2021, Windmill was actively exploring IoT platforms that could better support their vision for an energy-efficient product line with a focus on user experience.

            In addition to these issues, Windmill aimed to enhance its offerings with a robust energy management program that wasn't feasible on their previous platform. Their key objectives included:

        </div>
    </div>

    <separator />
    <div class="max-w-screen-xl mx-auto mt-4 mb-12 px-4">
        <div class="text-center mb-8">
        <span class="lg:text-[35px] text-[20px] font-extrabold px-4 inline-block">
            More in the industry
        </span>
        </div>
        <section id="blog-section" class="w-full py-4">
            <div class="grid gap-6 sm:grid-cols-3 lg:grid-cols-4">
                <Card
                    v-for="review in smartHome"
                    :key="review.name"
                    class="h-[700px] w-full dark:bg-card shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col border-0"
                >
                    <a :href="review.link">
                        <img
                            :src="review.thumbnail"
                            :alt="review.name"
                            class="w-full object-cover rounded-xl custom-img-class"
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
                            <a
                                :href="review.link"
                                class="items-center p-3 border rounded-4xl gap-1 text-primary readmore hover:opacity-80 transition mt-2"
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
                    class="contact items-center p-3 border rounded-4xl gap-1 readmore hover:opacity-80 transition mt-2 bg-[#40eef3]"
                >
                    Contact US
                </a>
            </div>
        </div>
    </div>

    <Footer />
</template>

<style>
.banner_case {
    background: url("../public/caseStudies.webp");
    height: 40rem;
    width: 100%;
    margin-top: -3.5rem;
}
.banner_content{
    width: 60%;
}
.banner_title{
    object-fit: fill;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: visible;
    gap: 1rem;
}
.banner_title span{
    font-size: 16px;
    font-weight: bold;
}
.banner_des{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 44px;
    color: white;
    font-weight: bold;
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
    background: url("../public/caseStudies.webp");
    background-size: cover;
    height: 530px;
    padding: 8em 0;
}
.contact{
    color: white;
}
@media (max-width: 639px) {
    .banner_content{
        width: 100%;
    }
    .banner_des{
        width: auto;
        font-size: 33px;
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
}
</style>
