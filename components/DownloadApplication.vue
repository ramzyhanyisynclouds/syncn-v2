<template>
    <section id="DownloadApplication">

        <div class="gap-8 mb-12">
            <div class="case-contact">
                <div class="flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full">
                    <div class="max-w-md">
                        <span class="text-[52px] text-white font-bold block py-8">
                            Need to be a partner?
                        </span>
                        <span class="text-[23px] text-white block mb-8">
                            Download Our App
                        </span>
                        <div class="flex gap-4">
                            <a href="#" class="hover:opacity-80 transition">
                                <img :src="GooglePlay" alt="Google Play" class="h-12 max-w-[160px] object-contain" />
                            </a>
                            <a href="#" class="hover:opacity-80 transition">
                                <img :src="AppStore" alt="App Store" class="h-12 max-w-[160px] object-contain" />
                            </a>
                        </div>
                    </div>

                    <div class="hidden lg:block">
                        <img :src="DownloadApplicatio" alt="Mockup"
                            class="w-auto h-full max-h-[400px] object-contain" />
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<script lang="ts" setup>
import DownloadApplicatio from './assets/public/mocup-yg-oAW71.png';
import AppStore from '@/assets/public/app-store.png';
import GooglePlay from '@/assets/public/google-play.png';
</script>

<style>
.case-contact {
    background: url("../assets/public/caseStudies.webp");
    background-size: cover;
    height: 530px;
    padding: 8em 0;
}

.custom-img-class {
    width: 400px;
    height: 200px;
}
</style>
