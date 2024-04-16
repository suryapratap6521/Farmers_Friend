const BASE_URL = 'http://localhost:5000/api/v1'
console.log(BASE_URL)
// AUTH ENDPOINTS
export const endpoints = {
 
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
}

export const communityEndpoints={
  CREATE_MESSAGE:BASE_URL + "/community/createmessage",
  GET_ALL_MESSAGE:BASE_URL + "/community/getallmessage",
  DELETE_MESSAGE:BASE_URL + "/community/deletemessage",
  ALL_USERS:BASE_URL + "/community/allusers",
}
export const generativeEndpoints={
  GET_DATA:BASE_URL+"/generative/run"
}