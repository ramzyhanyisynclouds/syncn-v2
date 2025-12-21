<script setup lang="ts">

import "@selemondev/vue3-marquee/dist/style.css";
import { Award ,ArrowRight } from 'lucide-vue-next';
import blog from '../assets/public/blog.jpeg'
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import Separator from "../ui/separator/Separator.vue";
import blogOne from '@/assets/public/blogOne.webp'
import blogTwo from '@/assets/public/SecondBlog.webp'
import blogThree from '@/assets/public/ThirdBlog.webp'
// // import blogFour from '../public/blogFour.jpeg'


import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/ui/card";

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
        image: "",
        name: "",
        userName: "Frontend Developer",
        comment: " For nearly a decade, we brought you cutting-edge.",
        rating: 5.0,
        link: "/single_blog",
        thumbnail: blogOne,
    },
    {
             image: "",
        name: "",
        userName: "UI/UX Designer",
        comment: "Stellantis Adds Connectivity for Smart Fleet.",
        rating: 4.8,
        link: "/single_blog",
        thumbnail: blogTwo,
    },
    {
             image: "",
        name: "",
        userName: "mobile developer",
        comment: "Next-Generation Car Connectivity Featured ",
        rating: 4.9,
        link: "/single_blog",
        thumbnail: blogThree,
    },
];
</script>

<template>

    <div class="text-center mb-12 mt-8">
        <h2 class="text-lg text-primary tracking-wider mb-2">News & Announcements</h2>
        <h2 class="text-3xl md:text-4xl font-bold">
            Company updates, partnerships, launches & behind-the-scenes.
        </h2>
    </div>
    <div class="lg:flex max-w-screen-xl mx-auto gap-8 mb-12">
        <div class="last-blog text-lg text-white rounded-xl lg:w-2/3 mb-2 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-b from-black/20 to-[#2d55a4]/50 backdrop-blur-md z-10"></div>
            <div class="spaces absolute z-20">
                <div class="flex items-center gap-4">
                    <span class="flex items-center gap-2 text-lg text-[#40eef3] font-semibold">
                        <Award />
                        Featured
                    </span>
                    <span class="font-semibold text-lg text-[#323336]">5 min read</span>
                </div>
                <span class="text-[24px] font-bold">
                   For nearly a decade, we brought you cutting-edge stories on connected and quantum technologies, but our chapter has come to a close. Thank you for being part of our story.
                </span>
            </div>
        </div>
        <div class="text-3xl md:text-4xl lg:w-1/3 ">
            <span class="text-lg text-[#6a6a6a]">Lastest Blogs </span>
            <div class="space-y-6 max-w-2xl mx-auto mt-4">
                <!-- Item 1 -->
                <div class="flex items-center justify-between border-b pb-4">
                    <div class="flex items-center gap-4">
                        <a href="/" ><img :src="blogOne" alt="Aquascape" class="w-16 h-16 rounded-md object-cover" /></a>
                        <a href="/" >
                            <p class="text-sm md:text-base font-medium text-gray-800">
                                For nearly a decade, we brought you cutting-edge...
                            </p>
                        </a>
                    </div>
                    <span class="text-xl text-gray-500">  <a href="/" >→</a> </span>
                </div>

                <!-- Item 2 -->           
                <div class="flex items-center justify-between border-b pb-4">
                    <div class="flex items-center gap-4">
                        <a href="" >
               

                            <img :src="blogTwo" alt="Plantaform" class="w-16 h-16 rounded-md object-cover" /></a>
                        <a href="" >
                        <p class="text-sm md:text-base font-medium text-gray-800">
                            Plantaform: bringing NASA technology to indoor gardening
                        </p>
                        </a>
                    </div>
                    <span class="text-xl text-gray-500"><a href="/" >→</a></span>
                </div>

                <!-- Item 3 -->
                <div class="flex items-center justify-between border-b pb-4">
                    <div class="flex items-center gap-4">
                        <a href="" ><img :src="blogThree" alt="Windmill" class="w-16 h-16 rounded-md object-cover" /></a>
                        <a href="" >
                        <p class="text-sm md:text-base font-medium text-gray-800">
                            Windmill: Smart AC and connected energy management
                        </p>
                        </a>
                    </div>
                    <span class="text-xl text-gray-500"><a href="/" >→</a></span>
                </div>
            </div>
        </div>
    </div>
    <separator />
    <div class="lg:flex max-w-screen-xl mx-auto">
        <!-- Blog Section -->
        <section id="blog-section" class="w-full lg:w-full py-4 px-4">
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card
                    v-for="review in reviewList"
                    :key="review.name"
                    class="h-[410px] w-full bg-muted/50 dark:bg-card shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                    <a :href="review.link" >
                        <img
                            :src="review.thumbnail"
                            :alt="review.name"
                            class="w-full object-cover rounded-t-xl custom-img-class"
                        />
                    </a>
                    <div class="flex flex-col justify-between gap-2 px-4 pt-3 pb-4">
                        <div>
                            <CardTitle class="text-lg font-bold mb-1">
                                <a :href="review.link" class="font-semibold">{{ review.name }}</a>
                            </CardTitle>
                            <CardDescription class="text-sm text-muted-foreground mb-2">
                                {{ review.comment }}
                            </CardDescription>
                        </div>
                        <div>
                            <CardHeader class="flex items-center gap-3 p-0 mb-2">
                                <Avatar>
                                    <!-- <AvatarImage :src="review.image" :alt="review.name" /> -->
                                    <AvatarFallback>{{ review.name.charAt(0) }}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div class="text-base">{{ review.name }}</div>
                                    <div class="text-sm text-muted-foreground">{{ review.userName }}</div>
                                </div>
                            </CardHeader>
                            <a
                                :href="review.link"
                                class="flex items-center justify-end gap-1 text-primary "
                            >
                                Read more
                                <ArrowRight class="size-4 rtl:rotate-180" />
                            </a>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    </div>

</template>

<style scoped>
.last-blog {
    background-image: url("@/assets/public/blogOne.webp");
    background-size: cover;
    background-position: center;
    height: 400px;
}
.spaces{
    padding: 115px 20% 44px 44px;
}
.custom-img-class {
    height: 180px;
}


@media (min-width: 640px) {
    .custom-img-class {
        height: 200px;
    }
    .last-blog{
        height: 400px;
    }
}

@media (min-width: 768px) {
    .custom-img-class {
        height: 220px;
    }
    .last-blog{
        height: 300px;
    }
}

@media (min-width: 1024px) {
    .custom-img-class {
        height: 240px;
    }
    .last-blog{
        height: 400px;
    }
}
</style>
