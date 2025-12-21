<script setup lang="ts">

import "@selemondev/vue3-marquee/dist/style.css";
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
// import blog from '@/assets/public/blog.jpeg';
import contentHubOne from '@/assets/public/content_hub 1.png';
import contentHubTwo from '@/assets/public/content_hub 2.png';
import contentHubThree from '@/assets/public/content_hub 3.png';
import contentHubFour from '@/assets/public/content_hub 4.png';


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
        name: "Expert Panel",
        userName: "The connected jobsite: Real-time alerts for safety, efficiency, and cost control.",
        comment: "The Connected Jobsite: How IoT Alerts Are Preventing Costly Setbacks.",
        rating: 5.0,
        link: "/Resources/SingleContentHub",
        thumbnail: contentHubOne,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Customer Interview",
        userName: "How Smart Pour replaced guesswork with IoT for safer, faster concrete pours.",
        comment: "Smart Pour Launches IoT Concrete Monitoring Powered by SYNC-N at WoC 2025.",
        rating: 4.8,
        link: "/Resources/SingleContentHub",
        thumbnail: contentHubTwo,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Live Session",
        userName: "Live demo: SYNC-N dashboards for unified IoT monitoring and control.",
        comment: "SYNC-N Dashboards Live Demo: Data Visualization & Control for Your Entire IoT Setup.",
        rating: 4.9,
        link: "/Resources/SingleContentHub",
        thumbnail: contentHubThree,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Webinar",
        userName: "LoRaWAN in action: 8 real-world solutions built with SYNC-N.",
        comment: "8 Business Solutions Built with LoRaWAN and Low-Code IoT Platform",
        rating: 4.9,
        link: "/Resources/SingleContentHub",
        thumbnail: contentHubFour,
    },
];
</script>

<template>
    <section>
           
            <div class="banner_title pt-20">
                <span class="font-bold ">Get practical IoT know-hows</span>
            </div>
            <div class="banner_des">
                <span class="text-black">Dive into expert perspectives, practical guides, and real-world applications of IoT.</span>
            </div>
    </section>


    <div class="max-w-screen-xl mx-auto gap-8 mt-8 mb-12">
        <section id="blog-section" class="w-full lg:w-full py-4 px-4">
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card
                    v-for="review in reviewList"
                    :key="review.name"
                    class="w-full dark:bg-card shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col border-0"
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
                            <CardTitle class="card_title text-muted-foreground mb-1">
                                <a :href="review.link" class="">{{ review.name }}</a>
                            </CardTitle>
                            <div class="card_content mb-2">
                                {{ review.comment }}
                            </div>
                        </div>
                        <div>
                            <CardHeader class="flex items-center gap-3 p-0 mb-8">
                                <div>
                                    <div class="card_title text-muted-foreground">{{ review.userName }}</div>
                                </div>
                            </CardHeader>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    </div>
</template>

<style>
.first_title{
    font-size: 16px;
    font-weight: 600;
    letter-spacing: .125em;
    color: #21222799;
    padding-top: 168px;
    padding-left: 45px;
}
.banner_title{
    display: flex;
    object-fit: fill;
    width: 100%;
    padding-left: 114px;
    padding-right: 25px;
    position: relative;
    overflow: visible;
    gap: 1rem;
}
.banner_title span{
    font-size: 64px;
    width: 45%;
}
.banner_des{
    width: 33%;
    margin-top: 24px;
    padding-left: 114px;
    padding-right: 25px;
    font-size: 24px;
}
.custom-img-class {
    height: 500px;
}
.card_title{
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 1rem;
}
.card_content{
    letter-spacing: .1px;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 150%;
}
@media (max-width: 639px) {
    .banner_title{
        padding-left: 40px;
    }
    .banner_des{
        width: auto;
        padding-left: 40px;
    }
    .banner_title span{
        width: 100%;
        font-size: 45px;
    }
    .spacing {
        margin-top: 4rem;
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
        width: 33%;
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
        margin-left: 18rem;
        margin-top: 5rem;
    }
}
</style>
