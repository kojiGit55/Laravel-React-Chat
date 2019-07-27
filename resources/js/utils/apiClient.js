import axios from "axios";

const apiClient = {
    get(url, params = {}) {
        return axios.get(url, {
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
                Accept: "application/json"
            },
            params: params
        });
    },
    post(url, params = {}) {
        return axios.post(url, params,{
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('access_token')}`
            },
            params: params
        });
    },
    put(url, params = {}) {
        return axios.put(url, params,{
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('access_token')}`
            },
            params: params
        });
    },
    delete(url) {
        return axios.delete(url,{
            headers: {
                Authorization: `Bearer ${window.localStorage.getItem('access_token')}`
            },
        });
    }
};

export default apiClient;
