// 导入request函数
import {request} from "./request";

// 主页获得MultiData
function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  });
}

// 将对象导出
export {
  getHomeMultiData,
}
