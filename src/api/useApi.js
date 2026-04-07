import axios from 'axios'

const customApi = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
})

export default customApi