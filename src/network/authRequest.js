import axios from 'axios'
import {ElMessage} from "element-plus";


export function authRequest(config) {

  const authInstance = axios.create({
    baseURL: 'http://localhost:8080/auth',
    timeout: 5000
  })


  authInstance.interceptors.request.use(config => {
    return config;
  })

  authInstance.interceptors.response.use(
      data => {
        let resultBody = data.data;
        if (resultBody.code == 200) {
          return resultBody.data;
        } else {
          ElMessage.error(resultBody.msg)
        }
      },
      error => {
        ElMessage.error("网络错误")
      })

  return authInstance(config);

}