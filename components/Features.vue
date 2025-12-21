<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";

import {
    Smartphone,
    Activity,
    Settings,
    Lock,
    LayoutDashboard,
    Users,
} from "lucide-vue-next";

interface FeaturesProps {
    icon: string;
    title: string;
    description: string;
}

const featureList: FeaturesProps[] = [
    {
        icon: "smartphone",
        title: "Mobile Control",
        description:
            "Take full control of your smart devices anytime, anywhere with our mobile-first dashboards.",
    },
    {
        icon: "activity",
        title: "Real-Time Monitoring",
        description:
            "Track device status and performance live — gain instant insights and peace of mind.",
    },
    {
        icon: "settings",
        title: "Custom Scenarios",
        description:
            "Create personalized scenarios to make your smart home truly yours.",
    },
    {
        icon: "lock",
        title: "Scalable & Secure",
        description:
            "Built for scalability with enterprise-grade security to protect your data.",
    },
    {
        icon: "layoutDashboard",
        title: "User-Friendly Interface",
        description:
            "Enjoy a clean, intuitive design that makes smart control simple for everyone.",
    },
    {
        icon: "users",
        title: "Community & Support",
        description:
            "Access our vibrant community, tutorials, and expert support whenever you need.",
    },
];

const iconMap: Record<
    string,
    | typeof Smartphone
    | typeof Activity
    | typeof Settings
    | typeof Lock
    | typeof LayoutDashboard
    | typeof Users
> = {
    smartphone: Smartphone,
    activity: Activity,
    settings: Settings,
    lock: Lock,
    layoutDashboard: LayoutDashboard,
    users: Users,
};
</script>

<template>
    <section
        id="features"
        class="max-w-[75%] mx-auto  sm:pb-32"
    >
        <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
            Features
        </h2>

        <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
            What Makes Us Different
        </h2>

        <h3 class="text-xl text-center text-muted-foreground mb-8">
            Empowering you with everything you need to build, manage, and grow your smart IoT ecosystem — seamlessly, securely, and beautifully.
        </h3>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
                v-for="{ icon, title, description } in featureList"
                :key="title"
            >
                <Card class="h-full bg-background border-0 shadow-none">
                    <CardHeader class="flex flex-col justify-center items-center">
                        <div
                            class="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4"
                        >
                            <component
                                :is="iconMap[icon]"
                                class="size-6 text-primary"
                            />
                        </div>

                        <CardTitle class="text-center">
                            {{ title }}
                        </CardTitle>
                    </CardHeader>

                    <CardContent class="text-muted-foreground text-center">
                        {{ description }}
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
