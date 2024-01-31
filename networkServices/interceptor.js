import axiosInstance from "./api/backendApi";
import { useAuthStore } from '@/store/auth/auth'

// LOCALLY STORED DATA
// PINIA
const authStore = useAuthStore()

const setup = () => {
    //REQUEST
    axiosInstance.interceptors.request.use(
        (config) => {
            if (authStore.accessToken !== null || authStore.accessToken !== '') {
                //SET GLOBAL HEADERS
                config.headers["Authorization"] = 'Bearer ' + authStore.accessToken;
            }
            return config
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    //RESPONSE
    axiosInstance.interceptors.response.use(
        (res) => {
            return res;
        },
        async (err) => {
            const originalConfig = err.config;
            if (originalConfig.url !== "auth/signin" && err.response) {
                // Access Token was expired
                if (err.response.status === 403 && !originalConfig._retry) {
                    originalConfig._retry = true;

                    try {
                        const rs = await axiosInstance.get(auth/refresh, {
                            headers: {
                                Authorization: `Bearer ${authStore.refreshToken}`
                            }
                        });                        

                        authStore.setRefreshed(rs.data.accessToken, rs.data.refreshToken)
                        return axiosInstance(originalConfig);
                    } catch (_error) {
                        authStore.logout()
                        return Promise.reject(_error);
                    }
                }
            }
            return Promise.reject(err);
        }
    );
};

export default setup;