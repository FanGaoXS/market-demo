// 导入request函数
import {request} from "./request";

// 主页获得MultiData
function getHomeMultiData() {
  // axios的config参数
  let config={
    url: '/home/multidata'
  };
  // 将config参数传递给request函数
  return request(config);
}

// 将对象导出
export {
  getHomeMultiData,
}
