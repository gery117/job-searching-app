import axios from "axios";

const BASE_URL = 'https://jsearch.p.rapidapi.com'


export const fetchData = async (endpoint,options)=>{
    const {data} = await axios.get(`${BASE_URL}/${endpoint}`, options);

    return data;
}