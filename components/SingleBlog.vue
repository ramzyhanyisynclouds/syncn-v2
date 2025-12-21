<script setup lang="ts">
import "@selemondev/vue3-marquee/dist/style.css";
import blogOne from '@/assets/public/blogOne.webp'
import Separator from '../ui/separator/Separator.vue';
</script>


<template>
        <div class="max-w-screen-xl mx-auto gap-8 my-12">
            <section class="lg:flex py-4 px-4">
                <div class="lg:w-1/2 gap-8">
                  <div class="font-bold blog_title">
                      IoT World Today, Enter Quantum End Publication
                  </div>
                  <span class="text-[24px] text-[#606060] font-normal">
                      For nearly a decade, we brought you cutting-edge stories on connected and quantum technologies,
                      but our chapter has come to a close. Thank you for being part of our story.
                  </span>

                </div>
                <div class="lg:w-1/2 h-auto">
                    <img :src="blogOne" alt="Aquascape" class="w-full h-50 rounded-md object-cover " />
                </div>
            </section>
        </div>
    <separator />
    <div class="max-w-screen-xl mx-auto gap-8 my-12">
        <section class="lg:flex py-4 px-4">
            <span class="text-[24px] font-normal">
               After years at the forefront of technology journalism, IoT World Today and Enter Quantum published their final articles on Sept. 3. In an industry defined by constant evolution, our own journey as a publication has reached its conclusion.
               Since 2016, we've chronicled the remarkable transformation of the tech landscape -- from the rise of autonomous cars and flying vehicles to the emergence of AI, blockchain and quantum computing.
               We're immensely proud of our contributions to the tech discourse, including our analysis of emerging technologies that later became mainstream, and of the community we've built along the way. We extend our deepest appreciation to our readers, who engaged with our content and shared our fascination with technology's potential.In tech and in life, endings often lead to new beginnings.
               While IoT World and Enter Quantum are entering a final chapter, our sister publication, AI Business, continues to forge ahead in chronicling advances in and applications of AI and offering news and insights to empower leaders and innovators. We hope you’ll follow along there.
            </span>
        </section>
    </div>
</template>
<style scoped>

.blog_img {
    height: 250px;
}

.blog_title {
    font-size: 34px;
    line-height: 1.4;
}

@media (min-width: 640px) {
    .blog_img {
        height: 250px;
    }
    .blog_title {
        font-size: 24px;
    }
}

@media (min-width: 768px) {
    .blog_img {
        height: 250px;
    }
    .blog_title {
        font-size: 44px;
    }
}

@media (min-width: 1024px) {
    .blog_img {
        height: 400px;
    }
    .blog_title {
        font-size: 44px;
    }
}
</style>
