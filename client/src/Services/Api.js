import axios from 'axios';

export default function Api () {
    return axios.create({
        baseURL: 'https://localhost:5000/api'
    })
}
