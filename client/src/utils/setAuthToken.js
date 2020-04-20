import axios from 'axios'


const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token
    } else {
        //delete axios.defaults.headers.common['Authorization']
        axios.defaults.headers.common['Authorization'] = null;
    }
}



export default setAuthToken