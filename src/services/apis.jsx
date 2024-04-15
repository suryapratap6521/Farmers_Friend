const BASE_URL = 'http://localhost:5000/api/v1'
console.log(BASE_URL)
// AUTH ENDPOINTS
export const endpoints = {
 
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
}