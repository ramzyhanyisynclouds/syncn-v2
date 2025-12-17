// composables/useProfileProgress.ts
import { computed } from 'vue'
// import { usePage } from '@inertiajs/vue3'
import type { User } from '@/types'
import { usePage } from '@inertiajs/vue3';

const page = usePage();
const user = computed(() => page.props.auth.user);

export function useProfileProgress(form?: any) {
    const page = usePage()
    const user = computed(() => page.props.auth.user)
    
    const progressValue = computed(() => {
        const data = form ? form : user
        let filledFields = 0
        const totalFields = 5 // name, email, phone, gender, address
        console.log('data', data)
        console.log('user', user.value)

        if (data?.name?.trim()) filledFields++
        if (data?.email?.trim()) filledFields++
        if (data?.phone?.trim()) filledFields++
        if (data?.gender?.trim()) filledFields++
        if (data?.address?.trim()) filledFields++

        
        return Math.round((filledFields / totalFields) * 100)
    })

    return { progressValue }
}