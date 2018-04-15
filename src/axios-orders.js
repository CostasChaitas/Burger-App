import axios from 'axios';



const instance = axios.create({

    baseURL: "https://burger-app-58a47.firebaseio.com/"
    
});

export default instance;