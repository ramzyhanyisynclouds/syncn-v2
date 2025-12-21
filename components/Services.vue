<script setup lang="ts">
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

enum ProService {
    YES = 1,
    NO = 0,
}

interface ServiceProps {
    title: string;
    pro: ProService;
    description: string;
}

const serviceList: ServiceProps[] = [
    {
        title: "Custom Device Domains",
        description:
            "Use your own domain to connect and manage your IoT devices under your unique brand.",
        pro: ProService.NO,
    },
    {
        title: "Third-Party Integrations",
        description:
            "Seamlessly integrate with other smart platforms, hubs, and voice assistants.",
        pro: ProService.NO,
    },
    {
        title: "Smart Notifications & Alerts",
        description:
            "Send real-time notifications about device status, energy use, and automation triggers.",
        pro: ProService.NO,
    },
    {
        title: "Advanced Analytics Dashboard",
        description:
            "Monitor usage trends, device health, and automation efficiency with powerful insights.",
        pro: ProService.YES,
    },
];
</script>

<template>
    <section
        id="services"
        class="max-w-[75%] mx-auto py-24 sm:pb-32"
    >
        <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
            Services
        </h2>

        <h2 class="text-3xl md:text-4xl text-center font-bold mb-4 pb-4">
            Grow Your Smart IoT Business
        </h2>
        <h3 class="text-xl text-center text-muted-foreground mb-8 pb-4">
            From seamless integrations to advanced analytics, our IoT services help you connect, control, and scale with confidence.
        </h3>

        <div
            class="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto"
        >
            <div
                v-for="{ title, description, pro } in serviceList"
                :key="title"
            >
                <Card class="bg-muted/60 dark:bg-card h-full relative border">
                    <CardHeader>
                        <CardTitle>{{ title }}</CardTitle>
                        <CardDescription>{{ description }}</CardDescription>
                    </CardHeader>
                    <Badge
                        v-if="pro === ProService.YES"
                        variant="secondary"
                        class="absolute -top-2 -right-3"
                    >
                        PRO
                    </Badge>
                </Card>
            </div>
        </div>
    </section>
</template>

<style scoped>
.border{
    border:1px solid #535353;
}
</style>
