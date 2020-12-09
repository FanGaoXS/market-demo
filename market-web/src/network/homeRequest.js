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

// 主页里获取商品数据（根据商品类型页码）
function getHomeGoods() {
  let config={
    url: '/home/data'
  }
}

// 将对象导出
export {
  getHomeMultiData,
}
