import axios from "axios";

const requset = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASEURL, // url = base api url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

// request 拦截器 request interceptor
service.interceptors.request.use(
  (config) => {
    let token=localStorage.getItem('token')
    token && (config.headers.Authoriztion=token)
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);
// respone拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.status && res.status !== 200) {
      return Promise.reject(res || "error");
    } else {
      return Promise.resolve(res);
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default requset;