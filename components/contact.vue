<script setup lang="ts">
import { ref, reactive } from "vue";
import { Button } from "@/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/ui/card";
import { Label } from "@/ui/label";
import { Input } from "@/ui/input";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/ui/select";
import { Textarea } from "@/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/ui/alert";

import { AlertCircle, Building2, Phone, Mail, Clock } from "lucide-vue-next";

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

// const handleSubmit = () => {
//     const { firstName, lastName, email, subject, message } = contactForm;

//     const mailToLink = `mailto:contact@syncn.sa?subject=${subject}&body=[Message from website]Hello, I am ${firstName} ${lastName}. My Email is ${email}.%0D%0A${message}`;
//     window.location.href = mailToLink;
// };
</script>

<template>

   <section
  id="contact"
  class="max-w-[75%] sm:max-w-[90%] mx-auto py-24 sm:py-16"
>
  <!-- Desktop: grid-cols-2 | Mobile: grid-cols-1 -->
  <section class="grid lg:grid-cols-2 gap-8 lg:gap-12 sm:grid-cols-1 items-start">
    
    <!-- Contact Info (يبقى فوق على الموبايل، شمال على الديسكتوب) -->
    <div class="w-full order-1">
      <div class="mb-4">
        <h2 class="text-lg mb-2 tracking-wider text-blue-700">Contact Us</h2>
        <h2 class="text-3xl md:text-4xl font-bold">How Can We Help?</h2>
      </div>
      <p class="mb-8 text-muted-foreground lg:w-5/6 pb-4">
        We’re here to assist you with anything — from setting up your smart devices to troubleshooting your IoT network.
        Reach out and our support team will get back to you as soon as possible.
      </p>

      <div class="flex flex-col gap-4">
        <div>
          <div class="flex gap-2 mb-1">
            <Building2 />
            <div class="font-bold">Our Office</div>
          </div>
          <div>Riyadh - Saudi Arabia</div>
        </div>
        <div>
          <div class="flex gap-2 mb-1">
            <Mail />
            <div class="font-bold ">Support Email</div>
          </div>
          <div>contact@syncn.sa</div>
        </div>
        <div>
          <div class="flex gap-2 mb-1">
            <Clock />
            <div class="font-bold">Working Hours</div>
          </div>
          <div>
            <div>Monday - Thursday</div>
            <div>9AM - 5PM</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Form Card (يبقى تحت على الموبايل، يمين على الديسكتوب) -->
    <Card class="w-full order-2 bg-[#f0f0f0]/70 dark:bg-muted/20">
      <CardHeader class="text-blue-900 text-2xl">Send Us a Message</CardHeader>
      <CardContent>
        <form @submit.prevent class="grid gap-4">
          <!-- First & Last Name -->
          <div class="flex flex-col md:flex-row gap-4 md:gap-8">
            <div class="flex flex-col w-full gap-1.5">
              <Label for="first-name">First Name</Label>
              <Input id="first-name" type="text" placeholder="John" v-model="contactForm.firstName" class="custom-input" />
            </div>

            <div class="flex flex-col w-full gap-1.5">
              <Label for="last-name">Last Name</Label>
              <Input id="last-name" type="text" placeholder="Doe" v-model="contactForm.lastName" class="custom-input" />
            </div>
          </div>

          <!-- Email -->
          <div class="flex flex-col gap-1.5">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" v-model="contactForm.email" class="custom-input" />
          </div>

          <!-- Subject -->
          <div class="flex flex-col gap-1.5">
            <Label for="subject">Subject</Label>
            <Select v-model="contactForm.subject" class="custom-select w-full">
              <SelectTrigger class="bg-muted">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent class="bg-muted">
                <SelectGroup>
                  <SelectItem value="Smart Home Support">Smart Home Support</SelectItem>
                  <SelectItem value="Device Installation Help">Device Installation Help</SelectItem>
                  <SelectItem value="Account & Billing">Account & Billing</SelectItem>
                  <SelectItem value="Feature Request">Feature Request</SelectItem>
                  <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <!-- Message -->
          <div class="flex flex-col gap-1.5">
            <Label for="message">Message</Label>
            <Textarea id="message" placeholder="Tell us about your issue, question, or idea..." rows="5" v-model="contactForm.message" class="custom-input" />
          </div>

          <!-- Alert -->
          <Alert v-if="invalidInputForm" variant="destructive">
            <AlertCircle class="w-4 h-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>There is an error in the form. Please check your input.</AlertDescription>
          </Alert>

          <!-- Button -->
          <Button class="mt-4 background-pr text-res w-full sm:w-auto">Send Message</Button>
        </form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  </section>
</section>

</template>
<style>

.background-pr{
    background: #2d55a4;
    color: #fff;
}
.custom-input {
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    border: 1px solid #cccccc78;
}
.custom-select {
    padding: 0.5rem 1rem;
    border: 1px solid #cccccc78;
    border-radius: 0.375rem;
    min-height: 2.5rem;
    text-align: left;
    display: flex;
    align-items: center;
}
</style>


