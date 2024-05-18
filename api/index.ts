import axios from 'axios';

export const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:7000"}/api/`,
});

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status) {
            const { status } = error.response;

            if (status === 401) {
                console.log("error")
            }
        }

        return Promise.reject(error);
    },
);