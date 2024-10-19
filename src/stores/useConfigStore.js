import { defineStore } from 'pinia';
import API from '@/libs/API'; // Assuming API is configured

export const useConfigStore = defineStore('configStore', {
    state: () => ({
        headerbar: {},
        slidebar: {},
        user:{},
        loading: false,
        error: null,
    }),
    actions: {
        async fetchConfig() {
            this.loading = true;
            try {
                const response = await API.get('/user/config'); // Assuming the endpoint for getting config
                this.headerbar = response.data.headerbar;
                this.slidebar = response.data.slidebar;
                this.user = response.data.user;
            } catch (error) {
                this.error = 'Failed to fetch config';
                console.error(error);
            } finally {
                this.loading = false;
            }
        }
    }
});
