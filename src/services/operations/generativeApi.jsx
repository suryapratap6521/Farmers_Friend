
import { apiConnector } from "../apiconnector";
import { communityEndpoints, generativeEndpoints } from "../apis";
export const getData=async(token,prompt)=>{
   try {
    const response = await apiConnector("POST", generativeEndpoints.GET_DATA, { prompt }, {
        Authorization: `Bearer ${token}`
    });
    console.log(response.data.text);
    return response;
   } catch (error) {
    console.log(error);
    throw new Error;
   }
    
}


