import axios from 'axios';

const instance=axios.create({
    baseURL:'https://tinderbackend332.herokuapp.com'
})
export default instance;