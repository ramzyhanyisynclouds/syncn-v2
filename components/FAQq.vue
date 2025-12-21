<script setup lang="ts">
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
    question: string;
    answer: string;
    value: string;
}

const FAQList: FAQProps[] = [
    {
        question: "How do I connect my smart devices to the app?",
        answer:
            "Simply download our app, log in, and follow the step-by-step pairing guide under 'Add New Device'. It only takes a few minutes to get started.",
        value: "item-1",
    },
    {
        question: "Does the system support third-party devices?",
        answer:
            "Yes! Our platform is designed to work with a wide range of smart home devices, including popular brands and standards like Zigbee and Wi-Fi.",
        value: "item-2",
    },
    {
        question: "Can I share access with my family members?",
        answer:
            "Absolutely. You can easily add family members or guests, assign roles, and manage permissions from your dashboard or the mobile app.",
        value: "item-3",
    },
    {
        question: "Is my data secure and private?",
        answer:
            "Security is our top priority. We use industry-leading encryption and follow best practices to ensure your personal data and device info are always protected.",
        value: "item-4",
    },
    {
        question: "Do you offer customer support?",
        answer:
            "Yes, we do! Our support team is available 24/7 to help you with any technical issues, setup guidance, or general questions.",
        value: "item-5",
    },
];
</script>

<template>
    <section
        id="faQq"
        class="max-w-[75%] mx-auto py-24 sm:pb-32"
    >
        <div class="text-center mb-12 max-w-3xl mx-auto">
            <h2 class="text-lg text-primary mb-2 tracking-wider uppercase">
                FAQs
            </h2>
            <h2 class="text-3xl md:text-4xl font-bold">
                Common Questions
            </h2>
            <p class="mt-4 text-muted-foreground text-center">
                Here are answers to some of the most common questions about how our smart IoT platform works and how you can get the most out of it.
            </p>
        </div>


        <Accordion
            type="single"
            collapsible
            class="w-full rounded-lg divide-y divide-border bg-background"
        >
            <AccordionItem
                v-for="{ question, answer, value } in FAQList"
                :key="value"
                :value="value"
                class="px-4 "
            >
                <AccordionTrigger class="text-left text-lg font-medium">
                    {{ question }}
                </AccordionTrigger>

                <AccordionContent class="text-muted-foreground mt-2">
                    {{ answer }}
                </AccordionContent>
            </AccordionItem>
        </Accordion>

       
    </section>
</template>

<style scoped>
/* Optional custom style for Accordion if needed */
/* .AccordionRoot { } */
</style>
