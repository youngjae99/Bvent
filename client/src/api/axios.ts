import axios from 'axios';

const clientApi = axios.create({
    baseURL: 'https://api.bventdao.xyz',
});

export default clientApi;