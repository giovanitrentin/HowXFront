//https://www.youtube.com/watch?v=OEyTBEyeHl4
//https://www.bezkoder.com/vue-js-crud-app/
import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://localhost:8081/',
})

 