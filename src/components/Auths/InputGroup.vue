<script setup lang="ts">
const props = defineProps({
    label: String,
    type: String,
    placeholder: String,
    error: String, // Thêm thuộc tính error để nhận thông báo lỗi
    modelValue: String, // Nhận giá trị từ v-model
});

const emits = defineEmits(['update:modelValue']); // Khai báo emit cho v-model

const updateValue = (event) => {
    emits('update:modelValue', event.target.value); // Emit giá trị mới khi người dùng nhập
};
</script>

<template>
    <div class="mb-4">
        <!-- Label -->
        <label class="mb-2.5 block font-medium text-black dark:text-white">
            {{ props.label }}
        </label>

        <!-- Input Wrapper -->
        <div class="relative">
            <!-- Input Field -->
            <input
                :type="props.type"
                :placeholder="props.placeholder"
                :value="props.modelValue"
                @input="updateValue"
                :class="{
                    'w-full rounded-lg border-red-500 border  bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-black dark:text-white': props.error, // Thêm class border-red-500 khi có lỗi
                    'w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-black dark:text-white': !props.error, // Mặc định khi không có lỗi
                }"
            />

            <!-- Slot for additional content (e.g., icons) -->
            <span class="absolute right-4 top-4">
                <slot></slot>
            </span>
        </div>

        <!-- Error Message -->
        <p v-if="props.error" class="text-red-500 text-sm mt-1">
            {{ props.error }}
        </p>
    </div>
</template>
