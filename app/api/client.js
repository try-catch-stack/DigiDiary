import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'https://digidiary-backend.herokuapp.com/',
});

export default apiClient;
