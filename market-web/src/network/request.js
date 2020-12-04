// 导入axios模块
import Axios from "axios";

// 创建函数以便从外界接收参数
function request(config) {

  // 创建axios实例，配置好基础信息（必须）
  let axiosInstance = Axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  });

  // 配置request请求拦截器（可选）
  axiosInstance.interceptors.request.use(
    function (config) { // 发起request请求成功前的处理
      // console.log(config);
      return config;
    },function (err) { // 发起request请求失败后的处理
      console.log(err);
    }
  );

  // 配置response响应拦截器（可选）
  axiosInstance.interceptors.response.use(
    function (res) { // 收到response成功后的处理
      // console.log(res);
      // 过滤掉其他信息，直接返回response里的data
      return res.data;
    },function (err) { // 收到response失败后的处理
      console.log(err);
    }
  );

  // 将axios实例返回（必须）
  return axiosInstance(config);
}

// 第二个请求
function request2() {

}

// 导出多个对象
export {
  request,
  request2
};
