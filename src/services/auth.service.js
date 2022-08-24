import axios from "axios";

let axiosConfig = {
    headers:{
        'Content-Type' : 'application/json',
    }
}
const API_URL = "http://localhost:7998/";

            //login
export const login = async ({email,password}) => {
    try{
        const response =  await axios.post (API_URL + "user/login",{
            email,
            password
                },axiosConfig)
                if(response.data.status ){
                    localStorage.setItem('users',JSON.stringify(response.data));
                    
                    return response   
                }else{
                    return response;
                }
    }catch(e){
            return null;
    }
}
