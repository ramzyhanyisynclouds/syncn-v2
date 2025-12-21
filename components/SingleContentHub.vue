<script setup lang="ts">
import "@selemondev/vue3-marquee/dist/style.css";
import blog from '../assets/public/blog.jpeg'
import singleContent from '../assets/public/singleContentHub.png'
import Separator from '../ui/separator/Separator.vue';
import { Alert, AlertDescription, AlertTitle } from '@/ui/alert';
import { Card, CardContent, CardFooter } from '@/ui/card';
import { Label } from '@/ui/label';
import { Input } from '@/ui/input';
import { Button } from '@/ui/button';
import { AlertCircle } from 'lucide-vue-next';
import { reactive, ref } from 'vue';
interface ContactFormProps {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
}

const contactForm = reactive<ContactFormProps>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "Smart Home Support",
    message: "",
});

const invalidInputForm = ref<boolean>(false);

const handleSubmit = () => {
    const { firstName, lastName, email, subject, message } = contactForm;

    const mailToLink = `mailto:contact@SyncN.com?subject=${subject}&body=[Message from website]Hello, I am ${firstName} ${lastName}. My Email is ${email}.%0D%0A${message}`;
    window.location.href = mailToLink;
};
</script>


<template>
    <div class="max-w-screen-xl mx-auto gap-8 my-12">
        <section class="lg:flex gap-8 py-4 px-4">
            <div class="lg:w-1/2">
                <div class="font-bold blog_title lg:w-5/6">
                    The Connected Jobsite:  How IoT Alerts Are Preventing Costly Setbacks
                </div>
                <span class="text-[24px] font-normal lg:w-5/6">
                     How are leading GCs using IoT alerts to prevent rework, delays, and risk on the jobsite? In this expert panel,
                    leaders from top contractors firms share how real-time data and dashboards are transforming field-to-office visibility and decision-making.
                  </span>

            </div>
            <div class="lg:w-1/2 h-auto">
                <img :src="blog" alt="Aquascape" class="w-full h-50 rounded-md object-cover blog_img" />
            </div>
        </section>
    </div>
    <separator />
        <section
            id="contact"
            class="max-w-screen-xl mx-auto py-24 sm:pb-32"
        >
            <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Contact Info -->
                <div class="px-4 py-4">
                    <div class="mb-4">
                        <img :src="singleContent" alt="Aquascape" class="w-25 h-25" />
                        <p class="text-3xl md:text-4xl lg:w-3/4 font-bold">Unlock a copy of this exclusive content</p>
                    </div>
                    <p class="mb-8 font-regular text-2xl lg:w-2/3 pb-4">
                        Fill out this short form and get access to a panel discussion recording.
                    </p>
                </div>

                <!-- Form -->
                <Card class="bg-muted/60 dark:bg-card">
                    <CardContent>
                        <form
                            @submit.prevent="handleSubmit"
                            class="grid gap-4"
                        >

                            <div class="flex flex-col w-full gap-1.5">
                                <Label for="first-name">First Name</Label>
                                <Input
                                    id="first-name"
                                    type="text"
                                    placeholder="Enter your first name"
                                    v-model="contactForm.firstName"
                                    class="custom-input"
                                />
                            </div>

                            <div class="flex flex-col w-full gap-1.5">
                                <Label for="last-name">Last Name</Label>
                                <Input
                                    id="last-name"
                                    type="text"
                                    placeholder="Enter your last name"
                                    v-model="contactForm.lastName"
                                    class="custom-input"
                                />
                            </div>


                            <div class="flex flex-col gap-1.5">
                                <Label for="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your work email"
                                    v-model="contactForm.email"
                                    class="custom-input"
                                />
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <Label for="email">company</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Optionally add your company name"
                                    v-model="contactForm.email"
                                    class="custom-input"
                                />
                            </div>
                            <div class="flex flex-col gap-1.5">
                            <p>We use this information to personalize your experience and occasionally send relevant updates.
                                You can opt out anytime. Learn more in our Privacy Policy.</p>
                            </div>





                            <Button class="mt-4 background-pr">Access Now</Button>
                        </form>
                    </CardContent>

                    <CardFooter></CardFooter>
                </Card>
            </section>
        </section>
</template>
<style scoped>

.blog_img {
    height: 250px;
}

.blog_title {
    font-size: 34px;
    line-height: 1.4;
}

.background-pr{
    background: #2d55a4;
    color: white;
}
.custom-input {
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    border: 1px solid #cccccc78;
    background: white;
}
.custom-select {
    padding: 0.5rem 1rem;
    border: 1px solid #cccccc78;
    border-radius: 0.375rem;
    min-height: 2.5rem;
    background-color: white;
    text-align: left;
    display: flex;
    align-items: center;
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
