import axios from 'axios';

const clientApi = axios.create({
    baseURL: 'https://bvent-seoul.web.app',
});

export default clientApi;