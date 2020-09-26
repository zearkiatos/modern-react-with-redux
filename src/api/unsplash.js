import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Dv-b5Xj5MhMs-v66Aj6-gRT3szdgradj4qlYD3z02nc'
    }
});