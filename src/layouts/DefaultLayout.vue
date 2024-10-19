<script setup lang="ts">
import HeaderArea from '@/components/Header/HeaderArea.vue'
import SidebarArea from '@/components/Sidebar/SidebarArea.vue'
import { ref, onMounted } from 'vue'
import API from '@/libs/API' // Assuming API is configured in libs/API

// State to store the configuration data
const config = ref({
    headerbar: {},
    slidebar: {}
});

// Fetch config from API when component is mounted
onMounted(async () => {
    try {
        const response = await API.get('/user/config'); // Assuming the endpoint for getting config
        config.value = response.data; // Store the fetched config
        console.log(config);
    } catch (error) {
        console.error('Failed to fetch config:', error);
    }
});
</script>

<template>
    <!-- ===== Page Wrapper Start ===== -->
    <div class="flex h-screen overflow-hidden">
        <!-- ===== Sidebar Start ===== -->
        <SidebarArea :config="config.slidebar" /> <!-- Pass slidebar config -->
        <!-- ===== Sidebar End ===== -->

        <!-- ===== Content Area Start ===== -->
        <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <!-- ===== Header Start ===== -->
            <HeaderArea :config="config.headerbar" /> <!-- Pass headerbar config -->
            <!-- ===== Header End ===== -->

            <!-- ===== Main Content Start ===== -->
            <main>
                <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    <slot></slot>
                </div>
            </main>
            <!-- ===== Main Content End ===== -->
        </div>
    </div>
    <!-- ===== Page Wrapper End ===== -->
</template>
