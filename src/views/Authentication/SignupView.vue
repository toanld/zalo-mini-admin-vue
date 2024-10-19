<script>
import DefaultAuthCard from '@/components/Auths/DefaultAuthCard.vue'
import InputGroup from '@/components/Auths/InputGroup.vue'
import API from '@/libs/API' // Import API từ thư mục libs
import { saveToken } from '@/libs/functions' // Import hàm saveToken từ functions.js

export default {
    components: {
        DefaultAuthCard,
        InputGroup,
    },
    data() {
        return {
            pageTitle: this.$myTrans('Đăng ký'), // Sử dụng myTrans cho ngôn ngữ
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors: {}, // Lưu lỗi cho từng trường
        };
    },
    methods: {
        submitForm() {
            this.errors = {}; // Xóa lỗi trước khi gửi

            API.post('/register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
            })
                .then(response => {
                    // Lưu token vào localStorage
                    saveToken(response.data.token);
                    // Xử lý khi đăng ký thành công, ví dụ chuyển hướng
                    this.$router.push('/auth/signin');
                })
                .catch(error => {
                    if (error.response && error.response.data.errors) {
                        this.errors = error.response.data.errors; // Lưu lại lỗi để hiển thị
                    }
                });
        },
    },
};
</script>

<template>
    <DefaultAuthCard :subtitle="$myTrans('Bắt đầu miễn phí')" :title="$myTrans('Đăng ký vào Admin')">
        <form @submit.prevent="submitForm">
            <!-- Trường Họ và Tên -->
            <InputGroup
                :label="$myTrans('Họ và Tên')"
                type="text"
                :placeholder="$myTrans('Nhập đầy đủ họ và tên')"
                :error="errors.name ? errors.name[0] : ''"
                v-model="name"
            >
                <svg
                    class="fill-current"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <!-- Nội dung SVG -->
                </svg>
            </InputGroup>

            <!-- Trường Email -->
            <InputGroup
                :label="$myTrans('Email')"
                type="email"
                :placeholder="$myTrans('Nhập email của bạn')"
                :error="errors.email ? errors.email[0] : ''"
                v-model="email"
            >
                <svg
                    class="fill-current"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <!-- Nội dung SVG -->
                </svg>
            </InputGroup>

            <!-- Trường Mật khẩu -->
            <InputGroup
                :label="$myTrans('Mật khẩu')"
                type="password"
                :placeholder="$myTrans('Nhập mật khẩu')"
                :error="errors.password ? errors.password[0] : ''"
                v-model="password"
            >
                <svg
                    class="fill-current"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <!-- Nội dung SVG -->
                </svg>
            </InputGroup>

            <!-- Trường Xác nhận Mật khẩu -->
            <InputGroup
                :label="$myTrans('Nhập lại Mật khẩu')"
                type="password"
                :placeholder="$myTrans('Nhập lại mật khẩu của bạn')"
                :error="errors.password_confirmation ? errors.password_confirmation[0] : ''"
                v-model="password_confirmation"
            >
                <svg
                    class="fill-current"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <!-- Nội dung SVG -->
                </svg>
            </InputGroup>

            <!-- Nút Đăng ký -->
            <div class="mb-5 mt-6">
                <input
                    type="submit"
                    :value="$myTrans('Tạo tài khoản')"
                    class="w-full cursor-pointer rounded-lg border border-primary bg-primary p-2 font-medium text-white transition hover:bg-opacity-90"
                />
            </div>

            <!-- Đăng ký bằng Google -->
            <button
                class="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-2 font-medium hover:bg-opacity-80 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-80"
            >
                <span>
                    <svg
                        class="fill-current"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <!-- Nội dung SVG -->
                    </svg>
                </span>
                {{ $myTrans('Đăng ký với Google') }}
            </button>

            <!-- Đã có tài khoản -->
            <div class="mt-6 text-center">
                <p class="font-medium">
                    {{ $myTrans('Đã có tài khoản?') }}
                    <router-link to="/auth/signin" class="text-primary">{{ $myTrans('Đăng nhập') }}</router-link>
                </p>
            </div>
        </form>
    </DefaultAuthCard>
</template>
