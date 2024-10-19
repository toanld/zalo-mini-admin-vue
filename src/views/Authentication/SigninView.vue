<script>
import DefaultAuthCard from '@/components/Auths/DefaultAuthCard.vue'
import InputGroup from '@/components/Auths/InputGroup.vue'
import { ref } from 'vue'
import API from '@/libs/API' // Import API từ thư mục libs
import { saveToken } from '@/libs/functions' // Import hàm saveToken

export default {
    components: {
        DefaultAuthCard,
        InputGroup,
    },
    data() {
        return {
            pageTitle: this.$myTrans('Đăng nhập'), // Sử dụng myTrans cho ngôn ngữ
            email: '',
            password: '',
            errors: {}, // Để lưu lỗi khi có
        };
    },
    methods: {
        submitForm() {
            this.errors = {}; // Xóa lỗi trước khi gửi form

            API.post('/login', {
                email: this.email,
                password: this.password,
            })
                .then(response => {
                    // Lưu token vào localStorage
                    saveToken(response.data.token);
                    // Chuyển hướng đến trang chính sau khi đăng nhập thành công
                    // Redirect to the original route or fallback to home if not provided
                    const redirectPath = this.$route.query.redirect || '/';
                    this.$router.push(redirectPath);
                })
                .catch(error => {
                    if (error.response && error.response.data.errors) {
                        this.errors = error.response.data.errors; // Lưu lỗi từ server để hiển thị
                    }
                });
        },
    },
};
</script>

<template>
    <DefaultAuthCard :subtitle="$myTrans('Bắt đầu miễn phí')" :title="$myTrans('Đăng nhập vào Admin')">
        <form @submit.prevent="submitForm">
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
                :placeholder="$myTrans('Nhập mật khẩu của bạn')"
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

            <!-- Nút Đăng nhập -->
            <div class="mb-5 mt-6">
                <input
                    type="submit"
                    :value="$myTrans('Đăng nhập')"
                    class="w-full cursor-pointer rounded-lg border border-primary bg-primary p-2 font-medium text-white transition hover:bg-opacity-90"
                />
            </div>

            <!-- Đăng nhập bằng Google -->
            <button
                class="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-2 font-medium hover:bg-opacity-80 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-80"
            >
                <span>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_191_13499)">
                            <path
                                d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
                                fill="#4285F4"
                            />
                            <path
                                d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
                                fill="#34A853"
                            />
                            <path
                                d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
                                fill="#EB4335"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_191_13499">
                                <rect width="20" height="20" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </span>
                {{ $myTrans('Đăng nhập với Google') }}
            </button>

            <div class="mt-6 text-center">
                <p class="font-medium">
                    {{ $myTrans('Bạn chưa có tài khoản?') }}
                    <router-link to="/auth/signup" class="text-primary">{{ $myTrans('Đăng ký') }}</router-link>
                </p>
            </div>
        </form>
    </DefaultAuthCard>
</template>
