import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Tc1mwyHhewoorwHlmsnsXO3qZpn3TUM5HzmIBI0yfv4',
    }
});