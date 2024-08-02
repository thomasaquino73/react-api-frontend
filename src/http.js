import axios from "axios";
export default axios.create({
    baseURL:"http://localhost/emkay/laravel-react-api/backend/public/api",
    headers:{
        "Content-Type":"application/json"
    }

})