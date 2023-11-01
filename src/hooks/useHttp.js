import axios from 'axios';
const BASE_URL = 'https://localhost:7278/api/';

export default axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' }
});
